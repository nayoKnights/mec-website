import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistanceToNow, parseISO } from "date-fns";

// ─── Class name utility ────────────────────────────────────────────────────────
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Date helpers ─────────────────────────────────────────────────────────────

/** Format an ISO date string for event cards: "15 MAY" */
export function formatEventDate(iso: string): { day: string; month: string } {
  const d = parseISO(iso);
  return {
    day:   format(d, "d"),
    month: format(d, "MMM").toUpperCase(),
  };
}

/** Format a full readable date: "15 May 2025" */
export function formatFullDate(iso: string): string {
  return format(parseISO(iso), "d MMM yyyy");
}

/** "3 days ago" */
export function formatRelative(iso: string): string {
  return formatDistanceToNow(parseISO(iso), { addSuffix: true });
}

// ─── Text helpers ─────────────────────────────────────────────────────────────

export function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max).trimEnd() + "…";
}

export function slugToTitle(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// ─── Event type helpers ───────────────────────────────────────────────────────

const EVENT_TYPE_COLORS: Record<string, string> = {
  academic:  "bg-navy-100 text-navy",
  sports:    "bg-emerald-50 text-emerald-700",
  arts:      "bg-purple-50 text-purple-700",
  community: "bg-amber-50 text-amber-700",
  holiday:   "bg-sienna-50 text-sienna",
};

export function eventTypeColor(type: string): string {
  return EVENT_TYPE_COLORS[type] ?? "bg-gray-100 text-gray-600";
}

// ─── Sanity image URL builder ─────────────────────────────────────────────────
// In production, use @sanity/image-url. This is a simplified version.
export function buildImageUrl(ref: string, width = 800, height?: number): string {
  // e.g. "image-abc123-800x600-jpg"
  const [, id, dims, fmt] = ref.split("-");
  const dimension = height ? `${width}x${height}` : `${width}`;
  return `https://cdn.sanity.io/images/${
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "demo"
  }/production/${id}-${dims}.${fmt}?w=${dimension}&fit=crop&auto=format`;
}

// ─── Animation helpers ────────────────────────────────────────────────────────

/** Generate CSS stagger delay string */
export function staggerDelay(index: number, base = 100): string {
  return `${index * base}ms`;
}

// ─── Misc ─────────────────────────────────────────────────────────────────────

export function pluralize(n: number, singular: string, plural = singular + "s") {
  return `${n} ${n === 1 ? singular : plural}`;
}
