---
name: CHV Systems
description: Business systems studio site — dark navy void, one glowing cyan accent, gold reserved for conversion.
colors:
  void-ground: "#060B16"
  void-ground-raised: "#0A1226"
  void-ground-deep: "#0E1A34"
  panel-dark: "#0C1730"
  ink-primary: "#EAF1FF"
  ink-dim: "#93A8D1"
  ink-faint: "#7C90BC"
  hairline: "rgba(147, 184, 255, 0.14)"
  hairline-strong: "rgba(147, 184, 255, 0.28)"
  signal-cyan: "#49D6FF"
  signal-cyan-ink: "#04141C"
  cta-gold: "#E7B65C"
  cta-gold-ink: "#1A1002"
  paper-ground: "#F3F6FC"
  paper-ground-raised: "#EAF0FA"
  paper-ground-deep: "#E1E9F7"
  panel-light: "#FFFFFF"
  ink-primary-light: "#0B1830"
  ink-dim-light: "#435577"
  ink-faint-light: "#5B6C93"
  hairline-light: "rgba(11, 24, 48, 0.10)"
  hairline-strong-light: "rgba(11, 24, 48, 0.20)"
  signal-teal-light: "#075E76"
  cta-brown-light: "#8A5A12"
typography:
  display:
    fontFamily: "Space Grotesk, Arial Narrow, sans-serif"
    fontSize: "clamp(2.3rem, 5.6vw, 4.1rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, Arial Narrow, sans-serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk, Arial Narrow, sans-serif"
    fontSize: "clamp(1.3rem, 2.4vw, 1.7rem)"
    fontWeight: 600
    lineHeight: 1.05
  body:
    fontFamily: "DM Sans, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "IBM Plex Mono, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    letterSpacing: "0.14em"
rounded:
  pill: "999px"
  lg: "18px"
  md: "16px"
  sm: "10px"
  xs: "8px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "22px"
  lg: "28px"
  xl: "clamp(28px, 5vw, 60px)"
  section: "clamp(64px, 9vw, 116px)"
components:
  button-primary:
    backgroundColor: "{colors.cta-gold}"
    textColor: "{colors.cta-gold-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.cta-gold}"
    textColor: "{colors.cta-gold-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  button-ghost-hover:
    textColor: "{colors.signal-cyan}"
  panel:
    backgroundColor: "{colors.panel-dark}"
    rounded: "{rounded.lg}"
---

# Design System: CHV Systems

## Overview

**Creative North Star: "The Systems Console"**

CHV Systems reads like the operating console of a working business platform, not a portfolio brochure. A near-black navy void is the default ground; one glowing cyan signal carries every interactive and emphasis moment, and a warm gold is spent only where a visitor is asked to act (start a project). Depth comes from soft ambient glow and hairline 1px dividers, never from card borders, drop icons, or nested boxes. The recurring signature is a live constellation graph — labeled nodes (WEB, CRM, FACTURACIÓN, KPIs, AUTOMATIZACIÓN, DISEÑO) joined by glowing pulse lines around a core "CHV" node — standing in for the actual connected systems the studio builds, not decorative blur.

The build confirms and carries the brief's explicit refusals: no icon-plus-heading-plus-text card grid for services (replaced with hairline-divided index rows), no kicker/eyebrow labels stacked above headings, no fabricated hero-metric stat block (replaced with a single honest status line), and no invented portfolio metrics (the Gananova proof panel shows its real, stated feature list only). Light mode is a genuine variant of the same identity: the void becomes a crisp cool-white/pale-blue field, the constellation renders in ink-navy, and the signal hue is carried into a contrast-safe darker teal rather than being inverted into a generic flat light theme.

**Key Characteristics:**
- Deep navy-to-near-black void ground with a single glowing cyan signal color for all interactive/emphasis states
- Gold accent spent exclusively on primary conversion actions (never decorative)
- Constellation/circuit linework as the one recurring graphic device, always labeled with real system names
- Hairline 1px borders and index-row/panel layout in place of nested cards
- Monospace reserved for real data and status labels only (KPI tags, module tags, status badges, footer credit)

## Colors

A one-hue-does-the-work palette: nearly everything is navy-black and off-white ink, with cyan doing all interactive signaling and gold reserved for the single highest-value action per view.

### Primary
- **Signal Cyan** (`#49D6FF`): the sole interactive/emphasis color — link underlines, hover states, the constellation's core node and pulse-line gradient, focus rings, KPI "online" indicator, mono tag color, section-number color. Light mode carries the same hue family darkened to `#075E76` for AA contrast against a white panel.

### Secondary
- **CTA Gold** (`#E7B65C`): reserved for the primary button only ("Iniciar un proyecto" / "Iniciar proyecto" / "Enviar correo"). Its ink is near-black (`#1A1002`) for contrast. Light mode: `#8A5A12` on white ink.

