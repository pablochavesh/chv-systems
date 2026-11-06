---
name: CHV Systems
description: Daylight-first Architectural Apple Liquid Glass — pure neutral frosted crystal hero slab over architectural stone monoliths, restrained crimson-ruby conversion accents, GPU-composited optical motion, and direct first-person Spanish/English copy.
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

**Creative North Star: "Daylight Crystal & Obsidian Liquid Glass Studio"**

CHV Systems presents Jose Pablo Chaves Hidalgo's custom software and web engineering work in Costa Rica inside an Apple-inspired Liquid Glass studio that opens by default in crisp **Light mode** (`data-theme="light"`, `daylight-pearl`) with instant 1-click parity in **Dark mode** (`obsidian-void`). Every frosted pearl or smoked obsidian lens earns its translucency by refracting angled architectural stone planes behind it (`backdrop-filter: blur(28px) saturate(168%)`), framing **Gananova OS** as the primary engineering case study alongside live client websites.

The monumental `CHV SYSTEMS` hero slab is strictly **pure neutral frosted crystal** (zero red/pink sheen or tint), and the top-left header brand capsule stays hidden while `#heroGlassSlab` is in view so the emblem never duplicates in the first viewport. Crimson-ruby (`ruby-deep` in Light, `ruby-core` in Dark) is reserved for conversion buttons, active tabs, and restrained section highlights below the hero. Motion is rich yet strictly GPU-composited (`transform`, `opacity`): staged hero entrance, orbital sphere drift, autonomous white specular sweep, subtle scroll parallax, pointer-tracked caustics, and staggered reveal cascades.

**Key Characteristics:**
- Daylight-first (`daylight-pearl` `#F2F3F7`) frosted Liquid Glass slabs and pills (`26px`–`32px` and `999px` radii) with `1px` bright white specular rims, pointer-tracked caustics, and full Dark-mode parity.
- Pure neutral frosted crystal centerpiece in `#inicio` (`hero-glass-slab`) with neutral metallic `CHV` vector gradient (`#384152` → `#0B0E14` in Light; `#FFFFFF` → `#D5D9E6` in Dark) and zero red glow.
- Context-aware floating header where `.brand-link` stays hidden in `#inicio` and glides into view (`past-hero`) once scrolled past the large hero logo.
- Direct, first-person Costa Rican Spanish (`contame`, `trabajás`) and English copy with zero hollow buzzwords (`innovador`, `revolucionario`, `soluciones integrales`) and zero SaaS pricing/demo buttons on Gananova OS.
- GPU-only (`transform`, `opacity`) Liquid Glass animations (`heroGlideUp`, `orbFloatTL`/`BR`, `slabSpecularSweep`, `starOpticalTwinkle`, `.stagger-item`) honoring `prefers-reduced-motion`.

## Colors

The palette pairs clean architectural limestone/pearl and deep obsidian neutrals with a disciplined crimson-ruby accent reserved for actions and lower-section emphasis.

### Primary
- **Ruby Core** (`ruby-core`): Primary conversion accent for WhatsApp/contact pill buttons, active comparison tabs, and status indicators in Dark mode.
- **Ruby Deep** (`ruby-deep`): Primary high-contrast crimson accent across buttons, inline headline emphasis, and active controls in default Light mode.
- **Ruby Soft** (`ruby-soft`): Luminous rose-ruby highlight reserved for inline headline emphasis over dark smoked glass.

### Neutral
- **Daylight Pearl & Stone** (`daylight-pearl`, `daylight-stone`, `ink-daylight`): Default Light-mode architectural limestone canvas (`#F2F3F7` / `#E7E9EF`) and crisp obsidian ink (`#0D1017`) supporting frosted pearl glass.
- **Obsidian Void, Monolith Stone & Obsidian Elevated** (`obsidian-void`, `monolith-stone`, `obsidian-elevated`): Dark-mode studio ground and angled stone bevels behind smoked Liquid Glass panels.
- **Glass Pill Dark & Alabaster Ink Ramp** (`glass-pill-dark`, `ink-primary`, `ink-secondary`, `ink-soft`): Translucent capsule fills and high-legibility foreground hierarchy maintaining WCAG AA ≥4.5:1 contrast.

### Named Rules
**The Neutral Hero Crystal Rule.** The monumental `CHV SYSTEMS` hero slab, its metallic SVG emblem, its 4-point optical star glint, and its flanking glass orbs must remain 100% neutral frosted pearl/obsidian crystal — never tinted with red, pink, or burgundy stops.

