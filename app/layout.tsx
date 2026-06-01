import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Marble Educational Center | Quality Montessori Education",
  description:
    "Discovering the creativity in you. A Montessori-inspired educational community in Accra committed to nurturing young minds with excellence, character, and innovation.",
  keywords: [
    "Marble Educational Center",
    "MEC",
    "Montessori education",
    "school in Accra",
    "primary school",
    "secondary school",
    "Ghana education",
  ],
  authors: [{ name: "Marble Educational Center" }],
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://mec.edu.gh",
    siteName: "Marble Educational Center",
    title: "Marble Educational Center | Quality Education in Accra",
    description:
      "Discovering the creativity in you. A Montessori-inspired educational community.",
    images: [
      {
        url: "https://mec.edu.gh/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marble Educational Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marble Educational Center",
    description: "Discovering the creativity in you.",
    images: ["https://mec.edu.gh/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Lato:wght@300;400;700;900&display=swap"
          as="style"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-cream">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Analytics, etc. go here */}
      </body>
    </html>
  );
}