### Neutral
- **Void Ground** (`#060B16` → `#0E1A34`, three steps: `--bg`, `--bg-1`, `--bg-2`): the dominant dark field, layered for the hero's ambient gradient and section backgrounds — never a single flat fill.
- **Panel** (`#0C1730` dark / `#FFFFFF` light): background for the proof panel, work cards, contact box, process cells.
- **Ink Primary** (`#EAF1FF` dark / `#0B1830` light): headline and primary body text.
- **Ink Dim** (`#93A8D1` dark / `#435577` light): secondary copy — ledes, descriptions, section subheads.
- **Ink Faint** (`#7C90BC` dark / `#5B6C93` light): tertiary/label text — mono tags, footer credit, meta labels. This token was the site's contrast-regression point in dark mode and now clears WCAG body-text minimums.
- **Hairline** (`rgba(147,184,255,.14)` dark / `rgba(11,24,48,.10)` light) and **Hairline Strong** (`.28` / `.20` alpha): the only border vocabulary in the system — row dividers, panel edges, chip/badge outlines.
- **Paper Ground** (`#F3F6FC` → `#E1E9F7`): the light-mode equivalent void, cool-white/pale-blue, never a generic pure-white flatten.

### Named Rules
**The One Signal Rule.** Cyan is the only color that means "interactive" or "live" anywhere in the system — hover states, focus rings, links, the constellation core, the KPI online dot. No second interactive color is ever introduced.

**The Gold-Is-Action Rule.** Gold appears only on the primary CTA button. It never decorates a badge, icon, tag, or heading — its rarity signals "the one thing to click."

## Typography

**Display Font:** Space Grotesk (with Arial Narrow, sans-serif fallback)
**Body Font:** DM Sans (with Segoe UI, sans-serif fallback)
**Label/Mono Font:** IBM Plex Mono (with Consolas, monospace fallback)

**Character:** A confident geometric grotesk for headlines paired with a warm, readable humanist sans for body copy; monospace is a deliberate register shift used only when the content itself is data.

### Hierarchy
- **Display** (600, `clamp(2.3rem, 5.6vw, 4.1rem)`, line-height 1.05, tracking -0.02em): the hero h1 only, max-width 15ch, with the emphasized word in signal cyan (`em` styled as non-italic accent color, not a highlight box).
- **Headline** (600, `clamp(1.7rem, 3.4vw, 2.5rem)`, line-height 1.05): section titles (Servicios, Cómo trabajamos, Trabajo).
- **Title** (600, `clamp(1.3rem, 2.4vw, 1.9rem)`): service row titles, proof-panel heading, founder name, work-card titles.
- **Body** (400/500, 16px base, line-height 1.55): running copy. Ledes cap at 46ch; service descriptions cap at 42ch — the system enforces a measure limit on every paragraph-length text block rather than letting body copy run full-width.
- **Label** (400, 0.72–0.875rem, letter-spacing 0.02–0.14em, uppercase where bracketed): reserved for real data and status — the hero's "Sistema en producción" status line, service row tags (`[ DISEÑO ]`), proof-panel chrome tabs/KPI labels, process step numbers, work-card status badges, footer credit line.

### Named Rules
**The Mono-Means-Data Rule.** IBM Plex Mono only ever labels something real — a system status, a module name, a KPI, a step number, a footer credit. It never appears as generic "tech" set-dressing on a headline or tagline (the nav tagline runs in body-weight DM Sans, not mono).

## Layout

A single centered container (`max-width: 1180px`, 20px inline padding plus safe-area insets) holds every section. Section rhythm is generous and consistent: `padding-block: clamp(64px, 9vw, 116px)`, so vertical density loosens on large screens and tightens on small ones from the same formula rather than a breakpoint jump.

Section-specific grids: hero splits 1.15fr headline column / 0.85fr constellation column; services run as full-width hairline-divided rows (120px tag column / flexible title / 200–320px description column); the process section is a 4-column hairline-seamed grid; work cards run 3-up; founder runs a 220px monogram column against a flexible copy column; contact splits 1.1fr copy / 0.9fr action panel. At 880px every multi-column section collapses to a single column (nav links also hide, replaced by the persistent CTA), and the process grid steps through an intermediate 2-column state at that breakpoint before going to 1 at 520px.

## Elevation & Depth

The system is flat by default with one soft ambient shadow reserved for raised panels, plus a glow that only appears in response to interaction — never a resting decorative shadow on every surface.

### Shadow Vocabulary
- **Panel ambient** (`box-shadow: 0 20px 60px -20px rgba(2, 8, 20, 0.65)` dark / `0 20px 50px -24px rgba(11, 24, 48, 0.22)` light): the only at-rest shadow, applied to the `.panel` surface (proof panel, work cards, contact box) to lift it slightly off the void.
- **CTA hover glow** (`box-shadow: 0 12px 30px -10px rgba(231,182,92,.55)`): appears only on primary-button hover, paired with a 2px lift — depth as a response to state, not a static effect.

