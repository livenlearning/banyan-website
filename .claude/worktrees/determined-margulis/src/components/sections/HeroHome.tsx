import Link from 'next/link'

// ─────────────────────────────────────────────────────────────────────────────
// HeroHome
// Place at: src/components/sections/HeroHome.tsx
//
// SWAP THE PHOTO: Replace the backgroundImage URL below with your own photo.
// Ideal: a photo of students in a live session, classroom connected via screen,
// or teachers facilitating. Landscape 16:9, min 1600px wide.
// ─────────────────────────────────────────────────────────────────────────────

export default function HeroHome() {
  return (
    <section className="relative text-white overflow-hidden">

      {/* ── Layer 1: Background video ─────────────────────────────────────── */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-classroom.mp4" type="video/mp4" />
      </video>

      {/* ── Layer 2: Brand gradient overlay — keeps text readable ─────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(5,30,56,0.93) 0%, rgba(14,74,131,0.87) 55%, rgba(15,96,90,0.82) 100%)',
        }}
      />

      {/* ── Layer 3: Content ──────────────────────────────────────────────── */}
      <div className="container-site py-28 md:py-36 lg:py-44 relative z-10">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <p className="section-label text-blue-300 mb-4">
            Live · Expert-Led · Global
          </p>

          {/* Headline */}
          <h1 className="display-xl text-white mb-6 text-balance">
            The world,{' '}
            <span className="text-gradient-gold">inside your classroom.</span>
          </h1>

          {/* Sub-headline */}
          <p className="body-lg text-blue-100 max-w-2xl mb-10">
            Banyan connects K–12 students to live experts, global peers, and
            real-world experiences — building the curiosity and perspective
            that books alone can&apos;t deliver.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="/programs/global-learning-live" className="btn btn-gold btn-lg">
              Explore Global Learning Live
            </Link>
            <Link href="/programs" className="btn btn-white btn-lg">
              See all programs
            </Link>
          </div>

          {/* Social proof */}
          <p className="mt-10 text-sm text-blue-300">
            Trusted by schools in 20+ countries · 15+ years · CILC Pinnacle Award
          </p>
        </div>
      </div>

    </section>
  )
}
