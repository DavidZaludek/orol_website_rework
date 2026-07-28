# 🎨 Color Palette — Stavebniny Orol New Website

## Primary Colors

| Swatch | Name             | HEX       | RGB              | HSL              | Role                           |
| ------ | ---------------- | --------- | ---------------- | ---------------- | ------------------------------ |
| 🟥     | **Orol Red**     | `#C0281C` | rgb(192, 40, 28) | hsl(3, 74%, 43%) | Brand anchor, CTAs, highlights |
| 🔴     | **Ember Red**    | `#E03323` | rgb(224, 51, 35) | hsl(5, 72%, 51%) | Hover states, active elements  |
| 🟫     | **Deep Crimson** | `#8C1A10` | rgb(140, 26, 16) | hsl(4, 80%, 31%) | Dark accents, footer, headings |

---

## Neutral / Gray Scale

| Swatch | Name         | HEX       | RGB                | HSL                | Role                      |
| ------ | ------------ | --------- | ------------------ | ------------------ | ------------------------- |
| ⬛     | **Iron**     | `#1E2022` | rgb(30, 32, 34)    | hsl(210, 6%, 13%)  | Body text, nav background |
| 🔲     | **Steel**    | `#3D4144` | rgb(61, 65, 68)    | hsl(207, 5%, 25%)  | Secondary text, borders   |
| ▪️     | **Slate**    | `#6B7175` | rgb(107, 113, 117) | hsl(207, 4%, 44%)  | Captions, meta text       |
| ◻️     | **Concrete** | `#A8AEB2` | rgb(168, 174, 178) | hsl(207, 5%, 68%)  | Dividers, disabled states |
| 🔳     | **Mist**     | `#D6DADC` | rgb(214, 218, 220) | hsl(200, 6%, 85%)  | Card backgrounds, borders |
| ⬜     | **Chalk**    | `#F2F4F5` | rgb(242, 244, 245) | hsl(200, 11%, 95%) | Section backgrounds       |

---

## Base / White

| Swatch | Name           | HEX       | RGB                | HSL               | Role                   |
| ------ | -------------- | --------- | ------------------ | ----------------- | ---------------------- |
| ⬜     | **Pure White** | `#FFFFFF` | rgb(255, 255, 255) | hsl(0, 0%, 100%)  | Page background, cards |
| 🔲     | **Warm White** | `#FAF9F8` | rgb(250, 249, 248) | hsl(30, 11%, 98%) | Alternating sections   |

---

## Semantic / Utility Colors

| Name              | HEX       | Usage                                 |
| ----------------- | --------- | ------------------------------------- |
| **Success Green** | `#2E7D32` | Confirmations, availability           |
| **Warning Amber** | `#E65100` | Alerts, stock warnings                |
| **Info Blue**     | `#1565C0` | Informational banners                 |
| **Error Red**     | `#C62828` | Form errors (distinct from brand red) |

---

## CSS Custom Properties

```css
:root {
	/* === Primary: Red === */
	--color-brand-primary: #c0281c;
	--color-brand-hover: #e03323;
	--color-brand-dark: #8c1a10;

	/* === Neutral: Gray Scale === */
	--color-iron: #1e2022;
	--color-steel: #3d4144;
	--color-slate: #6b7175;
	--color-concrete: #a8aeb2;
	--color-mist: #d6dadc;
	--color-chalk: #f2f4f5;

	/* === Base: White === */
	--color-white: #ffffff;

	/* === Semantic === */
	--color-success: #2e7d32;
	--color-warning: #e65100;
	--color-error: #c62828;

	/* === Typography === */
	--text-on-dark: #ffffff;
	--text-on-light: #1e2022;
	--text-muted: #6b7175;

	/* === Surfaces === */
	--surface-alt: #f2f4f5;
	--border-default: #d6dadc;
}
```

---

## Color Usage Guidelines

### Do ✅

- Use **Orol Red** (`#C0281C`) for primary buttons, links, and key brand moments
- Use **Iron** (`#1E2022`) for headings and navigation — not pure black
- Use **Chalk** (`#F2F4F5`) for alternating section backgrounds to create depth without color
- Use **Ember Red** only on hover/active states to maintain hierarchy
- Pair **Deep Crimson** with white text for high-impact hero or footer sections

### Don't ❌

- Don't use red for large background areas — it overwhelms and reduces readability
- Don't mix more than 2 gray tones in a single section
- Don't use pure black (`#000000`) — **Iron** is the darkest value to use
- Don't place red text on dark gray backgrounds (insufficient contrast)
- Don't use red for error states — use **Error Red** (`#C62828`) which is slightly different

---

## Contrast & Accessibility (WCAG 2.1)

| Foreground      | Background         | Ratio  | AA              | AAA |
| --------------- | ------------------ | ------ | --------------- | --- |
| White `#FFF`    | Orol Red `#C0281C` | 5.1:1  | ✅              | ❌  |
| White `#FFF`    | Iron `#1E2022`     | 17.2:1 | ✅              | ✅  |
| Iron `#1E2022`  | White `#FFF`       | 17.2:1 | ✅              | ✅  |
| Iron `#1E2022`  | Chalk `#F2F4F5`    | 15.3:1 | ✅              | ✅  |
| White `#FFF`    | Steel `#3D4144`    | 9.7:1  | ✅              | ✅  |
| Slate `#6B7175` | White `#FFF`       | 4.6:1  | ✅ (large text) | ❌  |

---

## Suggested Pairings

| Context      | Background         | Text               | Accent                 |
| ------------ | ------------------ | ------------------ | ---------------------- |
| Hero section | `#1E2022` Iron     | `#FFFFFF` White    | `#C0281C` Orol Red     |
| Main content | `#FFFFFF` White    | `#1E2022` Iron     | `#C0281C` Orol Red     |
| Alt section  | `#F2F4F5` Chalk    | `#1E2022` Iron     | `#8C1A10` Deep Crimson |
| Footer       | `#1E2022` Iron     | `#A8AEB2` Concrete | `#E03323` Ember Red    |
| CTA button   | `#C0281C` Orol Red | `#FFFFFF` White    | —                      |
| Card border  | `#D6DADC` Mist     | —                  | —                      |

---

_Generated for Stavebniny Orol website redesign · May 2026_
