---
name: CHV Systems
description: Architectural Apple Liquid Glass with Subtle Crimson Nuances — smoked refractive glass slabs and crescent-lit spheres floating over poured-concrete monoliths, paired with warm everyday Spanish and English copy.
colors:
  ruby-core: "#E11D48"
  ruby-deep: "#BE123C"
  ruby-soft: "#FDA4AF"
  obsidian-void: "#07070A"
  monolith-stone: "#0E0F14"
  obsidian-elevated: "#14161D"
  glass-pill-dark: "rgba(18, 19, 25, 0.62)"
  ink-primary: "#F5F6FA"
  ink-secondary: "#C5C9D6"
  ink-soft: "#9BA1B4"
  daylight-pearl: "#F2F3F7"
  daylight-stone: "#E7E9EF"
  ink-daylight: "#0D1017"
typography:
  display:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.55rem, 2.65vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.85rem, 3.6vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.032em"
  title:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.32rem, 2vw, 1.68rem)"
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: "-0.022em"
  body:
    fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.84rem"
    fontWeight: 600
    letterSpacing: "0.02em"
rounded:
  soft: "18px"
  panel: "26px"
  slab: "32px"
  pill: "999px"
spacing:
  sm: "12px"
  md: "24px"
  lg: "32px"
  section: "88px"
components:
  button-primary:
    backgroundColor: "{colors.ruby-core}"
    textColor: "{colors.ink-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ruby-deep}"
    textColor: "{colors.ink-primary}"
  button-glass:
    backgroundColor: "{colors.glass-pill-dark}"
    textColor: "{colors.ink-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  chip-project:
    backgroundColor: "{colors.glass-pill-dark}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11px 18px"
    height: "44px"
  chip-project-selected:
    backgroundColor: "{colors.ruby-core}"
    textColor: "{colors.ink-primary}"
  nav-capsule:
    backgroundColor: "{colors.glass-pill-dark}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.pill}"
    padding: "5px 5px 5px 18px"
  glass-slab:
    backgroundColor: "{colors.monolith-stone}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.slab}"
    padding: "32px"
---

# Design System: CHV Systems

## Overview

**Creative North Star: "The Ruby-Seamed Liquid Glass Monolith"**

CHV Systems presents custom web design and business software inside an architectural studio built from dark poured-concrete monoliths, faint hairline coordinate rulings, and genuine Apple-inspired Liquid Glass lenses warmed by restrained crimson-ruby light seams. Every glass slab, capsule pill, and crescent-lit sphere earns its translucency by refracting physical architectural planes behind it (`backdrop-filter: blur(28px) saturate(168%)`), framing real delivered client projects in Costa Rica and the United States with calm optical authority.

While the material language is sculptural and modern, every word on the surface speaks in clear, everyday human Spanish and English so any business owner understands what CHV Systems builds within seconds. Motion stays tactile and GPU-composited: pointer-tracked optical caustics across glass surfaces, smooth pill-tab transitions (`cubic-bezier(0.22, 1, 0.36, 1)`), and a ~480ms smoked glass veil loader. Confirmed visual rejections permanently excluded from this world: cryptic technical telemetry (`0.4s`, `LOAD`, `60Hz`), uppercase kicker/eyebrow labels above headings, cards nested inside cards, uniform SaaS icon-card grids, 3D rotating wireframe cubes, typewriter text cursors, and 3D card-tilt wobble.

**Key Characteristics:**
- Smoked refractive Liquid Glass slabs and pills (`26px`–`32px` and `999px` radii) with `1px` bright white specular rims and pointer-tracked caustic light.
- Architectural poured-concrete studio ground (`obsidian-void` and `monolith-stone`) crossed by angled stone bevels and warm crimson-ruby seams so `backdrop-filter` visibly refracts edges throughout the scroll.
- Crescent-rimmed translucent Liquid Glass spheres with directional specular falloff instead of flat uniform circle strokes.
- Self-hosted `Onest` display typography paired with `Figtree` body prose for clean geometric authority and warm everyday readability.
- Parity-first Dark and Light modes where Light mode shifts to daylight stone-pearl (`daylight-pearl`) with translucent smoked pearl glass and deep burgundy-crimson accents (`ruby-deep`).

## Colors

