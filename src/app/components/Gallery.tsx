"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const galleryImages = [
  "Centro Esperanza -40.JPG",
  "Centro Esperanza -59.JPG",
  "DSCF2174.JPG",
  "DSCF2518 2.JPG",
  "DSCF2524 2.JPG",
  "DSCF3210.JPG",
  "DSCF3228.JPG",
  "DSCF3523.JPG",
  "DSCF3533.JPG",
  "DSCF3829.JPG",
  "DSCF4351.JPG",
  "DSCF4370.JPG",
  "DSCF4445.JPG",
  "DSCF4446.JPG",
  "DSCF4462.JPG",
  "IMG_0520.JPG",
  "IMG_2250.JPG",
  "IMG_3596.jpg",
  "IMG_3695.jpg",
  "IMG_5197.JPEG",
  "WhatsApp Image 2025-01-06 at 9.43.27 AM.jpeg",
  "WhatsApp Image 2025-08-12 at 4.41.01 PM.jpeg",
  "WhatsApp Image 2025-10-29 at 3.31.33 PM.jpeg",
  "_MG_0041.jpg",
  "_MG_2074.jpg",
  "_MG_2095.jpg",
  "f64fc1dc-14b2-47ba-9e18-30f77a3eb7c3.JPG",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Auto-advance images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll thumbnails to keep current image centered (without scrolling the page)
  useEffect(() => {
    if (thumbnailRefs.current[currentIndex] && thumbnailContainerRef.current) {
      const thumbnail = thumbnailRefs.current[currentIndex];
      const container = thumbnailContainerRef.current;

      if (thumbnail) {
        const thumbnailLeft = thumbnail.offsetLeft;
        const thumbnailWidth = thumbnail.offsetWidth;
        const containerWidth = container.offsetWidth;
        const scrollPosition = thumbnailLeft - containerWidth / 2 + thumbnailWidth / 2;

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="w-full bg-white py-16 sm:py-20">
      {/* Title Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-light tracking-wider text-primary sm:text-4xl mb-4">
            Gallery
          </h2>
          <p className="text-quaternary/70 font-light tracking-wide">
            Moments from our exclusive events
          </p>
        </div>
      </div>

      {/* Main Image Display - Full Width */}
      <div className="relative w-full mb-8">
        <div className="relative aspect-video w-full overflow-hidden bg-tertiary">
          <Image
            key={currentIndex}
            src={`/gallery/${galleryImages[currentIndex]}`}
            alt={`Gallery image ${currentIndex + 1}`}
            fill
            className="object-cover animate-zoom-fade-in"
            priority
          />
        </div>

        {/* Navigation Buttons - Positioned at corners */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary/80 p-3 text-tertiary transition-all hover:bg-primary sm:p-4"
          aria-label="Previous image"
        >
          <IoChevronBack size={24} className="sm:w-8 sm:h-8" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary/80 p-3 text-tertiary transition-all hover:bg-primary sm:p-4"
          aria-label="Next image"
        >
          <IoChevronForward size={24} className="sm:w-8 sm:h-8" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/80 px-4 py-2 text-sm text-tertiary font-light tracking-wide">
          {currentIndex + 1} / {galleryImages.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div
            ref={thumbnailContainerRef}
            className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide"
          >
            {galleryImages.map((image, index) => (
              <button
                key={index}
                ref={(el) => {
                  thumbnailRefs.current[index] = el;
                }}
                onClick={() => goToImage(index)}
                className={`relative shrink-0 h-20 w-28 overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-secondary opacity-100 scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={`/gallery/${image}`}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes zoom-fade-in {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-zoom-fade-in {
          animation: zoom-fade-in 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}
