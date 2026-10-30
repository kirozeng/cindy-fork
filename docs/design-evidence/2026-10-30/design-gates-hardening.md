# 门禁加固回放证据（2026-10-30）

对应 [design-governance.md §8「门禁加固（2026-10-30）」](../../design-rules/design-governance.md)。基线为 main `727afb1ad6`，回放日期参数 `today = 2026-10-30`，只在本机运行，不访问 CI。

## 1. 颜色审计：豁免过期与规范外圆角

脚本 hash 与逐条结果见 [design-gates-replay.json](./design-gates-replay.json)（`scripts/hardcoded-color-audit.mjs` `2fa1cab8…`，`scripts/shared/design-layer-report.mjs` `aa151244…`，`scripts/hardcoded-color-exemptions.json` `111c4d7b…`）。

**近期误报率**：main 最近 100 个 first-parent 合并（`fcd464bbd5..727afb1ad6`），每个按 `<merge>^1..<merge>` 回放：

- 规范外圆角 block：0 个合并（另用 `git diff` 独立统计新增行，同样为 0）。
- 颜色 block：0（豁免过期没有拦下任何近期改动）。

**正向对照**：用 `git log -G` 找到历史上新增过规范外圆角的 6 个合并，新规则在其中 4 个各拦下 1 处，另外 2 个只是删除了这类写法，没有命中：

| 合并 | 命中 | 判断 |
| --- | --- | --- |
| #6404 `256940f00b` | `GhostToolCard.tsx` 卡片容器 `rounded-[10px]` | 真问题：容器应为 12px |
| #6009 `3f4ec18ec5` | `InputHandoffDeviceCode.tsx` 卡片 `rounded-[10px]` | 真问题：容器应为 12px |
| #6861 `9245acbbe4` | 13px 插件图标 `<img>` 的 `rounded-[3px]` | 内容自身形状（DESIGN §5 不管辖）→ 由此加入 `design: intrinsic-geometry` 声明通道 |
| #6358 `7b8e3e4a71` | 主题预览缩略图里的色条 `rounded-[3px]` | 插图形状，同上 |

声明通道只在同一行或上方两行内生效，降为 report 后仍出现在审计输出里，由人工审核把关；超出范围的声明不生效（单测覆盖）。

复现：在本分支运行 `audit({ root, baseRef: '<sha>^1', headRef: '<sha>', today: '2026-10-30' })`，取 `findings` 中 `rule === 'off-scale-radius'` 及 `bare-color` 的 block 项。

## 2. PR 设计依据检查

旧脚本（main）与新脚本在 makecindy/cindy 最近 150 个已合并 PR（#7410–#7833）的正文和变更文件上逐个比较：

| 旧 → 新 | 数量 |
| --- | --- |
| 跳过 → 跳过 | 71 |
| 通过 → 通过 | 77 |
| 跳过 → 通过 | 2（#7619、#7492：新计入的 Mobile 界面文件，正文本来就填了规范依据） |
| 通过 → 失败 | 0 |

## 3. Mobile 字色测试

`typographyTokenDiscipline.test.ts` 新增的两条测试在 main 上的存量只有已登记名单里的 7 处（按次数登记：徽标 `cta` 1、插件详情光标蓝 3、远程桌面光标蓝 1、共享任务危险文字 1、占位字 1），见测试内 `KNOWN_TEXT_COLOR_DEBT` / `KNOWN_PLACEHOLDER_DEBT`。扫描覆盖命名样式块、内联 `style` 的对象 / 数组 / 条件分支、占位字的条件与 `theme.colors.*` 写法，SwiftUI `foregroundStyle` 只统计 `Text` / `Button` 上的调用（形状与渐变不算文字）；`colors.login.*` 只在登录画布文件放行。存量名单按次数登记：次数增加会报错，修掉后实际次数低于登记值会提示收紧。扫描器本身有单测。
