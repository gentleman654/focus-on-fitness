'use client';

import { useState } from 'react';

/**
 * Navigation Component
 * 
 * This is our main navbar. It's:
 * - Sticky at the top
 * - Shows horizontal links on desktop
 * - Shows hamburger menu on mobile
 * 
 * Key React concepts used here:
 * 1. useState hook - for managing the mobile menu state
 * 2. onClick handlers - to toggle the menu
 * 3. Conditional rendering - showing different UI based on state
 */

export default function Navigation() {
  // useState(false) means:
  // - isMenuOpen = current state value (starts as false = menu closed)
  // - setIsMenuOpen = function to update the state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Splits', href: '#splits' },
    { name: 'Contact', href: '#contact' },
  ];

  // Function to close menu when a link is clicked
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <div className="text-accent font-bold text-xl">
          Iron Den Gym
        </div>

        {/* Desktop Navigation (hidden on mobile, visible on md+) */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-secondary hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <button className="hidden md:block bg-accent text-bg-primary px-6 py-2 rounded-md font-semibold hover:bg-accent-hover transition-colors">
          Join Now
        </button>

        {/* Hamburger Menu Button (Mobile only, hidden on md+) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-text-primary text-2xl"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu - only shown when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden bg-bg-surface border-t border-border">
          <div className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="text-text-primary hover:text-accent transition-colors block py-2"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-accent text-bg-primary w-full py-2 rounded-md font-semibold hover:bg-accent-hover transition-colors">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
