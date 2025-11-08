import Image from "next/image";

export default function AlmaHeroBanner() {
  return (
    <section className="relative w-full">
      {/* Hero Image Container */}
      <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] w-full">
        <Image
          src="/gallery/1.jpg"
          alt="Aerial of Bahía Beach shoreline at sunset"
          fill
          priority
          className="object-cover brightness-75"
          sizes="100vw"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl text-center space-y-8 sm:space-y-10 md:space-y-12">
            {/* Tagline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] text-white/90 uppercase">
              Where Soul Meets Purpose
            </h2>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide text-white leading-tight">
              Join us for the inaugural<br />
              Alma de Bahía Foundation Gala
            </h1>

            {/* Event Details */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-white/95">
                Saturday, December 6, 2025
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wider text-white/90">
                Four Seasons Resort Puerto Rico
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8">
              <a
                href="#sponsorship"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-light tracking-widest bg-secondary text-white hover:bg-secondary/90 transition-all duration-300 min-w-60 sm:min-w-[280px]"
              >
                BECOME A SPONSOR
              </a>
              <a
                href="#mission"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-light tracking-widest border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 min-w-60 sm:min-w-[280px]"
              >
                LEARN ABOUT OUR MISSION
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
