export default function TableLevels() {
  const levels = [
    {
      title: "Co-Chair",
      price: "$50,000",
      benefits: [
        "Premier table for 10 guests",
        "Private reception with the Chairs (2 guests)",
        "Commemorative plaque displayed at the shelter area",
        "Recognition in press release, from the podium, and on digital signage",
        "Logo on event website, printed program, and sponsor art piece"
      ]
    },
    {
      title: "Platinum",
      price: "$25,000",
      benefits: [
        "Priority placement for 6 guests",
        "Recognition in press releases and event signage",
        "Logo on website, printed program, and sponsor artwork"
      ]
    },
    {
      title: "Gold",
      price: "$15,000",
      benefits: [
        "Preferred seating for 8 guests",
        "Recognition in event program and signage",
        "Logo in sponsor thank-you artwork"
      ]
    },
    {
      title: "Silver",
      price: "$10,000",
      benefits: [
        "Dedicated seating for 6 guests",
        "Recognition in printed program and digital screens",
        "Logo in sponsor thank-you artwork"
      ]
    },
    {
      title: "Bronze",
      price: "$5,000",
      benefits: [
        "Hosted seating for 4 guests",
        "Logo in sponsor thank-you artwork"
      ]
    }
  ];

  return (
    <section id="sponsorship" className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12 md:mb-16 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-primary">
            Join the Circle of Giving
          </h2>

          {/* Event Details */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-base sm:text-lg md:text-xl font-light tracking-wide text-quaternary/80">
              Saturday, December 6, 2025
            </p>
            <p className="text-base sm:text-lg md:text-xl font-light tracking-wide text-quaternary/80">
              Four Seasons Resort Puerto Rico
            </p>
            <p className="text-sm sm:text-base md:text-lg font-light tracking-widest text-secondary uppercase">
              Black Tie
            </p>
          </div>

          <p className="text-sm sm:text-base font-light text-quaternary/70 max-w-3xl mx-auto pt-4">
            A limited number of sponsorships are available, your support transforms generosity into legacy.
          </p>
        </div>

        {/* Levels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {levels.map((level, index) => (
            <div
              key={index}
              className="relative bg-linear-to-br from-tertiary via-[#e8f4f0] to-[#d4e8e0] p-8 sm:p-10 md:p-12 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Level Header */}
              <div className="mb-8 border-b border-secondary/30 pb-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wider text-primary mb-3">
                  {level.title}
                </h3>
                <p className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-secondary">
                  {level.price}
                </p>
              </div>

              {/* Benefits List */}
              <ul className="space-y-3 sm:space-y-4">
                {level.benefits.map((benefit, benefitIndex) => (
                  <li
                    key={benefitIndex}
                    className="flex items-start gap-3 text-xs sm:text-sm md:text-base font-light leading-relaxed text-quaternary/90"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Optional: Contact CTA */}
              <div className="mt-8 pt-6 border-t border-secondary/20">
                <a
                  href="mailto:BBR_memberships@bahiapr.com"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-light tracking-wider text-secondary hover:text-primary transition-colors"
                >
                  <span>INQUIRE ABOUT THIS LEVEL</span>
                  <span className="text-lg">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="mailto:BBR_memberships@bahiapr.com"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-light tracking-widest bg-linear-to-br from-tertiary via-[#e8f4f0] to-[#d4e8e0] text-secondary hover:opacity-90 transition-all duration-300 min-w-60 sm:min-w-[280px]"
          >
            INQUIRE ABOUT SPONSORSHIP
          </a>
          <a
            href="tel:+17878098870"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-light tracking-widest bg-linear-to-br from-tertiary via-[#e8f4f0] to-[#d4e8e0] text-secondary hover:opacity-90 transition-all duration-300 min-w-60 sm:min-w-[280px]"
          >
            CALL FOR DETAILS
          </a>
        </div>
      </div>
    </section>
  );
}
