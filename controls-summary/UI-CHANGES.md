# 设置控件统一 · 完整 UI 对照

## settings-search

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page settings-search --case default,appearance,personalization,voice-input,shortcuts,builtin-tools,storage,agent-island,usage --theme all --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：18/18 个场景通过
- 页面 `settings-search`：light / dark · zh-CN · 1280×900
  - `default`：Real general settings and all rendered rows
  - `appearance`：Real appearance settings and all rendered rows
  - `personalization`：Real personalization settings and all rendered rows
  - `voice-input`：Real voice-input settings and all rendered rows
  - `shortcuts`：Real shortcuts settings and all rendered rows
  - `builtin-tools`：Real builtin-tools settings and all rendered rows
  - `storage`：Real storage settings and all rendered rows
  - `agent-island`：Real agent-island settings and all rendered rows
  - `usage`：Real usage settings and all rendered rows
  - 未覆盖：Native dialogs, persistence, real accounts, downloads, device connections and macOS native behavior
  - 场景替换的模块（未验证）：`src/renderer/contexts/AuthContext`
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`default · initial`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.default.light.zh-CN.1280x900__before__initial.png) | ![default · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.default.light.zh-CN.1280x900__initial.png) |

**`default · rows-0`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.default.light.zh-CN.1280x900__before__rows-0.png) | ![default · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.default.light.zh-CN.1280x900__rows-0.png) |

**`default · rows-880`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.default.light.zh-CN.1280x900__before__rows-880.png) | ![default · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.default.light.zh-CN.1280x900__rows-880.png) |

**`default · initial`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.default.dark.zh-CN.1280x900__before__initial.png) | ![default · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.default.dark.zh-CN.1280x900__initial.png) |

**`default · rows-0`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.default.dark.zh-CN.1280x900__before__rows-0.png) | ![default · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.default.dark.zh-CN.1280x900__rows-0.png) |

**`default · rows-880`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.default.dark.zh-CN.1280x900__before__rows-880.png) | ![default · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.default.dark.zh-CN.1280x900__rows-880.png) |

**`appearance · rows-0`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![appearance · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.light.zh-CN.1280x900__before__rows-0.png) | ![appearance · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.light.zh-CN.1280x900__rows-0.png) |

**`appearance · rows-880`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![appearance · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.light.zh-CN.1280x900__before__rows-880.png) | ![appearance · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.light.zh-CN.1280x900__rows-880.png) |

**`appearance · rows-1760`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![appearance · rows-1760 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.light.zh-CN.1280x900__before__rows-1760.png) | ![appearance · rows-1760 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.light.zh-CN.1280x900__rows-1760.png) |

**`appearance · search-target`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![appearance · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.light.zh-CN.1280x900__before__search-target.png) | ![appearance · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.light.zh-CN.1280x900__search-target.png) |

**`appearance · final`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![appearance · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.light.zh-CN.1280x900__before__final.png) | ![appearance · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.light.zh-CN.1280x900__final.png) |

**`appearance · rows-0`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![appearance · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.dark.zh-CN.1280x900__before__rows-0.png) | ![appearance · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.dark.zh-CN.1280x900__rows-0.png) |

**`appearance · rows-880`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![appearance · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.dark.zh-CN.1280x900__before__rows-880.png) | ![appearance · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.dark.zh-CN.1280x900__rows-880.png) |

**`appearance · rows-1760`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![appearance · rows-1760 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.dark.zh-CN.1280x900__before__rows-1760.png) | ![appearance · rows-1760 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.dark.zh-CN.1280x900__rows-1760.png) |

**`appearance · search-target`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![appearance · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.dark.zh-CN.1280x900__before__search-target.png) | ![appearance · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.dark.zh-CN.1280x900__search-target.png) |

**`appearance · final`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![appearance · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.dark.zh-CN.1280x900__before__final.png) | ![appearance · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.appearance.dark.zh-CN.1280x900__final.png) |

**`personalization · rows-0`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![personalization · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.personalization.light.zh-CN.1280x900__before__rows-0.png) | ![personalization · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.personalization.light.zh-CN.1280x900__rows-0.png) |

**`personalization · rows-880`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![personalization · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.personalization.light.zh-CN.1280x900__before__rows-880.png) | ![personalization · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.personalization.light.zh-CN.1280x900__rows-880.png) |

**`personalization · rows-0`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![personalization · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.personalization.dark.zh-CN.1280x900__before__rows-0.png) | ![personalization · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.personalization.dark.zh-CN.1280x900__rows-0.png) |

**`personalization · rows-880`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![personalization · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.personalization.dark.zh-CN.1280x900__before__rows-880.png) | ![personalization · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.personalization.dark.zh-CN.1280x900__rows-880.png) |

**`voice-input · initial`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![voice-input · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.light.zh-CN.1280x900__before__initial.png) | ![voice-input · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.light.zh-CN.1280x900__initial.png) |

**`voice-input · rows-0`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![voice-input · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.light.zh-CN.1280x900__before__rows-0.png) | ![voice-input · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.light.zh-CN.1280x900__rows-0.png) |

**`voice-input · rows-880`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![voice-input · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.light.zh-CN.1280x900__before__rows-880.png) | ![voice-input · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.light.zh-CN.1280x900__rows-880.png) |

**`voice-input · rows-1760`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![voice-input · rows-1760 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.light.zh-CN.1280x900__before__rows-1760.png) | ![voice-input · rows-1760 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.light.zh-CN.1280x900__rows-1760.png) |

**`voice-input · search-target`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![voice-input · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.light.zh-CN.1280x900__before__search-target.png) | ![voice-input · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.light.zh-CN.1280x900__search-target.png) |

**`voice-input · final`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![voice-input · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.light.zh-CN.1280x900__before__final.png) | ![voice-input · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.light.zh-CN.1280x900__final.png) |

**`voice-input · initial`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![voice-input · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.dark.zh-CN.1280x900__before__initial.png) | ![voice-input · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.dark.zh-CN.1280x900__initial.png) |

**`voice-input · rows-0`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![voice-input · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.dark.zh-CN.1280x900__before__rows-0.png) | ![voice-input · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.dark.zh-CN.1280x900__rows-0.png) |

**`voice-input · rows-880`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![voice-input · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.dark.zh-CN.1280x900__before__rows-880.png) | ![voice-input · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.dark.zh-CN.1280x900__rows-880.png) |

**`voice-input · rows-1760`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![voice-input · rows-1760 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.dark.zh-CN.1280x900__before__rows-1760.png) | ![voice-input · rows-1760 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.dark.zh-CN.1280x900__rows-1760.png) |

**`voice-input · search-target`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![voice-input · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.dark.zh-CN.1280x900__before__search-target.png) | ![voice-input · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.dark.zh-CN.1280x900__search-target.png) |

**`voice-input · final`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![voice-input · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.dark.zh-CN.1280x900__before__final.png) | ![voice-input · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.voice-input.dark.zh-CN.1280x900__final.png) |

**`shortcuts · initial`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![shortcuts · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.light.zh-CN.1280x900__before__initial.png) | ![shortcuts · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.light.zh-CN.1280x900__initial.png) |

**`shortcuts · rows-0`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![shortcuts · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.light.zh-CN.1280x900__before__rows-0.png) | ![shortcuts · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.light.zh-CN.1280x900__rows-0.png) |

**`shortcuts · rows-880`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![shortcuts · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.light.zh-CN.1280x900__before__rows-880.png) | ![shortcuts · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.light.zh-CN.1280x900__rows-880.png) |

**`shortcuts · search-target`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![shortcuts · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.light.zh-CN.1280x900__before__search-target.png) | ![shortcuts · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.light.zh-CN.1280x900__search-target.png) |

**`shortcuts · final`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![shortcuts · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.light.zh-CN.1280x900__before__final.png) | ![shortcuts · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.light.zh-CN.1280x900__final.png) |

**`shortcuts · initial`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![shortcuts · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.dark.zh-CN.1280x900__before__initial.png) | ![shortcuts · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.dark.zh-CN.1280x900__initial.png) |

**`shortcuts · rows-0`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![shortcuts · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.dark.zh-CN.1280x900__before__rows-0.png) | ![shortcuts · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.dark.zh-CN.1280x900__rows-0.png) |

**`shortcuts · rows-880`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![shortcuts · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.dark.zh-CN.1280x900__before__rows-880.png) | ![shortcuts · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.dark.zh-CN.1280x900__rows-880.png) |

