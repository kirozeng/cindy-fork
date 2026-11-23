# 全量 ui:check 对比归因

命令：`pnpm ui:check --changed --theme all --compare origin/main`（202 页 / 3356 个变体，13437s）。逐像素比较先转 RGB；先用已知会变的图（Cindy Make 清理源码按钮）和同图自比验证过脚本。

| 页面 | 不同/相同截图 | 最大差异像素 | 归因 | 说明 |
|---|---|---|---|---|
| ask-user-question | 3/73 | 676 | 噪声 | 悬停态 |
| automation-settings | 28/18 | 1551 | 裁决内 | P7 ADB「使用默认」→ ResetGroupButton |
| bot-model-settings | 44/4 | 1490 | 裁决内 | P6 备用模型删除图标 tone=danger |
| branch-sync | 6/64 | 4 | 噪声 | ≤4px 抗锯齿 |
| buddy-creation | 1/1 | 1 | 噪声 | 1px |
| chat-video | 18/4 | 22975 | 噪声 | 视频播放进度/控件淡出 |
| checkout | 3/243 | 244 | 噪声 | 1px 抗锯齿线 |
| codex-reset | 12/18 | 26333 | 裁决内 | P5 Select size=compact；P4 勾选框 |
| companion-composer | 13/127 | 3934 | 噪声 | 发送按钮过渡动画帧（把 5 个改动文件换回 main 后差异仍在） |
| crash-diagnosis | 4/12 | 2942 | 裁决内 | P4 中断任务恢复勾选框 |
| device-picker | 22/0 | 449 | 裁决内 | P5 Select size=inline（伙伴设备） |
| diff-file-edit-status | 2/28 | 24 | 噪声 | ≤24px 图标抗锯齿 |
| display-pricing | 1/59 | 0 | 噪声 | 0px（亚像素） |
| file-body-error | 1/25 | 0 | 噪声 | 0px |
| first-run-guide | 1/55 | 1489 | 噪声 | 头像图片解码 |
| gift-card-purchase | 3/57 | 9998 | 噪声 | 卡面图片解码 |
| github-star | 12/54 | 58470 | 噪声 | 彩带动画 |
| group-chat | 46/342 | 82441 | 裁决内（含已修异常） | P4 话题「同时发到群聊」勾选框；P5 群设置 Select（宽度异常已修，见下） |
| group-jump-bottom | 77/75 | 1023754 | 裁决内 | 大部分为加载动画帧；话题勾选框 |
| group-layout-states | 85/783 | 6025 | 裁决内 | P4 分享选择勾选框 |
| group-mask | 51/57 | 97434 | 裁决内（含已修异常） | P5 代答设置 Select（异常已修） |
| group-notifications | 42/0 | 43203 | 裁决内（含已修异常） | P5 通知 Select（异常已修） |
| group-paste | 1/29 | 108 | 噪声 | 108px 文本抗锯齿 |
| group-review-layout | 6/94 | 5426 | 裁决内 | P4 分享选择勾选框 |
| group-rich-answer | 1/19 | 20 | 噪声 | 20px |
| group-settings | 19/107 | 241566 | 裁决内（含已修异常） | P5 群设置 Select（异常已修）；P6 删除群聊按钮 |
| group-width | 88/134 | 26531 | 裁决内 | P4 话题「同时发到群聊」勾选框 |
| issue6796-preview | 1/19 | 267 | 噪声 | PDF 渲染 |
| login-skin | 1/59 | 589 | 噪声 | 背景图解码 |
| markdown-preview-find | 20/156 | 936 | 噪声 | 加载动画 |
| message-focus | 4/8 | 2710 | 噪声 | 高亮淡出动画 |
| model-advanced | 114/104 | 1172 | 裁决内 | P7 恢复默认 → ResetGroupButton |
| model-picker-accounts | 5/135 | 789 | 噪声 | 倒计时文案（时钟） |
| model-selector-performance | 6/54 | 17324 | 噪声 | 列表滚动位置 |
| model-selector-remote-repro | 1/59 | 1 | 噪声 | 1px |
| organization-quota | 1/15 | 8 | 噪声 | 8px |
| pending-queue-gallery | 1/133 | 0 | 噪声 | 0px |
| plugin-call-display | 1/123 | 97 | 噪声 | 97px 抗锯齿 |
| plugin-composer-header | 30/18 | 4731 | 裁决内 | P5 插件贡献位 Select size=inline |
| plugin-model-picker | 4/48 | 1 | 噪声 | ≤1px |
| plugin-ui | 4/0 | 41670 | 裁决内 | P5 插件正文切换 Select size=inline |
| plugin-ui-extensions | 14/8 | 773 | 裁决内 | P4 插件设置布尔项 Switch→Checkbox |
| project-settings | 1/203 | 12 | 噪声 | 12px |
| provider-detection | 2/150 | 113 | 噪声 | 113px 输入框光标 |
| provider-group-accounts | 3/57 | 107 | 噪声 | 倒计时文案 |
| provider-group-status | 2/10 | 254 | 噪声 | 倒计时文案 |
| provider-listing-consistency | 2/42 | 128 | 噪声 | 128px 悬停 |
| provider-own-computers | 20/4 | 857 | 裁决内 | P5 运行位置 Select size=inline |
| provider-run-location | 76/4 | 12619 | 裁决内 | P5 运行位置 Select size=inline |
| provider-share-insights | 1/81 | 4 | 噪声 | 4px |
| provider-share-sources | 10/54 | 857 | 裁决内 | P5 运行位置 Select size=inline |
| provider-template-catalog | 8/1214 | 116 | 噪声 | ≤116px 输入框光标 |
| region-capture | 5/149 | 67449 | 噪声 | 滚动位置 |
| relay-service | 1/107 | 43 | 噪声 | 43px |
| remote-connection-v2 | 8/122 | 377 | 噪声 | 连线动画 |
| remote-model-access | 3/73 | 0 | 噪声 | 0px |
| scheduler-trigger | 3/47 | 164 | 噪声 | ≤164px 抗锯齿 |
| session-import | 4/12 | 2752 | 裁决内 | P5 来源筛选 → 共享 Select |
| settings-search | 59/271 | 17116 | 裁决内 | 多类（搜索结果里渲染的设置页） |
| setup-migration | 7/37 | 14117 | 裁决内 | P4 迁移勾选框 |
| subscription-accounts | 24/108 | 312 | 噪声 | 开关滑块过渡帧（≤1px 位移），非 Select 改动 |
| task-inbox | 30/30 | 215 | 噪声 | 时间戳 |
| task-list-identifiers | 4/10 | 85 | 噪声 | 85px |
| task-management | 18/0 | 2794 | 裁决内 | P7 恢复默认 → ResetGroupButton |
| teammate-feishu | 1/65 | 12 | 噪声 | 12px |
| teammate-process | 16/154 | 646 | 噪声 | 头像/视频加载 |
| teammate-task-filter | 1/19 | 2818 | 噪声 | 菜单动画 |
| teammates-section | 36/240 | 13858 | 裁决内 | 头像悬停/加载帧；删除按钮仅悬停可见 |
| thread-panels | 50/30 | 25650 | 裁决内 | P4 话题「同时发到群聊」勾选框 |
| unified-model-rail | 5/43 | 8 | 噪声 | 8px |
| voice-settings | 2/184 | 169 | 噪声 | 169px 亚像素 |
| webhook-detail | 38/20 | 944 | 裁决内 | 时间戳（噪声） |
| zz-pr-a-interactions | 4/0 | 13008 | 裁决内 | 临时交互检查页（提交前删除） |

