import Image from "next/image";

/*
 * VISUAL BREAK — full-width atmospheric image between sections.
 *
 * From the design strategy: "The Energy" shot — shows people 
 * working out, creates a sense of community and intensity.
 *
 * This breaks up text-heavy sections and adds visual rhythm
 * to the scroll experience, like a magazine layout.
 */

export default function VisualBreak() {
  return (
    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
      <Image
        src="/gym-atmosphere.png"
        alt="Members training at Focus on Fitness"
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark gradient edges so it blends with adjacent sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-surface" />
    </div>
  );
}