**The Edge-Lit Ruby Discipline Rule.** Outside the neutral hero slab, crimson-ruby lives in primary conversion pills, active selector chips, and restrained inline headline emphasis — never as full-screen neon washes or colored `box-shadow` glows.

## Typography

**Display Font:** Onest (self-hosted variable `woff2`, weights 500–800, with `-apple-system, BlinkMacSystemFont, sans-serif` fallback)
**Body Font:** Figtree (self-hosted variable `woff2`, weights 400–700, with `-apple-system, BlinkMacSystemFont, sans-serif` fallback)

**Character:** `Onest` delivers crisp geometric authority for custom software architecture, while `Figtree` keeps first-person operational descriptions effortless to read on mobile and desktop.

### Hierarchy
- **Headline** (700, `clamp(1.85rem, 3.6vw, 3rem)`, line-height `1.12`, tracking `-0.032em`): Primary section statements ("Software hecho a la medida de cada operación").
- **Display** (600, `clamp(1.55rem, 2.65vw, 2.35rem)`, line-height `1.2`, tracking `-0.028em`): First-viewport custom software pitch anchored below the `CHV SYSTEMS` glass slab.
- **Title** (700, `clamp(1.32rem, 2vw, 1.68rem)`, line-height `1.22`, tracking `-0.022em`): Case study titles (`Gananova OS`, `Sitio web de Gananova`), industry experience headings, and workflow steps.
- **Body** (400–500, `16px` / `0.98rem`–`1.06rem`, line-height `1.58`–`1.66`): Direct first-person prose capped at `52ch`–`65ch`.
- **Label** (600, `0.84rem`–`0.95rem`, tracking `-0.01em` to `0.02em`): Pill buttons, tech stack tags (`Next.js`, `TypeScript`, `PostgreSQL`, `Prisma`, `Docker`), and capability pills.

### Named Rules
**The Direct First-Person Rule.** Copy speaks directly in first person about concrete operational workflows (invoicing, fleet hours, tuition portals, cash-register closing) and bans empty buzzwords (`innovador`, `revolucionario`, `soluciones integrales`) and cryptic telemetry (`0.4s`, `LOAD`, `60Hz`).

## Layout

The page uses a centered `min(1280px, calc(100% - clamp(32px, 6vw, 88px)))` container (`calc(100% - 28px)` below `600px`) over a faint coordinate grid and angled stone planes. Sections use `88px` vertical rhythm and distinct topologies:
1. **Hero (`#inicio`)**: 12-column optical stage with neutral frosted `CHV SYSTEMS` centerpiece slab, floating crescent orbs, and hidden top-left `.brand-link`.
2. **Proyectos (`#proyectos`)**: 6-part custom-software showcase — (1) title & subtitle, (2) dominant `1.38fr / 0.82fr` `Gananova OS` flagship slab with sanitized `gananova-dashboard.svg` and 5 stack tags (zero pricing/demo buttons), (3) 3-column `"Experiencia por tipo de negocio"` industry cards, (4) horizontal `Sitio web de Gananova` secondary card + 2-up `ADEFIP` & `Pura Vida Painting LLC` live site cards, (5) `"También desarrollo"` pill strip, and (6) `"Conversemos"` closing CTA bar.
3. **Servicios, Ventajas, Proceso, Fundador & Contacto**: Asymmetric `5/7` & `7/5` service bento, tabbed Excel/WhatsApp-vs-custom-software comparison table, 4-column hairline workflow ribbon, founder split sheet, and WhatsApp/email configurator.

Every `.liquid-glass` card is a top-level sibling inside plain layout grids — never nested inside another `.liquid-glass` container.

## Elevation & Depth

Depth combines `backdrop-filter: blur(28px) saturate(168%)`, directional `1px`–`1.5px` white inset specular rims, autonomous diagonal white sheen on the hero slab, pointer-tracked radial glints, and pure neutral slate/black elevation shadows.

### Shadow Vocabulary
- **Daylight Pearl Glass Depth** (`inset 0 1.5px 0 0 rgba(255, 255, 255, 0.95), inset 0 -1px 0 0 rgba(15, 20, 35, 0.06), 0 24px 54px -16px rgba(15, 20, 35, 0.14), 0 6px 18px -4px rgba(15, 20, 35, 0.07)`): Default Light-mode optical lift over `daylight-pearl`.
- **Monumental Hero Slab Depth** (`inset 0 1.5px 0 0 rgba(255, 255, 255, 0.62), inset 0 -1.5px 0 0 rgba(255, 255, 255, 0.22), 0 36px 80px -18px rgba(0, 0, 0, 0.78)`): High-refraction neutral centerpiece depth.
- **Liquid Glass Rim & Elevation (Dark)** (`inset 0 1px 0 0 rgba(255, 255, 255, 0.44), inset 1px 0 0 0 rgba(255, 255, 255, 0.16), inset 0 -1px 0 0 rgba(255, 255, 255, 0.08), 0 28px 64px -16px rgba(0, 0, 0, 0.72), 0 8px 22px -6px rgba(0, 0, 0, 0.46)`): Smoked glass depth in Dark mode.

