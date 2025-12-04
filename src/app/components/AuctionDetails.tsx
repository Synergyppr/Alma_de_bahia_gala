"use client";

export default function AuctionDetails() {
  return (
    <section className="relative bg-tertiary py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 sm:space-y-10 md:space-y-12">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-primary">
            Auction Information
          </h2>

          <div className="h-px w-24 sm:w-32 bg-quinary mx-auto" />

          {/* Main Content */}
          <div className="bg-white p-8 sm:p-10 md:p-12 lg:p-16 space-y-8">
            {/* Important Notice */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-secondary">
                Note for Guests
              </h3>
              <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-quaternary/80 max-w-3xl mx-auto">
                All bidding will take place in person during the Alma de Bahía
                Gala.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-light italic text-secondary">
                This page is for informational and preview purposes only.
              </p>
            </div>

            {/* Event Details */}
            <div className="border-t border-secondary/20 pt-8 space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-widest text-primary uppercase">
                Event Details
              </h3>
              <div className="space-y-4 text-base sm:text-lg font-light text-quaternary/80">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="tracking-wide text-secondary uppercase text-sm sm:text-base">
                    Date
                  </span>
                  <span>Saturday, December 6, 2025</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="tracking-wide text-secondary uppercase text-sm sm:text-base">
                    Location
                  </span>
                  <span>Four Seasons Resort | Puerto Rico</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="tracking-wide text-secondary uppercase text-sm sm:text-base">
                    Attire
                  </span>
                  <span>Black Tie</span>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="border-t border-secondary/20 pt-8 space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-widest text-primary uppercase">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-quaternary/80 max-w-3xl mx-auto">
                Your participation in this silent auction directly supports our
                mission of protecting Puerto Rico&apos;s natural heritage and
                uplifting our communities. Each piece has been generously
                donated by the artists and collectors to help create lasting
                positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