**`shortcuts · search-target`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![shortcuts · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.dark.zh-CN.1280x900__before__search-target.png) | ![shortcuts · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.dark.zh-CN.1280x900__search-target.png) |

**`shortcuts · final`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![shortcuts · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.dark.zh-CN.1280x900__before__final.png) | ![shortcuts · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.shortcuts.dark.zh-CN.1280x900__final.png) |

**`builtin-tools · rows-0`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![builtin-tools · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.builtin-tools.light.zh-CN.1280x900__before__rows-0.png) | ![builtin-tools · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.builtin-tools.light.zh-CN.1280x900__rows-0.png) |

**`builtin-tools · search-target`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![builtin-tools · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.builtin-tools.light.zh-CN.1280x900__before__search-target.png) | ![builtin-tools · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.builtin-tools.light.zh-CN.1280x900__search-target.png) |

**`builtin-tools · final`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![builtin-tools · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.builtin-tools.light.zh-CN.1280x900__before__final.png) | ![builtin-tools · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.builtin-tools.light.zh-CN.1280x900__final.png) |

**`builtin-tools · rows-0`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![builtin-tools · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.builtin-tools.dark.zh-CN.1280x900__before__rows-0.png) | ![builtin-tools · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.builtin-tools.dark.zh-CN.1280x900__rows-0.png) |

**`builtin-tools · search-target`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![builtin-tools · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.builtin-tools.dark.zh-CN.1280x900__before__search-target.png) | ![builtin-tools · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.builtin-tools.dark.zh-CN.1280x900__search-target.png) |

**`builtin-tools · final`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![builtin-tools · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.builtin-tools.dark.zh-CN.1280x900__before__final.png) | ![builtin-tools · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.builtin-tools.dark.zh-CN.1280x900__final.png) |

**`storage · rows-0`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![storage · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.light.zh-CN.1280x900__before__rows-0.png) | ![storage · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.light.zh-CN.1280x900__rows-0.png) |

**`storage · rows-880`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![storage · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.light.zh-CN.1280x900__before__rows-880.png) | ![storage · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.light.zh-CN.1280x900__rows-880.png) |

**`storage · search-target`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![storage · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.light.zh-CN.1280x900__before__search-target.png) | ![storage · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.light.zh-CN.1280x900__search-target.png) |

**`storage · final`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![storage · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.light.zh-CN.1280x900__before__final.png) | ![storage · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.light.zh-CN.1280x900__final.png) |

**`storage · rows-0`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![storage · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.dark.zh-CN.1280x900__before__rows-0.png) | ![storage · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.dark.zh-CN.1280x900__rows-0.png) |

**`storage · rows-880`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![storage · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.dark.zh-CN.1280x900__before__rows-880.png) | ![storage · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.dark.zh-CN.1280x900__rows-880.png) |

**`storage · search-target`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![storage · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.dark.zh-CN.1280x900__before__search-target.png) | ![storage · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.dark.zh-CN.1280x900__search-target.png) |

**`storage · final`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![storage · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.dark.zh-CN.1280x900__before__final.png) | ![storage · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.storage.dark.zh-CN.1280x900__final.png) |

**`agent-island · initial`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![agent-island · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.light.zh-CN.1280x900__before__initial.png) | ![agent-island · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.light.zh-CN.1280x900__initial.png) |

**`agent-island · rows-0`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![agent-island · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.light.zh-CN.1280x900__before__rows-0.png) | ![agent-island · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.light.zh-CN.1280x900__rows-0.png) |

**`agent-island · rows-880`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![agent-island · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.light.zh-CN.1280x900__before__rows-880.png) | ![agent-island · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.light.zh-CN.1280x900__rows-880.png) |

**`agent-island · search-target`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![agent-island · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.light.zh-CN.1280x900__before__search-target.png) | ![agent-island · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.light.zh-CN.1280x900__search-target.png) |

**`agent-island · final`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![agent-island · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.light.zh-CN.1280x900__before__final.png) | ![agent-island · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.light.zh-CN.1280x900__final.png) |

**`agent-island · initial`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![agent-island · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.dark.zh-CN.1280x900__before__initial.png) | ![agent-island · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.dark.zh-CN.1280x900__initial.png) |

**`agent-island · rows-0`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![agent-island · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.dark.zh-CN.1280x900__before__rows-0.png) | ![agent-island · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.dark.zh-CN.1280x900__rows-0.png) |

**`agent-island · rows-880`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![agent-island · rows-880 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.dark.zh-CN.1280x900__before__rows-880.png) | ![agent-island · rows-880 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.dark.zh-CN.1280x900__rows-880.png) |

**`agent-island · search-target`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![agent-island · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.dark.zh-CN.1280x900__before__search-target.png) | ![agent-island · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.dark.zh-CN.1280x900__search-target.png) |

**`agent-island · final`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![agent-island · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.dark.zh-CN.1280x900__before__final.png) | ![agent-island · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.agent-island.dark.zh-CN.1280x900__final.png) |

**`usage · initial`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![usage · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.light.zh-CN.1280x900__before__initial.png) | ![usage · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.light.zh-CN.1280x900__initial.png) |

**`usage · rows-0`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![usage · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.light.zh-CN.1280x900__before__rows-0.png) | ![usage · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.light.zh-CN.1280x900__rows-0.png) |

**`usage · search-target`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![usage · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.light.zh-CN.1280x900__before__search-target.png) | ![usage · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.light.zh-CN.1280x900__search-target.png) |

**`usage · final`** · light · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![usage · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.light.zh-CN.1280x900__before__final.png) | ![usage · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.light.zh-CN.1280x900__final.png) |

**`usage · initial`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![usage · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.dark.zh-CN.1280x900__before__initial.png) | ![usage · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.dark.zh-CN.1280x900__initial.png) |

**`usage · rows-0`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![usage · rows-0 · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.dark.zh-CN.1280x900__before__rows-0.png) | ![usage · rows-0 · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.dark.zh-CN.1280x900__rows-0.png) |

**`usage · search-target`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![usage · search-target · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.dark.zh-CN.1280x900__before__search-target.png) | ![usage · search-target · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.dark.zh-CN.1280x900__search-target.png) |

**`usage · final`** · dark · zh-CN · 1280×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![usage · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.dark.zh-CN.1280x900__before__final.png) | ![usage · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/settings-search.usage.dark.zh-CN.1280x900__final.png) |

完整总览（全部场景，自检用）：[1/3](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/overview.png) · [2/3](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/overview-2.png) · [3/3](https://raw.githubusercontent.com/kirozeng/cindy-fork/fcea662fcead3bb21b6e9a597c09ec23f94bfcc6/settings-search-wx3COH/overview-3.png)

## model-advanced

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page model-advanced --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：12/12 个场景通过
- 页面 `model-advanced`：light · zh-CN · 1000×800 / 320×800
  - `pricing`：Inline API price editing through the unchanged quote API
  - `pricing-narrow`：Inline API prices at phone width
  - `image-unknown`：Undeclared image input: two explicit choices, no default
  - `image-unsupported`：Unsupported catalog default restores inheritance
  - `image-mixed`：Different engine defaults require an explicit common choice
  - `image-inherited`：Mixed override provenance with the same effective image capability
  - `default`：GPT-6 Astra with Codex Ultrafast entitlement
  - `narrow`：Model compaction at phone width
  - `sol`：GPT-6.1 Sol with Codex Ultrafast entitlement
  - `legacy-sol`：GPT-6 Sol reasoning metadata
  - `unavailable`：Account has not enabled Ultrafast
  - `owner-repair`：Same-owner generation change recovers an in-flight image capability save
  - 未覆盖：Account entitlement, live model calls and persistent quote storage; quote API, host context result and speed availability use fixtures
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`pricing · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![pricing · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.pricing.light.zh-CN.1000x800__before__initial.png) | ![pricing · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.pricing.light.zh-CN.1000x800__initial.png) |

**`pricing · final`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![pricing · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.pricing.light.zh-CN.1000x800__before__final.png) | ![pricing · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.pricing.light.zh-CN.1000x800__final.png) |

**`pricing-narrow · final`** · light · zh-CN · 320×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![pricing-narrow · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.pricing-narrow.light.zh-CN.320x800__before__final.png) | ![pricing-narrow · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.pricing-narrow.light.zh-CN.320x800__final.png) |

**`image-unknown · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-unknown · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__before__initial.png) | ![image-unknown · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__initial.png) |