其余 130 页改前/改后逐像素一致。

## 失败的变体（118 个，27 页）

全量里分支一侧失败的 118 个变体，逐页用 `--page <页> --case <失败的场景> --theme all --compare 05f169c2bdf` 单独重跑，看 main 一侧是不是同样失败。

| 页面 | 结论 |
|---|---|
| im-default-model、model-protocol-paths、plugin-global-route、voice-input-overlay | 全量里 main 一侧就已经失败（`before-failed`），属于既有失败 |
| buddy-creation、chat-bidi、checkout、group-composer-menu、kimi-quota、magpie-model-sources、message-focus、opencode-go-quota、orca-worker-project、plugin-github-install、plugin-ui-extensions | 单独重跑：main 一侧同样的断言或超时失败（2026-11-23 那台机器上跑的） |
| provider-run-location、provider-share-insights、provider-share-sources、region-capture、scheduler-model、scheduler-trigger、task-inbox、teammate-glance、thread-panels | 2026-11-24 在本机重跑：main 一侧的报错和分支一侧逐字相同（超时、`strict mode violation`、`registerPrConsumer is not a function`、「Default view shows models without scrolling」），属于既有失败 |
| remote-connection-v2 | 单独重跑 2/2 通过，全量那次是偶发失败 |
| group-review-layout | **唯一由本 PR 引起**：分享勾选框外多了一层 label，注册页面的对齐断言量错了元素。已把这个注册页面改成直接量分享栏，改前改后都通过 |
| group-settings | 群设置 Select 宽度异常修好后重跑通过（见上表） |

群设置宽度修复之后，group-mask（20/20）和 group-notifications（10/10）也在本机重跑并全部通过。
