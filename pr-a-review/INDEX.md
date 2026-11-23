# PR A 评审材料索引

分支 `cindy/thoughtful-thompson`，基线 `05f169c2bdf`。2026-11-23 23:50 复核：`origin/main` 已到 `67ca6c13c84`，比基线多 13 个提交、42 个文件，和本 PR 改动的文件没有重叠，圆角 PR 也还没合并；推送前会再 fetch 一次，到时 main 有变化就 merge（不 rebase）。图都是左 `origin/main`、右 PR A，浅色和深色各一张（除非另注）。像素比较前先把两张图都转成 RGB；比较脚本已经验证过：已知会变的图（Cindy Make「清理源码」按钮）能比出差异，同一张图和自己比的结果是一致。

## 拍法

| 代号 | 拍法 | 说明 |
|---|---|---|
| A | 全量 `pnpm ui:check --changed --theme all --compare origin/main` | 202 个已注册真实页面、3356 个变体；从改前／改后的逐像素差异区域裁图。归因见 `7-full-run/TRIAGE.md` |
| B | 临时页 + `--compare origin/main` | 在 `scripts/fixtures/zz-pr-a-*` 临时挂真实组件（只模拟宿主数据），改前一侧用 main 的产品源码渲染，跑完即删，不提交 |
| C | 临时页 `zz-pr-a-confirms` | 真实 `ConfirmDialog`，标题、正文、按钮文案按各调用点源码里的 key 和参数；左边是 main 实际传的 `default`，右边是 `destructive`。**弹窗是真实组件，外面的页面和打开它的点击都没有覆盖** |
| D | 临时页 `zz-pr-a-interactions` | Playwright 在真实 Electron 里用真键盘和读屏树（CDP Accessibility）检查交互，结果在 `6-interactions/*.json` |
| E | 代码等价 | 改前改后 Button 的 variant、tone、size、class 和图标完全相同，按构造就是逐像素一致，没有单独出图 |

## 1 危险操作（P6，规则 C-07 / DESIGN §4 Destructive actions）

### 1a 删除确认框：9 个文件、10 处，只加了 `confirmVariant`

路径相对 `apps/desktop/src/renderer/`，行号按工作区当前文件。「调用点」是 `confirm({` / `<ConfirmDialog` 所在行，「改动行」是 diff 里唯一新增的那一行，每处都只多了这一行（WechatBotSection 另加一行注释写判断理由）。临时页 `scripts/fixtures/zz-pr-a-confirms/fixture.tsx` 的 `SITES` 表逐项抄了下面这些 key；`{…}` 里是插值参数，值是示例（真实调用时来自所删对象）。

| # | 调用点 | 改动行（diff） | 标题 / 正文 / 确认 / 取消用的 key | 图（`1-destructive/`） |
|---|---|---|---|---|
| 1 | `components/chat/useDeleteMessage.ts:45` | `:50` `+      confirmVariant: 'destructive',` | `chat.messageActionBar.deleteConfirmTitle` / `…deleteConfirmDescription` / `…deleteConfirm` / `…deleteCancel` | `zz-pr-a-confirms.default.{light,dark}…` |
| 2 | `components/settings/McpServersSection.tsx:159` | `:164` `+        confirmVariant: 'destructive',` | `settings.mcp.deleteConfirm.title {name}` / `…message` / `…confirm` / `settings.mcp.cancel` | `…mcp-servers-section.*` |
| 3 | `components/settings/ModelGroupsSection.tsx:176` | `:181` `+        confirmVariant: 'destructive',` | `modelGroups.settings.deleteRouteConfirmTitle {name}` / `…deleteRouteConfirmDescription` / `…delete` / `…cancel` | `…model-groups-section.*` |
| 4 | `components/settings/WechatBotSection.tsx:119` | `:125` `+      confirmVariant: 'destructive',`（`:124` 是注释：解绑会删本机微信凭证、清理未完成的执行，不可撤回） | `settings.wechatBot.unbind.title` / `…description` / `…confirm` / `…cancel` | `…wechat-bot-section.*` |
| 5 | `features/cc-agent/CCAgentSidebarUpper.tsx:3398`（批量删除） | `:3412` `+      confirmVariant: 'destructive',` | `ccAgent.sidebar.bulkSelection.confirmDelete.title` / `…description {count}`（有未提交改动时再接 `…dirtyWorktreeWarning`，图里是 count=3、无未提交改动） / `…confirm` / `…cancel` | `…ccagent-sidebar-upper-bulk.*` |
| 6 | `features/cc-agent/CCAgentSidebarUpper.tsx:3988`（单个删除） | `:4002` `+        confirmVariant="destructive"` | `ccAgent.sidebar.confirmDelete.title` / `…description`（＋可选 `…dirtyWorktreeWarning`，图里不带） / `…confirm` / `…cancel` | `…ccagent-sidebar-upper-single.*` |
| 7 | `features/cc-agent/SessionContentHeader.tsx:512` | `:519` `+      confirmVariant: 'destructive',` | 同 #6 的 key；图里带 `dirtyWorktreeWarning`，正好看两行正文的情况 | `…session-content-header.*` |
| 8 | `features/cc-agent/workdir-browse/WorkdirBrowseSidebar.tsx:452` | `:457` `+        confirmVariant: 'destructive',` | `ccAgent.workdirBrowse.deleteFile.title` / `…description {name}` / `…confirm` / `…cancel` | `…workdir-browse-sidebar.*` |
| 9 | `features/scheduler/components/RunHistoryPane.tsx:162` | `:167` `+        confirmVariant: 'destructive',` | `scheduler.confirm.deleteRun.title` / `…description` / `…confirm` / `…cancel` | `…run-history-pane.*`；**另有真实页面图，见 1b** |
| 10 | `features/skillhub/hooks/useMarketManagement.tsx:47` | `:52` `+      confirmVariant: 'destructive',` | `skillhub.marketConfirm.deleteTitle {name}` / `…deleteDesc {name}` / `…deleteConfirm` / `skillhub.publishDialog.cancel` | `…use-market-management.*` |

