// components/about/OurStory.tsx
// ---------------------------------------------------------------------------
// School history narrative + 4 animated stat tiles.
// Stats use a lightweight IntersectionObserver counter animation.
// ---------------------------------------------------------------------------

"use client";

import { useEffect, useRef, useState } from "react";
import { ABOUT_STATS, type Stat } from "@/lib/mock-data/about-mock-data";

// ---------------------------------------------------------------------------
// Animated counter hook
// ---------------------------------------------------------------------------
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

// ---------------------------------------------------------------------------
// Single stat tile
// ---------------------------------------------------------------------------
function StatTile({ stat, animate }: { stat: Stat; animate: boolean }) {
  const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10);
  const count = useCountUp(numericValue, 1600, animate);

  return (
    <div className="flex flex-col items-center rounded-2xl border border-cream-dark
                    bg-white px-6 py-7 text-center shadow-card
                    transition-shadow duration-300 hover:shadow-card-md">
      <p className="font-display text-4xl font-bold text-sienna">
        {animate ? count.toLocaleString() : numericValue.toLocaleString()}
        {stat.suffix ?? ""}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-navy/60">
        {stat.label}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------
export function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      aria-labelledby="story-heading"
      className="bg-cream py-16 md:py-20 lg:py-24"
    >
      <div className="section-container">

        {/* ── Header ───────────────────────────────────────────────── */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-sienna">
            ② Our Story
          </p>
          <h2
            id="story-heading"
            className="section-title text-3xl md:text-4xl"
          >
            A Legacy of Learning
          </h2>
        </div>

        {/* ── Content grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px] lg:gap-16">

          {/* Text */}
          <div className="space-y-4 text-navy/80 leading-relaxed">
            <p>
              Founded in 2008 by a Montessori educator with an unshakeable belief in every
              child's potential, Marble Educational Center began as a single classroom with
              twelve students and a single conviction: that education, done right, changes lives.
            </p>
            <p>
              We chose the Montessori philosophy not as a trend, but as a truth — one that
              places the child at the centre, honours their natural curiosity, and gives them
              the time and space to grow into themselves. Over the years, that conviction
              has only deepened.
            </p>
            <p>
              Today, MEC is home to over 650 learners from nursery through secondary school,
              guided by 48 passionate educators who believe their job is not merely to
              teach content, but to build human beings — curious, kind, resilient, and ready
              for the world that awaits them.
            </p>
            <p>
              Our alumni carry that spirit into universities across Ghana and beyond,
              into boardrooms and classrooms, into communities and continents. They are
              our greatest testament.
            </p>
          </div>

          {/* Historic photo placeholder */}
          <div
            aria-hidden="true"
            className="relative mx-auto w-full max-w-xs overflow-hidden rounded-2xl
                       border border-cream-dark bg-cream-dark lg:mx-0"
            style={{ aspectRatio: "3/4" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center
                            gap-3 text-navy/25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
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
              </svg>
              <p className="text-xs text-center px-4">Historic campus photo · S3</p>
            </div>
            {/* Corner accent */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r
                            from-sienna to-navy opacity-60" />
          </div>
        </div>

        {/* ── Stats ────────────────────────────────────────────────── */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ABOUT_STATS.map((stat) => (
            <StatTile key={stat.label} stat={stat} animate={hasAnimated} />
          ))}
        </div>

      </div>
    </section>
  );
}