The palette pairs quiet architectural obsidian and limestone neutrals with a single disciplined crimson-ruby light source that warms glass edges and conversion controls without flooding reading fields.

### Primary
- **Ruby Core** (`ruby-core`): Primary conversion accent for WhatsApp/inquiry pill buttons, active project-selector pills, status dots, and recessed architectural light seams in Dark mode.
- **Ruby Deep** (`ruby-deep`): Pressed/hover depth partner in Dark mode and primary high-contrast crimson accent across buttons, inline highlights, and optical glints in Light mode.
- **Ruby Soft** (`ruby-soft`): Luminous rose-ruby highlight reserved for inline headline emphasis (`<span>` / `<mark>`), active badge text, and outcome markers over dark smoked glass.

### Neutral
- **Obsidian Void** (`obsidian-void`): Deepest studio ground and browser canvas in Dark mode, establishing theatrical contrast behind concrete monoliths and refractive glass.
- **Monolith Stone & Obsidian Elevated** (`monolith-stone`, `obsidian-elevated`): Angled architectural stone planes and recessed showcase frames that pass behind Liquid Glass panels so `backdrop-filter` has real tonal edges to refract.
- **Glass Pill Dark** (`glass-pill-dark`): Smoked translucent fill for floating navigation capsules, secondary pill buttons, and segmented tab rails.
- **Alabaster Ink Ramp** (`ink-primary`, `ink-secondary`, `ink-soft`): High-legibility foreground hierarchy over smoked dark glass, maintaining ≥4.5:1 contrast across all body copy and controls.
- **Daylight Pearl & Stone** (`daylight-pearl`, `daylight-stone`, `ink-daylight`): Light-mode architectural limestone ground and deep obsidian ink (`ink-daylight`) supporting translucent frosted pearl glass.

### Named Rules
**The Edge-Lit Ruby Discipline Rule.** Crimson-ruby lives in recessed architectural light seams, primary conversion pills, and subtle inline headline emphasis — never as full-screen neon washes or colored drop-shadow glows.

**The Tinted-Surface Harmony Rule.** When a glass surface carries a ruby tint (such as the custom software lens), secondary body copy shifts to a warm rose-tinted foreground (`#F0DCE2` in Dark mode, `#4A1C29` in Light mode) rather than neutral cool slate.

## Typography

**Display Font:** Onest (self-hosted variable `woff2`, weights 500–800, with `-apple-system, BlinkMacSystemFont, sans-serif` fallback)
**Body Font:** Figtree (self-hosted variable `woff2`, weights 400–700, with `-apple-system, BlinkMacSystemFont, sans-serif` fallback)

**Character:** `Onest` brings crisp humanist-geometric precision suited to Apple-caliber optical hardware without cold technical stiffness, while `Figtree` keeps everyday Spanish and English explanations warm, open, and effortless to scan on mobile screens.

### Hierarchy
- **Headline** (700, `clamp(1.85rem, 3.6vw, 3rem)`, line-height `1.12`, tracking `-0.032em`): Primary section statements paired directly with a plain-spoken lead paragraph, with key phrases highlighted in `ruby-soft` (`ruby-deep` in Light mode).
- **Display** (600, `clamp(1.55rem, 2.65vw, 2.35rem)`, line-height `1.2`, tracking `-0.028em`): First-viewport value proposition anchored inside a smoked glass pitch lens below the monumental `CHV SYSTEMS` emblem slab.
- **Title** (700, `clamp(1.32rem, 2vw, 1.68rem)`, line-height `1.22`, tracking `-0.022em`): Project titles, tailored business solution headings, and workflow step titles.
- **Body** (400–500, `16px` / `0.98rem`–`1.06rem`, line-height `1.58`–`1.66`): Plain everyday descriptions constrained to `52ch`–`64ch` measure for comfortable reading.
- **Label** (600, `0.84rem`–`0.95rem`, tracking `-0.01em` to `0.02em`): Pill buttons, segmented tab labels, and direct contact actions; wide uppercase tracking (`0.28em`–`0.62em`) is reserved exclusively for the `S Y S T E M S` brand wordmark.

### Named Rules
**The Everyday Plain-Language Rule.** Headings and labels name real business outcomes in plain words ("Trabajos reales funcionando hoy", "Ordenar tu negocio") — never uppercase category kickers, technical acronyms, or synthetic performance metrics.

