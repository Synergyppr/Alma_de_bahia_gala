import Image from "next/image";

export default function EveningSection() {
  return (
    <section className="w-full bg-tertiary py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-primary">
              An Evening Under the Stars
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide text-quaternary/85">
              An intimate, meaningful evening where nature, purpose, and community come together at the newly inaugurated Four Seasons Resort Puerto Rico. Your presence helps shape the legacy of Alma de Bahía and drives lasting impact for Puerto Rico&apos;s environment and people.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full order-1 lg:order-2 rounded-sm overflow-hidden shadow-lg">
            <Image
              src="/fourseason.jpeg"
              alt="Four Seasons Resort Puerto Rico"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
