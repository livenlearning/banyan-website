// ─────────────────────────────────────────────────────────────────────────────
// ImpactStats
// Place at: src/components/sections/ImpactStats.tsx
// ─────────────────────────────────────────────────────────────────────────────

const stats = [
  { number: '5,000+',  label: 'Students served',        sub: 'across our flagship program alone' },
  { number: '17',      label: 'Years of partnership',   sub: 'with our anchor school in Taipei' },
  { number: '20+',     label: 'Countries connected',    sub: 'live, synchronous, every cycle' },
  { number: '2009',    label: 'Year founded',           sub: 'building this before it was a category' },
]

export default function ImpactStats() {
  return (
    <section className="section-padding bg-blue-600">
      <div className="container-site">

        <div className="text-center mb-14">
          <p className="section-label text-blue-300 mb-3">Our Impact</p>
          <h2 className="display-md text-white max-w-2xl mx-auto text-balance">
            Built on 15 years of doing the hard thing
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.number} className="text-center">
              <div className="stat-number text-white mb-2">{stat.number}</div>
              <div className="text-sm font-semibold text-blue-100 mb-1">{stat.label}</div>
              <div className="text-xs text-blue-300 leading-relaxed">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
