# Sunshine — a reusable warm four-hue palette system

Two ways to use this file:

- **Section 1** is a prompt. Paste it into any AI tool, alone or after your own brief, and you'll get this scheme applied to whatever you're building.
- **Sections 2–4** are the raw values, for when you'd rather skip the model and drop tokens straight into CSS, Tailwind, or a design tool.

---

## 1. The prompt

> Copy everything inside the box.

```
Apply the "Sunshine" colour system to this project. It is a warm, optimistic,
light-first palette built on four hues — orange, gold, green, blue — plus one
for errors. Light mode is the default; dark mode is a register inversion, not
a different palette.

THE CORE RULE — FOUR REGISTERS PER HUE

Every hue exists in exactly four registers, and each register has one job.
Never use a register outside its job; this single rule is what keeps a
colourful design readable.

  wash  (very light tint)  → tinted surfaces, callout backgrounds, chip fills
  glow  (light)            → borders, gradient stops, dividers, large fills
  mid   (saturated)        → illustration solids, chart series, slider tracks,
                             active-state fills, gradient midpoints
  deep  (dark)             → TEXT AND ICONS ONLY

Bright orange is roughly 3.5:1 on white and fails as body text. That is the
entire reason for the split. The sunshine lives in wash/glow/mid, which are
surfaces. Text quietly uses deep. The page reads bright and stays legible.

MATCHED LIGHTNESS ACROSS HUES

All five deeps sit at the same perceived lightness (L* ≈ 48–52). This means
orange, gold, green, blue and berry text all have near-identical contrast
against the same background, so no hue shouts louder than another. If you add
a sixth hue, tune its deep to land in that same band — do not just pick a
"dark version" by eye, because equal-looking saturation at different hues
gives wildly different contrast.

PALETTE — LIGHT MODE

  Ground     bg #FFFDF7   bg-2 #FFF8EC          (warm paper, never pure white)
  Surfaces   surface #FFFFFF   surface-2 #FFF8EA   surface-3 #FEF1DE
  Borders    border #F3E1C8   border-2 #E7CCA4
  Text       text #2B2118   text-2 #6A5A47   text-3 #7A6547

  orange   deep #AC4C0B   mid #F59034   glow #FFC489   wash #FFF3E6
  gold     deep #886008   mid #F0B429   glow #FFDE87   wash #FFF9E7
  green    deep #227142   mid #4CB878   glow #94DFAE   wash #EBF9F0
  blue     deep #19659F   mid #3FA0E8   glow #96CFF7   wash #EAF4FD
  berry    deep #AC2F4E   mid #E8698A   glow #F7A8BC   wash #FDEEF2

PALETTE — DARK MODE

Warm charcoal, not blue-black or neutral grey. The warmth is the identity and
it must survive at night. Registers invert: what was deep becomes bright text,
what was wash becomes a dim tinted surface. Token NAMES stay identical so no
component code changes.

  Ground     bg #15120C   bg-2 #1B170F
  Surfaces   surface #1E1A12   surface-2 #282217   surface-3 #33291B
  Borders    border #3B3121   border-2 #54452C
  Text       text #F6EEDF   text-2 #C2B197   text-3 #94856D

  orange   deep #FFA754   mid #E08536   glow #8A5417   wash #2E2011
  gold     deep #FFD066   mid #D8A62F   glow #8A6A12   wash #2E2610
  green    deep #6FDB96   mid #3EA968   glow #1F5E38   wash #13251A
  blue     deep #79C7F7   mid #3E96D8   glow #1B4E75   wash #101F2B
  berry    deep #FF8098   mid #D8556F   glow #7A2038   wash #2B1219

SEMANTIC ASSIGNMENTS

  orange  primary accent, active nav, links-in-chrome, focus rings
  gold    warnings, "needs attention", highlights
  green   success, safe, confirmed, valid
  blue    information, links in body text, neutral data
  berry   errors, destructive, over-budget

NEUTRALS ARE WARM, NEVER GREY

Every neutral carries a warm cast — off-whites lean yellow, dark greys lean
brown. A single true grey (#808080, #F5F5F5) anywhere in this palette reads
as a mistake. Shadows are warm too: use brown-tinted rgba, not black.

  light  0 1px 2px rgba(120,80,20,.05), 0 8px 24px -12px rgba(160,110,30,.16)
  dark   0 1px 2px rgba(0,0,0,.4),      0 10px 28px -14px rgba(0,0,0,.7)

GRADIENTS — WHERE THEY BELONG

Gradients are part of this scheme, but placed, not sprinkled:

  YES  the main headline, as background-clip:text running
       orange-deep → gold-deep → green-deep → blue-deep (all deeps, so it
       stays readable; optionally drift background-position slowly)
  YES  ambient page background: 3–5 large, very low-alpha radial pools of mid
       hues in the corners, position:fixed so they don't scroll
  YES  a 3px cap on cards, a different hue pair per card
  YES  section divider rules: multi-hue glow fading to transparent
  YES  data fills — progress bars, chart segments, chips in active state
  NO   body text, small text, or anything under ~20px
  NO   large flat gradient panels behind paragraphs
  NO   more than one gradient competing in the same eyeline

TYPOGRAPHY

  display  Bricolage Grotesque 700/800, tight tracking (-0.02 to -0.03em)
  body     IBM Plex Sans 400/600
  mono     IBM Plex Mono 400/500/600
  Small uppercase labels: mono, 9–11px, letter-spacing 0.14–0.22em.

HARD CONSTRAINTS — verify, don't assume

  1. Body and small text ≥ 4.5:1 against its ACTUAL background, including
     when sitting on a wash rather than the page ground. Check both.
  2. Borders and icons ≥ 3:1.
  3. Never a bright/mid hue as text on a light background.
  4. Colour is never the only signal — status pills, badges and alerts keep a
     text label or icon so they survive greyscale and colour blindness.
  5. Focus rings visible in both themes: 3px solid orange-mid, 3px offset.
  6. Honour prefers-reduced-motion — kill gradient drift and all transitions.

IMPLEMENTATION

Define every value as a CSS custom property on :root, override the whole set
under [data-theme="dark"], and reference tokens only — never a raw hex in a
component. Default the document to light. Provide a visible theme toggle.
Do not use prefers-color-scheme to pick the initial theme; light is the
intended default.

When you're done, list the contrast ratio you measured for: body text, small
mono labels, each status colour on its own wash, and code-syntax colours on
the code background. Fix anything under 4.5:1 by darkening the deep register
— never by lightening the text.
```

