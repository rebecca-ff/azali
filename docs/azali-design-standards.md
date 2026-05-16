# AZALI Design Standards

Visual identity standards for the AZALI website, derived from the AZALI Jewelry retail showroom in San Diego's Diamond District. The website should feel like a continuation of the in-store experience: bright, classical, and confidently understated.

**Last updated:** 2026-05-16
**Applies to:** All pages of the AZALI website, with the noted exception of San Diego Melting & Assay sections.

---

## 1. Brand Philosophy

AZALI is a fine-jewelry house in San Diego's Diamond District. The visual language draws from the showroom itself — Carrara marble walls, deep navy carpet, polished white casework, and a tall serif wordmark behind the consultation counter.

The site houses two related businesses:

- **AZALI Fine Jewelry** — boutique jewelry house. Cool, bright, classical. Navy and marble-white dominate.
- **San Diego Melting & Assay** — precious-metals processing and gold buying. Lives in the same bright universe as AZALI but uses warm gold accents on cream backgrounds, signalling the foundry/metals heritage without going dark or industrial.

The two share the same typography, layout system, and structural patterns. Only the accent temperature differs.

---

## 2. Color Palette

All colors are exposed as CSS custom properties in `src/app/globals.css` and as Tailwind tokens via `@theme inline`.

### Core tokens

| Token | Hex | Purpose |
|---|---|---|
| `--azali-navy` | `#1B2A4E` | Primary brand color. Logo, H1/H2 headings, primary buttons, links, navbar text. |
| `--azali-navy-deep` | `#0F1A33` | Hover state for navy elements. Footer background. |
| `--azali-marble-white` | `#FAFAF7` | Main page background across all AZALI sections. |
| `--azali-cream` | `#F4EFE6` | Secondary section background. Warmer than marble-white; used for SD Melting & Assay sections and the "Visit Us" banner. |
| `--azali-charcoal` | `#1A1A1A` | Body text on light backgrounds. Used instead of navy for readability at small sizes. |
| `--azali-stone` | `#6B6B6B` | Secondary text, captions, meta information. |
| `--azali-gold` | `#C5A55A` | SD Melting & Assay primary. Hairline dividers and ornamental rules across the site. |
| `--azali-gold-deep` | `#A8893A` | Hover state for gold elements. SD Melting & Assay accent darker. |

### Usage rules

- **Backgrounds default to `--azali-marble-white`.** Cream is reserved for explicit warm sections.
- **Body text is `--azali-charcoal`, not navy.** Navy is for headlines and brand elements.
- **Gold is an accent, not a primary.** On AZALI sections it appears only as hairline dividers (1px, often at 40–60% opacity). It becomes a primary color only inside SD Melting & Assay sections.
- **The footer is the only place the dark palette appears.** `--azali-navy-deep` background grounds the page; the rest of the site stays bright.

### Brand-specific palettes

**AZALI Fine Jewelry sections:**
- Background: `--azali-marble-white`
- Headlines: `--azali-navy`
- Body text: `--azali-charcoal`
- Accents/dividers: `--azali-gold` at reduced opacity
- Buttons: navy fill or navy outline (see Buttons)

**SD Melting & Assay sections:**
- Background: `--azali-cream`
- Headlines: `--azali-gold-deep`
- Body text: `--azali-charcoal`
- Accents/dividers: `--azali-gold`
- Buttons: gold fill with charcoal text (see Buttons)

---

## 3. Typography

Two typefaces, loaded via `next/font/google` in `src/app/layout.tsx`.

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display (logo, H1, H2) | Cinzel | 400 / 600 | Classical Roman capitals. Matches the in-store sign. Always uppercase. |
| Body, eyebrows, labels, UI | Inter | 400 / 500 | Clean neutral sans. Reads well at small sizes against navy and gold. |

### Tailwind variables

```css
--font-display: var(--font-cinzel);
--font-sans: var(--font-inter);
```

Bebas Neue is removed entirely.

### Type scale

