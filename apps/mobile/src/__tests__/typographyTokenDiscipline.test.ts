import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { describe, expect, it } from 'vitest';
import { fontWeight, lineHeight, textStyles, typeScale } from '@/theme/tokens';

/**
 * 排版纪律守护测试 —— 保证 src/ + app/ 的排版属性全部走 @/theme token,不再出现字面量漂移。
 *
 * 背景:2026-07 排版收敛前,仓库里有 26 处字面 fontSize、124 处字面 lineHeight、
 * ~180 处字面 fontWeight,包括阶梯外的幽灵字号(10/14/17/30)。收敛后靠本测试防回潮:
 * 新增字号 / 行高 / 字重必须先扩 tokens.ts 的档位,再在组件里引用 token。
 *
 * 同时守护 AppText 纪律:业务代码不许直接从 react-native 值导入 Text / TextInput
 * (会绕过全局 maxFontSizeMultiplier 限幅),必须走 @/components/AppText。
 */

const ROOT = process.cwd();
const SCAN_DIRS = ['src', 'app'];
/** 不扫描:token 定义本体、测试自身、DEV-only 性能测量脚手架(listperf harness + src/debug,
 * 用 __DEV__ 门控、不进生产;其调试样式如琥珀色统计文字/tabular-nums 本就不走生产 token)。
 * WebView HTML 生成器用的是 CSS 语法(font-size:),天然不命中。 */
const EXEMPT = [
  /__tests__/,
  /\.test\./,
  /src\/theme\/tokens\.ts$/,
  /^app\/listperf\.tsx$/,
  /^src\/debug\//,
  // loginSkinLayout 是登录皮肤设计 px 常量本体(750 稿坐标系,渲染时 ×groupScale,与物理
  // pt 排版阶梯不同域,不该也不能映射 typeScale/lineHeight 档位)。地位等同 tokens.ts:
  // 只许常量定义,消费端(组件)仍被本守护全量扫描——字面量只能进这里,不能进组件。
  /^src\/auth\/loginSkinLayout\.ts$/,
  /richContentAssets\.generated\.ts$/,
];
/** AppText 是 RN Text / TextInput 的唯一合法包装点。 */
const APP_TEXT_WRAPPER = /src\/components\/AppText\.tsx$/;

function collectFiles(): string[] {
  const files: string[] = [];
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p);
      else if (/\.tsx?$/.test(name)) {
        // Windows 上 path.relative 产出反斜杠分隔,先归一化为 POSIX 再跑豁免正则,
        // 否则 AppText / tokens.ts 豁免在 Windows 失配,守护测试会误扫包装器自身。
        const rel = relative(ROOT, p).split(sep).join('/');
        if (!EXEMPT.some((re) => re.test(rel))) files.push(rel);
      }
    }
  };
  SCAN_DIRS.forEach((d) => walk(join(ROOT, d)));
  return files;
}

const files = collectFiles();

