/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // Enable ISR revalidation via Sanity webhooks
  experimental: {
    // Next 14 App Router PPR (Partial Prerendering) — opt-in per page
  },
};

module.exports = nextConfig;