**`image-unknown · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-unknown · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__before__initial.png) | ![image-unknown · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__initial.png) |

**`image-unknown · ultra-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-unknown · ultra-selected · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__before__ultra-selected.png) | ![image-unknown · ultra-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__ultra-selected.png) |

**`image-unknown · image-input-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unknown · image-input-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__image-input-options.png) |

**`image-unknown · image-input-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unknown · image-input-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__image-input-selected.png) |

**`image-unknown · compaction-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unknown · compaction-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__compaction-options.png) |

**`image-unknown · model-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unknown · model-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__model-compaction.png) |

**`image-unknown · model-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unknown · model-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__model-compaction-closeup.png) |

**`image-unknown · default-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unknown · default-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__default-compaction.png) |

**`image-unknown · default-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unknown · default-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__default-compaction-closeup.png) |

**`image-unknown · final`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-unknown · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__before__final.png) | ![image-unknown · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unknown.light.zh-CN.1000x800__final.png) |

**`image-unsupported · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-unsupported · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__before__initial.png) | ![image-unsupported · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__initial.png) |

**`image-unsupported · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-unsupported · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__before__initial.png) | ![image-unsupported · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__initial.png) |

**`image-unsupported · ultra-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-unsupported · ultra-selected · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__before__ultra-selected.png) | ![image-unsupported · ultra-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__ultra-selected.png) |

**`image-unsupported · image-input-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unsupported · image-input-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__image-input-options.png) |

**`image-unsupported · image-input-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unsupported · image-input-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__image-input-selected.png) |

**`image-unsupported · compaction-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unsupported · compaction-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__compaction-options.png) |

**`image-unsupported · model-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unsupported · model-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__model-compaction.png) |

**`image-unsupported · model-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unsupported · model-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__model-compaction-closeup.png) |

**`image-unsupported · default-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unsupported · default-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__default-compaction.png) |

**`image-unsupported · default-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-unsupported · default-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__default-compaction-closeup.png) |

**`image-unsupported · final`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-unsupported · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__before__final.png) | ![image-unsupported · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-unsupported.light.zh-CN.1000x800__final.png) |

**`image-mixed · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-mixed · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__before__initial.png) | ![image-mixed · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__initial.png) |

**`image-mixed · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-mixed · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__before__initial.png) | ![image-mixed · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__initial.png) |

**`image-mixed · ultra-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-mixed · ultra-selected · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__before__ultra-selected.png) | ![image-mixed · ultra-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__ultra-selected.png) |

**`image-mixed · image-input-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-mixed · image-input-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__image-input-options.png) |

**`image-mixed · image-input-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-mixed · image-input-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__image-input-selected.png) |

**`image-mixed · compaction-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-mixed · compaction-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__compaction-options.png) |

**`image-mixed · model-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-mixed · model-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__model-compaction.png) |

**`image-mixed · model-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-mixed · model-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__model-compaction-closeup.png) |

**`image-mixed · default-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-mixed · default-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__default-compaction.png) |

**`image-mixed · default-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-mixed · default-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__default-compaction-closeup.png) |

**`image-mixed · final`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-mixed · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__before__final.png) | ![image-mixed · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-mixed.light.zh-CN.1000x800__final.png) |

**`image-inherited · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-inherited · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__before__initial.png) | ![image-inherited · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__initial.png) |

**`image-inherited · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-inherited · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__before__initial.png) | ![image-inherited · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__initial.png) |

**`image-inherited · ultra-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-inherited · ultra-selected · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__before__ultra-selected.png) | ![image-inherited · ultra-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__ultra-selected.png) |

**`image-inherited · image-input-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-inherited · image-input-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__image-input-options.png) |

**`image-inherited · image-input-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-inherited · image-input-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__image-input-selected.png) |

**`image-inherited · compaction-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-inherited · compaction-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__compaction-options.png) |

**`image-inherited · model-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-inherited · model-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__model-compaction.png) |

**`image-inherited · model-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-inherited · model-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__model-compaction-closeup.png) |

**`image-inherited · default-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-inherited · default-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__default-compaction.png) |

**`image-inherited · default-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![image-inherited · default-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__default-compaction-closeup.png) |

**`image-inherited · final`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![image-inherited · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__before__final.png) | ![image-inherited · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.image-inherited.light.zh-CN.1000x800__final.png) |

**`default · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__before__initial.png) | ![default · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__initial.png) |

**`default · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__before__initial.png) | ![default · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__initial.png) |

**`default · ultra-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · ultra-selected · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__before__ultra-selected.png) | ![default · ultra-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__ultra-selected.png) |

**`default · image-input-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![default · image-input-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__image-input-options.png) |

**`default · image-input-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![default · image-input-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__image-input-selected.png) |

**`default · compaction-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![default · compaction-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__compaction-options.png) |

**`default · model-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![default · model-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__model-compaction.png) |

**`default · model-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![default · model-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__model-compaction-closeup.png) |

**`default · default-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![default · default-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__default-compaction.png) |

**`default · default-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![default · default-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__default-compaction-closeup.png) |

**`default · final`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__before__final.png) | ![default · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.default.light.zh-CN.1000x800__final.png) |

**`narrow · image-input-options`** · light · zh-CN · 320×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![narrow · image-input-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.narrow.light.zh-CN.320x800__image-input-options.png) |

**`narrow · image-input-selected`** · light · zh-CN · 320×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![narrow · image-input-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.narrow.light.zh-CN.320x800__image-input-selected.png) |

**`narrow · compaction-options`** · light · zh-CN · 320×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![narrow · compaction-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.narrow.light.zh-CN.320x800__compaction-options.png) |

**`narrow · model-compaction`** · light · zh-CN · 320×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![narrow · model-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.narrow.light.zh-CN.320x800__model-compaction.png) |

**`narrow · model-compaction-closeup`** · light · zh-CN · 320×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![narrow · model-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.narrow.light.zh-CN.320x800__model-compaction-closeup.png) |

**`narrow · default-compaction`** · light · zh-CN · 320×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![narrow · default-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.narrow.light.zh-CN.320x800__default-compaction.png) |

**`narrow · default-compaction-closeup`** · light · zh-CN · 320×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![narrow · default-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.narrow.light.zh-CN.320x800__default-compaction-closeup.png) |

**`narrow · final`** · light · zh-CN · 320×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![narrow · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.narrow.light.zh-CN.320x800__before__final.png) | ![narrow · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.narrow.light.zh-CN.320x800__final.png) |

**`sol · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![sol · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__before__initial.png) | ![sol · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__initial.png) |

**`sol · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![sol · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__before__initial.png) | ![sol · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__initial.png) |

**`sol · ultra-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![sol · ultra-selected · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__before__ultra-selected.png) | ![sol · ultra-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__ultra-selected.png) |

**`sol · image-input-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![sol · image-input-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__image-input-options.png) |

**`sol · image-input-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![sol · image-input-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__image-input-selected.png) |

**`sol · compaction-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![sol · compaction-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__compaction-options.png) |

**`sol · model-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![sol · model-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__model-compaction.png) |

**`sol · model-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![sol · model-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__model-compaction-closeup.png) |

**`sol · default-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![sol · default-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__default-compaction.png) |

**`sol · default-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![sol · default-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__default-compaction-closeup.png) |

**`sol · final`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![sol · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__before__final.png) | ![sol · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.sol.light.zh-CN.1000x800__final.png) |

**`legacy-sol · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![legacy-sol · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__before__initial.png) | ![legacy-sol · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__initial.png) |

**`legacy-sol · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![legacy-sol · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__before__initial.png) | ![legacy-sol · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__initial.png) |

**`legacy-sol · ultra-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![legacy-sol · ultra-selected · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__before__ultra-selected.png) | ![legacy-sol · ultra-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__ultra-selected.png) |

**`legacy-sol · image-input-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![legacy-sol · image-input-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__image-input-options.png) |

**`legacy-sol · image-input-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![legacy-sol · image-input-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__image-input-selected.png) |

**`legacy-sol · compaction-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![legacy-sol · compaction-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__compaction-options.png) |

**`legacy-sol · model-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![legacy-sol · model-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__model-compaction.png) |

**`legacy-sol · model-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![legacy-sol · model-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__model-compaction-closeup.png) |

**`legacy-sol · default-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![legacy-sol · default-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__default-compaction.png) |