### Named Rules
**The Response-Only Glow Rule.** Beyond the single panel ambient shadow, every other shadow/glow in the system exists only as a hover or focus response (button lift-glow, nav underline sweep, card art parallax). Nothing glows at rest except the hero's ambient background gradient and the constellation core's slow pulse.

## Shapes

Two radius families carry the whole system: full pills for anything clickable (buttons, the theme toggle, badges, chips — `border-radius: 999px`) and soft rectangles for containers (panels 18px, the process grid 16px, the dashboard-chrome body 10px, contact rows 12px, copy buttons 8px). Borders are exclusively 1px hairlines in the two line tokens; there are no double borders, no card drop-shadow-as-border substitutes, and no nested card-in-card framing anywhere in the built sections. The constellation and founder monogram are the system's only circular/organic geometry, both built from concentric strokes and small filled nodes rather than photographic imagery.

## Components

### Buttons
- **Shape:** full pill (`border-radius: 999px`).
- **Primary:** gold fill (`#E7B65C`) on near-black ink (`#1A1002`), `padding: 12px 22px` (`9px 16px` for the `--sm` nav variant). Desktop pointers get a subtle magnetic follow (GSAP `quickTo`, ±25%/35% of cursor offset) in addition to the hover lift.
- **Hover / Focus:** primary lifts 2px and gains the CTA hover glow; focus-visible on any interactive element draws a 2px cyan outline with 3px offset, independent of mouse hover.
- **Ghost:** transparent fill, hairline-strong border, ink-primary text; hover swaps border and text to signal cyan. Used for secondary actions (the hero's "Ver Gananova en acción" link, "Volver arriba").

### Cards / Containers
- **Corner Style:** 18px radius (`.panel`).
- **Background:** `--panel` (near-black `#0C1730` dark / white light).
- **Shadow Strategy:** the single panel-ambient shadow (see Elevation).
- **Border:** 1px hairline (`--line`).
- **Internal Padding:** responsive, `clamp(20px–30px)` to `clamp(28px–48px)` depending on panel role (work-card body 22px; proof-panel copy up to 48px).

### Navigation
- Sticky header, blurred translucent background (`backdrop-filter: blur(14px)` over a color-mixed ground), hairline bottom border. Wordmark splits "CHV" (ink) / "SYSTEMS" (signal cyan); the tagline beneath runs in body-weight DM Sans, not mono. Links use dim ink at rest, full ink on hover, with a cyan underline that sweeps in from the left on hover/focus rather than appearing instantly. Mobile (≤880px) drops the link row entirely, leaving the theme toggle and primary CTA as the persistent actions.

### Signature Component: Constellation Graph
A labeled node-and-pulse-line SVG (core "CHV" node radiating to WEB / CRM / FACTURACIÓN / KPIs / AUTOMATIZACIÓN / DISEÑO), drawn on load with a staggered stroke-dashoffset animation and a slow vertical float on the core node. This is the system's one recurring graphic device standing in for "connected business systems" — it always carries real system-name labels, never abstract decoration. The proof-panel's fake dashboard "chrome" (window dots, tabs, KPI bars) is the same visual language applied to a second signature component: a believable but honestly-scoped system-in-use mockup, built from Gananova's real, stated feature set only (CRM, facturación, KPIs, automatización) — no invented numbers.

### Services Index Row
Full-bleed hairline-divided rows (`[ TAG ]` mono label · title · capped-measure description) replace a card grid for the services section — the row is a structural column of an index/table, not a kicker stacked above a heading.

## Do's and Don'ts

### Do:
- **Do** keep cyan as the only interactive/live signal color and gold as the only conversion-action color (The One Signal Rule, The Gold-Is-Action Rule).
- **Do** cap paragraph-length text at a measure (46ch ledes, 42ch service descriptions) rather than letting body copy run full container width.
- **Do** label every portfolio entry with its true status (live/in development/delivered) — never present ADEFIP as launched or invent metrics for any of the three real projects.
- **Do** keep monospace scoped to real data/status content only (The Mono-Means-Data Rule).
- **Do** carry the identical world into light mode (same ground layering, same constellation motif, same hue family darkened for contrast) rather than a flattened inverted theme.

### Don't:
- **Don't** build services or any repeating content block as an icon-plus-heading-plus-text card grid; use hairline-divided index rows or panels instead.
- **Don't** stack a kicker/eyebrow label above a heading anywhere in the system — labels only appear inline as data (row tags, status badges), never as pre-headline dressing.
- **Don't** add a hero-metric stat block (fake counters/percentages); a single honest status line carries that role.
- **Don't** add a resting decorative shadow to a flat element — shadows are either the single panel-ambient value or a hover/focus response (The Response-Only Glow Rule).
- **Don't** fabricate portfolio numbers, client counts, or testimonials for Gananova, ADEFIP, or Pura Vida Painting.
