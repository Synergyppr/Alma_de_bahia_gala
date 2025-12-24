"use client";

export default function GalaVideoSection() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-primary">
            Relive the Evening
          </h2>
        </div>

        {/* Video Container */}
        <div className="relative w-full aspect-video bg-tertiary/10 rounded-sm overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source
              src="https://pprvapp.blob.core.windows.net/ppgadoc/FINAL Gala Alma de Bahia 2025.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Optional Caption */}
        <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm md:text-base font-light tracking-wide text-quaternary/80 max-w-3xl mx-auto">
          A reflection of the evening where community, nature, and purpose converged under the stars at Four Seasons Resort Puerto Rico.
        </p>
      </div>
    </section>
  );
}
