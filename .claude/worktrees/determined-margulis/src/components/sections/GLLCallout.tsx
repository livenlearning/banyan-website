import Link from 'next/link'

// ─────────────────────────────────────────────────────────────────────────────
// GLLCallout
// Place at: src/components/sections/GLLCallout.tsx
//
// SWAP THE PHOTO: Replace the backgroundImage URL with a real photo.
// Ideal: students on screen together, live session in action, classroom
// looking at a video call with peers. Landscape, min 800px wide.
// ─────────────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: '🌍',
    title: 'International by design',
    body: "Every cohort connects classrooms across different countries. Students don't just learn about the world — they meet it.",
  },
  {
    icon: '🔄',
    title: 'Repeatable cycles',
    body: "Four-week cycles with clear themes. Schools re-enroll cycle after cycle because students ask to come back.",
  },
  {
    icon: '✍️',
    title: 'Artifact-driven exchange',
    body: "Students create something and share it — a poem, a map, a question. Exchange happens through what they make.",
  },
  {
    icon: '👤',
    title: 'Always human-facilitated',
    body: "A trained Banyan facilitator guides every live session. Teachers participate. Nobody flies blind.",
  },
]

export default function GLLCallout() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: copy + features ─────────────────────────────────────── */}
          <div>
            <span className="badge badge-teal mb-6">Global Learning Live</span>

            <h2 className="display-md text-neutral-900 mb-5 text-balance">
              Not a pen-pal program.{' '}
              <span style={{ color: '#1ca59d' }}>An experience.</span>
            </h2>

            <p className="body-lg text-neutral-600 mb-8">
              Global Learning Live pairs your classroom with international peers
              for live, facilitated sessions built around awe, expression, and
              reciprocity. Students don&apos;t just see the world — they talk to it,
              respond to it, and are changed by it.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                  <div>
                    <p className="font-display font-semibold text-neutral-900 text-[15px] mb-0.5">
                      {f.title}
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/programs/global-learning-live" className="btn btn-teal btn-lg">
                Explore the program
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline btn-lg"
                style={{ borderColor: '#1ca59d', color: '#1ca59d' }}
              >
                Talk to a coordinator →
              </Link>
            </div>

            <div className="mt-7 pt-7 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                Currently piloting ·{' '}
                <strong className="text-neutral-700">Cohorts of ~4 classrooms</strong>{' '}
                · Ages 10–14 · ~$1,000 / classroom / cycle
              </p>
            </div>
          </div>

          {/* ── Right: photo ──────────────────────────────────────────────── */}
          <div className="relative">
            {/* Main photo */}
            {/* Replace URL with your own image when ready */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://picsum.photos/seed/videoconference24/800/600')",
              }}
            />

            {/* Floating stat badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg px-5 py-4 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold shrink-0"
                style={{ backgroundColor: '#1ca59d' }}
              >
                ✓
              </div>
              <div>
                <p className="text-xs text-neutral-500 leading-none mb-1">Schools re-enroll</p>
                <p className="font-display font-bold text-neutral-900 text-sm leading-none">
                  Cycle after cycle
                </p>
              </div>
            </div>

            {/* Floating country badge */}
            <div className="absolute -top-4 -right-4 bg-teal-400 text-white rounded-xl shadow-lg px-4 py-3">
              <p className="text-xs font-semibold opacity-80 leading-none mb-1">Countries connected</p>
              <p className="font-display font-bold text-2xl leading-none">20+</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
