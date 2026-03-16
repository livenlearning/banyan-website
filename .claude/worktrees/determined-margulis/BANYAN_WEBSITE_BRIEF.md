# Banyan Global Learning — Website Rebuild Brief
*Hand-off document for continuing this project in a new conversation*

---

## What We're Building

A complete website rebuild for **Banyan Global Learning** (banyangloballearning.com), replacing an outdated WordPress site. The new site is built on **Next.js 15 + Tailwind v4 + TypeScript**, hosted on Vercel, version-controlled on GitHub.

Travis (travis@banyangloballearning.com) is building this collaboratively with AI assistance.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 — **no tailwind.config.ts**, everything in globals.css |
| Language | TypeScript |
| Fonts | Plus Jakarta Sans (display/headings) + Inter (body), loaded via next/font/google |
| Hosting | Vercel |
| Version control | GitHub |
| Icons | lucide-react |

**Critical Tailwind v4 note:** There is no `tailwind.config.ts`. All custom colors, fonts, and tokens live in `src/app/globals.css` inside an `@theme {}` block. The file starts with `@import "tailwindcss"` not the old three `@tailwind` directives.

**Font variable naming:** In `layout.tsx`, next/font uses `variable: '--font-display-var'` and `variable: '--font-body-var'` (note the `-var` suffix). The `@theme` block then maps these: `--font-display: var(--font-display-var), ...`. This avoids a circular reference between next/font and Tailwind's token system.

---

## Project Folder Structure

```
banyan-website/
  src/
    app/
      globals.css          ← full design system (Tailwind v4 @theme)
      layout.tsx           ← root layout, fonts, metadata
      page.tsx             ← homepage
    components/
      layout/
        SiteHeader.tsx     ← sticky nav with mobile drawer
        SiteFooter.tsx     ← dark footer, 4-column
      sections/
        HeroHome.tsx       ← homepage hero (photo bg + gradient overlay)
        ProductsGrid.tsx   ← 4 product cards
        GLLCallout.tsx     ← GLL feature section (2-col, photo right)
        ImpactStats.tsx    ← blue stats band
    lib/
      tokens.ts            ← typed design tokens (reference file)
  public/
    logo-horizontal.svg    ← (user needs to add — light bg version)
    logo-horizontal-white.svg ← (user needs to add — for dark footer)
```

**Pages not yet built** (all give 404 currently):
- `/programs` — programs overview
- `/programs/global-learning-live` — GLL product page (PRIORITY 1)
- `/programs/ai-pd` — AI PD product page (PRIORITY 2)
- `/programs/learning-live` — Learning Live page
- `/programs/virtual-field-trips` — VFT page
- `/about` — about page
- `/case-studies` — case studies index
- `/contact` — contact page

---

## Design System

### Brand Colors
```
Blue:    #0e4a83  (brand primary — Tailwind class: bg-blue-600)
Gold:    #e5a025  (accent — bg-gold-400)
Teal:    #1ca59d  (GLL product color — bg-teal-400)
Neutral: standard gray scale
```

### Product Color Identity
| Product | Color | Tailwind |
|---|---|---|
| Global Learning Live (GLL) | Teal #1ca59d | teal-400 |
| AI Professional Development | Blue #0e4a83 | blue-600 |
| Learning Live | Gold #e5a025 | gold-400 |
| Virtual Field Trips | Blue #4586c3 | blue-400 |

### Typography
- **Display font:** Plus Jakarta Sans — use class `font-display` or component classes like `.display-xl`, `.display-md`
- **Body font:** Inter — default on body, use `font-body`

### Key Component Classes (defined in globals.css)
```css
.container-site     — max-w-[1280px] centered with horizontal padding
.section-padding    — py-20 lg:py-28
.section-label      — eyebrow text (small, uppercase, blue)
.display-xl/lg/md/sm — headline scale (Plus Jakarta Sans)
.btn                — base button
.btn-primary/gold/teal/white/outline/ghost — button variants
.btn-sm/md/lg/xl    — button sizes
.badge              — base badge (pill)
.badge-blue/gold/teal/neutral/white — badge variants
.card               — white card with border + hover shadow
.card-accent        — colored top bar on cards (1px)
.nav-link           — navigation link style
.hero-main          — dark blue→teal homepage hero gradient
.hero-gll/aipd/ll   — product page hero gradients
.stat-number        — large stat display number
.text-gradient-blue/gold — gradient text utility
```

---

## Products (in priority order for the website)

### 1. Global Learning Live (GLL) — HIGHEST PRIORITY
- **What it is:** 4-week cohort cycles connecting classrooms internationally. Live, synchronous, human-facilitated.
- **Stage:** New pilot, actively enrolling
- **Audience:** School coordinators, classroom teachers (ages 10-14)
- **Price:** ~$1,000/classroom/cycle
- **Key mechanism:** Awe → Expression → Reciprocity → Connection. Students make artifacts and exchange them with international peers.
- **Non-negotiables:** Live, synchronous, human facilitation, international, repeatable
- **CTA:** "Enroll your classroom"

