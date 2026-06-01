// components/about/MissionVision.tsx
// ---------------------------------------------------------------------------
// Mission & Vision cards + 4 school-values grid.
// The two primary cards use a left-border accent in sienna / navy.
// ---------------------------------------------------------------------------

import { SCHOOL_VALUES } from "@/lib/mock-data/about-mock-data";

// ---------------------------------------------------------------------------
// Icon map — simple inline SVGs keyed to value icon strings.
// Avoids a full icon-library dependency while keeping the markup clean.
// ---------------------------------------------------------------------------
const ICONS: Record<string, React.ReactNode> = {
  bulb: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
         stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  heart: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
         stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  award: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
         stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
    </svg>
  ),
  users: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
         stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z" />
    </svg>
  ),
};

// ---------------------------------------------------------------------------
// Value card
// ---------------------------------------------------------------------------
function ValueCard({
  icon,
  title,
  description,
  index,
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div
      className="group flex flex-col gap-4 rounded-2xl border border-cream-dark bg-white
                 p-6 shadow-card transition-all duration-300
                 hover:-translate-y-1 hover:shadow-card-md hover:border-sienna/20"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl
                      bg-sienna/10 text-sienna transition-colors
                      group-hover:bg-sienna group-hover:text-white">
        {ICONS[icon]}
      </div>
      <div>
        <h3 className="mb-1.5 font-display font-semibold text-navy text-lg">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-navy/65">{description}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------
export function MissionVision() {
  return (
    <section
      id="mission"
      aria-labelledby="mv-heading"
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="section-container">

        {/* ── Header ───────────────────────────────────────────────── */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-sienna">
            ③ Mission &amp; Vision
          </p>
          <h2 id="mv-heading" className="section-title text-3xl md:text-4xl">
            What Drives Us Forward
          </h2>
        </div>

        {/* ── Mission / Vision cards ────────────────────────────────── */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Mission */}
          <div className="relative rounded-2xl border border-cream-dark bg-cream
                          p-8 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-sienna" />
            <div className="mb-4 flex h-12 w-12 items-center justify-center
                            rounded-xl bg-sienna/10 text-sienna">
              {/* Target icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-navy mb-3">
              Our Mission
            </h3>
            <p className="text-navy/70 leading-relaxed">
              To provide a child-centred, Montessori-inspired education that develops
              the whole person — intellectually curious, emotionally grounded, morally
              upright, and ready to contribute meaningfully to society.
            </p>
          </div>

          {/* Vision */}
          <div className="relative rounded-2xl border border-cream-dark bg-cream
                          p-8 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-navy" />
            <div className="mb-4 flex h-12 w-12 items-center justify-center
                            rounded-xl bg-navy/10 text-navy">
              {/* Eye icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-navy mb-3">
              Our Vision
            </h3>
            <p className="text-navy/70 leading-relaxed">
              To be West Africa's foremost model of progressive, purpose-driven education —
              producing graduates who are not only academically excellent, but compassionate
              leaders and responsible citizens of the world.
            </p>
          </div>
        </div>

        {/* ── Values ───────────────────────────────────────────────── */}
        <div>
          <h3 className="mb-6 font-display text-xl font-semibold text-navy">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SCHOOL_VALUES.map((v, i) => (
              <ValueCard
                key={v.title}
                icon={v.icon}
                title={v.title}
                description={v.description}
                index={i}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
