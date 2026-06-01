import type { HeroSlide, NewsPost, SchoolEvent, StatItem, QuickLink } from "@/types";

// ─── Hero Slides ──────────────────────────────────────────────────────────────
// In production: fetched from Sanity CMS via GROQ, ISR revalidated via webhook
export const MOCK_HERO_SLIDES: HeroSlide[] = [
  {
    _id: "slide-1",
    title: "Discovering the\nCreativity in You",
    subtitle:
      "A Montessori-inspired environment where every child's unique potential is nurtured with care, curiosity, and community.",
    ctaPrimary:   { label: "Apply Now",   href: "/admissions" },
    ctaSecondary: { label: "Learn More",  href: "/about" },
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
    ctaSecondary: { label: "Meet Our Staff", href: "/staff" },
    imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1600&auto=format&fit=crop&q=80",
    image: { _type: "image", asset: { _ref: "slide-2", _type: "reference" } },
    order: 2,
  },
  {
    _id: "slide-3",
    title: "A Community\nBuilt on Values",
    subtitle:
      "Sports, arts, clubs, and events that build character, teamwork, and lifelong friendships.",
    ctaPrimary:   { label: "View Gallery", href: "/gallery" },
    ctaSecondary: { label: "Upcoming Events", href: "/events" },
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&auto=format&fit=crop&q=80",
    image: { _type: "image", asset: { _ref: "slide-3", _type: "reference" } },
    order: 3,
  },
];

// ─── News Posts ───────────────────────────────────────────────────────────────
// In production: Sanity GROQ query for 3 latest published posts
export const MOCK_NEWS_POSTS: NewsPost[] = [
  {
    _id: "news-1",
    title: "MEC Students Sweep Regional Science Olympiad",
    slug: "mec-students-sweep-regional-science-olympiad",
    excerpt:
      "Our Year 8 team brought home three gold medals, showcasing months of dedication and scientific inquiry.",
    thumbnailUrl: "https://images.unsplash.com/photo-1532094349884-543559c6c8f8?w=400&auto=format&fit=crop&q=80",
    thumbnail: { _type: "image", asset: { _ref: "t1", _type: "reference" } },
    publishedAt: "2026-05-18T09:00:00Z",
    category: "Academic Achievement",
    author: "Mrs. Mensah",
  },
  {
    _id: "news-2",
    title: "New Library Wing Opens to Students",
    slug: "new-library-wing-opens-to-students",
    excerpt:
      "The newly renovated library wing features 2,000 new titles, digital research stations, and collaborative reading spaces.",
    thumbnailUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&auto=format&fit=crop&q=80",
    thumbnail: { _type: "image", asset: { _ref: "t2", _type: "reference" } },
    publishedAt: "2026-05-14T10:30:00Z",
    category: "Infrastructure",
    author: "Admin Office",
  },
  {
    _id: "news-3",
    title: "Annual Art Exhibition: A Celebration of Young Voices",
    slug: "annual-art-exhibition-young-voices",
    excerpt:
      "Over 200 artworks from KG through Year 9 filled the main hall at our most attended gallery event yet.",
    thumbnailUrl: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?w=400&auto=format&fit=crop&q=80",
    thumbnail: { _type: "image", asset: { _ref: "t3", _type: "reference" } },
    publishedAt: "2026-05-10T14:00:00Z",
    category: "Arts & Culture",
    author: "Mr. Asante",
  },
];

// ─── Events ───────────────────────────────────────────────────────────────────
// In production: PlanetScale query via API Route / Lambda, cached with SWR
export const MOCK_EVENTS: SchoolEvent[] = [
  {
    id: "evt-1",
    title: "End-of-Term PTA Meeting",
    date: "2026-05-28T16:00:00Z",
    location: "Main Hall",
    type: "community",
    description: "Termly review for parents and guardians.",
  },
  {
    id: "evt-2",
    title: "Inter-House Sports Day",
    date: "2026-06-04T07:30:00Z",
    location: "School Grounds",
    type: "sports",
    description: "Annual house athletics competition for all year groups.",
  },
  {
    id: "evt-3",
    title: "Term 3 Examinations Begin",
    date: "2026-06-09T08:00:00Z",
    location: "All Classrooms",
    type: "academic",
    isAllDay: true,
  },
  {
    id: "evt-4",
    title: "Graduation Ceremony – Class of 2026",
    date: "2026-06-20T10:00:00Z",
    location: "Main Auditorium",
    type: "academic",
    description: "A milestone celebration for our graduating class.",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { label: "Students Enrolled", value: "1,200",  suffix: "+" },
  { label: "Teaching Staff",    value: "85" },
  { label: "Graduate Placement",value: "98",     suffix: "%" },
  { label: "Year Founded",      value: "1962" },
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
    label:       "Events",
    href:        "/events",
    description: "Upcoming school activities",
    icon:        "events",
    colorScheme: "navy",
  },
  {
    label:       "Staff Directory",
    href:        "/staff",
    description: "Meet our dedicated team",
    icon:        "staff",
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
  {
    label: "About",
    href:  "/about",
    children: [
      { label: "Our Story",   href: "/about/our-story" },
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Leadership",  href: "/about/leadership" },
      { label: "Facilities",  href: "/about/facilities" },
    ],
  },
  {
    label: "Admissions",
    href:  "/admissions",
    children: [
      { label: "Apply Now",        href: "/admissions/apply" },
      { label: "Requirements",     href: "/admissions/requirements" },
      { label: "Fees & Bursaries", href: "/admissions/fees" },
      { label: "Open Day",         href: "/admissions/open-day" },
    ],
  },
  {
    label: "Academics",
    href:  "/academics",
    children: [
      { label: "Curriculum",  href: "/academics/curriculum" },
      { label: "Departments", href: "/academics/departments" },
      { label: "Library",     href: "/academics/library" },
      { label: "Results",     href: "/academics/results" },
    ],
  },
  { label: "News",    href: "/news" },
  { label: "Events",  href: "/events" },
  { label: "Staff",   href: "/staff" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
