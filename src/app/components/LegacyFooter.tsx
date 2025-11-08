export default function LegacyFooter() {
  return (
    <section className="relative w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-linear-to-b from-primary to-quaternary">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 sm:space-y-10 md:space-y-12">
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white">
            Be Part of the Legacy
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide text-white/90 max-w-3xl mx-auto">
            Join us for a night where purpose meets elegance, and generosity becomes legacy. Together, we&apos;ll protect Puerto Rico&apos;s natural soul and uplift the communities we call home.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col items-center gap-6 sm:gap-8 pt-6 sm:pt-8">
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs sm:text-sm font-light tracking-widest text-white/70 uppercase">
                Contact
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <a
                  href="mailto:BBR_memberships@bahiapr.com"
                  className="text-base sm:text-lg font-light tracking-wide text-white hover:text-secondary transition-colors"
                >
                  BBR_memberships@bahiapr.com
                </a>
                <span className="hidden sm:inline text-white/40">|</span>
                <a
                  href="tel:+17878098870"
                  className="text-base sm:text-lg font-light tracking-wide text-white hover:text-secondary transition-colors"
                >
                  787-809-8870
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
