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
  // children removed — no dropdown nav items in current build
}

// ─── Quick links ──────────────────────────────────────────────────────────────

export interface QuickLink {
  label: string;
  href: string;
  description: string;
  icon: "admissions" | "academics" | "about" | "portal";
  colorScheme: "sienna" | "navy" | "green" | "amber";
}

// ─── API Response wrappers ────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  error?: string;
  revalidatedAt?: string;
}