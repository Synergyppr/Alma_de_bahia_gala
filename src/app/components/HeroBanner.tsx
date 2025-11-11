"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const carouselImages = [
  "/gallery/IMG_3596.jpg",
  "/gallery/IMG_3695.jpg",
  "/gallery/DSCF4351.JPG",
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full">
      {/* Title Banner - Positioned at top with gradient background */}
      {/* <div className="relative z-20 bg-linear-to-br from-tertiary via-[#e8f4f0] to-[#d4e8e0] py-6 sm:py-8 md:py-10 lg:py-12">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider text-primary">
          Alma de Bahía Foundation Gala
        </h1>
      </div> */}

      {/* Carousel Container */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-full bg-tertiary overflow-hidden">
        {/* Carousel Images */}
        <div className="relative h-full w-full">
          <Image
            key={currentIndex}
            src={carouselImages[currentIndex]}
            alt={`Gala Image ${currentIndex + 1}`}
            fill
            priority
            className="object-cover md:object-contain animate-fade-in"
            sizes="100vw"
          />
        </div>

        {/* Navigation Buttons */}
        {/* <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 p-2 sm:p-3 text-tertiary transition-all hover:bg-primary"
          aria-label="Previous image"
        >
          <IoChevronBack size={20} className="sm:w-6 sm:h-6" />
        </button> */}

        {/* <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 p-2 sm:p-3 text-tertiary transition-all hover:bg-primary"
          aria-label="Next image"
        >
          <IoChevronForward size={20} className="sm:w-6 sm:h-6" />
        </button> */}

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-secondary"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Logo Section - Commented for background version */}
      <div className="bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12">
        <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4">
          <div className="relative w-full aspect-square">
            <Image
              src="/logo2.png"
              alt="Alma de Bahía Foundation Logo"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
            />
          </div>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Background Logo */}
        {/* <div className="absolute inset-0 flex items-center justify-center opacity-15">
          <div className="relative w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 aspect-square">
            <Image
              src="/logo2.png"
              alt="Alma de Bahía Foundation Logo Background"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 75vw, (max-width: 768px) 66vw, (max-width: 1024px) 50vw, (max-width: 1280px) 40vw, 33vw"
            />
          </div>
        </div> */}

        {/* Content Layer */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
              An intimate, meaningful evening where nature, purpose, and
              community come together. Your presence helps shape the legacy of
              Alma de Bahía and drives lasting impact for Puerto Rico&apos;s
              environment and people.
            </p>

            {/* CTA Button */}
            {/* <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 border-b-2 border-primary px-6 py-3 text-sm sm:text-base md:text-lg font-light tracking-widest text-primary transition-all hover:border-secondary hover:text-secondary"
            >
              PURCHASE TICKETS HERE
            </a> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}
