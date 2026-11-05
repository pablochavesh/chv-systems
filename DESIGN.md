---
name: CHV Systems
description: Futuristic Cyber-Pop Maximalist Mosaic — exposed architectural grid chassis, continuous 4-sided kinetic perimeter frame, saturated full-bleed color cells, and monumental dual-axis typography.
colors:
  acid-volt: "#C9FF1F"
  hyper-vermilion: "#FF441F"
  cyber-lavender: "#C589FF"
  signal-sky: "#6FD4FF"
  light-sky-frame: "#7BD5F5"
  chassis-obsidian: "#08090E"
  cell-pitch: "#090B10"
  cell-base: "#0D101A"
  cell-alt: "#131827"
  chalk: "#F7F6F0"
  chalk-alt: "#ECEBE2"
  ink-muted: "#CBD5E1"
typography:
  display:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "clamp(2.4rem, 5.2vw, 4.95rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "clamp(2.3rem, 4.6vw, 4.1rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(1.3rem, 2.2vw, 1.9rem)"
    fontWeight: 900
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.6
  label:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.03em"
rounded:
  none: "0px"
  pill: "999px"
spacing:
  grid-gap: "4px"
  section-pad: "14px"
  cell-sm: "16px"
  cell-md: "24px"
  cell-lg: "32px"
  cell-xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.hyper-vermilion}"
    textColor: "{colors.chassis-obsidian}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "15px 24px"
  button-primary-hover:
    backgroundColor: "{colors.chassis-obsidian}"
    textColor: "{colors.acid-volt}"
  button-volt:
    backgroundColor: "{colors.acid-volt}"
    textColor: "{colors.chassis-obsidian}"
    rounded: "{rounded.none}"
    padding: "15px 24px"
  button-pitch:
    backgroundColor: "{colors.chassis-obsidian}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "15px 24px"
  chip-node:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.chassis-obsidian}"
    rounded: "{rounded.none}"
    padding: "6px 11px"
  chip-node-active:
    backgroundColor: "{colors.acid-volt}"
    textColor: "{colors.chassis-obsidian}"
  nav-capsule:
    backgroundColor: "{colors.chassis-obsidian}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.pill}"
    padding: "5px 6px 5px 14px"
---

# Design System: CHV Systems

## Overview

**Creative North Star: "The Cyber-Pop Synoptic Mosaic"**

CHV Systems speaks with the authority of a live futuristic control board fused with an opulent Swiss-pop broadsheet poster. Instead of floating cards over an empty dark SaaS void, every piece of content inhabits a structural architectural grid chassis framed on all four viewport edges by a continuous kinetic marquee rail. Full-bleed color cells in Acid Volt, Hyper Vermilion, Cyber Lavender, and Signal Sky lock into exposed dark rulings, proving immediately that one systems engineer commands both bold visual design and live business software architecture.

Motion is crisp, editorial, and mechanical: shutter clip-path reveals (`0.55s cubic-bezier(0.16, 1, 0.3, 1)`), instant bay switching, and a 60Hz vector sine-wave oscilloscope. Confirmed anti-references permanently banned from this system: cosmic star-dust backgrounds, frosted glassmorphism, 3D rotating wireframes/cubes, typewriter text cursors, 3D card tilt or magnetic cursor wobble, slow volumetric loaders, and uniform SaaS icon-card grids.

**Key Characteristics:**
- Continuous 4-sided perimeter marquee ticker framing the viewport across both desktop (`32px`) and mobile (`22px`).
- Exposed structural grid chassis (`4px` cell gutters and `2.5px` crisp borders) with blueprint coordinate rulings.
- Full-bleed saturated color-block plates enriched by CSS micro-dot halftones and high-contrast SVG op-art wave patterns.
- Dual-axis display tension pairing ultra-condensed monumental blocks (`Big Shoulders Display`) with wide futuristic geometric caps (`Unbounded`).
- Parity-first Dark and Light modes where Light mode preserves the exposed dark structural grid chassis framed in sky cyan while flipping neutral cells to crisp Chalk.

