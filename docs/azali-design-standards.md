# AZALI Design Standards

Visual identity standards for the AZALI website. Derived from the AZALI brand moodboard (deep navy + metallic gold + dramatic lighting + classical serif wordmark).

**Last updated:** 2026-05-16
**Applies to:** All pages of the AZALI website.

> Note: AZALI's physical showroom is bright (Carrara marble walls, navy carpet, white casework). The **digital brand identity** is intentionally the inverse — dark, rich, dramatic — following the same pattern as Tiffany, Bulgari, and Cartier, whose stores are bright but whose digital and packaging identities are dark and saturated. The store interior is a separate visual context; the website should reflect the brand identity, not the physical environment.

---

## 1. Brand Philosophy

AZALI is a fine-jewelry house in San Diego's Diamond District. The digital identity is a **dark, sophisticated, luxury-house** treatment — closer to Bulgari or Tiffany than to a boutique website. Deep saturated navy provides the canvas; metallic gold is the accent; a classical serif carries the wordmark.

The site houses two related businesses:

- **AZALI Fine Jewelry** — boutique jewelry house. Deep navy + cool gold accents. White serif wordmark.
- **San Diego Melting & Assay** — precious-metals processing and gold buying. Lives in the same dark universe as AZALI but uses warm-foundry undertones (slightly warmer dark base, brighter gold) to signal the metals heritage and visually differentiate.

The two share typography, layout system, and structural patterns. Only the dark base temperature and gold tone differ.

---

## 2. Color Palette

All colors are exposed as CSS custom properties in `src/app/globals.css` and as Tailwind tokens via `@theme inline`.

### Core tokens

| Token | Hex | Purpose |
|---|---|---|
| `--azali-navy-deepest` | `#0A1628` | Footer, deepest sections |
| `--azali-navy-deep` | `#0F1A33` | Hero background, primary dark |
| `--azali-navy` | `#14233F` | Main page background |
| `--azali-navy-elevated` | `#1B2A4E` | Cards, elevated panels, hover surfaces |
| `--azali-foundry` | `#1E1A14` | SD Melting & Assay sub-brand background (warm dark) |
| `--azali-foundry-elevated` | `#2A2418` | SD Melting & Assay cards |
| `--azali-gold` | `#C5A55A` | Primary gold — buttons, headlines accent, hairlines |
| `--azali-gold-bright` | `#D4B670` | Hover state for gold elements, brighter highlights |
| `--azali-gold-deep` | `#A8893A` | Pressed state, deeper gold accent |
| `--azali-white` | `#FAFAF7` | Headlines, wordmark, primary text |
| `--azali-cream` | `#E8E3D6` | Body text on dark, slightly warm |
| `--azali-stone` | `#8A8580` | Muted text, captions |

### Usage rules

- **Backgrounds default to `--azali-navy`** (the slightly less-deep base). Hero and footer use deeper variants.
- **Body text is `--azali-cream`** at 70–80% opacity for readability against dark backgrounds. Never pure white for paragraphs.
- **Gold is the accent**, not a primary surface color. It appears as text accents, hairline dividers, button fills, and brand wordmark elements.
- **SD Melting & Assay sections shift to a warmer dark base** (`--azali-foundry`) with the same gold accent — keeps the metals brand visually distinct without breaking the dark framework.

### Brand-specific palettes

**AZALI Fine Jewelry sections:**
- Background: `--azali-navy` (cards on `--azali-navy-elevated`)
- Headlines: `--azali-white` (serif), or `--azali-gold` for emphasis lines
- Body text: `--azali-cream` at 70–80% opacity
- Accents/dividers: `--azali-gold` at 40–60% opacity
- Buttons: gold fill on navy, or gold outline

**SD Melting & Assay sections:**
- Background: `--azali-foundry` (cards on `--azali-foundry-elevated`)
- Headlines: `--azali-gold-bright` (warmer, more amber-tinted)
- Body text: `--azali-cream` at 70–80% opacity
- Accents/dividers: `--azali-gold-bright`
- Buttons: gold-bright fill with navy text

---

## 3. Typography

Two typefaces, loaded via `next/font/google` in `src/app/layout.tsx`.

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display (logo, H1, H2) | Cinzel | 400 / 600 | Classical Roman capitals. Matches the moodboard wordmark exactly. Always uppercase. |
| Body, eyebrows, labels, UI | Inter | 400 / 500 | Clean neutral sans. High contrast against dark backgrounds. |