拍法 C：每张图左边是 main 实际的 `default`，右边是 `destructive`，浅色、深色各一张。10 处都没有传 `maxWidth`、`content`、勾选或输入项，所以除了文案以外，对话框结构完全相同。

### 1b 真实页面连线验证（RunHistoryPane）

临时页 `zz-pr-a-real-confirm` 直接复用已注册页面 `webhook-detail` 的 fixture（`detail-fixture.tsx`，一行没改）和它的 stubs：真实 `RunHistoryPane` + `RunHistoryCard`，确认框来自 ui:check 外壳里的真实 `ConfirmDialogProvider`。操作是悬停运行记录 → 点「⋯」→ 点菜单里的「删除」（菜单项本来就是 danger 行，没有一次点击就能打开的入口），出现确认框后拍图，再按 Esc 取消，不会真的删除。`--compare 05f169c2bdf`（本分支基线）。图：`1-destructive/real-page.run-history-pane.*`。

- `real-page.run-history-pane.page-with-confirm.{light,dark}.png`：整页加确认框，左 main、右 PR A；`.dialog.*` 是只截对话框的版本。
- 结果：浅色和深色都通过（`UI_CHECK passed 2/2`）。确认按钮的 class 在 main 上是 `--confirm-btn-primary-bg`（浅色黑底、深色白底），在 PR A 上是 `hsl(var(--destructive))`（红底），说明这条调用链确实把 `confirmVariant` 传到了共享 ConfirmDialog。打开后焦点在「取消」，Esc 关闭，没有触发删除。
- RGB 像素差：对话框截图 400×154，浅色、深色各 3182 px，全部落在「删除」按钮上。整页截图浅色 4450 px、深色 3581 px，比对话框多出来的部分是背景里运行记录的时间戳（main 和分支先后渲染，秒数不同）。没打开确认框的首屏也只有这一处不同（浅色 290 px、深色 143 px）。

### 1c 其它危险操作

| 文件 | 图 | 拍法 |
|---|---|---|
| CindyMakeSection.tsx（#11 清理源码 → `tone="danger"`，已按方案 B 局部保留描边） | 终版：`CindyMakeSection.clear-source.{light,dark}.png`（整页，左 main 右 PR）、`.clear-source.zoom.*`（静止）、`.clear-source.zoom-hover.*`（悬停），放大图三列依次是 main / PR / 方案 B 预览，PR 和预览 RGB 差 0 px。没有描边的旧图改名为 `.superseded.png` 留档 | B |
| BotModelChainEditor.tsx（移除备用模型） | `bot-model-settings.*` | A |
| BotGroupSettingsDrawer.tsx（删除群聊 → `tone="danger"`） | `group-settings.*`（rerun 补图，见 7） | A |
| BotGroupLiveStatus.tsx（停止） | 无单独图：原来是 quiet + 手写红字，现在用 `tone="danger"`，静止态外观一致，group-chat 页截图里可见 | A |
| TeammatesSection.tsx（两处删除图标 → `tone="danger"`） | `TeammatesSection.hidden-row.*`、`.hidden-delete-hover.*`（已隐藏的伙伴，删除按钮一直显示）；`.stopped-row-hover.*`、`.stopped-delete-hover.*`（已停止的伙伴，删除按钮悬停才出现），放大 2 倍 | F |