## Colors

The palette operates through fearless figure-ground polarity: hyper-saturated pop plates locked inside pitch-dark structural joints, never diluted into pastel washes or glowing neon blurs.

### Primary
- **Acid Volt** (`acid-volt`): Primary high-energy surface plate for manifesto blocks, active control tabs, primary module highlights, and the architectural WhatsApp trigger. Always paired with `chassis-obsidian` ink for maximum WCAG contrast.
- **Hyper Vermilion** (`hyper-vermilion`): Primary action and focal stage surface used for main conversion CTAs, the hero cyber-optic stage, active project tabs, and op-art directional cells.

### Secondary
- **Cyber Lavender** (`cyber-lavender`): Structural navigation bar fill, editorial section descriptors, and corporate case-study plates.
- **Signal Sky** (`signal-sky` / `light-sky-frame`): Continuous 4-sided perimeter marquee rail, supersonic oscilloscope bay, and field-service solution blocks.

### Neutral
- **Chassis Obsidian** (`chassis-obsidian`): Exposed structural grid frame, `2.5px–3px` cell borders, button ink on bright plates, and Dark mode blueprint ground.
- **Cell Pitch & Base** (`cell-pitch`, `cell-base`, `cell-alt`): Dark mode neutral structural plates for high-contrast white/chalk display type and data schematics.
- **Chalk** (`chalk`, `chalk-alt`): Primary light ink on dark surfaces and the primary neutral cell fill in Light mode (`[data-theme="light"]`), avoiding warm-cream drift.
- **Muted Slate** (`ink-muted`): Supporting body copy inside dark neutral cells.

### Named Rules
**The Full-Bleed Cell Rule.** Saturated accents own entire structural grid cells edge-to-edge rather than appearing only as thin side stripes, tiny badges, or glowing borders.

**The Exposed Chassis Rule.** Both Dark and Light modes maintain the dark exposed structural grid chassis and crisp `2.5px` dark borders; Light mode swaps neutral interior plates to Chalk (`chalk`) inside a sky-framed (`light-sky-frame`) dark coordinate grid rather than washing the page into a borderless white sheet.

## Typography

**Display Font:** `Big Shoulders Display` (with `sans-serif` fallback)
**Wide Geometric Font:** `Unbounded` (with `sans-serif` fallback)
**Body Font:** `Manrope` (with `system-ui, -apple-system, sans-serif` fallback)
**Label/Mono Font:** `Azeret Mono` (with `ui-monospace, monospace` fallback)

**Character:** Monumental condensed poster lettering (`Big Shoulders Display`) provides vertical architectural compression, countered horizontally by wide, futuristic `Unbounded` geometric caps and grounded in clean, high-legibility `Manrope` prose.

### Hierarchy
- **Display** (`900`, `clamp(2.4rem, 5.2vw, 4.95rem)`, line-height `0.98`, `-0.01em`): Stacked color-blocked hero `<h1>` words with top padding headroom (`14px`) so Spanish acute accents (`Í`, `Ó`, `É`) never clip.
- **Headline** (`900`, `clamp(2.3rem, 4.6vw, 4.1rem)`, line-height `1.02`, `-0.01em`): Section banner `<h2>` titles with inline Acid Volt `<mark>` highlights.
- **Title** (`800–900`, `clamp(1.3rem, 2.2vw, 1.9rem)`, line-height `1.12`, `-0.03em`): Sub-manifesto headings (`Unbounded`), navigation controls, tab triggers, and CTA labels.
- **Body** (`600–700`, `16px` / `0.95rem–1rem`, line-height `1.58–1.66`, max `60ch–68ch`): Persuasive commercial copy, founder biography, and role/deliverable stamps.
- **Label** (`700`, `0.75rem–0.94rem`, letter-spacing `0.03em`, `tabular-nums`): Strictly reserved for genuine telemetry (`0.4s`, `60HZ`), protocol/URL headers (`HTTPS://...`, `SYS://...`), geographic coordinates (`PZ · 09°22'N`), serial codes, and direct email/phone strings.