## Layout

The page uses a centered `min(1280px, calc(100% - clamp(32px, 6vw, 88px)))` container (`calc(100% - 28px)` below `600px`) over a fixed faint coordinate grid (`clamp(90px, 14vw, 210px)`) and alternating angled architectural stone planes. Major sections breathe with `88px` vertical padding separated by `1px` translucent hairline dividers (`rgba(255, 255, 255, 0.11)`), opening with an asymmetric two-column header (`1.15fr / 0.85fr`) that aligns the section `h2` against its lead paragraph without eyebrow kickers.

Each section adopts a distinct spatial topology rather than repeating card grids: a 12-column architectural hero stage bounded to `min(100svh, 900px)` on desktop; a flattened two-column project showcase (`1.25fr / 0.85fr`); an asymmetric `5/7` and `7/5` bento of four internally distinct business lenses; a tabbed three-column before/after comparison table; a continuous 4-column workflow ribbon divided by `1px` hairlines; and split two-pane founder and contact sheets. Breakpoints at `1040px`, `880px`, and `600px` collapse multi-column sheets cleanly into single-column stacks, reflowing the 4 project tabs into a 2x2 pill grid on mobile (`<=600px`) so zero controls clip off-screen.

## Elevation & Depth

Depth is optical and refractive rather than flat or drop-shadow-heavy: Liquid Glass panels float over angled poured-concrete ridges and subtle crimson light blooms, combining `backdrop-filter: blur(28px) saturate(168%)`, directional `1px` inset specular rims (brightest along the top edge where studio light strikes), pointer-tracked radial caustic highlights, and neutral black ambient elevation shadows.

### Shadow Vocabulary
- **Liquid Glass Rim & Elevation** (`inset 0 1px 0 0 rgba(255, 255, 255, 0.44), inset 1px 0 0 0 rgba(255, 255, 255, 0.16), inset 0 -1px 0 0 rgba(255, 255, 255, 0.08), 0 28px 64px -16px rgba(0, 0, 0, 0.72), 0 8px 22px -6px rgba(0, 0, 0, 0.46)`): Standard optical depth for `.liquid-glass` slabs and showcases in Dark mode.
- **Monumental Hero Slab Depth** (`inset 0 1.5px 0 0 rgba(255, 255, 255, 0.62), inset 0 -1.5px 0 0 rgba(255, 255, 255, 0.22), 0 36px 80px -18px rgba(0, 0, 0, 0.78)`): High-refraction centerpiece elevation over the concrete monolith backdrop.
- **Daylight Pearl Glass Depth** (`inset 0 1.5px 0 0 rgba(255, 255, 255, 0.95), inset 0 -1px 0 0 rgba(15, 20, 35, 0.06), 0 24px 54px -16px rgba(15, 20, 35, 0.14), 0 6px 18px -4px rgba(15, 20, 35, 0.07)`): Clean optical lift over daylight stone-pearl in Light mode.

### Named Rules
**The Neutral Shadow & Refractive Ground Rule.** `box-shadow` declarations use pure neutral black/slate alpha for physical depth and white alpha for inset specular rims — never colored neon `box-shadow` glows — and every glass section sits over an angled tonal plane so `backdrop-filter` refracts visible structure.

## Shapes

Form language contrasts crisp architectural concrete diagonals in the ground against smooth, tactile optical curvature in the foreground: `999px` full-pill capsules for all navigation bars, buttons, and filter chips; `32px` (`slab`) corners on primary showcases and ribbons; `26px` (`panel`) corners on bento lenses; and `18px` (`soft`) corners on embedded screenshot frames. Decorative glass spheres use `1.5px` gradient-masked crescent rims (`mask-composite: exclude`) that fade to `0%` opacity on their shadow side, while internal subdivisions inside glass slabs use `1px` translucent hairlines instead of nested bordered cards.

## Components