**拍法 F（TeammatesSection）**：临时页 `zz-pr-a-teammates` 直接复用已注册页面 teammates-section 的 fixture（`teammates-fixture.tsx`，一行没改）和它的 stubs，只是多给了两条伙伴数据：一个 `hiddenAt` 的「Translator」，一个 `status: 'archived'` 的「Reviewer」。没有改产品代码让按钮常亮，用的是真实悬停：`row-hover` 是鼠标在行上（悬停才出现的按钮这时露出来），`delete-hover` 是鼠标在删除按钮上。`--compare 05f169c2bdf`，浅色、深色都通过。RGB 像素差：两种主题下静止态和行悬停都是 **0 px**，因为原来也是常红图标、透明底，静止外观没变；按钮悬停时各 729 px，悬停底从 8px 圆角的浅红方块变成共享 Button 的圆形红色淡底。

### 1d CindyMakeSection「重置来源」的描边（2026-11-24 定为方案 B，已改）

结论：这是共享 Button 的既有行为，不是这次调用写错了。`button.tsx` 的 `TONE_STYLES.danger` 固定写成 `[--button-face-border:transparent]`（同时去掉底色），所以不论 `variant` 是什么，`tone="danger"` 都不显示描边。共享组件没有改。全仓有 21 个文件、24 处用了 `tone="danger"`，其中约 23 处同时是 `variant="secondary"`，如果在共享组件里让 danger 保留描边，这些地方都会一起加上描边。

方案 B 预览（只是为了出图，已经撤回，工作区仍是没有描边的版本）：只在这一处的 className 加 `[--button-face-border:var(--border-default)]`，描边和文件夹按钮同色，图标和悬停仍是危险色。实测 `--button-face-border` 浅色是 `rgba(0,0,0,0.08)`，深色是 `rgba(255,255,255,0.10)`。

保持 secondary 的「待核」项：飞书、Telegram、X、Slack 的解绑（只解这台电脑，可以重新授权）、插件作品库「解除自定义位置」（不删数据）、RunHistoryCard（本来就是 danger 菜单项，确认框已经由 RunHistoryPane 标红）。

## 2 开关改勾选框（P4 后半，点保存或确认才生效）

| 文件 | 图 | 拍法 |
|---|---|---|
| PluginSettingsSection.tsx | `2-switch-to-checkbox/PluginSettingsSection.*`，另见 `3-checkbox/plugin-ui-extensions.*` | B / A |
| StorageManagementCard.tsx（清理前备份数据库） | `StorageManagementCard.*` | B |
| ChatInviteDialog.tsx（入群后设置 AI 代答模式） | `ChatInviteDialog.*` | B |

## 3 勾选框（P4，B-10，#6：选中色用文字色、16px）

| 文件 | 图 | 拍法 |
|---|---|---|
| GhostGrantConfirmCard.tsx | `3-checkbox/GhostGrantConfirmCard.*` | B |
| SessionShareExportDialog.tsx | `SessionShareExportDialog.*` | B |
| NewProjectFromTaskDialog.tsx | `NewProjectFromTaskDialog.*`（逐像素一致：原来已经是 16px + 文字色） | B |
| LocalProviderImportButton.tsx | `LocalProviderImportButton.*`（逐像素一致，原因同上） | B |
| AccountDeletionSection.tsx | `AccountDeletionSection.*` | B |
| BotImportForm.tsx（两处） | `BotImportForm.*`（差异只在随机默认头像，勾选框原本一致） | B |
| CindyMakeContribution.tsx | `CindyMakeContribution.*` | B |
| CindyMakeHistoryPanel.tsx（两处，含部分选中） | `CindyMakeHistoryPanel.*` | B |
| SessionBranchTreeDialog.tsx | `SessionBranchTreeDialog.*` | B |
| CodexResetAutoUseControl.tsx（两处） | `codex-reset.*` | A |
| InterruptedTasksResumeDialog.tsx | `crash-diagnosis.*` | A |
| SetupMigrationDialog.tsx（含部分选中） | `setup-migration.*` | A |
| ShareMessageCheckbox.tsx / ShareSelectionBar.tsx（手画圆圈） | `group-layout-states.*share-mode`、`group-review-layout.*sharing` | A |
| SidebarNavigationCustomize.tsx（手画圆圈） | `SidebarNavigationCustomize.*` | B |
| ProviderGroupAddDialog.tsx（手画圆圈） | `ProviderGroupAddDialog.*` | B |
| BotGroupCreateDialog.tsx（手画圆圈） | `BotGroupCreateDialog.*` | B |
| ChatThreadPanel.tsx（「同时发到群聊」手画圆圈） | `thread-panels.*` | A |
| MachineSwitcherMenu.tsx（→ `DropdownMenuCheckboxItem indicator="none"`） | **未单独出图**：task-inbox 和 task-list-identifiers 的场景没有打开机器菜单；行为由 `machineSwitcherMenu.test.ts` 覆盖 | — |
| SshKeySetupDialog.tsx | **未单独出图**：勾选框在「生成新密钥」表单里，需要多步操作 | — |
| SessionShareImportWizard.tsx | **未单独出图**：勾选框在选完文件之后的步骤里 | — |