**`legacy-sol · default-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![legacy-sol · default-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__default-compaction-closeup.png) |

**`legacy-sol · final`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![legacy-sol · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__before__final.png) | ![legacy-sol · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.legacy-sol.light.zh-CN.1000x800__final.png) |

**`unavailable · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![unavailable · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__before__initial.png) | ![unavailable · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__initial.png) |

**`unavailable · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![unavailable · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__before__initial.png) | ![unavailable · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__initial.png) |

**`unavailable · ultra-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![unavailable · ultra-selected · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__before__ultra-selected.png) | ![unavailable · ultra-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__ultra-selected.png) |

**`unavailable · image-input-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![unavailable · image-input-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__image-input-options.png) |

**`unavailable · image-input-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![unavailable · image-input-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__image-input-selected.png) |

**`unavailable · compaction-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![unavailable · compaction-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__compaction-options.png) |

**`unavailable · model-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![unavailable · model-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__model-compaction.png) |

**`unavailable · model-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![unavailable · model-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__model-compaction-closeup.png) |

**`unavailable · default-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![unavailable · default-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__default-compaction.png) |

**`unavailable · default-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![unavailable · default-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__default-compaction-closeup.png) |

**`unavailable · final`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![unavailable · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__before__final.png) | ![unavailable · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.unavailable.light.zh-CN.1000x800__final.png) |

**`owner-repair · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![owner-repair · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__before__initial.png) | ![owner-repair · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__initial.png) |

**`owner-repair · initial`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![owner-repair · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__before__initial.png) | ![owner-repair · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__initial.png) |

**`owner-repair · ultra-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![owner-repair · ultra-selected · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__before__ultra-selected.png) | ![owner-repair · ultra-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__ultra-selected.png) |

**`owner-repair · image-input-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![owner-repair · image-input-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__image-input-options.png) |

**`owner-repair · image-input-owner-recovered`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![owner-repair · image-input-owner-recovered · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__image-input-owner-recovered.png) |

**`owner-repair · image-input-selected`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![owner-repair · image-input-selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__image-input-selected.png) |

**`owner-repair · compaction-options`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![owner-repair · compaction-options · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__compaction-options.png) |

**`owner-repair · model-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![owner-repair · model-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__model-compaction.png) |

**`owner-repair · model-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![owner-repair · model-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__model-compaction-closeup.png) |

**`owner-repair · default-compaction`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![owner-repair · default-compaction · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__default-compaction.png) |

**`owner-repair · default-compaction-closeup`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![owner-repair · default-compaction-closeup · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__default-compaction-closeup.png) |

**`owner-repair · final`** · light · zh-CN · 1000×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![owner-repair · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__before__final.png) | ![owner-repair · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/model-advanced.owner-repair.light.zh-CN.1000x800__final.png) |

完整总览（全部场景，自检用）：[1/2](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/overview.png) · [2/2](https://raw.githubusercontent.com/kirozeng/cindy-fork/837c46aaa21f7f5c723447a1736cce4c555c62cb/model-advanced-q3HHPg/overview-2.png)

## subscription-accounts

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page subscription-accounts --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：5/5 个场景通过
- 页面 `subscription-accounts`：light · zh-CN · 680×850
  - `default`：Three Claude accounts: provider card on the default row, a low weekly quota, a paused limited account
  - `narrow`：320-pixel content width without clipped account controls
  - `narrow-weight`：320-pixel content width with task limit, weight, assignment and account menu controls
  - `codex`：Codex accounts and weight strategy
  - `error`：Unavailable status read and inline retry on focus
  - 未覆盖：Real browser sign-in, credentials, native CLI processes or transport; fixture supplies account metadata only
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`default · initial`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.default.light.zh-CN.680x850__before__initial.png) | ![default · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.default.light.zh-CN.680x850__initial.png) |

**`default · menu`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![default · menu · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.default.light.zh-CN.680x850__menu.png) |

**`default · paused`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![default · paused · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.default.light.zh-CN.680x850__paused.png) |

**`default · final`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.default.light.zh-CN.680x850__before__final.png) | ![default · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.default.light.zh-CN.680x850__final.png) |

**`narrow · initial`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![narrow · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.narrow.light.zh-CN.680x850__before__initial.png) | ![narrow · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.narrow.light.zh-CN.680x850__initial.png) |

**`narrow · menu`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![narrow · menu · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.narrow.light.zh-CN.680x850__menu.png) |

**`narrow · paused`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![narrow · paused · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.narrow.light.zh-CN.680x850__paused.png) |

**`narrow · final`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![narrow · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.narrow.light.zh-CN.680x850__before__final.png) | ![narrow · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.narrow.light.zh-CN.680x850__final.png) |

**`narrow-weight · initial`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![narrow-weight · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.narrow-weight.light.zh-CN.680x850__before__initial.png) | ![narrow-weight · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.narrow-weight.light.zh-CN.680x850__initial.png) |

**`narrow-weight · menu`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![narrow-weight · menu · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.narrow-weight.light.zh-CN.680x850__menu.png) |

**`narrow-weight · paused`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![narrow-weight · paused · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.narrow-weight.light.zh-CN.680x850__paused.png) |

**`narrow-weight · final`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![narrow-weight · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.narrow-weight.light.zh-CN.680x850__before__final.png) | ![narrow-weight · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.narrow-weight.light.zh-CN.680x850__final.png) |

**`codex · initial`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![codex · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.codex.light.zh-CN.680x850__before__initial.png) | ![codex · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.codex.light.zh-CN.680x850__initial.png) |

**`codex · menu`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![codex · menu · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.codex.light.zh-CN.680x850__menu.png) |

**`codex · paused`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![codex · paused · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.codex.light.zh-CN.680x850__paused.png) |

**`codex · final`** · light · zh-CN · 680×850

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![codex · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.codex.light.zh-CN.680x850__before__final.png) | ![codex · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/subscription-accounts.codex.light.zh-CN.680x850__final.png) |

完整总览（全部场景，自检用）：[1/1](https://raw.githubusercontent.com/kirozeng/cindy-fork/b7d7a93e5d135f4deb199cbd2841b517bfec2db1/subscription-accounts-ShYWLu/overview.png)

## subscription-fast

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page subscription-fast --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：4/4 个场景通过
- 页面 `subscription-fast`：light · zh-CN · 760×800 / 320×950
  - `default`：Supplier and group allow Fast
  - `prohibited`：Both levels prohibit Fast
  - `pending`：Group reports an unconfirmed executor
  - `narrow`：Subscription controls at 320 px
  - 未覆盖：Real subscriptions, native Agent settings and cross-device delivery. Host APIs use fixture memory.
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`default · initial`** · light · zh-CN · 760×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.default.light.zh-CN.760x800__before__initial.png) | ![default · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.default.light.zh-CN.760x800__initial.png) |

**`default · final`** · light · zh-CN · 760×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.default.light.zh-CN.760x800__before__final.png) | ![default · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.default.light.zh-CN.760x800__final.png) |

**`prohibited · initial`** · light · zh-CN · 760×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![prohibited · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.prohibited.light.zh-CN.760x800__before__initial.png) | ![prohibited · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.prohibited.light.zh-CN.760x800__initial.png) |

**`prohibited · final`** · light · zh-CN · 760×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![prohibited · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.prohibited.light.zh-CN.760x800__before__final.png) | ![prohibited · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.prohibited.light.zh-CN.760x800__final.png) |

**`pending · initial`** · light · zh-CN · 760×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![pending · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.pending.light.zh-CN.760x800__before__initial.png) | ![pending · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.pending.light.zh-CN.760x800__initial.png) |

**`pending · final`** · light · zh-CN · 760×800

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![pending · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.pending.light.zh-CN.760x800__before__final.png) | ![pending · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.pending.light.zh-CN.760x800__final.png) |

**`narrow · initial`** · light · zh-CN · 320×950

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![narrow · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.narrow.light.zh-CN.320x950__before__initial.png) | ![narrow · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.narrow.light.zh-CN.320x950__initial.png) |

**`narrow · final`** · light · zh-CN · 320×950

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![narrow · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.narrow.light.zh-CN.320x950__before__final.png) | ![narrow · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/subscription-fast.narrow.light.zh-CN.320x950__final.png) |

