import type { HeroSlide, StatItem, QuickLink } from "@/types";

// ─── Hero Slides ──────────────────────────────────────────────────────────────
// In production: fetched from Sanity CMS via GROQ, ISR revalidated via webhook
export const MOCK_HERO_SLIDES: HeroSlide[] = [
  {
    _id: "slide-1",
    title: "Discovering the\nCreativity in You",
    subtitle:
      "A Montessori-inspired environment where every child's unique potential is nurtured with care, curiosity, and community.",
    ctaPrimary:   { label: "Apply Now",  href: "/admissions" },
    ctaSecondary: { label: "Learn More", href: "/about" },
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&auto=format&fit=crop&q=80",
    image: { _type: "image", asset: { _ref: "slide-1", _type: "reference" } },
    order: 1,
  },
  {
    _id: "slide-2",
    title: "Excellence in\nEvery Classroom",
    subtitle:
      "Dedicated faculty, modern resources, and a rigorous curriculum designed to prepare tomorrow's leaders.",
    ctaPrimary:   { label: "Our Academics", href: "/academics" },
    ctaSecondary: { label: "About Us",      href: "/about" },
    imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1600&auto=format&fit=crop&q=80",
    image: { _type: "image", asset: { _ref: "slide-2", _type: "reference" } },
    order: 2,
  },
  {
    _id: "slide-3",
    title: "A Community\nBuilt on Values",
    subtitle:
      "Sports, arts, clubs, and events that build character, teamwork, and lifelong friendships.",
    ctaPrimary:   { label: "Apply Now",   href: "/admissions" },
    ctaSecondary: { label: "Contact Us",  href: "/contact" },
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&auto=format&fit=crop&q=80",
    image: { _type: "image", asset: { _ref: "slide-3", _type: "reference" } },
    order: 3,
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { label: "Students Enrolled",  value: "200", suffix: "+" },
  { label: "Teaching Staff",     value: "10" },
  { label: "Graduate Placement", value: "98",    suffix: "%" },
  { label: "Year Founded",       value: "2021" },
];

// ─── Quick Links ──────────────────────────────────────────────────────────────
export const QUICK_LINKS: QuickLink[] = [
  {
    label:       "Admissions",
    href:        "/admissions",
    description: "Apply for the upcoming term",
    icon:        "admissions",
    colorScheme: "sienna",
  },
  {
    label:       "Academics",
    href:        "/academics",
    description: "Curriculum & departments",
    icon:        "academics",
    colorScheme: "navy",
  },
  {
    label:       "About Us",
    href:        "/about",
    description: "Our story & leadership",
    icon:        "about",
    colorScheme: "green",
  },
  {
    label:       "Student Portal",
    href:        "/portal",
    description: "Grades, timetables & reports",
    icon:        "portal",
    colorScheme: "amber",
  },
];

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "About",      href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics",  href: "/academics" },
  { label: "Contact",    href: "/contact" },
];