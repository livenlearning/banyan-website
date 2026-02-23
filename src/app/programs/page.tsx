import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { ArrowRight, Globe, Cpu, BookOpen, MapPin } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Programs Index Page
// Place at: src/app/programs/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Programs — Live Global Learning for K–12 Classrooms',
  description:
    'Explore all Banyan Global Learning programs: Global Learning Live, AI Professional Development, Learning Live, and Virtual Field Trips.',
}

const programs = [
  {
    slug: 'global-learning-live',
    badge: 'Now enrolling',
    badgeClass: 'badge-teal',
    accentClass: 'bg-teal-400',
    heroClass: 'hero-gll',
    icon: Globe,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-500',
    name: 'Global Learning Live',
    tagline: 'Live. International. Transformative.',
    description:
      'A 4-week cohort program connecting classrooms to real international peers through live sessions, personal storytelling, and genuine exchange. Built to fit inside existing school schedules.',
    audience: 'Grades 5–8 · Any subject · ~$1,000/classroom/cycle',
    cta: 'Enroll your classroom',
    ctaClass: 'btn-teal',
    details: ['4-week cycles', 'Live facilitation', '40–50 min/week', 'International cohorts'],
  },
  {
    slug: 'ai-pd',
    badge: 'District programs',
    badgeClass: 'badge-blue',
    accentClass: 'bg-blue-600',
    heroClass: 'hero-aipd',
    icon: Cpu,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    name: 'AI Professional Development',
    tagline: 'Practical AI literacy for every educator.',
    description:
      'District-wide AI professional development grounded in pedagogy, not hype. Helps educators understand, evaluate, and integrate AI tools in ways that actually improve student outcomes.',
    audience: 'District administrators · Curriculum directors · $25K–$50K',
    cta: 'Request a proposal',
    ctaClass: 'btn-primary',
    details: ['District-wide rollout', 'Pedagogy-grounded', 'Measurable outcomes', 'Kennewick case study'],
  },
  {
    slug: 'learning-live',
    badge: 'Credibility showcase',
    badgeClass: 'badge-gold',
    accentClass: 'bg-gold-400',
    heroClass: 'hero-ll',
    icon: BookOpen,
    iconBg: 'bg-gold-50',
    iconColor: 'text-gold-600',
    name: 'Learning Live',
    tagline: 'The original. 17 years. Taipei.',
    description:
      "Banyan's exclusive 17-year partnership with Tsai Hsing Elementary in Taipei. Daily live sessions for grades 5–8. Over 5,000 students impacted. CILC Pinnacle Award winner. Not for sale — here to show what&apos;s possible.",
    audience: 'Not enrolling · Exclusive partnership · Est. 2009',
    cta: 'Read the case study',
    ctaClass: 'btn-gold',
    details: ['5,000+ students', '17 years running', 'CILC Pinnacle Award', 'Alumni at NYU, UW, Ohio State'],
  },
  {
    slug: 'virtual-field-trips',
    badge: 'Single sessions',
    badgeClass: 'badge-neutral',
    accentClass: 'bg-blue-400',
    heroClass: '',
    icon: MapPin,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-400',
    name: 'Virtual Field Trips',
    tagline: 'Expert-guided. Anywhere in the world.',
    description:
      'Single-session live virtual experiences guided by real-world experts. Students explore locations and topics they could never reach from their classroom — without leaving their seats.',
    audience: 'All grades · Any subject · $300/session',
    cta: 'Book a session',
    ctaClass: 'btn-outline',
    details: ['Single sessions', 'Expert-guided', 'Any grade level', '$300/session'],
  },
]

export default function ProgramsPage() {
  return (
    <>
      <SiteHeader />

      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero-main relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="container-site relative z-10 py-20 lg:py-28 text-center">
            <h1 className="display-lg text-white mb-5 text-balance">
              Programs for every kind of{' '}
              <span className="text-gradient-gold">global learner</span>
            </h1>
            <p className="body-lg text-blue-100 max-w-2xl mx-auto">
              From 4-week international cohorts to district-wide AI professional
              development — Banyan builds programs that connect classrooms to the world
              in ways that actually stick.
            </p>
          </div>
        </section>

        {/* ── PROGRAM CARDS ─────────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-site">
            <div className="grid gap-8">
              {programs.map((program, i) => {
                const Icon = program.icon
                return (
                  <div key={program.slug} className="card overflow-hidden">
                    {/* Accent bar */}
                    <div className={`card-accent ${program.accentClass}`} />

                    <div className="p-8 lg:p-10">
                      <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">

                        {/* Left — content */}
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-5">
                            <div className={`w-10 h-10 rounded-lg ${program.iconBg} flex items-center justify-center`}>
                              <Icon className={program.iconColor} size={20} />
                            </div>
                            <span className={`badge ${program.badgeClass}`}>
                              {program.badge}
                            </span>
                          </div>

                          <h2 className="display-sm text-neutral-900 mb-1">
                            {program.name}
                          </h2>
                          <p className={`text-sm font-semibold mb-4 ${
                            program.slug === 'global-learning-live' ? 'text-teal-500' :
                            program.slug === 'ai-pd' ? 'text-blue-600' :
                            program.slug === 'learning-live' ? 'text-gold-500' :
                            'text-blue-400'
                          }`}>
                            {program.tagline}
                          </p>

                          <p
                            className="text-neutral-600 body-md mb-5 max-w-2xl"
                            dangerouslySetInnerHTML={{ __html: program.description }}
                          />

                          <div className="flex flex-wrap gap-2 mb-6">
                            {program.details.map((detail) => (
                              <span key={detail} className="badge badge-neutral">
                                {detail}
                              </span>
                            ))}
                          </div>

                          <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wide">
                            {program.audience}
                          </p>
                        </div>

                        {/* Right — CTA */}
                        <div className="flex lg:flex-col gap-3 lg:items-stretch lg:min-w-[200px]">
                          <Link
                            href={`/programs/${program.slug}`}
                            className={`btn ${program.ctaClass} btn-lg justify-center`}
                          >
                            {program.cta}
                            <ArrowRight size={18} />
                          </Link>
                          <Link
                            href={`/programs/${program.slug}`}
                            className="btn btn-ghost btn-lg justify-center text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
        <section className="bg-neutral-50 border-t border-neutral-200 py-16">
          <div className="container-site text-center">
            <h2 className="display-sm text-neutral-900 mb-4">
              Not sure which program fits?
            </h2>
            <p className="body-lg text-neutral-600 mb-8 max-w-xl mx-auto">
              Every school is different. Tell us about your students, your schedule,
              and your goals — and we&apos;ll help you figure out the right fit.
            </p>
            <Link href="/contact" className="btn btn-primary btn-xl">
              Talk to our team
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  )
}