| Class | Use |
|---|---|
| `font-[family-name:var(--font-cinzel)] text-7xl md:text-9xl tracking-[0.15em]` | Hero AZALI wordmark |
| `font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl tracking-[0.12em]` | Section H1 / page titles |
| `font-[family-name:var(--font-cinzel)] text-3xl tracking-[0.15em]` | Section H2 (e.g., brand cards on home) |
| `text-xs tracking-[0.4em] uppercase` (Inter) | Eyebrows above headings, "JEWELRY" subtitle in logo lockup |
| `text-xs tracking-[0.2em] uppercase font-medium` (Inter) | Button labels, nav links |
| `text-sm leading-relaxed` (Inter) | Body paragraphs |
| `text-[10px] tracking-[0.3em] uppercase` (Inter) | Smallest meta/captions |

All Cinzel headlines are uppercase and letter-spaced. All eyebrow / button / nav text is uppercase and letter-spaced. Sentence-case is reserved for body paragraphs.

---

## 4. Logo Lockup

The full AZALI lockup mirrors the in-store sign:

```
        A Z A L I        (Cinzel, navy, tall caps, tracking-[0.15em])
        ─────────        (gold hairline, ~80–100px wide, 40% opacity)
         J E W E L R Y   (Inter, navy 80%, tracking-[0.4em], much smaller)
```

### Sizes

- **Hero lockup:** AZALI at `text-9xl` on desktop, gold divider `w-24 h-px bg-azali-gold/40`, JEWELRY at `text-xs`.
- **Navbar lockup:** AZALI at `text-2xl`, gold divider `w-8 h-px bg-azali-gold/40`, JEWELRY at `text-[9px]`.
- **Footer lockup:** AZALI at `text-3xl` in marble-white (only place AZALI appears light), no JEWELRY subtitle.

The lockup is the only place gold appears on AZALI sections by default.

---

## 5. Hero Section

The hero is the single point in the site that uses **marble texture** as a backdrop — a direct visual callback to the showroom's marble wall.

**Composition:**
- Full-bleed Carrara marble background image (subtle veining, desaturated, stored at `public/marble-hero.jpg`)
- White overlay `bg-white/40` on top so the marble reads as backdrop, not foreground
- Centered full AZALI/JEWELRY lockup
- Eyebrow below lockup: "Fine Jewelry & Precious Metals" in Inter, navy at 60%, `tracking-[0.4em] uppercase`
- Single horizontal gold hairline rule under the eyebrow (replaces the previous diamond-icon ornaments)
- Two CTAs side-by-side: primary navy filled "Explore Jewelry", secondary navy outlined "Melting & Assay"

**No other section uses marble texture.** Subsequent sections sit on flat marble-white or cream.

---

## 6. Section Patterns

| Pattern | Background | Headline | Body | Accent |
|---|---|---|---|---|
| AZALI content section | `--azali-marble-white` | Navy Cinzel | Charcoal Inter | Gold hairline divider |
| SD Melting & Assay section | `--azali-cream` | Gold-deep Cinzel | Charcoal Inter | Gold |
| "Visit Us" / location banner | `--azali-cream` | Navy Cinzel | Charcoal Inter | Gold divider |
| Footer | `--azali-navy-deep` | Marble-white Cinzel | Marble-white at 60% Inter | Gold |

**Section vertical rhythm:** `py-24 px-6` standard; `py-16 px-6` for compact bands like "Visit Us".

**Section max width:** `max-w-6xl mx-auto` for content grids; `max-w-4xl` for centered prose.

---

## 7. Buttons

All buttons share: `tracking-[0.2em] uppercase font-medium text-xs px-8 py-3`, no border-radius (sharp edges match the boutique signage aesthetic), `transition-colors duration-300`.

| Variant | Default | Hover | Used in |
|---|---|---|---|
| Primary navy | `bg-azali-navy text-azali-marble-white` | `bg-azali-navy-deep` | AZALI section CTAs, primary actions |
| Secondary navy outlined | `border border-azali-navy text-azali-navy bg-transparent` | `bg-azali-navy text-azali-marble-white` | Secondary AZALI CTAs |
| Gold filled | `bg-azali-gold text-azali-charcoal` | `bg-azali-gold-deep` | SD Melting & Assay CTAs |
| Gold outlined | `border border-azali-gold text-azali-gold-deep bg-transparent` | `bg-azali-gold text-azali-charcoal` | SD Melting & Assay secondary CTAs |

