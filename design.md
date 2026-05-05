# Design System

> Performance. Clarity. Precision. Purpose.

---

## Philosophy

This design system is built around four pillars:

- **Color** — The intensity and contrast of BMW M
- **Typography** — The impact and boldness of Nike
- **Space** — The breathing room and purity of Apple
- **Detail** — The refinement and elegance of Porsche

Every visual decision must serve the essential. Nothing is decorative. Everything is intentional.

---

## 1. Color Palette

Inspired by the iconic BMW M tricolor (blue, violet, red) and Porsche finishes (black, silver, platinum).

### Primary Colors

```css
:root {
  /* BMW M — Signature Racing */
  --color-m-blue:    #1C69D4;   /* BMW M Blue */
  --color-m-violet:  #6E2585;   /* BMW M Violet */
  --color-m-red:     #E8003A;   /* BMW M Red */

  /* Porsche — Refined Neutrals */
  --color-carbon:    #0D0D0D;   /* Carbon black */
  --color-obsidian:  #1A1A1A;   /* Dark background */
  --color-steel:     #2E2E2E;   /* Steel gray */
  --color-platinum:  #6B6B6B;   /* Platinum */
  --color-silver:    #B4B4B4;   /* Silver */
  --color-frost:     #E8E8E8;   /* Frost white */
  --color-white:     #FFFFFF;   /* Pure white */
}
```

### Semantic Colors

```css
:root {
  --color-primary:     var(--color-m-blue);
  --color-accent:      var(--color-m-red);
  --color-highlight:   var(--color-m-violet);

  --color-bg-dark:     var(--color-carbon);
  --color-bg-surface:  var(--color-obsidian);
  --color-bg-light:    var(--color-white);

  --color-text-primary:   var(--color-white);
  --color-text-secondary: var(--color-silver);
  --color-text-muted:     var(--color-platinum);
  --color-text-dark:      var(--color-carbon);
}
```

### Usage

| Role | Value | Use case |
|---|---|---|
| Primary CTA | `--color-m-blue` | Main buttons, active links |
| Strong accent | `--color-m-red` | Alerts, badges, indicators |
| Subtle accent | `--color-m-violet` | Hover, focus, gradients |
| Dark surface | `--color-obsidian` | Cards, modals on dark background |
| Primary text | `--color-white` | Body text on dark background |
| Muted text | `--color-silver` | Labels, placeholders, captions |

---

## 2. Typography

Inspired by Nike: condensed, bold, kinetic typefaces. Every headline must have presence.

### Font Families

```css
:root {
  /* Display — Impact, condensed, athletic */
  --font-display: 'Barlow Condensed', 'Oswald', 'Impact', sans-serif;

  /* Body — Readability, modernity */
  --font-body: 'Inter', 'Helvetica Neue', 'Arial', sans-serif;

  /* Technical — Code, specs, data */
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
}
```

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale

```css
:root {
  /* Display — Nike-style, maximum impact */
  --text-display-xl: clamp(3rem, 8vw, 7rem);      /* Hero headline */
  --text-display-lg: clamp(2.25rem, 5vw, 4.5rem);  /* Section hero */
  --text-display-md: clamp(1.75rem, 3vw, 2.75rem); /* Section title */

  /* UI — Clean Apple-style interface */
  --text-xl:   1.5rem;    /* 24px — Card title */
  --text-lg:   1.25rem;   /* 20px — Subtitle */
  --text-md:   1rem;      /* 16px — Body */
  --text-sm:   0.875rem;  /* 14px — Label */
  --text-xs:   0.75rem;   /* 12px — Caption */

  /* Weight */
  --weight-light:   300;
  --weight-regular: 400;
  --weight-medium:  500;
  --weight-semi:    600;
  --weight-black:   900;  /* For display headings */

  /* Line height */
  --leading-tight:  1.1;  /* Condensed display titles */
  --leading-snug:   1.35; /* UI titles */
  --leading-normal: 1.6;  /* Body text */
  --leading-loose:  1.8;  /* Long-form text, readability */

  /* Letter spacing */
  --tracking-tight:  -0.03em;  /* Large headings */
  --tracking-normal:  0;
  --tracking-wide:    0.08em;  /* Labels, caps */
  --tracking-widest:  0.15em;  /* Categories, tags */
}
```