### Buttons
Tactile optical pill capsules with a minimum `48px` height (`≥44px` across all utility and compact actions) and directional `↗` or WhatsApp vector icons that shift `translate(2px, -2px)` on hover.
- **Shape:** Full capsule (`999px` radius), `12px 24px` padding, `12px` icon gap.
- **Primary (`btn-glass--ruby`):** Diagonal crimson-ruby gradient (`rgba(225, 29, 72, 0.92)` to `rgba(159, 18, 57, 0.90)`), `1px` rose-pearl rim (`rgba(255, 180, 195, 0.48)`), crisp `#FFFFFF` label, and top inset highlight.
- **Secondary (`btn-glass`):** Smoked glass pill (`glass-pill-dark`) with `blur(20px) saturate(160%)`, `1px` translucent border, lifting `translateY(-2px)` on hover.
- **Focus:** `2px solid` `ruby-core` outline at `3px` offset.

### Chips
Interactive pill selectors (`44px` minimum height) used for project switching, benefit comparison tabs, and inquiry topic selection.
- **Style:** `999px` radius, `10px 18px` (`11px 18px` on contact tags) padding, `Onest` `600` weight.
- **State:** Unselected chips rest on subtle translucent fills (`rgba(255, 255, 255, 0.05)`) with `ink-secondary` text; active/selected chips illuminate with crimson-ruby gradient or `ruby-tint` fill and `ruby-border` stroke.

### Cards / Containers
Refractive `.liquid-glass` lenses that organize content through internal `1px` hairline splits rather than nested sub-cards.
- **Corner Style:** `32px` (`slab`) for full-width showcases, ribbons, and sheets; `26px` (`panel`) for multi-lens bento items.
- **Background:** 135deg translucent white-to-ruby gradient (`rgba(255, 255, 255, 0.11)` to `rgba(225, 29, 72, 0.06)`) over `blur(28px) saturate(168%)`.
- **Border & Padding:** `1px solid` specular border (`rgba(255, 255, 255, 0.19)` in Dark, `rgba(15, 18, 28, 0.13)` in Light) with `28px`–`44px` internal padding.

### Navigation
Floating dual-capsule top bar pairing the custom geometric `CHV SYSTEMS` wordmark pill on the left with a smoked Liquid Glass navigation capsule on the right (`44px` touch targets for links, `ES/EN` toggle, `Dark/Light` toggle, and `Hablemos ↗` action orb), collapsing below `880px` into a `44px`-target mobile pill bar and frosted glass dropdown sheet. A fixed WhatsApp trigger (`54x54px`) remains hidden in the first viewport and reveals smoothly once the user scrolls past the hero stage.

### Signature Component: Monumental Frosted CHV Slab & Crescent Orbs
The first-viewport centerpiece (`hero-glass-slab`) suspends the custom notched geometric `CHV` metallic vector logotype and wide-tracked `S Y S T E M S` wordmark inside a thick frosted glass slab (`blur(26px) saturate(165%)`) accented by a four-point optical star glint in the upper-right corner and a pointer-responsive diagonal caustic sheen (`--caustic-shift`), flanked by top-left and bottom-right crescent-rimmed glass spheres.

## Do's and Don'ts

### Do:
- **Do** place Liquid Glass surfaces over visible architectural stone bevels, photography, or subtle ruby light seams so `backdrop-filter` visibly refracts tonal edges.
- **Do** keep all user-facing Spanish and English copy in warm, everyday business language, and explicitly label any illustrative software sample numbers (`Ejemplo ilustrativo · Datos de muestra`).
- **Do** render full-width real client screenshots (`gananova-preview.jpg`, `adefip-preview.jpg`, `puravida-preview.png`) uncropped inside matched dark frames (`height: auto`) so navigation menus and margins stay intact.
- **Do** enforce `≥44x44px` touch targets on every button, tab, language/theme switch, and copy pill across both desktop and `390px` mobile viewports.

### Don't:
- **Don't** put `#E11D48` or colored neon tints into `box-shadow` declarations; express crimson-ruby strictly through surface gradients, borders, and recessed ambient backdrops.
- **Don't** nest bordered cards inside `.liquid-glass` containers; subdivide interior layouts with `1px` translucent hairline rules (`--glass-divider`).
- **Don't** reintroduce technical telemetry (`0.4s`, `LOAD`, `100%`, `CORE`, `60Hz`), unexplained acronyms (`CRM`, `ERP`, `OKR`), uppercase eyebrow kickers, 3D rotating cubes, typewriter cursors, or 3D card-tilt effects.
- **Don't** clip multi-tab switchers behind hidden horizontal scrollbars on mobile; reflow pill tabs into a visible 2x2 grid on narrow viewports.
