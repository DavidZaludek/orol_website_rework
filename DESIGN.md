---
name: Stavebniny Orol — Mondrian
version: 1.0.0
description: >
  Industrial Mondrian design language for the Stavebniny Orol website, derived
  from the company's Mondrian-inspired marketing tarp. Content lives inside
  flat color cells separated by dark grid lines.
colors:
  brand-red: '#c0281c'
  brand-red-hover: '#e03323'
  brand-dark: '#8c1a10'
  iron: '#1e2022'
  steel: '#2c2f32'
  slate: '#6b7175'
  concrete: '#c8ced2'
  mist: '#d6dadc'
  chalk: '#f2f4f5'
  white: '#ffffff'
  accent-yellow: '#f0c808'
  accent-blue: '#2436b8'
  error: '#c62828'
typography:
  display:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontWeight: 700
    textTransform: uppercase
    letterSpacing: '0.02em'
  display-medium:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontWeight: 600
    textTransform: uppercase
    letterSpacing: '0.02em'
  eyebrow:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontWeight: 600
    fontSize: '1rem'
    textTransform: uppercase
    letterSpacing: '0.16em'
  body:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontWeight: 400
    fontSize: '1rem'
    lineHeight: 1.65
rounded:
  none: 0px
  legacy-sm: 4px
spacing:
  grid-line: 5px
  grid-line-mobile: 4px
  frame-edge: 18px
  cell-padding: 1.2rem
  cell-padding-large: 1.9rem
  section-y: 4rem
  section-y-end: 5rem
components:
  cell-white:
    backgroundColor: '{colors.white}'
    textColor: '{colors.iron}'
    rounded: '{rounded.none}'
  cell-red:
    backgroundColor: '{colors.brand-red}'
    textColor: '{colors.white}'
    rounded: '{rounded.none}'
  cell-accent-yellow:
    backgroundColor: '{colors.accent-yellow}'
    rounded: '{rounded.none}'
  cell-accent-blue:
    backgroundColor: '{colors.accent-blue}'
    rounded: '{rounded.none}'
  tile:
    backgroundColor: '{colors.white}'
    textColor: '{colors.iron}'
    height: 240px
    padding: '3.25rem 1.2rem 1.1rem'
    rounded: '{rounded.none}'
  tile-hover:
    backgroundColor: '{colors.chalk}'
  button-primary:
    backgroundColor: '{colors.brand-red}'
    textColor: '{colors.white}'
    typography: '{typography.display-medium}'
    padding: '0.85rem 1.75rem'
    rounded: '{rounded.legacy-sm}'
  button-primary-hover:
    backgroundColor: '{colors.brand-red-hover}'
  button-ghost:
    textColor: '{colors.iron}'
    typography: '{typography.display-medium}'
    padding: '0.85rem 1.75rem'
    rounded: '{rounded.legacy-sm}'
---

## Overview

The site's visual identity is a working Mondrian composition, taken directly
from the company's own Mondrian-inspired marketing tarp (red/white/yellow/blue
blocks separated by black lines, with the OROL logo living inside a red
block). The rule that generates every screen: **content lives inside flat
color cells; the iron ground shows through the gaps as the grid lines.**

Practically: a composition is a flex/grid container with
`background-color: iron`, `gap: 5px` (4px on mobile) and `padding: 5px`; every
child paints its own background (white for content, red for brand/action,
yellow and blue as empty accents). Nothing floats on open whitespace inside a
composition, and compositions run full-bleed edge to edge. The footer canvas
uses a heavier 18px top edge as its frame. Section headings are not typeset
above compositions — they are cells inside them (`head-cell`), usually paired
with a red action cell (`head-link-cell`) and a small accent cell.

Photography is always the company's own (store, yard, trucks, staff, sites)
and always monochrome: `grayscale(100%)`, either as a hero/feature image with
a red-tinted multiply overlay, or ghosted at ~16% opacity as a tile backdrop.
Iconography is a single hand-drawn set of 24×24 stroke pictograms
(`src/lib/icons.ts`), used small in red at cell top-left and enlarged as faint
mist watermarks.

## Colors

Red is signal, never wallpaper. `brand-red` paints action cells (CTAs, links
cells, the featured cell) and small accents (icons, eyebrows, active nav);
`brand-red-hover` is its interactive shift. `iron` is the grid-line ground and
the text ink; `steel`/`slate` are secondary text; `chalk` is the hover state
of white cells and the blueprint-grid section background. `accent-yellow` and
`accent-blue` appear **only** as empty composition cells — they never carry
text and never act as UI states. Yellow outweighs blue roughly 2:1, mirroring
the tarp. Pure black is forbidden (use iron); red is never used for error
states (use `error`).

