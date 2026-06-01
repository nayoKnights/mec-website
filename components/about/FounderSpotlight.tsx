// components/about/FounderSpotlight.tsx
// ---------------------------------------------------------------------------
// Full-width founder spotlight — portrait, name, role, and multi-paragraph bio.
// On desktop: portrait left, bio right. On mobile: stacked.
// ---------------------------------------------------------------------------

import { FOUNDER } from "@/lib/mock-data/about-mock-data";

export function FounderSpotlight() {
  const paragraphs = FOUNDER.bio?.split("\n\n").filter(Boolean) ?? [];

  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="relative overflow-hidden bg-navy py-16 md:py-20 lg:py-24"
    >
      {/* ── Background decoration ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px]
                   -translate-y-1/2 rounded-full border border-white/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-20 top-0 h-72 w-72
                   rounded-full bg-sienna/8 blur-3xl"
      />

      <div className="section-container relative z-10">

        {/* ── Section label ─────────────────────────────────────────── */}
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-sienna-light">
            ④ Founder
          </p>
          <h2
            id="founder-heading"
            className="font-display text-3xl font-bold text-white md:text-4xl"
          >
            The Visionary Behind MEC
          </h2>
        </div>

        {/* ── Content ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">

          {/* Portrait */}
          <div className="mx-auto lg:mx-0">
            {/* Image frame */}
            <div
              className="relative mx-auto w-56 overflow-hidden rounded-2xl
                         border border-white/10 bg-navy-dark lg:w-full"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Replace with next/image once real portrait is available */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex flex-col items-center justify-center
                           gap-3 text-white/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                  className="h-16 w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="text-xs">Portrait · S3/CloudFront</span>
              </div>

              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-24
                              bg-gradient-to-t from-navy/80 to-transparent" />
            </div>

            {/* Name / role card below portrait */}
            <div className="mt-4 text-center lg:text-left">
              <p className="font-display text-lg font-semibold text-white">
                {FOUNDER.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-sienna-light">
                {FOUNDER.role}
              </p>
            </div>
          </div>

          {/* Bio text */}
          <div className="space-y-5">
            {/* Opening quote mark */}
            <p
              aria-hidden="true"
              className="font-display text-8xl font-bold leading-none text-sienna/30
                         select-none -mb-6"
            >
              "
            </p>

            {paragraphs.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed text-white/75 ${
                  i === 0
                    ? "text-lg font-medium text-white/90"
                    : "text-base"
                }`}
              >
                {para}
              </p>
            ))}

            {/* Divider */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/30">
                Marble Educational Center · Est. 2008
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
