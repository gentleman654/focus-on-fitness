"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/app/config";

/*
 * NAVBAR COMPONENT
 *
 * "use client" is required because:
 *   - We use useState (mobile menu toggle)
 *   - We use useEffect (scroll detection)
 *   - We handle onClick events
 *
 * In Next.js App Router, components are Server Components by default.
 * Any component that uses browser APIs (state, effects, events) must
 * be marked "use client". This doesn't mean it renders only on the client —
 * it still gets server-rendered, but the JS is sent to the browser for hydration.
 */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Location", href: "#location" },
  { label: "Splits", href: "/splits" },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /*
   * Detect scroll to add background to navbar.
   * When user is at the top, navbar is transparent (hero shows through).
   * When user scrolls down, navbar gets a dark background so text stays readable.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo / Gym Name */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tight"
        >
          <span className="text-gradient-gold">{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-bg-primary font-semibold px-5 py-2 rounded-full
                         hover:bg-accent-hover transition-colors duration-200 text-sm"
            >
              Join Now
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-bg-primary/98 backdrop-blur-lg transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-8 pt-20">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-2xl font-medium text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-bg-primary font-semibold px-8 py-3 rounded-full
                         hover:bg-accent-hover transition-colors text-lg"
            >
              Join Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