### Named Rules
**The Strict Telemetry Mono Rule.** `Azeret Mono` is reserved exclusively for real telemetry values, URLs, coordinates, serial codes, and direct contact strings; prose role stamps, chips, sector tags, and marketing labels must use `Unbounded` or `Manrope`.

**The Zero Kicker Rule.** Headings lead their grid cells directly. Never place small uppercase eyebrow or phase labels (`FASE 1`, `01 //`, `SERVICIOS`) above `<h1>`, `<h2>`, or `<h3>` elements.

## Layout

The entire application sits inside a `padding: var(--frame-size)` viewport perimeter (`32px` desktop, `22px` below `860px`) bounded by four fixed marquee rails. Inside, `.max-shell` (`max-width: 1440px`) subdivides into `.mosaic-section` bands (`14px` desktop padding, `8px` below `640px`) where sibling cells are separated by a tight `4px` structural gap that reveals the underlying coordinate grid.

Desktop compositions use asymmetric multi-column splits: `5.25fr 1.2fr 5.55fr` in the hero mosaic, `1.2fr 0.8fr` in section banners, `7fr 5fr` in module blueprints, `5/7` and `7/5` spans across the 12-column solutions matrix, and flattened sibling cells in the founder and contact sections. Breakpoints step down cleanly at `1120px` (tablet single-column primary flow, `auto` row heights so poster cells never leave empty voids), `860px` (`22px` perimeter rails and `22px` cell padding), and `640px` (compact single-row lavender navbar and full-width touch CTAs).

## Elevation & Depth

Depth is architectural and graphic rather than atmospheric: separation comes from `2.5px` solid `chassis-obsidian` borders, `4px` structural grid channels, halftone dot fields (`.pat-dots`), and high-contrast SVG op-art wave textures (`.pat-waves`). Colored neon glows and multi-layered glass blurs are prohibited.

### Shadow Vocabulary
- **Shell Grounding** (`box-shadow: 0 16px 34px -10px rgba(0, 0, 0, 0.55)`): Grounds the outer `.max-shell` frame over the coordinate backdrop.
- **Neutral Action Lift** (`box-shadow: 0 12px 24px -8px rgba(8, 9, 14, 0.45)`): Neutral dark depth under primary Vermilion CTAs and the fixed Acid Volt WhatsApp trigger.

### Named Rules
**The Zero Colored Glow Rule.** Never apply tinted orange, lime, or violet `box-shadow` halos; elevation uses crisp dark ink borders and neutral obsidian shadows only.

**The Flat Sibling Cell Rule.** Never nest bordered cards inside bordered wrapper cards; promote sub-items (credentials, audit metrics, contact channels) to direct sibling cells of the structural grid.

## Shapes

- **Sharp Structural Rectangles (`0px` radius):** All mosaic cells, buttons (`.btn-max`), node chips, project viewports, and the floating WhatsApp trigger use crisp `90deg` architectural corners with `2.5px` solid dark borders.
- **Instrument Capsules (`999px` radius) & Radial Dials (`50%`):** Reserved strictly for the top-right navbar command capsule (`.nav-capsule`), rotary brand disc (`.brand-disc`), and segmented SVG radial telemetry gauges (`.radial-gauge`).

## Components

### Buttons
- **Shape:** Sharp rectangular plates (`0px` radius) with `2.5px solid #08090E` borders and consistent inline stroke SVGs (`16px`).
- **Primary (`.btn-max--vermilion`):** Hyper Vermilion (`hyper-vermilion`) fill with `chassis-obsidian` text, `15px 24px` padding, `Unbounded` `800` `0.78rem` uppercase.
- **Hover / Focus:** Snaps to `chassis-obsidian` fill with `acid-volt` text and `translateY(-2px)` (`0.18s cubic-bezier(0.16, 1, 0.3, 1)`). `:focus-visible` renders a `3px solid` `acid-volt` outline (`2px` offset).
- **Secondary Variants:** `.btn-max--volt` (Acid Volt fill, hovers to Hyper Vermilion) and `.btn-max--pitch` (Chassis Obsidian fill with Chalk text, hovers to Signal Sky).

