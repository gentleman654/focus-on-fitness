/*
 * LOCATION & TIMINGS SECTION
 *
 * Google Maps embed + operating hours + address.
 * The map is loaded via an iframe — no API key needed for embeds.
 *
 * NOTE: Replace the Google Maps embed URL with the actual gym location.
 * To get the embed URL:
 *   1. Open Google Maps
 *   2. Search for the gym
 *   3. Click "Share" → "Embed a map" → Copy the iframe src URL
 */

import { SITE_CONFIG } from "@/app/config";

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-bg-primary">
      <div className="section-container">
        {/* Section Label */}
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          Find Us
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Your gym is{" "}
          <span className="text-gradient-gold">closer than you think.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <div className="space-y-10">
            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Address
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {SITE_CONFIG.address.line1}<br />
                {SITE_CONFIG.address.line2}<br />
                {SITE_CONFIG.address.line3}
              </p>
            </div>

            {/* Timings */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Timings
              </h3>
              <div className="space-y-2">
                {[
                  { day: "Monday – Saturday", time: "6:00 AM – 10:00 PM" },

                ].map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="text-text-secondary text-sm">
                      {schedule.day}
                    </span>
                    <span className="text-accent font-medium text-sm">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact
              </h3>
              <div className="space-y-2">
                <a
                  href={`tel:+91${SITE_CONFIG.phone}`}
                  className="block text-text-secondary hover:text-accent transition-colors text-sm"
                >
                  {SITE_CONFIG.phoneFormatted}
                </a>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-text-secondary hover:text-accent transition-colors text-sm"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Right — Google Maps Embed */}
          <div className="glass rounded-xl overflow-hidden h-80 lg:h-auto lg:min-h-[400px]">
            {/* 
              Replace this src with the actual gym's Google Maps embed URL.
              For now, using a placeholder centered on Mumbai.
            */}
            <iframe
              src={SITE_CONFIG.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Focus on Fitness location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
