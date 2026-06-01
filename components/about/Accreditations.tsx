// components/about/Accreditations.tsx
// ---------------------------------------------------------------------------
// Accreditations & affiliations — clean logo strip with description tooltips.
// ---------------------------------------------------------------------------

import { ACCREDITATIONS } from "@/lib/mock-data/about-mock-data";

export function Accreditations() {
  return (
    <section
      id="accreditations"
      aria-labelledby="accred-heading"
      className="bg-cream py-16 md:py-20"
    >
      <div className="section-container">

        {/* ── Header ───────────────────────────────────────────────── */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-sienna">
            ⑦ Accreditations &amp; Affiliations
          </p>
          <h2
            id="accred-heading"
            className="section-title text-3xl md:text-4xl"
          >
            Recognised Excellence
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-navy/60">
            Our commitment to quality is independently verified. Marble Educational
            Center is proud to hold the following accreditations and affiliations.
          </p>
        </div>

        {/* ── Accreditation tiles ──────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {ACCREDITATIONS.map((acc) => (
            <div
              key={acc.id}
              className="group flex flex-col items-center gap-3 rounded-2xl
                         border border-cream-dark bg-white px-5 py-7 text-center
                         shadow-card transition-all duration-300
                         hover:-translate-y-1 hover:shadow-card-md hover:border-sienna/20"
            >
              {/* Logo placeholder — replace with <Image /> */}
              <div
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-xl
                           border border-cream-dark bg-cream transition-colors
                           group-hover:border-sienna/20 group-hover:bg-sienna/5"
              >
                {/* Rosette / certificate icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-7 w-7 text-navy/30 transition-colors group-hover:text-sienna/60"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z"
                  />
                </svg>
              </div>

              {/* Abbreviation */}
              <p className="font-display text-lg font-bold text-navy">
                {acc.abbreviation}
              </p>

              {/* Full name */}
              <p className="text-xs font-semibold text-navy/50 leading-snug">
                {acc.name}
              </p>

              {/* Description — visible on hover on larger screens */}
              <p className="hidden text-[11px] leading-relaxed text-navy/50
                            group-hover:block sm:block">
                {acc.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
