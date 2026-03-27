/*
 * ABOUT SECTION
 *
 * Short and impactful — 2-3 lines about the gym.
 * From the design strategy: this sells the VIBE, not the equipment list.
 * 
 * No image here — the dark background with accent highlights
 * and strong typography does the work.
 */

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-surface">
      <div className="section-container">
        {/* Section Label */}
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          About Us
        </p>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 max-w-2xl">
          Not just a gym.{" "}
          <span className="text-gradient-gold">A commitment.</span>
        </h2>

        {/* Description */}
        <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mb-16">
          Focus on Fitness isn&apos;t about fancy machines or Instagram-worthy
          setups. It&apos;s about showing up, putting in the work, and walking out
          stronger than yesterday. Our trainers don&apos;t just count your reps —
          they push you past what you thought was possible.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "5+", label: "Years Strong" },
            { number: "500+", label: "Members Trained" },
            { number: "3", label: "Expert Trainers" },
            { number: "6AM–10PM", label: "Open Daily" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-bold text-gradient-gold mb-1">
                {stat.number}
              </p>
              <p className="text-text-muted text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