完整总览（全部场景，自检用）：[1/1](https://raw.githubusercontent.com/kirozeng/cindy-fork/c1fa0a9c110885faac15a9e86d8325ccd4e14b92/subscription-fast-eX5nyp/overview.png)

## gamepad-settings

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page gamepad-settings --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：2/2 个场景通过
- 页面 `gamepad-settings`：light · zh-CN · 800×1500
  - `default`：Connected Xbox controller with default bindings
  - `worklouder`：Connected Codex Micro keyboard with default settings; sections use the shared rows
  - 未覆盖：Real devices, input monitoring, saving and the Codex guard; hooks supply one connected device with default settings
  - 场景替换的模块（未验证）：`src/renderer/hooks/useXboxGamepad`、`src/renderer/features/skillhub/hooks/useSkillhub`、`src/renderer/hooks/useCodexMicroGuard`、`src/renderer/hooks/useWorkLouderCodex`
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`default · initial`** · light · zh-CN · 800×1500

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/158ee3c774e512b8f6bf89db3e28924b7847bcc4/gamepad-settings-SQj6Ht/gamepad-settings.default.light.zh-CN.800x1500__before__initial.png) | ![default · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/158ee3c774e512b8f6bf89db3e28924b7847bcc4/gamepad-settings-SQj6Ht/gamepad-settings.default.light.zh-CN.800x1500__initial.png) |

**`default · editor`** · light · zh-CN · 800×1500

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · editor · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/158ee3c774e512b8f6bf89db3e28924b7847bcc4/gamepad-settings-SQj6Ht/gamepad-settings.default.light.zh-CN.800x1500__before__editor.png) | ![default · editor · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/158ee3c774e512b8f6bf89db3e28924b7847bcc4/gamepad-settings-SQj6Ht/gamepad-settings.default.light.zh-CN.800x1500__editor.png) |

**`default · final`** · light · zh-CN · 800×1500

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/158ee3c774e512b8f6bf89db3e28924b7847bcc4/gamepad-settings-SQj6Ht/gamepad-settings.default.light.zh-CN.800x1500__before__final.png) | ![default · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/158ee3c774e512b8f6bf89db3e28924b7847bcc4/gamepad-settings-SQj6Ht/gamepad-settings.default.light.zh-CN.800x1500__final.png) |

**`worklouder · initial`** · light · zh-CN · 800×1500

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![worklouder · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/158ee3c774e512b8f6bf89db3e28924b7847bcc4/gamepad-settings-SQj6Ht/gamepad-settings.worklouder.light.zh-CN.800x1500__before__initial.png) | ![worklouder · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/158ee3c774e512b8f6bf89db3e28924b7847bcc4/gamepad-settings-SQj6Ht/gamepad-settings.worklouder.light.zh-CN.800x1500__initial.png) |

**`worklouder · editor`** · light · zh-CN · 800×1500

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![worklouder · editor · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/158ee3c774e512b8f6bf89db3e28924b7847bcc4/gamepad-settings-SQj6Ht/gamepad-settings.worklouder.light.zh-CN.800x1500__before__editor.png) | ![worklouder · editor · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/158ee3c774e512b8f6bf89db3e28924b7847bcc4/gamepad-settings-SQj6Ht/gamepad-settings.worklouder.light.zh-CN.800x1500__editor.png) |

**`worklouder · final`** · light · zh-CN · 800×1500

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![worklouder · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/158ee3c774e512b8f6bf89db3e28924b7847bcc4/gamepad-settings-SQj6Ht/gamepad-settings.worklouder.light.zh-CN.800x1500__before__final.png) | ![worklouder · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/158ee3c774e512b8f6bf89db3e28924b7847bcc4/gamepad-settings-SQj6Ht/gamepad-settings.worklouder.light.zh-CN.800x1500__final.png) |

