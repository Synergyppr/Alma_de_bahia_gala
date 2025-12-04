"use client";

export default function AuctionCTA() {
  return (
    <section className="relative bg-primary py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 sm:space-y-10">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white">
            Join Us at the Gala
          </h2>

          <div className="h-px w-24 sm:w-32 bg-quinary mx-auto" />

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-white/90 max-w-2xl mx-auto">
            Experience an evening of elegance, art, and purpose as we come
            together to celebrate and support the conservation of Puerto
            Rico&apos;s natural beauty and cultural heritage.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block px-8 sm:px-10 md:px-12 py-4 sm:py-5 border-2 border-quinary text-white hover:bg-quinary hover:text-primary transition-all duration-300 text-sm sm:text-base md:text-lg font-light tracking-widest uppercase"
            >
              Reserve Your Place
            </a>
          </div>

          {/* Additional Info */}
          <div className="pt-8 space-y-3 text-sm sm:text-base font-light text-white/70">
            <p>Limited seating available</p>
            <p>All proceeds benefit Alma de Bahía Foundation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
