// components/about/StaffDirectory.tsx
// ---------------------------------------------------------------------------
// Staff directory with client-side department filter pills.
// 6-person grid (3-col desktop → 2-col tablet → 1-col mobile).
// ---------------------------------------------------------------------------

"use client";

import { useState } from "react";
import Link from "next/link";
import { STAFF, STAFF_DEPARTMENTS, type Person } from "@/lib/mock-data/about-mock-data";

// ---------------------------------------------------------------------------
// Avatar — shows initials; swap for next/image in production
// ---------------------------------------------------------------------------
function StaffAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .map((n) => n[0])
    .join("");

  return (
    <div
      className="flex h-14 w-14 flex-shrink-0 items-center justify-center
                 overflow-hidden rounded-full border-2 border-cream-dark bg-navy/8"
      aria-hidden="true"
    >
      <span className="font-display text-sm font-bold text-navy/40">{initials}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Staff card — horizontal layout (avatar + text)
// ---------------------------------------------------------------------------
function StaffCard({ person }: { person: Person }) {
  return (
    <article
      className="flex items-center gap-4 rounded-xl border border-cream-dark bg-white
                 px-5 py-4 shadow-card transition-all duration-200
                 hover:border-navy/20 hover:shadow-card-md"
    >
      <StaffAvatar name={person.name} />
      <div className="min-w-0">
        <p className="truncate font-semibold text-navy text-sm">{person.name}</p>
        <p className="truncate text-xs text-navy/55 mt-0.5">{person.role}</p>
        {person.department && (
          <span
            className="mt-1.5 inline-flex items-center rounded-full bg-sienna/8
                       px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide
                       text-sienna"
          >
            {person.department}
          </span>
        )}
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------
export function StaffDirectory() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? STAFF
      : STAFF.filter((s) => s.department === active);

  return (
    <section
      id="staff"
      aria-labelledby="staff-heading"
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="section-container">

        {/* ── Header ───────────────────────────────────────────────── */}
        <div className="mb-10 flex flex-col gap-1 sm:flex-row sm:items-end
                        sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-sienna">
              ⑥ Staff Directory
            </p>
            <h2
              id="staff-heading"
              className="section-title text-3xl md:text-4xl"
            >
              Our People
            </h2>
          </div>
          <Link
            href="/staff"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold
                       text-sienna transition-colors hover:text-sienna-light"
          >
            View full directory
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* ── Department filter pills ───────────────────────────────── */}
        <div
          role="group"
          aria-label="Filter staff by department"
          className="mb-8 flex flex-wrap gap-2"
        >
          {STAFF_DEPARTMENTS.map((dept) => (
            <button
              key={dept}
              onClick={() => setActive(dept)}
              aria-pressed={active === dept}
              className={`rounded-full border px-4 py-1.5 text-xs font-bold
                          uppercase tracking-wide transition-all duration-150
                          focus-visible:outline-none focus-visible:ring-2
                          focus-visible:ring-sienna focus-visible:ring-offset-2
                          ${
                            active === dept
                              ? "border-navy bg-navy text-white shadow-sm"
                              : "border-cream-dark bg-cream text-navy/60 hover:border-navy/30 hover:text-navy"
                          }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* ── Grid ─────────────────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            aria-live="polite"
            aria-atomic="true"
          >
            {filtered.map((person) => (
              <StaffCard key={person.id} person={person} />
            ))}
          </div>
        ) : (
          <div
            className="flex h-32 items-center justify-center rounded-2xl
                       border border-dashed border-cream-dark text-sm text-navy/40"
            aria-live="polite"
          >
            No staff in this department yet.
          </div>
        )}

        {/* ── Footer note ──────────────────────────────────────────── */}
        <p className="mt-6 text-center text-xs text-navy/40">
          Showing {filtered.length} of {STAFF.length} staff members.{" "}
          <Link href="/staff" className="text-sienna underline-offset-2 hover:underline">
            See all
          </Link>
        </p>

      </div>
    </section>
  );
}