### Chips
- **Style:** Sharp rectangular selectors (`.node-chip`, `.tag-option`) in Chalk (`chalk`) with `2px–2.5px solid #08090E` borders and `Unbounded` `800` `0.75rem–0.76rem` labels.
- **State:** Active/selected chips invert immediately to `acid-volt` or `chassis-obsidian` with high-contrast text to drive synoptic readouts or pre-fill WhatsApp/email dispatch URLs.

### Cards / Containers
- **Corner Style:** `0px` sharp structural plates.
- **Background:** Full-bleed color tokens (`acid-volt`, `hyper-vermilion`, `cyber-lavender`, `signal-sky`, `cell-pitch`, `chalk`) paired with `.pat-dots`, `.pat-waves`, or `.pat-grid-dark`.
- **Border & Padding:** `2.5px solid #08090E`; `24px–40px` desktop inset, `22px` mobile inset.

### Navigation
- **Style:** Sticky `.nav-band` housing a Cyber Lavender dotted bar (`.nav-bar-inner`) with a rotary Acid Volt emblem disc on the left, single-line `Unbounded` uppercase section anchors in the center, and a `999px` black command capsule on the right holding live `0.4S` telemetry, Dark/Light toggle, `ES`/`EN` switch, and Vermilion CTA orb. Collapses cleanly below `1120px` into an Acid Volt structural drawer sheet.

### Perimeter Kinetic Frame & Synoptic Stage
- **4-Sided Perimeter Frame (`.p-frame`):** Fixed top, bottom, left, and right Signal Sky rails (`32px` desktop, `22px` mobile) scrolling `Unbounded` `900` phrases separated by inline geometric 4-point star SVGs; pauses on hover and respects `prefers-reduced-motion`.
- **Cyber-Optic Synoptic Stage (`.visor-stage`):** Full-bleed Hyper Vermilion poster cell with segmented SVG radial gauges (`0.4s`, `100%`), poster-scale vector visor artwork anchored flush to the bottom node bar, vertical coil strip, and a paired Signal Sky 60Hz SVG sine-wave oscilloscope + op-art wave directional cell.

## Do's and Don'ts

### Do:
- **Do** keep all four perimeter marquee rails (`.p-frame--top`, `--bottom`, `--left`, `--right`) active across both desktop and mobile viewports.
- **Do** give every major section and solution cell a distinct internal layout topology (e.g., QR placard split, action-step flow, proof banner, 2x2 subsystem matrix) rather than repeating identical icon-heading-paragraph cards.
- **Do** use consistent-stroke inline `<svg>` icons for all arrows, stars, and indicators, and keep UI/label text at or above `0.75rem` (`12px`).
- **Do** badge any illustrative dashboard or workflow preview explicitly as synthetic demo data (`SANDBOX SINTÉTICO · DATOS DEMO`) and preserve factual project framing from `PRODUCT.md`.

### Don't:
- **Don't** reintroduce 3D rotating wireframes/cubes, typewriter text effects, 3D tilt/magnetic card wobble, cosmic particle canvases, or slow multi-second loaders.
- **Don't** place uppercase kicker/eyebrow badges above headings or prepend decorative `01 //` numbering to tab controls.
- **Don't** use Unicode symbol glyphs (`★`, `→`, `↗`, `⇄`, `●`, `↑`) in place of inline SVGs.
- **Don't** drift `[data-theme="light"]` into a warm-cream borderless page or introduce off-palette third-party brand colors (such as `#25D366` WhatsApp green) on floating chrome.