No gradients, no shadows, no rounded corners.

---

## 8. Dividers & Ornaments

- **Hairline gold rule:** `<div className="w-24 h-px bg-azali-gold/40 mx-auto" />` — used to separate hero copy, under section eyebrows, under the AZALI wordmark in the logo lockup.
- **Wider section divider:** `w-32 h-px bg-azali-gold/30` for centered section breaks.
- **No diamond, flame, or other icon ornaments** in the page chrome. (Icons remain for functional use — e.g., next to nav links inline.)

---

## 9. Navbar

- Background: `--azali-marble-white`
- Border-bottom: 1px `--azali-gold` at 30% opacity
- AZALI wordmark on the left in the navbar logo lockup (see Logo Lockup)
- Nav links: Inter, navy, `text-xs tracking-[0.2em] uppercase`, gap-8 spacing
- Hover: navy → navy-deep, plus a 1px gold underline appearing under the link
- Sticky on scroll. At scroll position > 0, background transitions from `bg-azali-marble-white` to `bg-azali-marble-white/85 backdrop-blur-sm`. Transition: `transition-colors duration-300`.

---

## 10. Footer

The only dark surface on the site.

- Background: `--azali-navy-deep`
- Text: `--azali-marble-white`, body at 60% opacity
- AZALI wordmark in marble-white, top-left
- Gold hairline rules separate footer columns and the legal line at the bottom
- Links: base color `--azali-marble-white` at 60% opacity, hover `--azali-gold`, `transition-colors duration-300`

---

## 11. Imagery Guidelines

- **Marble:** Carrara only, always desaturated and lightened. Used exclusively in the hero.
- **Product photography:** white or marble-white seamless backgrounds. Cool lighting. Avoid warm-toned lifestyle shots in AZALI sections.
- **Metals photography (SD Melting & Assay sections):** warm-toned backgrounds acceptable. Refined gold bars, ingots, crucibles. Avoid grime or rough-industrial imagery — the brand is precision, not foundry-floor.
- **Functional icons** (e.g., the existing `DiamondIcon`, `FlameIcon`, plus any contact/social icons): stroke-based, 1.5px stroke weight, `currentColor` fill so they inherit the surrounding text color (navy in AZALI sections, gold-deep in SD M&A sections, marble-white in the footer). Sized via Tailwind width/height utilities at the call site. No filled-shape icons in the page chrome.

---

## 12. Content Corrections (bundled with this rollout)

All references to **GSI / Gemological Science International** must be replaced with **GIA / Gemological Institute of America** across the site. Affected files at time of writing:

- `src/app/layout.tsx` (metadata description, keywords)
- `src/app/page.tsx` (homepage AZALI card copy and link label)
- `src/app/contact/page.tsx` (services blurb)
- `src/app/diamonds/page.tsx` (page title, hero, "Why certification?" explanatory section, color-scale description)

The "Why certification?" explanatory paragraph on `/diamonds` must be rewritten to describe GIA accurately (the most widely recognized diamond grading lab globally; established 1931; defined the 4Cs).

---

## 13. Implementation Notes (for the build phase)

- Replace the `:root` color set in `src/app/globals.css` with the tokens in §2.
- Swap `Bebas_Neue` import in `src/app/layout.tsx` for `Cinzel` (Google Fonts).
- Update `--font-display` and Tailwind theme mapping accordingly.
- Remove the existing `.text-gold-gradient` and `.gold-glow` utilities — they belong to the dark-theme treatment and should not appear on the new light theme.
- Source one Carrara marble image (~2400px wide, optimized) and place at `public/marble-hero.jpg`.
- Refactor `Hero`, `BrandSections`, `LocationBanner` in `src/app/page.tsx` per §5–§6, and apply the same patterns across `/jewelry`, `/diamonds`, `/custom`, `/melting-assay`, `/sell-gold`, `/contact`.
- Update navbar (`src/components/AzaliNavbar.tsx`) and footer (`src/components/Footer.tsx`) per §9–§10.
- Apply the GIA content fix from §12 in the same change set.