---

## 2. Drop-in CSS

```css
:root{
  color-scheme:light;

  --bg:#FFFDF7;      --bg-2:#FFF8EC;
  --surface:#FFFFFF; --surface-2:#FFF8EA; --surface-3:#FEF1DE;
  --border:#F3E1C8;  --border-2:#E7CCA4;
  --text:#2B2118;    --text-2:#6A5A47;    --text-3:#7A6547;

  --orange:#AC4C0B; --orange-mid:#F59034; --orange-glow:#FFC489; --orange-wash:#FFF3E6;
  --gold:#886008;   --gold-mid:#F0B429;   --gold-glow:#FFDE87;   --gold-wash:#FFF9E7;
  --green:#227142;  --green-mid:#4CB878;  --green-glow:#94DFAE;  --green-wash:#EBF9F0;
  --blue:#19659F;   --blue-mid:#3FA0E8;   --blue-glow:#96CFF7;   --blue-wash:#EAF4FD;
  --berry:#AC2F4E;  --berry-mid:#E8698A;  --berry-glow:#F7A8BC;  --berry-wash:#FDEEF2;

  --code-bg:#FFFBF2; --code-text:#3A2E20;
  --c-com:#786144; --c-key:#AC4C0B; --c-str:#227142; --c-var:#19659F; --c-num:#7C42A0;

  --shadow:0 1px 2px rgba(120,80,20,.05), 0 8px 24px -12px rgba(160,110,30,.16);
  --shadow-lift:0 2px 6px rgba(120,80,20,.08), 0 18px 40px -18px rgba(160,110,30,.28);
}

[data-theme="dark"]{
  color-scheme:dark;

  --bg:#15120C;      --bg-2:#1B170F;
  --surface:#1E1A12; --surface-2:#282217; --surface-3:#33291B;
  --border:#3B3121;  --border-2:#54452C;
  --text:#F6EEDF;    --text-2:#C2B197;    --text-3:#94856D;

  --orange:#FFA754; --orange-mid:#E08536; --orange-glow:#8A5417; --orange-wash:#2E2011;
  --gold:#FFD066;   --gold-mid:#D8A62F;   --gold-glow:#8A6A12;   --gold-wash:#2E2610;
  --green:#6FDB96;  --green-mid:#3EA968;  --green-glow:#1F5E38;  --green-wash:#13251A;
  --blue:#79C7F7;   --blue-mid:#3E96D8;   --blue-glow:#1B4E75;   --blue-wash:#101F2B;
  --berry:#FF8098;  --berry-mid:#D8556F;  --berry-glow:#7A2038;  --berry-wash:#2B1219;

  --code-bg:#14110B; --code-text:#E6DCC9;
  --c-com:#8B7C64; --c-key:#FFAE5C; --c-str:#86D9A0; --c-var:#79C6F2; --c-num:#C79BE8;

  --shadow:0 1px 2px rgba(0,0,0,.4), 0 10px 28px -14px rgba(0,0,0,.7);
  --shadow-lift:0 2px 8px rgba(0,0,0,.5), 0 20px 44px -20px rgba(0,0,0,.8);
}
```

