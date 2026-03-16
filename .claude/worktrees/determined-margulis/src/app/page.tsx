import type { Metadata } from 'next'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import HeroHome from '@/components/sections/HeroHome'
import ProductsGrid from '@/components/sections/ProductsGrid'
import ImpactStats from '@/components/sections/ImpactStats'
import GLLCallout from '@/components/sections/GLLCallout'

// ─────────────────────────────────────────────────────────────────────────────
// Homepage
// Place at: src/app/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Banyan Global Learning — The world, inside your classroom.',
  description:
    'Live, expert-led programs connecting K–12 classrooms to the world. ' +
    'Global Learning Live, AI Professional Development, and more.',
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* 1. Hero — brand statement + primary CTAs */}
        <HeroHome />

        {/* 2. Products overview — all four programs at a glance */}
        <ProductsGrid />

        {/* 3. GLL deep-dive — your growth engine, highest priority */}
        <GLLCallout />

        {/* 4. Impact stats — credibility, 15 years of proof */}
        <ImpactStats />

        {/* TODO: CaseStudyTeaser — pull 1–2 case study cards */}
        {/* TODO: AIPDCallout — enterprise CTA for AI PD program */}
        {/* TODO: NewsletterCTA or ContactCTA — bottom of page conversion */}
      </main>

      <SiteFooter />
    </>
  )
}