describe('typography token discipline', () => {
  it('forbids literal fontSize / lineHeight / fontWeight in styles', () => {
    const violations: string[] = [];
    for (const rel of files) {
      const src = readFileSync(join(ROOT, rel), 'utf8');
      src.split('\n').forEach((line, i) => {
        if (/fontSize:\s*\d/.test(line))
          violations.push(`${rel}:${i + 1} literal fontSize -> use typeScale`);
        if (/lineHeight:\s*\d/.test(line))
          violations.push(
            `${rel}:${i + 1} literal lineHeight -> use lineHeight token`,
          );
        if (/fontSize=\{\d/.test(line))
          violations.push(
            `${rel}:${i + 1} literal fontSize JSX prop -> use typeScale`,
          );
        if (/lineHeight=\{\d/.test(line))
          violations.push(
            `${rel}:${i + 1} literal lineHeight JSX prop -> use lineHeight token`,
          );
        if (/fontWeight:\s*(['"]|\d)/.test(line))
          violations.push(
            `${rel}:${i + 1} literal fontWeight -> use fontWeight token`,
          );
        if (/letterSpacing:\s*0[,\s}]/.test(line))
          violations.push(
            `${rel}:${i + 1} letterSpacing: 0 is a no-op, remove it`,
          );
      });
    }
    expect(violations).toEqual([]);
  });

  it('forbids importing Text / TextInput values directly from react-native (use @/components/AppText)', () => {
    const violations: string[] = [];
    for (const rel of files) {
      if (APP_TEXT_WRAPPER.test(rel)) continue;
      const src = readFileSync(join(ROOT, rel), 'utf8');
      for (const m of src.matchAll(
        /import\s*\{([^}]*)\}\s*from\s*['"]react-native['"]/gs,
      )) {
        const names = m[1]
          .split(',')
          .map((n) => n.trim())
          .filter((n) => n && !n.startsWith('type '));
        for (const n of names) {
          const base = n.split(/\s+as\s+/)[0].trim();
          if (base === 'Text' || base === 'TextInput') {
            violations.push(
              `${rel}: imports ${base} from react-native, use @/components/AppText`,
            );
          }
        }
      }
    }
    expect(violations).toEqual([]);
  });

  it('defaults all AppText TextInput carets and selections to the Cindy input caret token', () => {
    const source = readFileSync(
      join(ROOT, 'src/components/AppText.tsx'),
      'utf8',
    );

    expect(source).toContain(
      "import { useTheme } from '@/theme/ThemeProvider';",
    );
    expect(source).toContain('const { colors } = useTheme();');
    expect(source).toContain('cursorColor={colors.inputCaret}');
    expect(source).toContain('selectionColor={colors.inputCaret}');
  });

  it('forbids red literal cursor / selection colors in mobile inputs', () => {
    const redCaretLiteral =
      /(?:cursorColor|selectionColor)=\{?['"](?:#DF0C27|#A61629|#D91F37|#f43d3f)['"]\}?/i;
    const violations: string[] = [];

    for (const rel of files) {
      const src = readFileSync(join(ROOT, rel), 'utf8');
      src.split('\n').forEach((line, i) => {
        if (redCaretLiteral.test(line)) {
          violations.push(
            `${rel}:${i + 1} red cursor / selection literal -> use colors.inputCaret (#417CDD)`,
          );
        }
      });
    }

    expect(violations).toEqual([]);
  });

  it('pairs every text style that sets a fontSize token with a lineHeight (2026-09-27)', () => {
    // 行高收拢后每个文字样式都必须成对配行高,否则中英混排行距会忽松忽紧。
    // 豁免:TextInput 上的样式(iOS 设行高会让占位字与光标偏位)、登录品牌画布(已登记例外)。
    const LOGIN_CANVAS = [/^app\/\(auth\)\/login\.tsx$/, /^src\/components\/LoginSkinControls\.tsx$/];
    const violations: string[] = [];
    for (const rel of files) {
      if (!rel.endsWith('.tsx') || LOGIN_CANVAS.some((re) => re.test(rel))) continue;
      const source = readFileSync(join(ROOT, rel), 'utf8');
      const inputKeys = new Set<string>();
      for (const tag of source.matchAll(/<TextInput\b[\s\S]*?\/>/g)) {
        for (const key of tag[0].matchAll(/styles\.(\w+)/g)) inputKeys.add(key[1]);
      }
      for (const block of source.matchAll(/(?:const\s+)?(\w+)(?::|\s*=)\s*\{([^{}]*)\}/g)) {
        const [, key, body] = block;
        if (!/fontSize:\s*typeScale\.\w+/.test(body) || /textStyles\./.test(body)) continue;
        if (/\blineHeight\s*:/.test(body)) continue;
        if (inputKeys.has(key) || /input|Input|editor|Editor/.test(key)) continue;
        violations.push(`${rel}: ${key} sets fontSize without lineHeight`);
      }
      for (const inline of source.matchAll(/<(\w+)\b[^<>]*?style=\{\{([^{}]*)\}\}/g)) {
        const [, tag, body] = inline;
        if (tag === 'TextInput' || !/fontSize:\s*typeScale\.\w+/.test(body)) continue;
        if (!/\blineHeight\s*:/.test(body)) violations.push(`${rel}: inline <${tag}> style sets fontSize without lineHeight`);
      }
    }
    expect(violations).toEqual([]);
  });

  it('keeps lighter text colors on lighter weights (2026-09-26 role rules)', () => {
    // 颜色越浅,字重不能越粗(mobile-design-guide.md §3):
    // - textTertiary 只配 regular;分组小标签(eyebrow / 区块标题 / 类别标签)可用 semibold;
    // - textSecondary 只配 regular / medium;chip 底上的徽标与字母标记可用 semibold。
    // 例外靠样式名识别:新增分组小标签或徽标时请沿用下列命名,不要为消红灯改成其它颜色。
    const GROUP_LABEL = /eyebrow|Eyebrow|section(Title|Label)|Section(Title|Label)|group(Title|Label)|Group(Title|Label)|^heading$|^kind$|Kind$|OutlineLabel|^headerTitle$|peopleTitle/;
    const BADGE = /badge|Badge|monogram|Monogram/;
    const LOGIN_CANVAS = [/^app\/\(auth\)\/login\.tsx$/, /^src\/components\/LoginSkinControls\.tsx$/];
    const violations: string[] = [];
    for (const rel of files) {
      if (!rel.endsWith('.tsx') || LOGIN_CANVAS.some((re) => re.test(rel))) continue;
      const source = readFileSync(join(ROOT, rel), 'utf8');
      for (const block of source.matchAll(/(?:const\s+)?(\w+)(?::|\s*=)\s*\{([^{}]*)\}/g)) {
        const [, key, body] = block;
        const color = body.match(/\bcolor:\s*(?:colors|c)\.(\w+)/)?.[1];
        const weight = body.match(/fontWeight\.(\w+)/)?.[1];
        if (!color || !weight) continue;
        if (color === 'textTertiary' && weight !== 'regular' && !(weight === 'semibold' && GROUP_LABEL.test(key))) {
          violations.push(`${rel}: ${key} pairs textTertiary with ${weight}`);
        }
        if (color === 'textSecondary' && (weight === 'semibold' || weight === 'bold') && !(weight === 'semibold' && BADGE.test(key))) {
          violations.push(`${rel}: ${key} pairs textSecondary with ${weight}`);
        }
      }
    }
    expect(violations).toEqual([]);
  });

  // 五档中性字色(mobile-design-guide.md §3 / §8):主界面文字只用 textPrimary / textSecondary /
  // textTertiary / textPlaceholder / ctaText;有色文字只用 DESIGN.md §2 / §15.13 已登记的语义 token。
  // 新增有色文字用途先登记规范,再把 token 加进 SEMANTIC_TEXT_COLORS。
  const NEUTRAL_TEXT_COLORS = ['textPrimary', 'textSecondary', 'textTertiary', 'textPlaceholder', 'ctaText'];
  const SEMANTIC_TEXT_COLORS = [
    'errorText', 'destructive', 'statusError', 'statusDone', 'statusAccent', 'swipeActionText',
    'chatInlineCodeText', 'botUnread', 'betaChannelBadgeForeground', 'sharedTaskConfirmForeground',
    'taskTagWhite', 'taskTagWhiteCheck', // 任务标签底色上的勾与字
  ];
  // 登录品牌画布(已登记例外,与上面两条测试一致)才可用 colors.login.*。
  const LOGIN_CANVAS_FILES = [/^app\/\(auth\)\/login\.tsx$/, /^src\/components\/LoginSkinControls\.tsx$/];
  const isAllowedTextColor = (rel: string, token: string) =>
    NEUTRAL_TEXT_COLORS.includes(token) || SEMANTIC_TEXT_COLORS.includes(token)
    || (token.startsWith('login.') && LOGIN_CANVAS_FILES.some((re) => re.test(rel)))
    || /^syntax[A-Z]/.test(token);
  // 已知存量(2026-10-30 盘点):只许减少。键为「文件 样式名或调用 token」,值为允许出现的次数;
  // 次数增加会报错,修掉后实际次数低于登记值时测试会提醒收紧。
  const KNOWN_TEXT_COLOR_DEBT = new Map<string, number>([
    ['src/components/MobilePrimitives.tsx mainOptionBadgeTextSelected cta', 1], // 与 textPrimary 两模式同值
    ['src/plugins/PluginDetailView.tsx toolsToggleText inputCaret', 1], // 展开/收起用光标蓝,待设计裁决
    ['src/plugins/PluginDetailView.ios.tsx foregroundStyle inputCaret', 2], // 同上(iOS 原生)
    ['src/remote-desktop/RemoteDesktopSecuritySettings.tsx inline inputCaret', 1], // 空闲超时可用态用光标蓝文字,待设计裁决
    ['src/session/SharedTaskScreen.tsx dangerText sharedTaskConfirmBackground', 1], // 借用确认钮底色,待设计裁决
  ]);
  const KNOWN_PLACEHOLDER_DEBT = new Map<string, number>([
    ['src/session/ContextSheet.tsx textTertiary', 1], // 占位字用了三级色,待有意可见 PR 改为 textPlaceholder
  ]);
  // 样式块算作文字样式:带字号/字重/行高/文字预设,或样式名表明它是文字(只覆盖颜色的选中态等)。
  const TEXT_STYLE_KEY = /Text|Label|Title|text$|label$|title$/;
  const THEME_TOKEN = /\b(?:colors|c)\.([A-Za-z_][\w.]*)/g;
  const tokensIn = (expr: string) => [...expr.matchAll(THEME_TOKEN)].map((m) => m[1].replace(/\.$/, ''));
  /** `{` 之后的配对 `}` 之前的文本(不处理字符串里的括号,样式表达式里足够)。 */
  const balancedFrom = (src: string, start: number) => {
    let depth = 1;
    for (let i = start; i < src.length; i++) {
      if (src[i] === '{') depth++;
      else if (src[i] === '}' && --depth === 0) return src.slice(start, i);
    }
    return src.slice(start);
  };
  /** 文字样式里出现的所有颜色 token:命名样式块、内联 style(对象、数组、条件分支)与 SwiftUI foregroundStyle。 */
  const scanTextColors = (source: string): Array<{ where: string; token: string }> => {
    const found: Array<{ where: string; token: string }> = [];
    for (const block of source.matchAll(/(?:const\s+)?(\w+)(?::|\s*=)\s*\{([^{}]*)\}/g)) {
      const [, key, body] = block;
      if (!/fontSize|fontWeight|lineHeight|textStyles\./.test(body) && !TEXT_STYLE_KEY.test(key)) continue;
      for (const c of body.matchAll(/\bcolor:\s*([^,}]+)/g)) for (const token of tokensIn(c[1])) found.push({ where: key, token });
    }
    for (const inline of source.matchAll(/\bstyle=\{/g)) {
      const span = balancedFrom(source, inline.index! + inline[0].length);
      for (const c of span.matchAll(/\bcolor:\s*([^,}]+)/g)) for (const token of tokensIn(c[1])) found.push({ where: 'inline', token });
    }
    // SwiftUI 的 foregroundStyle 也给形状、渐变上色;只统计 Text / Button 上的文字色。
    for (const call of source.matchAll(/foregroundStyle\(([^)]*)\)/g)) {
      const owner = [...source.slice(Math.max(0, call.index! - 1500), call.index!).matchAll(/<([A-Z]\w*)\b/g)].pop()?.[1];
      if (owner !== 'Text' && owner !== 'Button') continue;
      for (const token of tokensIn(call[1])) found.push({ where: 'foregroundStyle', token });
    }
    return found;
  };
  const scanPlaceholderColors = (source: string): string[] =>
    [...source.matchAll(/placeholderTextColor=\{([^}]*)\}/g)].flatMap((m) => tokensIn(m[1]));
  /** 计数并对照存量名单;返回违规与「可收紧」提示。 */
  const reconcile = (found: Map<string, number>, debt: Map<string, number>, fix: string) => {
    const violations: string[] = [];
    for (const [id, count] of found) {
      const allowed = debt.get(id) ?? 0;
      if (count > allowed) violations.push(`${id} (x${count}${allowed ? `, registered x${allowed}` : ''}) -> ${fix}`);
    }
    const stale = [...debt].filter(([id, allowed]) => (found.get(id) ?? 0) < allowed).map(([id, allowed]) => `${id}: registered x${allowed}, found x${found.get(id) ?? 0}`);
    return { violations, stale };
  };

  it('scans style arrays, conditional branches and bare theme paths for text colors', () => {
    const tokens = (src: string) => scanTextColors(src).map((f) => f.token);
    expect(tokens('<Text style={[styles.label, { color: colors.border }]} />')).toEqual(['border']);
    expect(tokens('<Text style={{ color: active ? colors.textPrimary : colors.border }} />')).toEqual(['textPrimary', 'border']);
    expect(tokens('<Text style={[a, cond && { color: theme.colors.statusDone }]} />')).toEqual(['statusDone']);
    expect(tokens('const x = { fontSize: typeScale.body, color: c.inputCaret }')).toEqual(['inputCaret']);
    expect(tokens('<Text modifiers={[foregroundStyle(ok ? colors.textSecondary : colors.cta)]} />')).toEqual(['textSecondary', 'cta']);
    expect(tokens('<Circle modifiers={[foregroundStyle(colors.statusReady)]} />')).toEqual([]);
    expect(scanPlaceholderColors('<TextInput placeholderTextColor={disabled ? colors.textTertiary : colors.textPlaceholder} />')).toEqual(['textTertiary', 'textPlaceholder']);
    expect(scanPlaceholderColors('<TextInput placeholderTextColor={theme.colors.textTertiary} />')).toEqual(['textTertiary']);
    expect(isAllowedTextColor('src/session/Other.tsx', 'login.controlText')).toBe(false);
    expect(isAllowedTextColor('src/components/LoginSkinControls.tsx', 'login.controlText')).toBe(true);
  });

  it('keeps text colors on the five neutral tiers or registered semantic text tokens (2026-10-30)', () => {
    const found = new Map<string, number>();
    for (const rel of files) {
      const source = readFileSync(join(ROOT, rel), 'utf8');
      for (const { where, token } of scanTextColors(source)) {
        if (isAllowedTextColor(rel, token)) continue;
        const id = `${rel} ${where} ${token}`;
        found.set(id, (found.get(id) ?? 0) + 1);
      }
    }
    const { violations, stale } = reconcile(found, KNOWN_TEXT_COLOR_DEBT, `use one of ${NEUTRAL_TEXT_COLORS.join(' / ')} or a registered semantic text token`);
    expect(violations).toEqual([]);
    expect(stale, '已修复的存量请从 KNOWN_TEXT_COLOR_DEBT 删除或调低次数').toEqual([]);
  });

  it('uses textPlaceholder for input placeholders (DESIGN.md §4 Inputs, 2026-10-30)', () => {
    const found = new Map<string, number>();
    for (const rel of files) {
      if (!rel.endsWith('.tsx')) continue;
      const source = readFileSync(join(ROOT, rel), 'utf8');
      for (const token of scanPlaceholderColors(source)) {
        if (token === 'textPlaceholder' || (token === 'login.controlPlaceholder' && LOGIN_CANVAS_FILES.some((re) => re.test(rel)))) continue;
        const id = `${rel} ${token}`;
        found.set(id, (found.get(id) ?? 0) + 1);
      }
    }
    const { violations, stale } = reconcile(found, KNOWN_PLACEHOLDER_DEBT, 'placeholderTextColor must be colors.textPlaceholder');
    expect(violations).toEqual([]);
    expect(stale, '已修复的存量请从 KNOWN_PLACEHOLDER_DEBT 删除或调低次数').toEqual([]);
  });

  it('keeps textStyles presets composed from the typeScale / lineHeight ladders', () => {
    const sizes = new Set<number>(Object.values(typeScale));
    const heights = new Set<number>(Object.values(lineHeight));
    for (const [name, preset] of Object.entries(textStyles)) {
      expect(
        sizes.has(preset.fontSize),
        `textStyles.${name}.fontSize 必须来自 typeScale`,
      ).toBe(true);
      expect(
        heights.has(preset.lineHeight),
        `textStyles.${name}.lineHeight 必须来自 lineHeight 表`,
      ).toBe(true);
      expect(
        preset.lineHeight,
        `textStyles.${name} 行高必须大于字号`,
      ).toBeGreaterThan(preset.fontSize);
    }
  });

  it('keeps the fontWeight ladder restrained (4 tiers, bold reserved)', () => {
    expect(Object.keys(fontWeight)).toEqual([
      'regular',
      'medium',
      'semibold',
      'bold',
    ]);
  });
});
