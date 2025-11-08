import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full">
      {/* Hero Image Container */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] w-full bg-tertiary">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-full w-full max-w-7xl">
            <Image
              src="/johnpaulson.jpg"
              alt="John Paulson"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>

        {/* Title Banner Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-secondary/95 py-6 sm:py-8 md:py-10 lg:py-12">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider text-white">
            Alma de Bahía Foundation Gala
          </h1>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 text-center">
            {/* Tagline */}
            <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] text-secondary uppercase">
              Where Soul Meets Purpose
            </p>

            {/* Date */}
            <p className="text-base sm:text-lg md:text-xl font-light tracking-[0.2em] text-primary uppercase">
              Saturday, December 6, 2025
            </p>

            {/* Location */}
            <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-secondary">
              Four Seasons Resort | Puerto Rico
            </p>

            {/* Attire */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm md:text-base font-light tracking-widest text-secondary uppercase">
                Attire
              </p>
              <p className="text-xs sm:text-sm md:text-base font-light tracking-widest text-secondary uppercase">
                Black Tie
              </p>
            </div>

            {/* Description */}
            <p className="max-w-3xl text-xs sm:text-sm md:text-base font-light leading-relaxed tracking-wide text-quaternary/80 px-4">
              An intimate, meaningful evening where nature, purpose, and community come together. Your presence helps shape the legacy of Alma de Bahía and drives lasting impact for Puerto Rico&apos;s environment and people.
            </p>

            {/* CTA Button */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 border-b-2 border-primary px-6 py-3 text-sm sm:text-base md:text-lg font-light tracking-widest text-primary transition-all hover:border-secondary hover:text-secondary"
            >
              PURCHASE TICKETS HERE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
