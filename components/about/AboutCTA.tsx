// components/about/AboutCTA.tsx
// ---------------------------------------------------------------------------
// About page CTA banner — navy gradient with Apply + Open Day actions.
// Reuses the same design language as the homepage CallToAction.
// ---------------------------------------------------------------------------

import Link from "next/link";

export function AboutCTA() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="relative overflow-hidden bg-gradient-to-r from-navy via-navy to-navy-700
                 py-16 md:py-20"
    >
      {/* ── Decorative blobs ─────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 h-80 w-80
                   rounded-full bg-sienna/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-0 h-80 w-80
                   rounded-full bg-sienna/5 blur-3xl"
      />

      <div className="section-container relative z-10 text-center">

        {/* Eyebrow */}
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-sienna-light">
          Ready to Begin?
        </p>

        {/* Heading */}
        <h2
          id="about-cta-heading"
          className="font-display text-4xl font-bold text-white md:text-5xl mb-5"
        >
          Join the Marble Family
        </h2>

        {/* Sub-text */}
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/70
                      md:text-lg">
          Applications for the 2025/26 academic year are open. Take the first
          step — apply today, or come experience MEC in person at our next Open Day.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/admissions/apply" className="btn btn-primary px-8 py-3.5 text-base">
            Apply Now
          </Link>
          <Link
            href="/admissions/open-day"
            className="btn border-2 border-white/30 text-white
                       hover:bg-white/10 px-8 py-3.5 text-base"
          >
            Attend Open Day
          </Link>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-xs text-white/40">
          Have questions?{" "}
          <Link
            href="/contact"
            className="text-sienna-light underline-offset-2 hover:underline"
          >
            Contact our admissions team
          </Link>{" "}
          — we&apos;re happy to help.
        </p>

      </div>
    </section>
  );
}
