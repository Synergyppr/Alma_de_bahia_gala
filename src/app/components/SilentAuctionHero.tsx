"use client";

import Image from "next/image";

export default function SilentAuctionHero() {
  return (
    <section className="relative w-full bg-tertiary">
      {/* Hero Image */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] w-full overflow-hidden">
        <Image
          src="/fourseason.jpeg"
          // src="/soulofbahia/sophie lelouch.jpeg"
          alt="Silent Auction Artwork"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/60" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl text-center space-y-6 sm:space-y-8 md:space-y-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wider text-white">
              Alma de Bahía Gala
            </h1>
            <div className="h-px w-32 sm:w-48 bg-quinary mx-auto" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.2em] text-tertiary uppercase">
              Silent Auction
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide text-white/90 max-w-3xl mx-auto">
              Celebrating Art, Community, and Conservation
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Text */}
      <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-primary">
              Welcome to the Silent Auction
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide text-quaternary/80 max-w-3xl mx-auto">
              Here you will find an exclusive preview of the artists and pieces generously donated to support our mission of protecting Puerto Rico&apos;s natural heritage and uplifting our communities.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-light italic tracking-wide text-secondary">
              This page is for informational purposes only; all bidding will occur on-site during the Gala.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