### The two signature gradients

```css
/* headline — all four DEEPS, so it stays readable, with a slow drift */
h1{
  background:linear-gradient(103deg,
    var(--orange) 0%, var(--gold) 32%, var(--green) 64%, var(--blue) 100%);
  -webkit-background-clip:text; background-clip:text; color:transparent;
  background-size:200% 100%; animation:shift 14s ease-in-out infinite;
}
@keyframes shift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}

/* ambient page wash — fixed so it never scrolls */
body::before{
  content:''; position:fixed; inset:0; pointer-events:none; z-index:0;
  background:
    radial-gradient(760px 520px at 84% -6%, color-mix(in srgb, var(--gold-mid)   22%, transparent), transparent 62%),
    radial-gradient(660px 460px at  4%  8%, color-mix(in srgb, var(--orange-mid) 16%, transparent), transparent 60%),
    radial-gradient(720px 620px at 96% 52%, color-mix(in srgb, var(--blue-mid)   13%, transparent), transparent 62%),
    radial-gradient(680px 560px at -6% 84%, color-mix(in srgb, var(--green-mid)  14%, transparent), transparent 62%);
}
[data-theme="dark"] body::before{opacity:.5}
```

---

## 3. Tailwind

```js
// tailwind.config.js — pair with a `dark:` variant driven by [data-theme]
export default {
  darkMode: ['variant', '&:where([data-theme="dark"], [data-theme="dark"] *)'],
  theme: { extend: { colors: {
    paper:  { DEFAULT:'#FFFDF7', 2:'#FFF8EC' },
    surf:   { DEFAULT:'#FFFFFF', 2:'#FFF8EA', 3:'#FEF1DE' },
    line:   { DEFAULT:'#F3E1C8', 2:'#E7CCA4' },
    ink:    { DEFAULT:'#2B2118', 2:'#6A5A47', 3:'#7A6547' },
    orange: { deep:'#AC4C0B', mid:'#F59034', glow:'#FFC489', wash:'#FFF3E6' },
    gold:   { deep:'#886008', mid:'#F0B429', glow:'#FFDE87', wash:'#FFF9E7' },
    green:  { deep:'#227142', mid:'#4CB878', glow:'#94DFAE', wash:'#EBF9F0' },
    blue:   { deep:'#19659F', mid:'#3FA0E8', glow:'#96CFF7', wash:'#EAF4FD' },
    berry:  { deep:'#AC2F4E', mid:'#E8698A', glow:'#F7A8BC', wash:'#FDEEF2' },
  }}}
}
```

---

## 4. Measured contrast

Verified by rendering, not estimated. Light-mode deeps on white and on their own wash:

| Hue | Deep | On #FFFFFF | On its wash |
|---|---|---|---|
| orange | `#AC4C0B` | 5.54:1 | 5.07:1 |
| gold | `#886008` | 5.64:1 | 5.36:1 |
| green | `#227142` | 5.99:1 | 5.51:1 |
| blue | `#19659F` | 6.17:1 | 5.54:1 |
| berry | `#AC2F4E` | 6.42:1 | 5.71:1 |

Text roles: `text` 15.5:1 · `text-2` 6.5:1 · `text-3` 5.5:1 on the page ground.

Perceived lightness of the five deeps: **48.4 – 51.9**. That 3.5-point spread is the point — it's why no hue dominates.

Dark-mode brights on the charcoal ground: orange 9.7:1 · gold 12.9:1 · green 10.9:1 · blue 10.1:1 · berry 7.8:1 · `text` 16.2:1 · `text-3` 5.2:1.

Every role clears WCAG AA (4.5:1) in both themes with margin, so you can nudge a hue slightly without immediately breaking compliance — but re-measure when you do.

---

## Extending it

**Adding a hue.** Pick the hue, then tune its *deep* until it measures 5.5–6.5:1 on white. Do not eyeball it — a "medium purple" and a "medium yellow" that look equally saturated can differ by 3:1. Derive mid/glow/wash by raising lightness while holding hue.

**Going more muted.** Reduce chroma on the mid and glow registers only. Leave the deeps alone; they're doing the accessibility work.

**Going bolder.** Raise chroma on mid, and let glow carry more saturation in borders. Still don't touch the deeps.

**The one thing not to do.** Don't use a mid or glow value as text colour because it "looks nicer." That's the failure this whole structure exists to prevent.
