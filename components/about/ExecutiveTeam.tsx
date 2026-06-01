// components/about/ExecutiveTeam.tsx
// ---------------------------------------------------------------------------
// Leadership team — 3-column card grid.
// Each card has an avatar placeholder, name, role, and short bio.
// ---------------------------------------------------------------------------

import { EXECUTIVES, type Person } from "@/lib/mock-data/about-mock-data";

// ---------------------------------------------------------------------------
// Avatar placeholder — swap inner div for next/image in production
// ---------------------------------------------------------------------------
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .map((n) => n[0])
    .join("");

  return (
    <div
      className="relative mx-auto mb-5 flex h-24 w-24 items-center justify-center
                 overflow-hidden rounded-full border-4 border-cream bg-navy/10
                 ring-2 ring-cream-dark"
      aria-hidden="true"
    >
      {/* Replace with:
          <Image src={person.imageUrl} alt={person.name} fill className="object-cover" />
      */}
      <span className="font-display text-xl font-bold text-navy/40">{initials}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Executive card
// ---------------------------------------------------------------------------
function ExecutiveCard({ person }: { person: Person }) {
  return (
    <article
      className="group flex flex-col items-center rounded-2xl border border-cream-dark
                 bg-white p-8 text-center shadow-card transition-all duration-300
                 hover:-translate-y-1 hover:shadow-card-md hover:border-navy/20"
    >
      <Avatar name={person.name} />

      {/* Name */}
      <h3 className="font-display text-lg font-semibold text-navy mb-1">
        {person.name}
      </h3>

      {/* Role badge */}
      <span className="mb-4 inline-flex items-center rounded-full bg-sienna/10
                       px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-sienna">
        {person.role}
      </span>

      {/* Bio */}
      <p className="text-sm leading-relaxed text-navy/60">{person.bio}</p>

      {/* Hover underline accent */}
      <div className="mt-5 h-0.5 w-0 rounded-full bg-sienna transition-all
                      duration-300 group-hover:w-12" />
    </article>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------
export function ExecutiveTeam() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="bg-cream py-16 md:py-20 lg:py-24"
    >
      <div className="section-container">

        {/* ── Header ───────────────────────────────────────────────── */}
        <div className="mb-12 flex flex-col gap-1 sm:flex-row sm:items-end
                        sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-sienna">
              ⑤ Executive Leadership
            </p>
            <h2
              id="team-heading"
              className="section-title text-3xl md:text-4xl"
            >
              The Team Steering the Ship
            </h2>
          </div>
          <p className="max-w-sm text-sm text-navy/60 sm:text-right">
            Guided by experience, driven by purpose — meet the people
            who lead Marble Educational Center every day.
          </p>
        </div>

        {/* ── Cards ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXECUTIVES.map((exec) => (
            <ExecutiveCard key={exec.id} person={exec} />
          ))}
        </div>

      </div>
    </section>
  );
}