## Typography

Two families only. **Barlow Condensed** (600/700, uppercase, tight leading
around 1.02–1.05) carries all identity text: headings, tile labels, buttons,
eyebrows, the phone number. **Inter** carries running text at comfortable
line-height. Eyebrows are red, letter-spaced 0.16em, and prefixed with a 24×3px
red dash. Numerals in stats and phone numbers use `tabular-nums`. Fluid sizes
come from tokens: display-xl `clamp(3rem, 7vw, 5.25rem)`, display-lg
`clamp(2rem, 4.5vw, 3.25rem)`.

## Layout

Compositions are full-bleed; reading content (prose, forms, section padding)
aligns to a 1100px container. Desktop rows hold four tiles; a hovered tile
flex-grows to ~3.2× while siblings compress (transition 0.45s
`cubic-bezier(0.22, 1, 0.36, 1)`), revealing its description and full detail.
Below 700px every composition flattens into a vertical list: tiles become
56px+ rows (icon left, label, arrow right), photo backdrops and descriptions
are hidden, and grid lines thin to 4px. Anchored sections use
`scroll-margin-top: 84px` (72px header cells + 5px line + 7px breathing room).

## Elevation & Depth

None. The language is flat — no box shadows, no borders on cells (the grid
lines separate everything), no rounded corners inside compositions. Depth is
communicated through cell color, size, and the hover flex-expansion. The only
soft shadow permitted is on the circular map pin badge.

## Shapes

Rectangles. Cells are square-cornered; the 4px `legacy-sm` radius survives
only on standalone buttons and legacy pages that have not yet been converted.
The map pin is the single circle in the system: a red disc with white ring
holding the white eagle mark.

## Components

- **Composition** — iron container, 5px gaps, full-bleed; hosts rows of cells.
- **head-cell** — white cell with eyebrow + display heading (+ optional note);
  first row of every composition, paired with **head-link-cell** (red,
  centered condensed uppercase link) and one accent cell.
- **tile** — white content cell (240px tall): red icon top-left, condensed
  label bottom, hidden description, corner arrow; optional mist watermark or
  ghosted monochrome photo backdrop; category tiles add a scrolling grayscale
  supplier-logo marquee that swaps to a full color logo row on hover.
- **featured-cell** — full-width red cell with ghosted photo right, white
  icon/title/description and underlined CTA; one per composition maximum.
- **flow band** — the services page pattern: one full-width row per service,
  monochrome photo cell on one side, content cell (icon, display title, full
  description, link) on the other, direction alternating per row; the featured
  service takes a red body cell. Bands stack vertically on mobile.
- **Header** — sticky Mondrian strip: red brand cell, white nav cell, red
  phone/social cell, red hamburger; hides on scroll down.
- **Footer** — the site's densest canvas: brand, hours, nav, map cell
  (brand-styled Google/MapLibre), red contact cell, partner logo marquee
  strip, accents; steel legal bar beneath.
- **Motion** — scroll-reveal (fade-up 18px, staggered ≤400ms), 250ms
  view-transition cross-fades between pages, 0.8s hero photo cross-fades.
  Every animation, including JS timers, respects `prefers-reduced-motion`.

## Do's and Don'ts

- Do put every piece of sectional content inside a cell; if a heading floats
  on plain background inside a composition area, it is a bug.
- Do keep yellow and blue cells empty — they are paint, not containers.
- Do use own photographs, always monochrome; never stock with visible color,
  never competitor or unlicensed supplier imagery.
- Do add new icons to the shared 24×24 stroke set in `src/lib/icons.ts` —
  never mix icon families.
- Don't use box shadows, borders, or rounded corners inside compositions.
- Don't over-fragment: cells are for major content blocks, not list items.
  A run of short same-kind items (professions, product types, vehicles,
  bullet facts) lives as a list _inside one cell_ — red dash or check per
  item, 1px interior separators, two columns on desktop when longer than
  ~4 items. If a cell would contain only one line of text, it should
  probably be a list row instead.
- Don't use pure black anywhere, or red for error states.
- Don't let compositions cause horizontal overflow — full-bleed means exactly
  viewport width; verify `document.documentElement.scrollWidth`.
- Don't animate without a reduced-motion fallback (CSS _and_ JS intervals).
