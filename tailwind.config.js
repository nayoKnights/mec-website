/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MEC Brand — derived from logo: navy + burnt sienna
        navy: {
          DEFAULT: "#1B2A5E",
          50:  "#EEF0F8",
          100: "#D4D9EE",
          200: "#A9B3DD",
          300: "#7E8DCC",
          400: "#5367BB",
          500: "#2841AA",
          600: "#1B2A5E", // primary
          700: "#152249",
          800: "#0F1933",
          900: "#09101E",
        },
        sienna: {
          DEFAULT: "#A0522D",
          50:  "#F9EEE7",
          100: "#F0D4C0",
          200: "#E1AA81",
          300: "#D27F41",
          400: "#C35502",
          500: "#A0522D", // primary
          600: "#80421C",
          700: "#603216",
          800: "#40210E",
          900: "#201108",
        },
        cream: "#FAF8F4",
        // Functional tokens
        success:  "#1D9E75",
        warning:  "#BA7517",
        error:    "#D85A30",
      },
      fontFamily: {
        // Display: strong, authoritative for school branding
        display: ["var(--font-playfair)", "Georgia", "serif"],
        // Body: refined, legible
        body:    ["var(--font-lato)", "system-ui", "sans-serif"],
        // Mono (optional utility)
        mono:    ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "card":   "0 2px 8px 0 rgba(27,42,94,0.08), 0 1px 2px 0 rgba(27,42,94,0.04)",
        "card-md":"0 4px 20px 0 rgba(27,42,94,0.10), 0 2px 6px 0 rgba(27,42,94,0.06)",
        "card-lg":"0 8px 40px 0 rgba(27,42,94,0.12), 0 4px 12px 0 rgba(27,42,94,0.08)",
        "sienna": "0 4px 14px 0 rgba(160,82,45,0.30)",
      },
      animation: {
        "fade-up":       "fadeUp 0.6s ease forwards",
        "fade-in":       "fadeIn 0.4s ease forwards",
        "slide-left":    "slideLeft 0.5s ease forwards",
        "counter-up":    "counterUp 1.5s ease forwards",
        "shimmer":       "shimmer 1.5s infinite",
        "pulse-gentle":  "pulseGentle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp:      { from: { opacity: 0, transform: "translateY(24px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        fadeIn:      { from: { opacity: 0 }, to: { opacity: 1 } },
        slideLeft:   { from: { opacity: 0, transform: "translateX(24px)" }, to: { opacity: 1, transform: "translateX(0)" } },
        counterUp:   { from: { opacity: 0, transform: "translateY(10px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        shimmer:     { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        pulseGentle: { "0%, 100%": { opacity: 1 }, "50%": { opacity: 0.7 } },
      },
      backgroundImage: {
        "hero-gradient":    "linear-gradient(135deg, rgba(27,42,94,0.85) 0%, rgba(27,42,94,0.40) 60%, transparent 100%)",
        "card-shimmer":     "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
        "navy-texture":     "radial-gradient(ellipse at 20% 50%, rgba(160,82,45,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)",
        "footer-gradient":  "linear-gradient(180deg, #111827 0%, #0f172a 100%)",
      },
    },
  },
  plugins: [],
};