### Text Styles

```css
/* Hero heading — Nike style */
.text-hero {
  font-family: var(--font-display);
  font-size: var(--text-display-xl);
  font-weight: var(--weight-black);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  text-transform: uppercase;
}

/* Section title */
.text-title {
  font-family: var(--font-display);
  font-size: var(--text-display-md);
  font-weight: var(--weight-semi);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
}

/* Body — Apple style */
.text-body {
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: var(--weight-regular);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-normal);
}

/* Technical label */
.text-label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

/* Caption / Meta */
.text-caption {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-light);
  color: var(--color-text-muted);
}
```

---

## 3. Spacing & Layout

Inspired by Apple: generous whitespace, rigorous structure, nothing superfluous.

### Spacing Scale

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-7:  48px;
  --space-8:  64px;
  --space-9:  96px;
  --space-10: 128px;
  --space-11: 192px;
  --space-12: 256px;
}
```

### Containers

```css
:root {
  --container-sm:  640px;
  --container-md:  768px;
  --container-lg:  1024px;
  --container-xl:  1280px;
  --container-2xl: 1440px;
}

.container {
  width: 100%;
  max-width: var(--container-xl);
  margin-inline: auto;
  padding-inline: var(--space-6);
}

/* Sections — Apple-style generosity */
.section {
  padding-block: var(--space-11);
}

.section--sm {
  padding-block: var(--space-8);
}
```

### Spacing Rules

- **Minimum** between two distinct blocks: `--space-7` (48px)
- **Internal padding** of a card: `--space-5` (24px) minimum
- **Margin between title and subtitle**: `--space-3` (12px)
- **Margin between subtitle and content**: `--space-5` (24px)
- Never crowd the space. Emptiness is a design element.

---

## 4. Border Radius

Inspired by Porsche: sharp forms with a touch of organic precision.

```css
:root {
  --radius-none:  0px;
  --radius-sm:    4px;    /* Badges, tags */
  --radius-md:    8px;    /* Inputs, buttons */
  --radius-lg:    12px;   /* Standard cards */
  --radius-xl:    20px;   /* Hero cards */
  --radius-2xl:   32px;   /* Modals, panels */
  --radius-full:  9999px; /* Pills, avatars */
}
```

---

## 5. Shadows & Depth

Apple style: soft, purposeful shadows — never decorative.

```css
:root {
  --shadow-sm:  0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08);
  --shadow-md:  0 4px 16px rgba(0, 0, 0, 0.18);
  --shadow-lg:  0 12px 40px rgba(0, 0, 0, 0.24);
  --shadow-xl:  0 24px 64px rgba(0, 0, 0, 0.32);

  /* BMW M Glow — accent on dark backgrounds */
  --glow-blue:   0 0 24px rgba(28, 105, 212, 0.35);
  --glow-red:    0 0 24px rgba(232, 0, 58, 0.35);
  --glow-violet: 0 0 24px rgba(110, 37, 133, 0.30);
}
```

---

## 6. Components

### Button — Primary

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-5);
}

.btn--primary {
  background: var(--color-m-blue);
  color: var(--color-white);
}

.btn--primary:hover {
  background: #1558B0;
  transform: translateY(-1px);
  box-shadow: var(--glow-blue);
}

.btn--accent {
  background: var(--color-m-red);
  color: var(--color-white);
}

.btn--ghost {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-steel);
}

.btn--ghost:hover {
  border-color: var(--color-silver);
  background: rgba(255, 255, 255, 0.06);
}
```

### Card

```css
.card {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-steel);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: all 0.25s ease;
}

.card:hover {
  border-color: var(--color-platinum);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Porsche accent — color top border */
.card--featured {
  border-top: 2px solid var(--color-m-blue);
}

.card--accent {
  border-top: 2px solid var(--color-m-red);
}
```

