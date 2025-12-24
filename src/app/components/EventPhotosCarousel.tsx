"use client";

import { useState } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const eventPhotos = [
  "/soulofbahiaevent/LG3A7320.JPG",
  "/soulofbahiaevent/LG3A7333.JPG",
  "/soulofbahiaevent/LG3A7344.JPG",
  "/soulofbahiaevent/LG3A7349.JPG",
  "/soulofbahiaevent/LG3A7357.JPG",
  "/soulofbahiaevent/LG3A7359.JPG",
  "/soulofbahiaevent/LG3A7374.JPG",
  "/soulofbahiaevent/LG3A7390.JPG",
  "/soulofbahiaevent/LG3A7405.JPG",
  "/soulofbahiaevent/LG3A7424.JPG",
  "/soulofbahiaevent/LG3A7429.JPG",
  "/soulofbahiaevent/LG3A7450.JPG",
  "/soulofbahiaevent/LG3A7454.JPG",
  "/soulofbahiaevent/LG3A7456.JPG",
  "/soulofbahiaevent/LG3A7490.JPG",
  "/soulofbahiaevent/LG3A7494.JPG",
  "/soulofbahiaevent/LG3A7515.JPG",
  "/soulofbahiaevent/LG3A7517.JPG",
  "/soulofbahiaevent/LG3A7523.JPG",
  "/soulofbahiaevent/LG3A7528.JPG",
  "/soulofbahiaevent/LG3A7533.JPG",
  "/soulofbahiaevent/LG3A7538.JPG",
  "/soulofbahiaevent/LG3A7539.JPG",
  "/soulofbahiaevent/LG3A7545.JPG",
  "/soulofbahiaevent/LG3A7551.JPG",
  "/soulofbahiaevent/LG3A7554.JPG",
  "/soulofbahiaevent/LG3A7563.JPG",
  "/soulofbahiaevent/LG3A7569.JPG",
  "/soulofbahiaevent/LG3A7575.JPG",
  "/soulofbahiaevent/LG3A7577.JPG",
  "/soulofbahiaevent/LG3A7579.JPG",
  "/soulofbahiaevent/LG3A7611.JPG",
  "/soulofbahiaevent/LG3A7633.JPG",
  "/soulofbahiaevent/LG3A7637.JPG",
  "/soulofbahiaevent/LG3A7657.JPG",
  "/soulofbahiaevent/LG3A7690.JPG",
  "/soulofbahiaevent/LG3A7701.JPG",
  "/soulofbahiaevent/LG3A7713.JPG",
  "/soulofbahiaevent/LG3A7725.JPG",
  "/soulofbahiaevent/LG3A7732.JPG",
  "/soulofbahiaevent/LG3A7754.JPG",
  "/soulofbahiaevent/LG3A7757.JPG",
  "/soulofbahiaevent/LG3A7785.JPG",
  "/soulofbahiaevent/LG3A7801.JPG",
  "/soulofbahiaevent/LG3A7805.JPG",
  "/soulofbahiaevent/LG3A7814.JPG",
  "/soulofbahiaevent/LG3A7856.JPG",
  "/soulofbahiaevent/LG3A7867.JPG",
  "/soulofbahiaevent/LG3A7870.JPG",
  "/soulofbahiaevent/LG3A7873.JPG",
  "/soulofbahiaevent/LG3A7878.JPG",
  "/soulofbahiaevent/LG3A7887.JPG",
  "/soulofbahiaevent/LG3A7891.JPG",
  "/soulofbahiaevent/LG3A7899.JPG",
  "/soulofbahiaevent/LG3A7910.JPG",
  "/soulofbahiaevent/LG3A7966.JPG",
  "/soulofbahiaevent/LG3A7985.JPG",
  "/soulofbahiaevent/LG3A8007.JPG",
  "/soulofbahiaevent/LG3A8021.JPG",
  "/soulofbahiaevent/LG3A8025.JPG",
  "/soulofbahiaevent/LG3A8035.JPG",
  "/soulofbahiaevent/LG3A8036.JPG",
  "/soulofbahiaevent/LG3A8038.JPG",
  "/soulofbahiaevent/LG3A8046.JPG",
  "/soulofbahiaevent/LG3A8052.JPG",
  "/soulofbahiaevent/LG3A8055.JPG",
  "/soulofbahiaevent/LG3A8057.JPG",
  "/soulofbahiaevent/LG3A8085.JPG",
  "/soulofbahiaevent/LG3A8107.JPG",
  "/soulofbahiaevent/LG3A8121.JPG",
  "/soulofbahiaevent/LG3A8150.JPG",
  "/soulofbahiaevent/LG3A8165.JPG",
  "/soulofbahiaevent/LG3A8174.JPG",
  "/soulofbahiaevent/LG3A8184.JPG",
  "/soulofbahiaevent/LG3A8199.JPG",
  "/soulofbahiaevent/LG3A8218.JPG",
  "/soulofbahiaevent/LG3A8222.JPG",
  "/soulofbahiaevent/LG3A8228.JPG",
  "/soulofbahiaevent/LG3A8256.JPG",
  "/soulofbahiaevent/LG3A8259.JPG",
  "/soulofbahiaevent/LG3A8267.JPG",
  "/soulofbahiaevent/LG3A8275.JPG",
  "/soulofbahiaevent/LG3A8305.JPG",
  "/soulofbahiaevent/LG3A8318.JPG",
  "/soulofbahiaevent/LG3A8324.JPG",
  "/soulofbahiaevent/LG3A8336.JPG",
  "/soulofbahiaevent/LG3A8339.JPG",
  "/soulofbahiaevent/LG3A8348.JPG",
  "/soulofbahiaevent/LG3A8349.JPG",
  "/soulofbahiaevent/LG3A8356.JPG",
  "/soulofbahiaevent/LG3A8371.JPG",
  "/soulofbahiaevent/LG3A8393.JPG",
  "/soulofbahiaevent/LG3A8396.JPG",
  "/soulofbahiaevent/LG3A8412.JPG",
  "/soulofbahiaevent/LG3A8430.JPG",
  "/soulofbahiaevent/LG3A8442.JPG",
  "/soulofbahiaevent/LG3A8447.JPG",
  "/soulofbahiaevent/LG3A8472.JPG",
  "/soulofbahiaevent/LG3A8510.JPG",
  "/soulofbahiaevent/LG3A8530.JPG",
  "/soulofbahiaevent/LG3A8548.JPG",
  "/soulofbahiaevent/LG3A8552.JPG",
  "/soulofbahiaevent/LG3A8553.JPG",
  "/soulofbahiaevent/LG3A8560.JPG",
  "/soulofbahiaevent/LG3A8562.JPG",
  "/soulofbahiaevent/LG3A8568.JPG",
  "/soulofbahiaevent/LG3A8588.JPG",
  "/soulofbahiaevent/LG3A8596.JPG",
];

export default function EventPhotosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? eventPhotos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === eventPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-primary">
            Event Gallery
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base font-light tracking-wide text-quaternary/80">
            Moments captured from an unforgettable evening
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden rounded-sm shadow-lg bg-tertiary/5"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Current Image */}
          <div className="relative h-full w-full">
            <Image
              key={currentIndex}
              src={eventPhotos[currentIndex]}
              alt={`Event photo ${currentIndex + 1}`}
              fill
              className="object-contain animate-fade-in"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/70 p-2 sm:p-3 text-white transition-all hover:bg-primary"
            aria-label="Previous image"
          >
            <IoChevronBack className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/70 p-2 sm:p-3 text-white transition-all hover:bg-primary"
            aria-label="Next image"
          >
            <IoChevronForward className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image Counter */}
          {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-primary/80 px-4 py-2 rounded-sm">
            <p className="text-xs sm:text-sm font-light text-white tracking-wider">
              {currentIndex + 1} / {eventPhotos.length}
            </p>
          </div> */}
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
          animation: fade-in 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
}
