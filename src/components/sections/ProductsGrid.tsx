import Link from 'next/link'

// ─────────────────────────────────────────────────────────────────────────────
// ProductsGrid
// Place at: src/components/sections/ProductsGrid.tsx
// ─────────────────────────────────────────────────────────────────────────────

const products = [
  {
    id: 'gll',
    badge: 'badge-teal',
    badgeLabel: 'Now Enrolling',
    href: '/programs/global-learning-live',
    name: 'Global Learning Live',
    tagline: 'Cohort-based international exchange',
    description:
      "A 4-week cycle where your classroom partners with international peers for live, facilitated sessions around shared themes.",
    details: ['4-week cycles', '~4 classrooms/cohort', 'Ages 10–14', '~$1,000 / cycle'],
    cta: 'Enroll your classroom',
    btnClass: 'btn-teal',
    // Card header gradient + emoji
    headerGradient: 'linear-gradient(135deg, #07524b 0%, #1ca59d 100%)',
    headerEmoji: '🌍',
    headerLabel: 'Global Learning Live',
  },
  {
    id: 'aipd',
    badge: 'badge-blue',
    badgeLabel: 'Enterprise',
    href: '/programs/ai-pd',
    name: 'AI Professional Development',
    tagline: 'District-wide AI literacy for educators',
    description:
      "A comprehensive PD program that equips teachers and administrators with practical AI literacy — grounded in pedagogy, not just tools.",
    details: ['Custom scope', 'District-level', 'Facilitator training', 'From $25,000'],
    cta: 'Request a proposal',
    btnClass: 'btn-primary',
    headerGradient: 'linear-gradient(135deg, #0b3b69 0%, #0e4a83 100%)',
    headerEmoji: '🤖',
    headerLabel: 'AI Professional Development',
  },
  {
    id: 'll',
    badge: 'badge-gold',
    badgeLabel: 'Flagship Program',
    href: '/programs/learning-live',
    name: 'Learning Live',
    tagline: '17 years. One school. The blueprint.',
    description:
      "Our foundational partnership with Tsai Hsing Elementary in Taipei — 5,000+ students, daily live sessions, 17 years running.",
    details: ['Exclusive partnership', 'Grades 5–8', 'Daily sessions', 'Est. 2009'],
    cta: 'Read the case study',
    btnClass: 'btn-gold',
    headerGradient: 'linear-gradient(135deg, #7e4908 0%, #e5a025 100%)',
    headerEmoji: '⭐',
    headerLabel: 'Learning Live',
  },
  {
    id: 'vft',
    badge: 'badge-neutral',
    badgeLabel: 'On Demand',
    href: '/programs/virtual-field-trips',
    name: 'Virtual Field Trips',
    tagline: 'One session. Anywhere in the world.',
    description:
      "A live, expert-guided virtual experience for any classroom. No ongoing commitment — just one high-quality session.",
    details: ['Single session', 'Any age group', '$300 / session', 'Easy booking'],
    cta: 'Book a session',
    btnClass: 'btn-outline',
    headerGradient: 'linear-gradient(135deg, #1a4a7a 0%, #4586c3 100%)',
    headerEmoji: '🗺️',
    headerLabel: 'Virtual Field Trips',
  },
]

export default function ProductsGrid() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-site">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Our Programs</p>
          <h2 className="display-md text-neutral-900 max-w-2xl mx-auto text-balance">
            Four ways to bring the world to your students
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="card flex flex-col">

              {/* Visual card header */}
              <div
                className="relative h-32 flex flex-col items-center justify-center overflow-hidden"
                style={{ background: product.headerGradient }}
              >
                {/* Large background emoji for texture */}
                <span
                  className="absolute -bottom-3 -right-2 text-8xl opacity-20 select-none"
                  aria-hidden="true"
                >
                  {product.headerEmoji}
                </span>
                {/* Foreground emoji */}
                <span className="text-4xl mb-1 relative z-10" aria-hidden="true">
                  {product.headerEmoji}
                </span>
                {/* Badge */}
                <span className="badge badge-white relative z-10 text-[10px] px-2 py-0.5">
                  {product.badgeLabel}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">

                {/* Name + tagline */}
                <h3 className="font-display text-lg font-bold text-neutral-900 mb-1 leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs font-medium text-neutral-500 mb-4 uppercase tracking-wide">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="body-sm flex-1 mb-5">
                  {product.description}
                </p>

                {/* Detail pills */}
                <ul className="flex flex-wrap gap-1.5 mb-6">
                  {product.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-xs bg-neutral-100 text-neutral-600 rounded-full px-2.5 py-1 font-medium"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={product.href} className={`btn ${product.btnClass} btn-sm justify-center`}>
                  {product.cta}
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
