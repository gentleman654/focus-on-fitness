import Image from "next/image";

/*
 * TRAINERS SECTION
 *
 * From the design strategy: "This section sells TRUST."
 * Each trainer gets ONE clean, consistent photo with name + speciality.
 * 
 * TypeScript interface:
 *   We define the shape of a Trainer object. This is self-documenting —
 *   anyone reading this code knows exactly what data a trainer needs.
 *   If you forget a field, TypeScript will tell you at compile time.
 */

interface Trainer {
  name: string;
  speciality: string;
  experience: string;
  image: string;
}

const TRAINERS: Trainer[] = [
  {
    name: "Arjun Mehta",
    speciality: "Strength & Powerlifting",
    experience: "8 years",
    image: "/trainer-1.png",
  },
  {
    name: "Vikram Singh",
    speciality: "Bodybuilding & Nutrition",
    experience: "6 years",
    image: "/trainer-2.png",
  },
  {
    name: "Priya Sharma",
    speciality: "Functional Training & HIIT",
    experience: "5 years",
    image: "/trainer-3.png",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 md:py-32 bg-bg-primary">
      <div className="section-container">
        {/* Section Label */}
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          Our Trainers
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Guided by the{" "}
          <span className="text-gradient-gold">best.</span>
        </h2>

        <p className="text-text-secondary text-lg mb-16 max-w-lg">
          Certified professionals who don&apos;t just train — they transform.
        </p>

        {/* Trainer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.name}
              className="group glass rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300"
            >
              {/* Trainer Photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={`${trainer.name} — ${trainer.speciality}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient fade at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
              </div>

              {/* Trainer Info */}
              <div className="p-6 -mt-16 relative z-10">
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-accent text-sm font-medium mb-1">
                  {trainer.speciality}
                </p>
                <p className="text-text-muted text-xs">
                  {trainer.experience} experience
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