完整总览（全部场景，自检用）：[1/1](https://raw.githubusercontent.com/kirozeng/cindy-fork/158ee3c774e512b8f6bf89db3e28924b7847bcc4/gamepad-settings-SQj6Ht/overview.png)

## bot-routines

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page bot-routines --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：4/4 个场景通过
- 页面 `bot-routines`：light · zh-CN · 440×900
  - `default`：Paused, enabled, queued, running; exact hourly and selected-hour schedules; independent follow-up scope
  - `save-error`：Failed pause keeps the enabled switch; retry saves without running
  - `history`：Failure result is readable before expanding run details
  - `session-mode`：Run session choice: persistent context or a new isolated session per trigger
  - 未覆盖：Host persistence, real scheduler execution, plugin events, routine model picker and native Mobile (no routine management entry)
  - 场景替换的模块（未验证）：`src/renderer/features/bots/botStore`、`src/renderer/features/bots/BotTaskModelEditor`
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`history · failed-run`** · light · zh-CN · 440×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![history · failed-run · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/a31ec12e6be8b7f00b0431ed2851a501ca5e3577/bot-routines-58tSjd/bot-routines.history.light.zh-CN.440x900__before__failed-run.png) | ![history · failed-run · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/a31ec12e6be8b7f00b0431ed2851a501ca5e3577/bot-routines-58tSjd/bot-routines.history.light.zh-CN.440x900__failed-run.png) |

**`history · final`** · light · zh-CN · 440×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![history · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/a31ec12e6be8b7f00b0431ed2851a501ca5e3577/bot-routines-58tSjd/bot-routines.history.light.zh-CN.440x900__before__final.png) | ![history · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/a31ec12e6be8b7f00b0431ed2851a501ca5e3577/bot-routines-58tSjd/bot-routines.history.light.zh-CN.440x900__final.png) |

**`session-mode · session-mode-open`** · light · zh-CN · 440×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![session-mode · session-mode-open · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/a31ec12e6be8b7f00b0431ed2851a501ca5e3577/bot-routines-58tSjd/bot-routines.session-mode.light.zh-CN.440x900__before__session-mode-open.png) | ![session-mode · session-mode-open · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/a31ec12e6be8b7f00b0431ed2851a501ca5e3577/bot-routines-58tSjd/bot-routines.session-mode.light.zh-CN.440x900__session-mode-open.png) |

**`session-mode · session-mode-fresh`** · light · zh-CN · 440×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![session-mode · session-mode-fresh · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/a31ec12e6be8b7f00b0431ed2851a501ca5e3577/bot-routines-58tSjd/bot-routines.session-mode.light.zh-CN.440x900__before__session-mode-fresh.png) | ![session-mode · session-mode-fresh · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/a31ec12e6be8b7f00b0431ed2851a501ca5e3577/bot-routines-58tSjd/bot-routines.session-mode.light.zh-CN.440x900__session-mode-fresh.png) |

**`session-mode · final`** · light · zh-CN · 440×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![session-mode · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/a31ec12e6be8b7f00b0431ed2851a501ca5e3577/bot-routines-58tSjd/bot-routines.session-mode.light.zh-CN.440x900__before__final.png) | ![session-mode · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/a31ec12e6be8b7f00b0431ed2851a501ca5e3577/bot-routines-58tSjd/bot-routines.session-mode.light.zh-CN.440x900__final.png) |

完整总览（全部场景，自检用）：[1/1](https://raw.githubusercontent.com/kirozeng/cindy-fork/a31ec12e6be8b7f00b0431ed2851a501ca5e3577/bot-routines-58tSjd/overview.png)

## remote-model-access

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page remote-model-access --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：12/12 个场景通过
- 页面 `remote-model-access`：light · zh-CN · 760×700
  - `alias-all`：Codex and Pi/Claude aliases display once and are toggled together
  - `alias-partial`：Existing Codex-only permission remains mixed and unchanged on save
  - `alias-pi-ceiling`：Personal selection cannot exceed a Pi-only provider ceiling
  - `alias-pi-only`：Pi-only catalogs save the actual chatgpt/ ID without fabricating a Codex ID
  - `budget`：OpenAI single-model percentage limit
  - `budget-claude`：Claude uses its own catalog and single-model percentage limit
  - `budget-new-model`：A new catalog model can be selected without product code changes
  - `budget-learning`：Unknown usage is not zero
  - `budget-save-failure`：Retains a percentage change on save failure
  - `budget-unsupported`：Provider group cannot add a percentage policy
  - `default`：Provider-wide model selection
  - `member`：Per-person model selection within the provider ceiling
  - 未覆盖：Live IPC, persisted permissions and cross-device calls. Names and models are fixture data.
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`alias-pi-ceiling · initial`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![alias-pi-ceiling · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.alias-pi-ceiling.light.zh-CN.760x700__before__initial.png) | ![alias-pi-ceiling · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.alias-pi-ceiling.light.zh-CN.760x700__initial.png) |

**`alias-pi-ceiling · selected`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![alias-pi-ceiling · selected · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.alias-pi-ceiling.light.zh-CN.760x700__before__selected.png) | ![alias-pi-ceiling · selected · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.alias-pi-ceiling.light.zh-CN.760x700__selected.png) |

**`alias-pi-ceiling · final`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![alias-pi-ceiling · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.alias-pi-ceiling.light.zh-CN.760x700__before__final.png) | ![alias-pi-ceiling · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.alias-pi-ceiling.light.zh-CN.760x700__final.png) |

**`budget · initial`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![budget · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget.light.zh-CN.760x700__before__initial.png) | ![budget · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget.light.zh-CN.760x700__initial.png) |

**`budget · budget`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![budget · budget · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget.light.zh-CN.760x700__budget.png) |

**`budget · final`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![budget · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget.light.zh-CN.760x700__before__final.png) | ![budget · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget.light.zh-CN.760x700__final.png) |

**`budget-claude · initial`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![budget-claude · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-claude.light.zh-CN.760x700__before__initial.png) | ![budget-claude · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-claude.light.zh-CN.760x700__initial.png) |

**`budget-claude · budget`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![budget-claude · budget · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-claude.light.zh-CN.760x700__budget.png) |

**`budget-claude · final`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![budget-claude · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-claude.light.zh-CN.760x700__before__final.png) | ![budget-claude · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-claude.light.zh-CN.760x700__final.png) |

**`budget-new-model · initial`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![budget-new-model · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-new-model.light.zh-CN.760x700__before__initial.png) | ![budget-new-model · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-new-model.light.zh-CN.760x700__initial.png) |

**`budget-new-model · budget`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![budget-new-model · budget · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-new-model.light.zh-CN.760x700__budget.png) |

**`budget-new-model · final`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![budget-new-model · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-new-model.light.zh-CN.760x700__before__final.png) | ![budget-new-model · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-new-model.light.zh-CN.760x700__final.png) |

**`budget-learning · initial`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![budget-learning · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-learning.light.zh-CN.760x700__before__initial.png) | ![budget-learning · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-learning.light.zh-CN.760x700__initial.png) |

**`budget-learning · budget`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![budget-learning · budget · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-learning.light.zh-CN.760x700__budget.png) |

**`budget-learning · final`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![budget-learning · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-learning.light.zh-CN.760x700__before__final.png) | ![budget-learning · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-learning.light.zh-CN.760x700__final.png) |

**`budget-save-failure · initial`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![budget-save-failure · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-save-failure.light.zh-CN.760x700__before__initial.png) | ![budget-save-failure · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-save-failure.light.zh-CN.760x700__initial.png) |

**`budget-save-failure · budget`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![budget-save-failure · budget · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-save-failure.light.zh-CN.760x700__budget.png) |

**`budget-save-failure · final`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![budget-save-failure · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-save-failure.light.zh-CN.760x700__before__final.png) | ![budget-save-failure · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-save-failure.light.zh-CN.760x700__final.png) |

**`budget-unsupported · initial`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![budget-unsupported · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-unsupported.light.zh-CN.760x700__before__initial.png) | ![budget-unsupported · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-unsupported.light.zh-CN.760x700__initial.png) |

**`budget-unsupported · budget`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![budget-unsupported · budget · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-unsupported.light.zh-CN.760x700__budget.png) |

**`budget-unsupported · final`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![budget-unsupported · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-unsupported.light.zh-CN.760x700__before__final.png) | ![budget-unsupported · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.budget-unsupported.light.zh-CN.760x700__final.png) |

**`member · initial`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![member · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.member.light.zh-CN.760x700__before__initial.png) | ![member · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.member.light.zh-CN.760x700__initial.png) |

**`member · models`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![member · models · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.member.light.zh-CN.760x700__before__models.png) | ![member · models · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.member.light.zh-CN.760x700__models.png) |

**`member · final`** · light · zh-CN · 760×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![member · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.member.light.zh-CN.760x700__before__final.png) | ![member · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/remote-model-access.member.light.zh-CN.760x700__final.png) |

完整总览（全部场景，自检用）：[1/2](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/overview.png) · [2/2](https://raw.githubusercontent.com/kirozeng/cindy-fork/2503f27a7fa4bb783def4ec5eb8ad0a4e2de26e4/remote-model-access-hrUlDd/overview-2.png)

## agent-island-settings

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page agent-island-settings --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：2/2 个场景通过
- 页面 `agent-island-settings`：light · zh-CN · 900×640
  - `default`：Existing automatic cards remain the default
  - `subtle`：Subtle reminders enabled
  - 未覆盖：Native macOS window, IPC authorization, actual notification delivery and sound
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`default · initial`** · light · zh-CN · 900×640

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.default.light.zh-CN.900x640__before__initial.png) | ![default · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.default.light.zh-CN.900x640__initial.png) |

**`default · toggled`** · light · zh-CN · 900×640

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · toggled · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.default.light.zh-CN.900x640__before__toggled.png) | ![default · toggled · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.default.light.zh-CN.900x640__toggled.png) |

**`default · reset`** · light · zh-CN · 900×640

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · reset · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.default.light.zh-CN.900x640__before__reset.png) | ![default · reset · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.default.light.zh-CN.900x640__reset.png) |

**`default · follow-system`** · light · zh-CN · 900×640

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![default · follow-system · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.default.light.zh-CN.900x640__follow-system.png) |

**`default · event-sounds`** · light · zh-CN · 900×640

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![default · event-sounds · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.default.light.zh-CN.900x640__event-sounds.png) |

**`default · final`** · light · zh-CN · 900×640

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.default.light.zh-CN.900x640__before__final.png) | ![default · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.default.light.zh-CN.900x640__final.png) |

**`subtle · initial`** · light · zh-CN · 900×640

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![subtle · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.subtle.light.zh-CN.900x640__before__initial.png) | ![subtle · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.subtle.light.zh-CN.900x640__initial.png) |

**`subtle · toggled`** · light · zh-CN · 900×640

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![subtle · toggled · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.subtle.light.zh-CN.900x640__before__toggled.png) | ![subtle · toggled · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.subtle.light.zh-CN.900x640__toggled.png) |

**`subtle · reset`** · light · zh-CN · 900×640

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![subtle · reset · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.subtle.light.zh-CN.900x640__before__reset.png) | ![subtle · reset · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.subtle.light.zh-CN.900x640__reset.png) |

**`subtle · follow-system`** · light · zh-CN · 900×640

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![subtle · follow-system · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.subtle.light.zh-CN.900x640__follow-system.png) |

**`subtle · event-sounds`** · light · zh-CN · 900×640

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| （这一步改前没有截图） | ![subtle · event-sounds · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.subtle.light.zh-CN.900x640__event-sounds.png) |

**`subtle · final`** · light · zh-CN · 900×640

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![subtle · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.subtle.light.zh-CN.900x640__before__final.png) | ![subtle · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/agent-island-settings.subtle.light.zh-CN.900x640__final.png) |

完整总览（全部场景，自检用）：[1/1](https://raw.githubusercontent.com/kirozeng/cindy-fork/f504112833f2941e5fcf47144866f192a71bc1e7/agent-island-settings-HNWWQB/overview.png)

## nightly-learning

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page nightly-learning --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：6/6 个场景通过
- 页面 `nightly-learning`：light · zh-CN · 620×1100
  - `default`：Pending conversations, last night learned five changes (one already undone), two approaches being watched
  - `idle`：Nothing new since the last run; the next run will be skipped without calling a model
  - `paused`：Turned off: conversations are still counted
  - `failed`：Last run failed; weekly frequency; memory turned off
  - `new`：Never run yet
  - `not-here`：This computer is not the teammate’s main computer: no nightly row, history page explains why
  - 未覆盖：The host job itself (model call, memory and skill writes), routine scheduling, the settings drawer chrome, Mobile
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`default · history`** · light · zh-CN · 620×1100

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · history · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.default.light.zh-CN.620x1100__before__history.png) | ![default · history · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.default.light.zh-CN.620x1100__history.png) |

**`default · final`** · light · zh-CN · 620×1100

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.default.light.zh-CN.620x1100__before__final.png) | ![default · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.default.light.zh-CN.620x1100__final.png) |

**`idle · final`** · light · zh-CN · 620×1100

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![idle · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.idle.light.zh-CN.620x1100__before__final.png) | ![idle · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.idle.light.zh-CN.620x1100__final.png) |

