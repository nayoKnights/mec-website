// app/about/page.tsx
// ---------------------------------------------------------------------------
// About page — Marble Educational Center
//
// Sections (in order):
//   1. AboutHero         — breadcrumb + headline banner
//   2. OurStory          — narrative + animated stat tiles
//   3. MissionVision     — mission / vision cards + 4 value tiles
//   4. FounderSpotlight  — founder portrait + biography
//   5. ExecutiveTeam     — 3-person leadership grid
//   6. StaffDirectory    — 6-person grid with dept filter (client component)
//   7. Accreditations    — 4 accreditation tiles
//   8. AboutCTA          — apply now / open day banner
//
// Production notes:
//   - Replace mock-data imports with Sanity GROQ queries + ISR revalidation
//   - All image placeholders are marked with comments for next/image swap-in
//   - StaffDirectory is a Client Component (uses useState for filter)
//   - Page-level ISR: export const revalidate = 3600 (re-fetch every hour)
// ---------------------------------------------------------------------------

import type { Metadata } from "next";
import { AboutHero }        from "@/components/about/AboutHero";
import { OurStory }         from "@/components/about/OurStory";
import { MissionVision }    from "@/components/about/MissionVision";
import { FounderSpotlight } from "@/components/about/FounderSpotlight";
import { ExecutiveTeam }    from "@/components/about/ExecutiveTeam";
import { StaffDirectory }   from "@/components/about/StaffDirectory";
import { Accreditations }   from "@/components/about/Accreditations";
import { AboutCTA }         from "@/components/about/AboutCTA";

// ---------------------------------------------------------------------------
// ISR — revalidate every hour
// ---------------------------------------------------------------------------
export const revalidate = 3600;

// ---------------------------------------------------------------------------
// Page metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "About Us | Marble Educational Center",
  description:
    "Learn about Marble Educational Center — our story, mission, values, founder, " +
    "leadership team, staff, and accreditations. A Montessori-inspired school in Accra, " +
    "Ghana, nurturing curious and confident learners since 2008.",
  openGraph: {
    title: "About Us | Marble Educational Center",
    description:
      "Discover the story, mission, and people behind Marble Educational Center — " +
      "one of Accra's most respected Montessori-inspired schools.",
    url: "https://mec.edu.gh/about",
    images: [
      {
        url: "https://mec.edu.gh/og-about.png",
        width: 1200,
        height: 630,
        alt: "About Marble Educational Center",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function AboutPage() {
  return (
    <>
      {/* ═══ 1. Hero ══════════════════════════════════════════════════════ */}
      <AboutHero />

      {/* ═══ 2. Our Story + Stats ═════════════════════════════════════════ */}
      <OurStory />

      {/* ═══ 3. Mission, Vision & Values ══════════════════════════════════ */}
      <MissionVision />

      {/* ═══ 4. Founder Spotlight ════════════════════════════════════════ */}
      <FounderSpotlight />

      {/* ═══ 5. Executive Leadership ══════════════════════════════════════ */}
      <ExecutiveTeam />

      {/* ═══ 6. Staff Directory (client — dept filter) ════════════════════ */}
      <StaffDirectory />

      {/* ═══ 7. Accreditations ════════════════════════════════════════════ */}
      <Accreditations />

      {/* ═══ 8. CTA Banner ════════════════════════════════════════════════ */}
      <AboutCTA />
    </>
  );
}