登录同意框保留原设计；5 个手画方框（SpeechModelChoices、AddProviderWizard、WebhookEventSelect、ScriptCapabilityMultiSelect、WorkerProjectField）属于圆角 PR，这里没有动。

## 4 下拉框尺寸（P5，#7 inline 档）

| 文件 | 图 | 拍法 |
|---|---|---|
| select.tsx（新增 `size="inline"` 和 option `description`；inline 的列表宽度按选项内容） | `6-interactions/interactions-overview.png` | D |
| CindyDevicePicker.tsx（inline） | `4-select/device-picker.*` | A |
| ProviderRunLocationRow.tsx（inline） | `provider-run-location.*`、`provider-own-computers.*` | A |
| PluginUiContributions.tsx（两处 inline） | `plugin-composer-header.*`、`plugin-ui.*` | A |
| CodexResetAutoUseControl.tsx（compact） | `codex-reset.default.*` | A |
| SessionImportSection.tsx（来源筛选改成 Select） | `session-import.*` | A |
| CindyMakeHistoryPanel.tsx（筛选，`width="sm"`） | `CindyMakeHistoryPanel.filter.*`、`.sm-fr.png`；`xs` 被否决，证据见 `.xs-truncated-en.REJECTED.png` | B |
| GoalAdvancedLimits.tsx（`width="sm"`） | `GoalAdvancedLimits.*`、`.sm-de.png`；`xs` 被否决，证据见 `.xs-truncated-fr.REJECTED.png` | B |
| ChatGroupSettings / GroupMaskSettings / ChatGroupNotificationSettings（去掉 `max-w-[220px]`，不设 width） | group-settings / group-mask / group-notifications rerun（见 7） | A |
| TerminalShellSection、PublishDialog（与 GoalAdvancedLimits 合计 3 个手写 SelectParts → Select；PublishDialog 里没人调用的 `SelectInput` 已删除）、ModelGroupRouteExceptions、ScheduleChips、WorkLouderCodexSettings | 已注册页面的场景没有打开这些设置；全量对比里没有差异，或者页面没有加载到 | — |

## 5 恢复默认（P7，#10）

| 文件 | 图 | 拍法 |
|---|---|---|
| reset-buttons.tsx（新增 RestoreDefaultButton / ResetGroupButton）、DefaultOverrideControls.tsx | 全量对比里引用 DefaultOverrideControls 的页面逐像素一致（单项恢复按钮外观没变） | A |
| ComputerUseSection.tsx（ADB 使用默认） | `5-reset/automation-settings.*` | A |
| ModelAdvancedDrawer.tsx | `model-advanced.*` | A |
| TaskManagementSection.tsx | `task-management.*` | A |
| SidebarNavigationCustomize.tsx | `3-checkbox/SidebarNavigationCustomize.*`（底部「恢复默认」） | B |
| KeyboardShortcutsSection.tsx（→ RestoreDefaultButton） | 无图，拍法 E：原来就是 `secondary quiet sm w-7 px-0` + Tip + RotateCcw 15 | E |
| RemoteAgentLimitsSection、WechatBotSection、WorkLouderCodexSettings | 已注册页面的场景没有渲染到这些按钮 | — |

## 6 交互检查（D）

`6-interactions/`：Checkbox 的 Space 切换、Tab 顺序、部分选中时读屏报告 `checked: mixed`、禁用项不可聚焦；Select inline 高 24px，Enter / Space 能打开，方向键跳过禁用项，Enter 选中后焦点回到触发器，Esc 关闭；destructive 确认框打开时焦点在「取消」，Esc 走取消；DropdownMenuCheckboxItem 是 `menuitemcheckbox` + `aria-checked`，Space 切换后菜单不关闭。另外发现：Esc 关闭 ConfirmDialog 后焦点落到 body。`default` 变体同样如此，属于既有行为。

## 7 全量对比

`7-full-run/TRIAGE.md` 按页逐个归因（裁决内 / 噪声 / 异常），`pixel-diff.json` 是逐张数据，`contact-sheets/` 是每页最大差异的裁图。
