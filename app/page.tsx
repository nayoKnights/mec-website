import React from "react";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { QuickLinks } from "@/components/sections/QuickLinks";
import { NewsSection } from "@/components/sections/NewsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import {
  MOCK_HERO_SLIDES,
  MOCK_NEWS_POSTS,
  MOCK_EVENTS,
  STATS,
} from "@/lib/mock-data";

/**
 * Homepage
 *
 * This page demonstrates the complete homepage layout with:
 * - Responsive hero carousel (Sanity-powered)
 * - Quick access links (portal, admissions, events, staff)
 * - Latest news feed (Sanity GROQ query)
 * - Upcoming events (PlanetScale + Lambda API)
 * - School stats with counter animations
 *
 * Production Notes:
 * - Hero slides: Fetch from Sanity with ISR, revalidate via webhook
 * - News posts: GROQ query (3 latest) with image optimization (next/image)
 * - Events: Lambda API call with SWR caching (60s TTL)
 * - Stats: Static data from CMS or hardcoded
 */
export default function HomePage() {
  return (
    <>
      {/* ═══ Hero Carousel ═══════════════════════════════════════════════════ */}
      <HeroCarousel slides={MOCK_HERO_SLIDES} autoPlayInterval={5000} />

      {/* ═══ Quick Links (4-column grid) ═══════════════════════════════════ */}
      <QuickLinks />

      {/* ═══ News Section ═══════════════════════════════════════════════════ */}
      <NewsSection posts={MOCK_NEWS_POSTS} maxItems={3} />

      {/* ═══ Events Section ═════════════════════════════════════════════════ */}
      <EventsSection events={MOCK_EVENTS} maxItems={3} />

      {/* ═══ Stats Section ══════════════════════════════════════════════════ */}
      <StatsSection stats={STATS} />

      {/* ═══ CTA Section (optional) ════════════════════════════════════════ */}
      <CallToAction />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Call-to-Action Section (simple, inspiring)
// ─────────────────────────────────────────────────────────────────────────────

function CallToAction() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-navy-700" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sienna/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sienna/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative section-container text-center z-10">
        <h2 className="font-display font-900 text-4xl md:text-5xl text-white mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Start your journey with Marble Educational Center. Discover your potential and grow
          alongside a supportive community of passionate educators and curious learners.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/admissions/apply" className="btn btn-primary">
            Apply Now
          </a>
          <a href="/admissions/open-day" className="btn btn-secondary">
            Attend Open Day
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-8">
          Questions? <a href="/contact" className="text-sienna hover:underline font-700">Get in touch</a> with our admissions team.
        </p>
      </div>
    </section>
  );
}