### Named Rules
**The Neutral Shadow & GPU Motion Rule.** `box-shadow` uses only neutral slate/black and white specular alpha, and all continuous/scroll animations touch exclusively `transform` and `opacity` (never `transition: all`).

## Shapes

`999px` full-pill capsules for navigation, buttons, stack tags, and `"También desarrollo"` items; `32px` (`slab`) corners on the hero emblem slab, `Gananova OS` flagship showcase, workflow ribbon, and closing sheets; `24px`–`26px` (`panel`) corners on industry and live-site cards; and `16px`–`18px` (`soft`) corners on uncropped screenshot frames.

## Components

### Buttons
- **Primary (`btn-glass--ruby`):** `48px` min-height (`999px` pill), crimson-ruby gradient, crisp `#FFFFFF` label, directional icon nudge (`translate(2px, -2px)` on hover).
- **Secondary (`btn-glass`):** Frosted pearl (Light) or smoked obsidian (Dark) pill with `blur(20px) saturate(160%)` and `translateY(-2px)` hover lift.

### Chips & Stack Tags
- **Tech Stack & Capability Pills (`tech-tag-pill`, `also-pill`):** Non-interactive optical pills displaying concrete stack (`Next.js`, `TypeScript`, `PostgreSQL`, `Prisma`, `Docker`) and deliverables (`Landing pages`, `Sitios corporativos`, `Portales de clientes`, `Sistemas internos`, `Integraciones`).
- **Selector Chips (`tag-option`, `benefit-tab`):** `≥44px` interactive pills with explicit `transform`, `background`, `color`, and `border-color` transitions.

### Cards / Containers
- **Flagship Case Study (`flagship-case`):** `1.38fr / 0.82fr` `.liquid-glass` slab pairing the sanitized `gananova-dashboard.svg` browser frame with first-person narrative and stack pills — strictly free of pricing or demo buttons.
- **Industry & Live-Site Lenses (`industry-card`, `sec-featured-web`, `site-mini-card`):** Sibling `.liquid-glass` containers with tactile `translateY(-4px)` hover lift and uncropped real screenshots.

### Navigation
Floating top header where `.brand-link` (`CHV SYSTEMS`) is hidden (`opacity: 0; visibility: hidden; transform: translateY(-10px) scale(0.95)`) while in `#inicio` and smoothly reveals when `.site-header.past-hero` activates past `#heroGlassSlab`.

### Signature Component: Neutral Frosted CHV Slab & Crescent Orbs
The hero centerpiece (`hero-glass-slab`) suspends the geometric `CHV` emblem inside a pure neutral frosted crystal slab with an autonomous pure-white diagonal specular sweep (`slabSpecularSweep`), a softly twinkling neutral 4-point star (`starOpticalTwinkle`), and slow-floating crescent-rimmed glass spheres (`orbFloatTL`, `orbFloatBR`).

## Do's and Don'ts

### Do:
- **Do** boot into Light mode (`data-theme="light"`) by default while maintaining full visual parity in Dark mode.
- **Do** keep the hero `CHV SYSTEMS` glass slab 100% neutral crystal (zero red sheen) and keep `.brand-link` hidden until scrolling past the hero logo.
- **Do** sanitize all private system screenshots (`gananova-dashboard.svg`) with fictitious sample data (`Almacén Monte Verde · Datos ficticios de muestra`) and non-client branding colors (deep slate-navy `#162338` sidebar).
- **Do** present Gananova OS strictly as an engineering case study without prices, plans, `"comprar"`, or `"probar demo"` buttons.

### Don't:
- **Don't** add red/pink gradients, borders, or star tints to `.hero-glass-slab` or `#chv-loader`.
- **Don't** use hollow buzzwords (`innovador`, `revolucionario`, `soluciones integrales`), cryptic telemetry (`0.4s`, `LOAD`, `60Hz`), or invented client figures/testimonials.
- **Don't** nest `.liquid-glass` cards inside other `.liquid-glass` cards or use `transition: all`.
- **Don't** add 3D rotating wireframe cubes, typewriter cursors, 3D card-tilt wobble, or slow loaders.