### Tailwind variables

```css
--font-display: var(--font-cinzel);
--font-sans: var(--font-inter);
```

### Type scale

| Class | Use |
|---|---|
| `font-[family-name:var(--font-cinzel)] text-7xl md:text-9xl tracking-[0.15em]` | Hero AZALI wordmark |
| `font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl tracking-[0.12em]` | Section H1 / page titles |
| `font-[family-name:var(--font-cinzel)] text-3xl tracking-[0.15em]` | Section H2 |
| `text-xs tracking-[0.4em] uppercase` (Inter) | Eyebrows above headings, "JEWELRY" subtitle in logo lockup |
| `text-xs tracking-[0.2em] uppercase font-medium` (Inter) | Button labels, nav links |
| `text-sm leading-relaxed` (Inter) | Body paragraphs |
| `text-[10px] tracking-[0.3em] uppercase` (Inter) | Smallest meta/captions |

---

## 4. Logo Lockup

The wordmark mirrors the moodboard:

```
        A Z A L I        (Cinzel, white, tall caps, tracking-[0.15em])
        ─────────        (gold hairline, ~80–100px wide, 60% opacity)
         J E W E L R Y   (Inter, white 80%, tracking-[0.4em], much smaller)
```

### Sizes

- **Hero lockup:** AZALI at `text-9xl` on desktop, gold divider `w-24 h-px bg-azali-gold/60`, JEWELRY at `text-xs`.
- **Navbar lockup:** AZALI at `text-2xl`, gold divider `w-8 h-px bg-azali-gold/50`, JEWELRY at `text-[9px]`.
- **Footer lockup:** AZALI at `text-3xl` in gold-bright, no JEWELRY subtitle.

### Symbol mark

The site currently does **not** use a symbol mark (no monogram, no icon). The brand has two symbol-mark candidates under exploration (a sculpted flowing-gold "A" and a geometric stacked-gold "A"); neither is committed yet. Once selected, the symbol will be added as transparent SVG and integrated into navbar + hero.

A styled Midjourney composition featuring the geometric stacked-gold "A" (`/public/azali-symbol-gold-a.jpg`) is currently used as a section feature image on the home page, but not as the primary logo — the styled scene is illustrative of the brand mood, not the wordmark.

---

## 5. Hero Section

- **Background:** `--azali-navy-deep` flat color (no marble image, no Carrara overlay).
- **Center:** Full AZALI/JEWELRY wordmark lockup in white serif (see §4)
- **Below lockup:** Eyebrow text "Fine Jewelry & Precious Metals" in Inter, white at 60%, `tracking-[0.4em] uppercase`
- **Single horizontal gold hairline rule** under the eyebrow (`w-24 h-px bg-azali-gold/60`)
- **CTAs:** Two buttons — primary gold filled "Explore Jewelry", secondary gold outlined "Melting & Assay"
- **Optional bottom accent:** subtle radial gradient from `rgba(197, 165, 90, 0.06)` at center to transparent — adds the "shaft of light" feel from the moodboard without committing imagery

---

## 6. Section Patterns

| Pattern | Background | Headline | Body | Accent |
|---|---|---|---|---|
| AZALI content section | `--azali-navy` | White Cinzel | Cream 70% Inter | Gold hairline |
| AZALI elevated card | `--azali-navy-elevated` | White Cinzel | Cream 70% Inter | Gold border at 20% |
| SD Melting & Assay section | `--azali-foundry` | Gold-bright Cinzel | Cream 70% Inter | Gold-bright |
| SD Melting & Assay card | `--azali-foundry-elevated` | Gold-bright Cinzel | Cream 70% Inter | Gold-bright border at 20% |
| Symbol feature section | `--azali-navy-deep` w/ centered gold-A image as background | White Cinzel overlay | — | — |
| "Visit Us" / location banner | `--azali-navy-deep` | White Cinzel | Cream 70% Inter | Gold divider |
| Footer | `--azali-navy-deepest` | Gold-bright Cinzel | Cream 60% Inter | Gold |

**Section vertical rhythm:** `py-24 px-6` standard; `py-16 px-6` for compact bands.