### 2. AI Professional Development — HIGH PRIORITY
- **What it is:** District-wide AI literacy PD for educators. Practical, pedagogy-grounded.
- **Stage:** Expanding to district-level, have a Kennewick case study
- **Audience:** District administrators, curriculum directors (enterprise sale)
- **Price:** $25,000–$50,000
- **Tone:** Professional, enterprise, outcome-focused
- **CTA:** "Request a proposal"

### 3. Learning Live (LL) — CREDIBILITY SHOWCASE
- **What it is:** 17-year exclusive partnership with Tsai Hsing Elementary, Taipei. Daily live sessions, grades 5-8. The original program.
- **Stage:** Ongoing exclusive — NOT for sale, NOT scalable
- **Purpose on website:** Credibility/proof-of-concept. Shows Banyan has been doing this since 2009.
- **Key stats:** 5,000+ students, CILC Pinnacle Award, alumni at NYU/Ohio State/UW
- **CTA:** "Read the case study" (redirect to GLL for enrollment interest)

### 4. Virtual Field Trips (VFTs) — LOW PRIORITY
- **What it is:** Single-session live expert-guided virtual experience
- **Price:** $300/session
- **CTA:** "Book a session"

### Indonesia Government Program
- Active partnership discussions with Indonesian Ministry of Education (DG Gogot Suharwoto)
- Potential 100,000+ students
- Deal not yet signed — **does NOT appear on the public website yet**

---

## Brand Voice & Key Messages

- **Tagline:** "The world, inside your classroom."
- **Tone:** Confident, warm, educator-first. Not edtech-salesy. Speaks to what teachers actually care about.
- **Key differentiators:** 15+ years doing this, real live humans (not recordings), international by design, built from a real 17-year partnership
- **Hero subhead:** "Banyan connects K–12 students to live experts, global peers, and real-world experiences — building the curiosity and perspective that books alone can't deliver."

---

## Current Homepage Status

The homepage is **working** and looks good. It includes:
1. **Hero** — dark blue/teal gradient with photo background overlay, gold gradient headline
2. **Products Grid** — 4 cards with gradient headers and detail pills
3. **GLL Callout** — 2-column, copy+feature list left, photo right, floating stat badges
4. **Impact Stats** — blue band: 5,000+ students, 17 years, 20+ countries, 2009
5. **Footer** — dark, 4-column

**Placeholder images** are being pulled from `picsum.photos` — replace with real photos when available.
- Hero photo: students in live session / classroom connected via screen (landscape, 1600px+)
- GLL photo: video call with international students / live facilitated session

**Logo issue:** The header and footer reference `logo-horizontal.svg` and `logo-horizontal-white.svg` in `/public/`. These may be using a text fallback if the SVGs haven't been added yet.

---

## Immediate Next Steps

### Step 1: GLL Product Page
Create `src/app/programs/global-learning-live/page.tsx`

This is the most important page after the homepage. It should include:
- Hero with teal gradient (`hero-gll` class) — "Live. International. Transformative."
- How it works section (the 4-week cycle: Awe → Expression → Reciprocity → Connection)
- What a session looks like (the actual experience)
- Who it's for (ages 10-14, any subject, teachers who want more than textbooks)
- Pricing & logistics (4-week cycles, cohorts of ~4 classrooms, ~$1,000/classroom)
- Testimonials / early pilot results (placeholder for now)
- Strong CTA → contact/enrollment form

### Step 2: Push to GitHub + Connect Vercel
Get a real URL so the site can be shared and viewed on mobile.

```bash
# From inside the project folder:
git init
git add .
git commit -m "Initial homepage build"
# Then create repo on GitHub and push
```

Then connect the GitHub repo to Vercel (vercel.com → New Project → Import from GitHub).

### Step 3: AI PD Product Page
Create `src/app/programs/ai-pd/page.tsx`
- Darker, more enterprise tone
- Focus on district-level outcomes
- Kennewick case study proof point
- "Request a proposal" CTA → Calendly or contact form

### Step 4: Contact Page
Create `src/app/contact/page.tsx`
- Simple form (name, email, school/district, message, which program)
- Calendly embed for demo booking
- Different CTAs for different audiences

---

## Known Issues / Gotchas

1. **Apostrophes in JS strings** — use double quotes `"don't"` not single quotes `'don\'t'` in `.tsx` string literals. In JSX markup text, use `&apos;` for apostrophes.
2. **No tailwind.config.ts** — Tailwind v4 uses `@theme {}` in globals.css only. Don't create a config file.
3. **External images** — `picsum.photos` URLs are used directly as CSS `background-image` (not via `next/image`) to avoid needing `remotePatterns` config. When switching to real images: put them in `/public/` and use `next/image`.
4. **Logo files** — user needs to add `logo-horizontal.svg` and `logo-horizontal-white.svg` to `/public/`. Temporary text fallback in components if needed.
5. **`lucide-react` required** — must be installed (`npm install lucide-react`) for SiteHeader mobile menu icons.