### Badge / Tag

```css
.badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
}

.badge--blue   { background: rgba(28, 105, 212, 0.15); color: #5B9EE8; }
.badge--red    { background: rgba(232, 0, 58, 0.15);   color: #F04D73; }
.badge--violet { background: rgba(110, 37, 133, 0.15); color: #B06BC9; }
.badge--neutral { background: var(--color-steel); color: var(--color-silver); }
```

### Input

```css
.input {
  width: 100%;
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: var(--weight-regular);
  color: var(--color-text-primary);
  background: var(--color-bg-surface);
  border: 1px solid var(--color-steel);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;
}

.input::placeholder {
  color: var(--color-text-muted);
}

.input:focus {
  border-color: var(--color-m-blue);
  box-shadow: 0 0 0 3px rgba(28, 105, 212, 0.20);
}
```

### Divider — Porsche style

```css
/* Divider with M accent */
.divider {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-block: var(--space-7);
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--color-steel);
}

/* BMW M tricolor accent line */
.accent-line {
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--color-m-blue)   0%,
    var(--color-m-violet) 50%,
    var(--color-m-red)    100%
  );
  border-radius: var(--radius-full);
}
```

---

## 7. Transitions & Animations

Precision and fluidity — neither too slow nor abrupt. Porsche style: everything is calibrated.

```css
:root {
  --ease-out:    cubic-bezier(0.0, 0, 0.2, 1);
  --ease-in:     cubic-bezier(0.4, 0, 1, 1);
  --ease-inout:  cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* slight elasticity */

  --duration-fast:   120ms;
  --duration-normal: 220ms;
  --duration-slow:   380ms;
}

/* Standard transition pattern */
.transition-base {
  transition:
    opacity      var(--duration-normal) var(--ease-out),
    transform    var(--duration-normal) var(--ease-out),
    box-shadow   var(--duration-normal) var(--ease-out),
    border-color var(--duration-fast)   var(--ease-out);
}
```

---

## 8. Usage Rules

### Do

- Let content breathe. White space is your best ally.
- Use BMW M colors sparingly: 1 accent color per component maximum.
- Reserve display fonts (condensed, uppercase) for headlines only. Body stays in Inter, readable.
- Keep dark surfaces consistent: `--color-obsidian` for cards, `--color-carbon` for page backgrounds.
- Prefer a subtle `border` on cards over heavy shadows.

### Don't

- Mix more than 2 accent colors on the same page or view.
- Use the display font for body text — reserved for headings only.
- Stack shadows: 1 level per component, never 3 cumulative shadows.
- Use complex gradients: only the BMW M tricolor `accent-line` is permitted.
- Use animations > 400ms for standard UI interactions.
- Center long text (> 3 lines): left-aligned only.

---

## 9. Dark Mode (recommended by default)

This system is designed dark-first. Light mode is a variant.

```css
/* Dark — default */
body {
  background-color: var(--color-carbon);
  color: var(--color-text-primary);
}

/* Light — variant */
@media (prefers-color-scheme: light) {
  :root {
    --color-bg-dark:    var(--color-frost);
    --color-bg-surface: var(--color-white);
    --color-text-primary:   var(--color-carbon);
    --color-text-secondary: var(--color-steel);
    --color-text-muted:     var(--color-platinum);
  }
}
```

---

## 10. Integration Checklist

Before any UI commit, verify:

- [ ] Colors used belong to the defined palette
- [ ] Loaded fonts are Barlow Condensed + Inter
- [ ] Spacing respects the 4px grid
- [ ] Buttons have hover/focus/active states defined
- [ ] Text/background contrast meets WCAG AA (4.5:1 minimum)
- [ ] Animations stay under 400ms
- [ ] The page breathes: no components packed too close together
- [ ] The logo / brand is never crushed by a colored background

---

*Design system v1.0 — Inspired by BMW M · Nike · Apple · Porsche*