**`paused · history`** · light · zh-CN · 620×1100

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![paused · history · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.paused.light.zh-CN.620x1100__before__history.png) | ![paused · history · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.paused.light.zh-CN.620x1100__history.png) |

**`paused · final`** · light · zh-CN · 620×1100

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![paused · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.paused.light.zh-CN.620x1100__before__final.png) | ![paused · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.paused.light.zh-CN.620x1100__final.png) |

**`failed · history`** · light · zh-CN · 620×1100

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![failed · history · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.failed.light.zh-CN.620x1100__before__history.png) | ![failed · history · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.failed.light.zh-CN.620x1100__history.png) |

**`failed · final`** · light · zh-CN · 620×1100

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![failed · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.failed.light.zh-CN.620x1100__before__final.png) | ![failed · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.failed.light.zh-CN.620x1100__final.png) |

**`new · final`** · light · zh-CN · 620×1100

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![new · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.new.light.zh-CN.620x1100__before__final.png) | ![new · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/nightly-learning.new.light.zh-CN.620x1100__final.png) |

完整总览（全部场景，自检用）：[1/1](https://raw.githubusercontent.com/kirozeng/cindy-fork/55d37272985f732df0b13cca4b5337672fa417e5/nightly-learning-PnbCww/overview.png)

## model-categories

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page model-categories --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：1/1 个场景通过
- 页面 `model-categories`：light · zh-CN · 760×900
  - `default`：Decision, OCR and image editing alongside image, video and speech models
  - 未覆盖：Live catalog delivery and Decisions API execution; all six models are fixture data
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`default · initial`** · light · zh-CN · 760×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/089764cec311d607efc800fbfdd246d7fee78f26/model-categories-yxD3H4/model-categories.default.light.zh-CN.760x900__before__initial.png) | ![default · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/089764cec311d607efc800fbfdd246d7fee78f26/model-categories-yxD3H4/model-categories.default.light.zh-CN.760x900__initial.png) |

**`default · categories`** · light · zh-CN · 760×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · categories · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/089764cec311d607efc800fbfdd246d7fee78f26/model-categories-yxD3H4/model-categories.default.light.zh-CN.760x900__before__categories.png) | ![default · categories · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/089764cec311d607efc800fbfdd246d7fee78f26/model-categories-yxD3H4/model-categories.default.light.zh-CN.760x900__categories.png) |

**`default · final`** · light · zh-CN · 760×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/089764cec311d607efc800fbfdd246d7fee78f26/model-categories-yxD3H4/model-categories.default.light.zh-CN.760x900__before__final.png) | ![default · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/089764cec311d607efc800fbfdd246d7fee78f26/model-categories-yxD3H4/model-categories.default.light.zh-CN.760x900__final.png) |

完整总览（全部场景，自检用）：[1/1](https://raw.githubusercontent.com/kirozeng/cindy-fork/089764cec311d607efc800fbfdd246d7fee78f26/model-categories-yxD3H4/overview.png)

## ssh-alias

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page ssh-alias --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：3/3 个场景通过
- 页面 `ssh-alias`：light · zh-CN · 900×900
  - `default`：Alias rules stay visible before typing
  - `alias-invalid`：Chinese alias shows inline error and disables Add
  - `alias-valid`：English alias with Chinese display name enables Add
  - 未覆盖：Real SSH connections, persistence, imported-host editing and relay deployment
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`default · final`** · light · zh-CN · 900×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/7c92668f23814193e2f8982ee1ac8bd5ea8e0c5a/ssh-alias-bLDKKt/ssh-alias.default.light.zh-CN.900x900__before__final.png) | ![default · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/7c92668f23814193e2f8982ee1ac8bd5ea8e0c5a/ssh-alias-bLDKKt/ssh-alias.default.light.zh-CN.900x900__final.png) |

**`alias-invalid · final`** · light · zh-CN · 900×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![alias-invalid · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/7c92668f23814193e2f8982ee1ac8bd5ea8e0c5a/ssh-alias-bLDKKt/ssh-alias.alias-invalid.light.zh-CN.900x900__before__final.png) | ![alias-invalid · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/7c92668f23814193e2f8982ee1ac8bd5ea8e0c5a/ssh-alias-bLDKKt/ssh-alias.alias-invalid.light.zh-CN.900x900__final.png) |

**`alias-valid · final`** · light · zh-CN · 900×900

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![alias-valid · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/7c92668f23814193e2f8982ee1ac8bd5ea8e0c5a/ssh-alias-bLDKKt/ssh-alias.alias-valid.light.zh-CN.900x900__before__final.png) | ![alias-valid · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/7c92668f23814193e2f8982ee1ac8bd5ea8e0c5a/ssh-alias-bLDKKt/ssh-alias.alias-valid.light.zh-CN.900x900__final.png) |

完整总览（全部场景，自检用）：[1/1](https://raw.githubusercontent.com/kirozeng/cindy-fork/7c92668f23814193e2f8982ee1ac8bd5ea8e0c5a/ssh-alias-bLDKKt/overview.png)

## provider-usage

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page provider-usage --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：2/2 个场景通过
- 页面 `provider-usage`：light · zh-CN · 960×1000
  - `default`：One card with people, current computers and models; removed-computer history stays in totals
  - `no-group`：Provider without a group offers people and models only
  - 未覆盖：Live usage retrieval, remote management, share mutations and actual device connectivity
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`default · initial`** · light · zh-CN · 960×1000

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.default.light.zh-CN.960x1000__before__initial.png) | ![default · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.default.light.zh-CN.960x1000__initial.png) |

**`default · computer-filter`** · light · zh-CN · 960×1000

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · computer-filter · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.default.light.zh-CN.960x1000__before__computer-filter.png) | ![default · computer-filter · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.default.light.zh-CN.960x1000__computer-filter.png) |

**`default · by-computer`** · light · zh-CN · 960×1000

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · by-computer · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.default.light.zh-CN.960x1000__before__by-computer.png) | ![default · by-computer · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.default.light.zh-CN.960x1000__by-computer.png) |

**`default · by-model`** · light · zh-CN · 960×1000

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · by-model · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.default.light.zh-CN.960x1000__before__by-model.png) | ![default · by-model · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.default.light.zh-CN.960x1000__by-model.png) |

**`default · final`** · light · zh-CN · 960×1000

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.default.light.zh-CN.960x1000__before__final.png) | ![default · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.default.light.zh-CN.960x1000__final.png) |

**`no-group · initial`** · light · zh-CN · 960×1000

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![no-group · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.no-group.light.zh-CN.960x1000__before__initial.png) | ![no-group · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.no-group.light.zh-CN.960x1000__initial.png) |

**`no-group · by-model`** · light · zh-CN · 960×1000

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![no-group · by-model · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.no-group.light.zh-CN.960x1000__before__by-model.png) | ![no-group · by-model · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.no-group.light.zh-CN.960x1000__by-model.png) |

**`no-group · final`** · light · zh-CN · 960×1000

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![no-group · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.no-group.light.zh-CN.960x1000__before__final.png) | ![no-group · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/provider-usage.no-group.light.zh-CN.960x1000__final.png) |

