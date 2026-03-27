import Image from "next/image";
import { SITE_CONFIG } from "@/app/config";

/*
 * HERO SECTION
 *
 * The first thing visitors see — full-screen, atmospheric, one clear CTA.
 * 
 * Design principle (from Equinox/Barry's analysis):
 *   - ONE powerful image that sells a feeling, not inventory
 *   - Minimal text: gym name + tagline + one button
 *   - Dark overlay on image so text is always readable
 *
 * Next.js <Image> component:
 *   - Auto-converts to WebP (smaller file size)
 *   - Lazy loads by default (but we use priority here since it's above the fold)
 *   - Generates multiple sizes for responsive images
 *   - fill + objectCover = CSS background-image behavior but optimized
 */

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Focus on Fitness gym floor with dramatic lighting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay — darkens the image so text pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/70 via-bg-primary/50 to-bg-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in-up">
        {/* Gym Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-gradient-gold">Focus on</span>
          <br />
          <span className="text-text-primary">Fitness</span>
        </h1>

        {/* Tagline */}
        <p className="text-text-secondary text-lg sm:text-xl md:text-2xl mb-10 max-w-xl mx-auto leading-relaxed">
          Where dedication meets transformation. Your journey starts here.
        </p>

        {/* CTA Button */}
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-bg-primary font-semibold 
                     px-8 py-4 rounded-full text-lg
                     hover:bg-accent-hover hover:scale-105 
                     transition-all duration-300 shadow-lg shadow-accent/20"
        >
          {/* WhatsApp Icon (inline SVG — no external dependency) */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Start Your Journey
        </a>
      </div>

      {/* Scroll indicator — device responsive */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        {/* Desktop: Mouse with scroll wheel animation */}
        <div className="hidden md:flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-text-secondary rounded-full scroll-wheel-anim" />
          </div>
          <span className="text-text-muted text-[10px] tracking-widest uppercase">Scroll</span>
        </div>

        {/* Mobile: Finger swipe down animation */}
        <div className="flex md:hidden flex-col items-center gap-2 opacity-50 animate-bounce">
          <div className="swipe-finger-anim">
            <svg className="w-6 h-6 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 0-2 .8-2 2v6c0-.6-.4-1.5-1-2-.8-.6-2-.4-2.5.3-.3.5-.2 1.1.1 1.6l3.4 5.2c.5.8 1.4 1.4 2.4 1.4h3.2c1.7 0 3.1-1.2 3.3-2.9l.5-3.5c.1-.8-.4-1.6-1.2-1.8-.5-.1-1 0-1.3.3 0-.6-.4-1.1-1-1.3-.5-.1-1 0-1.4.4 0-.7-.5-1.2-1.1-1.4-.3-.1-.6 0-.9.2V5c0-1.2-.8-2-2-2z" />
            </svg>
          </div>
          <svg className="w-4 h-4 text-text-muted swipe-arrow-anim" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="text-text-muted text-[10px] tracking-widest uppercase">Swipe up</span>
        </div>
      </div>
    </section>
  );
}
