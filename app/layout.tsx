import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

/*
 * FONTS
 * 
 * Outfit — our primary font. Modern, geometric, clean.
 * Used by premium brands. Works great for both headings and body.
 * https://fonts.google.com/specimen/Outfit
 *
 * Gym: Focus on Fitness
 * 
 * Geist Mono — monospace font for code/technical elements.
 * Kept from the Next.js default, rarely used in this project.
 *
 * next/font/google automatically:
 *   - Downloads the font at build time (no runtime Google request)
 *   - Self-hosts it (better privacy + performance)
 *   - Applies font-display: swap (text shows immediately, font loads async)
 */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/*
 * METADATA
 * 
 * Next.js exports this object to generate <head> tags.
 * This is how SEO works in Next.js — no manual <meta> tags.
 * These are defaults; individual pages can override them.
 */
export const metadata: Metadata = {
  title: {
    default: "Focus on Fitness — Forge Your Strength",
    template: "%s | Focus on Fitness",
  },
  description:
    "Premium strength training gym. Expert trainers, top-tier equipment, and personalized workout splits. Start your transformation today.",
  keywords: ["gym", "fitness", "strength training", "workout", "personal trainer"],
  openGraph: {
    title: "Focus on Fitness — Forge Your Strength",
    description:
      "Premium strength training gym. Expert trainers, top-tier equipment, and personalized workout splits.",
    type: "website",
    locale: "en_IN",
  },
};

/*
 * ROOT LAYOUT
 * 
 * This is the top-level layout in Next.js App Router.
 * It wraps EVERY page. The <html> and <body> tags
 * can ONLY exist here — not in any other layout or page.
 *
 * The font CSS variables (--font-outfit, --font-geist-mono)
 * are applied to <body> so all children can access them.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
