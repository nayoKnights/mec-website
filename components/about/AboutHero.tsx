// components/about/AboutHero.tsx
// ---------------------------------------------------------------------------
// About page hero — full-width navy banner with breadcrumb, heading,
// tagline, and a school-building image placeholder (next/image-ready).
// ---------------------------------------------------------------------------

import Link from "next/link";
import Image from "next/image";

export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-navy"
      aria-labelledby="about-hero-heading"
    >
      {/* ── Decorative background rings ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px]
                   rounded-full border border-white/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-[380px] w-[380px]
                   rounded-full border border-sienna/10"
      />
      {/* Warm glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-full w-1/2
                   bg-gradient-to-l from-sienna/10 to-transparent"
      />

      <div className="section-container relative z-10 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: text ──────────────────────────────────────────── */}
          <div>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <Link href="/" className="transition-colors hover:text-white/80">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">/</li>
                <li className="font-semibold text-white/90" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>

            {/* Eyebrow */}
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-sienna-light">
              Our Story
            </p>

            {/* Heading */}
            <h1
              id="about-hero-heading"
              className="font-display font-bold text-white leading-tight
                         text-4xl md:text-5xl lg:text-[3.25rem]"
            >
              Where Every Child{" "}
              <em className="italic text-sienna-light not-italic">
                Discovers
              </em>{" "}
              Their Potential
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg max-w-lg">
              Since 2008, Marble Educational Center has been nurturing curious,
              confident, and compassionate learners in the heart of Accra —
              one child at a time.
            </p>

            {/* Quick-jump anchors */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#story" className="btn btn-primary text-sm px-5 py-2.5">
                Our Story
              </Link>
              <Link
                href="#team"
                className="btn border-2 border-white/30 text-white hover:bg-white/10
                           text-sm px-5 py-2.5"
              >
                Meet the Team
              </Link>
            </div>
          </div>

          {/* ── Right: image ────────────────────────────────────────── */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Image frame */}
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl
                         border border-white/10 bg-navy-dark"
            >
              {/* Replace src with real Sanity image via next/image */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex flex-col items-center justify-center
                           gap-3 text-white/20"
              >
                {/* Placeholder — swap for:
                    <Image src={heroImage} alt="Marble Educational Center campus"
                           fill className="object-cover" priority />
                */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9.75L12 3l9 6.75V21H3V9.75z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
                </svg>
                <span className="text-sm">School building · S3/CloudFront</span>
              </div>
            </div>

            {/* Floating stat badge */}
            <div
              className="absolute -bottom-4 -left-4 rounded-xl bg-sienna px-5 py-3
                         shadow-lg shadow-sienna/30 md:-bottom-5 md:-left-5"
            >
              <p className="font-display text-2xl font-bold text-white">2008</p>
              <p className="text-xs text-white/80">Est. in Accra</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
