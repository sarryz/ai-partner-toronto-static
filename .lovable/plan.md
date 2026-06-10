## MVP Consulting Site — Build Plan

A single-page, conversion-focused marketing site with the exact copy you provided. Credible, confident, Toronto-boutique feel.

### Design System

- **Palette (Navy Trust):** Deep navy `#0f1b3d` (background sections / nav), mid-navy `#1e3a5f` (surfaces), accent blue `#3b6fa0` (CTAs, links, highlights), light `#e8edf3` (light sections, text on dark).
- **Typography:** Outfit (headings, tight tracking, semibold/bold) + Figtree (body, regular/medium). Loaded via `<link>` in `__root.tsx`; declared in `@theme` in `src/styles.css`.
- **Tokens added to `src/styles.css`:** semantic tokens (`--background`, `--foreground`, `--primary`, `--primary-foreground`, `--accent`, `--muted`, `--card`, `--border`) in oklch, plus `--gradient-hero` and `--shadow-elegant` for premium polish. All colors via tokens — no hardcoded hex in components.

### Page Structure (single route: `/`)

```text
[Sticky Header]  PLACEHOLDER LOGO ............... [Book Free AI Assessment]
─────────────────────────────────────────────────
[Hero — full-width, dark navy, subtle gradient]
  Eyebrow: BDC attribution chip
  H1: "Over 50% of Canadian small businesses..."
  Sub: value-prop paragraph
  [Primary CTA] Claim Your Free 30-Minute AI Assessment
─────────────────────────────────────────────────
[Services — light section, 3 cards full-width band]
  H2 + sub-paragraph
  3 service cards (icon + title + copy) — Workflow, Tool Selection, Upskilling
  [Section CTA]
─────────────────────────────────────────────────
[About — dark navy band, two-column copy with trust marks]
  H2 + two paragraphs
  Small trust row: MBA · Corporate Digital Transformation · Toronto-based
  [Final CTA]
─────────────────────────────────────────────────
[Footer — three-column: copyright | tagline | contact]
```

All CTAs scroll-anchor to a `#contact` section (or open mailto for MVP); easy to swap to Calendly later.

### Files

- **Create** `src/components/site/Header.tsx` — sticky nav (`backdrop-blur`, border-b on scroll), logo placeholder + CTA button.
- **Create** `src/components/site/Hero.tsx` — full-bleed dark hero, BDC eyebrow chip, H1, sub, primary CTA.
- **Create** `src/components/site/Services.tsx` — 3-card grid, lucide icons (Workflow, Puzzle, GraduationCap).
- **Create** `src/components/site/About.tsx` — dark band, two paragraphs, trust pills.
- **Create** `src/components/site/Footer.tsx` — 3-column footer.
- **Edit** `src/routes/index.tsx` — compose the sections; replace placeholder; set SEO `head()` (title, description, og:title, og:description). Single H1 in Hero.
- **Edit** `src/routes/__root.tsx` — add Google Fonts `<link>` for Outfit + Figtree.
- **Edit** `src/styles.css` — Navy Trust tokens, font tokens, gradient + shadow tokens.

### SEO

- Title (<60 chars): "AI Consulting for Small Businesses"
- Meta description (<160 chars): value-prop sentence.
- Semantic HTML: `<header>`, `<main>`, `<section>` with `aria-labelledby`, `<footer>`. Single `<h1>` in Hero; `<h2>` per section.
- Responsive viewport already configured in root.

### Placeholders to swap later

- Business name / logo wordmark
- Email + phone in footer
- CTA destination (currently scroll-to-contact / mailto)

Press **Implement plan** to build it.