**Section max width:** `max-w-6xl mx-auto` for content grids; `max-w-4xl` for centered prose.

---

## 7. Buttons

All buttons share: `tracking-[0.2em] uppercase font-medium text-xs px-8 py-3`, no border-radius (sharp edges echo the architectural moodboard treatments), `transition-colors duration-300`.

| Variant | Default | Hover | Used in |
|---|---|---|---|
| Primary gold | `bg-azali-gold text-azali-navy-deep` | `bg-azali-gold-bright` | AZALI section CTAs, primary actions |
| Secondary gold outlined | `border border-azali-gold text-azali-gold bg-transparent` | `bg-azali-gold text-azali-navy-deep` | Secondary AZALI CTAs |
| Primary gold-bright (SDMA) | `bg-azali-gold-bright text-azali-foundry` | `bg-azali-gold` | SD Melting & Assay CTAs |
| Secondary gold-bright outlined (SDMA) | `border border-azali-gold-bright text-azali-gold-bright bg-transparent` | `bg-azali-gold-bright text-azali-foundry` | SD Melting & Assay secondary CTAs |

No gradients, no shadows, no rounded corners.

---

## 8. Dividers & Ornaments

- **Hairline gold rule:** `<div className="w-24 h-px bg-azali-gold/60 mx-auto" />` — used to separate hero copy, under section eyebrows, under the AZALI wordmark in the logo lockup.
- **Wider section divider:** `w-32 h-px bg-azali-gold/40` for centered section breaks.
- **No diamond, flame, or other icon ornaments** in the page chrome.

---

## 9. Navbar

- Background: `--azali-navy-deep` with `backdrop-blur-md` when scrolled
- Border-bottom: 1px `--azali-gold` at 20% opacity
- AZALI wordmark on the left in the navbar logo lockup (see §4) — white serif
- Nav links: Inter, white at 70%, `text-xs tracking-[0.2em] uppercase`, gap-8 spacing
- Hover: text → white, plus a 1px gold underline appearing under the link
- Active page: text white + persistent gold underline
- Sticky on scroll. At scroll position > 0, background transitions from `bg-azali-navy-deep` to `bg-azali-navy-deep/85 backdrop-blur-md`. Transition: `transition-colors duration-300`.

---

## 10. Footer

The deepest surface on the site.

- Background: `--azali-navy-deepest`
- Text: `--azali-cream`, body at 60% opacity
- AZALI wordmark in gold-bright, top-left
- Gold hairline rules separate footer columns and the legal line at the bottom
- Links: base color `--azali-cream` at 60% opacity, hover `--azali-gold-bright`, `transition-colors duration-300`

---

## 11. Imagery Guidelines

- **Product photography:** dark backgrounds (navy velvet, deep navy paper). Dramatic single-source lighting. Gold and gemstone focus. High-contrast, jewel-toned.
- **Metals photography (SD Melting & Assay sections):** warm dark backgrounds (brown velvet, dark leather, brass). Refined gold bars, ingots, finished pieces. Avoid grimy industrial imagery — the brand is precision, not foundry-floor.
- **Symbol / feature imagery:** the geometric gold-A composition at `/public/azali-symbol-gold-a.jpg` may be used as a section background or feature visual until a final symbol mark is selected.

---

## 12. Implementation Notes (for the build phase)

- Replace the `:root` color set in `src/app/globals.css` with the dark palette in §2.
- Keep `Cinzel` + `Inter` font imports in `src/app/layout.tsx`. Update body class to `bg-azali-navy text-azali-cream`.
- Remove `public/marble-hero.jpg` (no longer used).
- Hero is wordmark-only on flat navy with optional subtle radial-gradient accent.
- Use `public/azali-symbol-gold-a.jpg` as a feature visual on the home page (full-width section background, wordmark overlay).
- Update `Hero`, `BrandSections`, `LocationBanner` in `src/app/page.tsx` per §5–§6.
- Update navbar (`src/components/AzaliNavbar.tsx`) and footer (`src/components/Footer.tsx`) per §9–§10.
- Update all AZALI pages to use `--azali-navy` base + cream body text.
- Update SDMA pages (`/melting-assay`, `/sell-gold`) to use `--azali-foundry` base + gold-bright accents.
- GIA content is already correct from the previous rebrand — no content changes needed in this round.
