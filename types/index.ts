// ─── Sanity CMS Types ─────────────────────────────────────────────────────────

export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: { x: number; y: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface HeroSlide {
  _id: string;
  title: string;
  subtitle?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  image: SanityImage;
  imageUrl: string;
  order: number;
}

export interface NewsPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: SanityImage;
  thumbnailUrl: string;
  publishedAt: string;
  category: string;
  author?: string;
}

// ─── PlanetScale / Events Types ───────────────────────────────────────────────

export interface SchoolEvent {
  id: string;
  title: string;
  description?: string;
  date: string; // ISO 8601
  endDate?: string;
  location?: string;
  type: "academic" | "sports" | "arts" | "community" | "holiday";
  isAllDay?: boolean;
}

// ─── Stat types ───────────────────────────────────────────────────────────────

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  icon?: string;
}

// ─── Nav types ────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Quick links ──────────────────────────────────────────────────────────────

export interface QuickLink {
  label: string;
  href: string;
  description: string;
  icon: "admissions" | "events" | "staff" | "portal" | "gallery" | "news";
  colorScheme: "sienna" | "navy" | "green" | "amber";
}

// ─── API Response wrappers ────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  error?: string;
  revalidatedAt?: string;
}