完整总览（全部场景，自检用）：[1/1](https://raw.githubusercontent.com/kirozeng/cindy-fork/37fcabc30781f903f1f239df8a607af29a76360d/provider-usage-EnOF45/overview.png)

## group-notifications

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page group-notifications --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：5/5 个场景通过
- 页面 `group-notifications`：light · zh-CN · 560×900
  - `default`：Ordinary member can choose and save a personal notification preference
  - `mentions`：Mentions-only explanation includes existing work split reminders
  - `none`：Off keeps unread messages
  - `failure`：Rejected write keeps confirmed value and displays a localized error
  - `saving`：Pending write disables repeated edits
  - 未覆盖：Network persistence, native system alerts and mobile rendering; account and stores use fixtures
  - 场景替换的模块（未验证）：`src/renderer/features/bots/botStore`、`src/renderer/features/bots/ChatServerControls`、`src/renderer/features/bots/botGroupStore`、`src/renderer/features/bots/BotRosterView`
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

改前／改后的截图逐像素一致，本次对照没有看得见的变化。

完整总览（全部场景，自检用）：[1/1](https://raw.githubusercontent.com/kirozeng/cindy-fork/bd7799ac6a9298bdbe306434ece88e3263b3e923/group-notifications-8f2AXo/overview.png)

## bot-capabilities

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page bot-capabilities --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：6/6 个场景通过，12 条警告
- 页面 `bot-capabilities`：light · zh-CN · 640×1400
  - `default`：All groups with the owner’s real skills and tools; unfold the local skills
  - `system-off`：Todos turned off: the switch and the group count follow
  - `core`：Core skill page with the plain-language summary and the original text
  - `system`：A system skill page explains what turning it off stops
  - `learned`：A learned skill page with its switch, content, edit and delete
  - `empty`：No learned skills yet
  - 未覆盖：Teammate runtime, prompt and tool gating, persistence, remote computers and the phone page; covered by vitest and the isolated Desktop.
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`learned · page`** · light · zh-CN · 640×1400

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![learned · page · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/1b54a408a7b01b8bf03ab9a59c283194b038b10d/bot-capabilities-0xgrlR/bot-capabilities.learned.light.zh-CN.640x1400__before__page.png) | ![learned · page · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/1b54a408a7b01b8bf03ab9a59c283194b038b10d/bot-capabilities-0xgrlR/bot-capabilities.learned.light.zh-CN.640x1400__page.png) |

**`learned · final`** · light · zh-CN · 640×1400

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![learned · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/1b54a408a7b01b8bf03ab9a59c283194b038b10d/bot-capabilities-0xgrlR/bot-capabilities.learned.light.zh-CN.640x1400__before__final.png) | ![learned · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/1b54a408a7b01b8bf03ab9a59c283194b038b10d/bot-capabilities-0xgrlR/bot-capabilities.learned.light.zh-CN.640x1400__final.png) |

完整总览（全部场景，自检用）：[1/1](https://raw.githubusercontent.com/kirozeng/cindy-fork/1b54a408a7b01b8bf03ab9a59c283194b038b10d/bot-capabilities-0xgrlR/overview.png)

## cindy-ai-identity

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page cindy-ai-identity --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：3/3 个场景通过，1 条警告
- 页面 `cindy-ai-identity`：light · zh-CN · 1000×760
  - `default`：Personal Cindy AI in provider list and details
  - `xd`：XD Cindy AI in provider list and details
  - `organization`：Long enterprise name with the original Auto model name
  - 未覆盖：Live sign-in, key management, quota reads and actual gateway routing; identity is fixture data
  - 场景替换的模块（未验证）：`src/renderer/hooks/useProviders`、`src/renderer/hooks/useCodexAuth`、`src/renderer/hooks/useApiKey`、`src/renderer/hooks/useModelAccessStatus`、`src/renderer/hooks/useModelAccessCreditUsage`、`src/renderer/hooks/useClaudeAccountUsage`、`src/renderer/hooks/useXdAssetPrimaryAction`、`src/renderer/contexts/AuthContext`
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`default · initial`** · light · zh-CN · 1000×760

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f701ab0e6baaf8637f5df46b91fb665b11ba7964/cindy-ai-identity-xFlFmj/cindy-ai-identity.default.light.zh-CN.1000x760__before__initial.png) | ![default · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f701ab0e6baaf8637f5df46b91fb665b11ba7964/cindy-ai-identity-xFlFmj/cindy-ai-identity.default.light.zh-CN.1000x760__initial.png) |

**`default · final`** · light · zh-CN · 1000×760

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![default · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f701ab0e6baaf8637f5df46b91fb665b11ba7964/cindy-ai-identity-xFlFmj/cindy-ai-identity.default.light.zh-CN.1000x760__before__final.png) | ![default · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f701ab0e6baaf8637f5df46b91fb665b11ba7964/cindy-ai-identity-xFlFmj/cindy-ai-identity.default.light.zh-CN.1000x760__final.png) |

**`xd · initial`** · light · zh-CN · 1000×760

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![xd · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f701ab0e6baaf8637f5df46b91fb665b11ba7964/cindy-ai-identity-xFlFmj/cindy-ai-identity.xd.light.zh-CN.1000x760__before__initial.png) | ![xd · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f701ab0e6baaf8637f5df46b91fb665b11ba7964/cindy-ai-identity-xFlFmj/cindy-ai-identity.xd.light.zh-CN.1000x760__initial.png) |

**`xd · final`** · light · zh-CN · 1000×760

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![xd · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f701ab0e6baaf8637f5df46b91fb665b11ba7964/cindy-ai-identity-xFlFmj/cindy-ai-identity.xd.light.zh-CN.1000x760__before__final.png) | ![xd · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f701ab0e6baaf8637f5df46b91fb665b11ba7964/cindy-ai-identity-xFlFmj/cindy-ai-identity.xd.light.zh-CN.1000x760__final.png) |

**`organization · initial`** · light · zh-CN · 1000×760

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![organization · initial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f701ab0e6baaf8637f5df46b91fb665b11ba7964/cindy-ai-identity-xFlFmj/cindy-ai-identity.organization.light.zh-CN.1000x760__before__initial.png) | ![organization · initial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f701ab0e6baaf8637f5df46b91fb665b11ba7964/cindy-ai-identity-xFlFmj/cindy-ai-identity.organization.light.zh-CN.1000x760__initial.png) |

**`organization · final`** · light · zh-CN · 1000×760

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![organization · final · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/f701ab0e6baaf8637f5df46b91fb665b11ba7964/cindy-ai-identity-xFlFmj/cindy-ai-identity.organization.light.zh-CN.1000x760__before__final.png) | ![organization · final · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/f701ab0e6baaf8637f5df46b91fb665b11ba7964/cindy-ai-identity-xFlFmj/cindy-ai-identity.organization.light.zh-CN.1000x760__final.png) |

完整总览（全部场景，自检用）：[1/1](https://raw.githubusercontent.com/kirozeng/cindy-fork/f701ab0e6baaf8637f5df46b91fb665b11ba7964/cindy-ai-identity-xFlFmj/overview.png)

## provider-file-import

<!-- 由 pnpm ui:check 生成；pnpm ui:check:publish 把截图发到作者 fork 并换上图片链接 -->
- 截图来源：单页验证 `pnpm ui:check --page provider-file-import --case all --theme light --compare`，macOS · Electron 42.11.12（Chromium 148.0.7778.280，与 Cindy 同一渲染内核）；真实组件与主题，场景数据，不是登录账号下的完整 Cindy
- 版本：`ab0632706a46`
- 结果：2/2 个场景通过
- 页面 `provider-file-import`：light · zh-CN · 800×700
  - `default`：Read the guide and expandable format help, find example downloads, review 257 models, then cancel
  - `batch`：Review three providers, import two API-key entries, retry only the failed entry and leave OAuth for individual consent
  - 未覆盖：Native file picker, file I/O, credentials, persistence and account changes (covered by IPC tests); preview data is synthetic
  - 改前／改后对照：`4d5f787bc87b`，同一步骤左右并排

**`batch · batch-review`** · light · zh-CN · 800×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![batch · batch-review · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/afda0cdb1c30c2da405d643a962e9e40953afd75/provider-file-import-6X6bWn/provider-file-import.batch.light.zh-CN.800x700__before__batch-review.png) | ![batch · batch-review · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/afda0cdb1c30c2da405d643a962e9e40953afd75/provider-file-import-6X6bWn/provider-file-import.batch.light.zh-CN.800x700__batch-review.png) |

**`batch · batch-partial`** · light · zh-CN · 800×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![batch · batch-partial · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/afda0cdb1c30c2da405d643a962e9e40953afd75/provider-file-import-6X6bWn/provider-file-import.batch.light.zh-CN.800x700__before__batch-partial.png) | ![batch · batch-partial · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/afda0cdb1c30c2da405d643a962e9e40953afd75/provider-file-import-6X6bWn/provider-file-import.batch.light.zh-CN.800x700__batch-partial.png) |

**`batch · batch-retried`** · light · zh-CN · 800×700

| 改前（4d5f787bc87b） | 改后 |
| --- | --- |
| ![batch · batch-retried · 改前（4d5f787bc87b）](https://raw.githubusercontent.com/kirozeng/cindy-fork/afda0cdb1c30c2da405d643a962e9e40953afd75/provider-file-import-6X6bWn/provider-file-import.batch.light.zh-CN.800x700__before__batch-retried.png) | ![batch · batch-retried · 改后](https://raw.githubusercontent.com/kirozeng/cindy-fork/afda0cdb1c30c2da405d643a962e9e40953afd75/provider-file-import-6X6bWn/provider-file-import.batch.light.zh-CN.800x700__batch-retried.png) |

完整总览（全部场景，自检用）：[1/1](https://raw.githubusercontent.com/kirozeng/cindy-fork/afda0cdb1c30c2da405d643a962e9e40953afd75/provider-file-import-6X6bWn/overview.png)

