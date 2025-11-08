export default function PillarsSection() {
  const stats = [
    { value: "294+", label: "Nests Protected" },
    { value: "10,000", label: "Hatchlings" },
    { value: "13,000+", label: "Students" },
    { value: "20,000+", label: "Volunteers" },
    { value: "1,300+", label: "Animals Rescued" }
  ];

  const pillars = [
    {
      number: "1",
      title: "Protection of Endangered Species",
      description: "Safeguarding 294+ sea turtle nests and ~10,000 hatchlings; supporting manatee and bird rescue and monitoring to strengthen ecosystems."
    },
    {
      number: "2",
      title: "Community Engagement & Support",
      description: "Partnerships in Loíza and Río Grande empowering children, youth, and the elderly through dignity and resilience."
    },
    {
      number: "3",
      title: "Environmental Education & Outreach",
      description: "17 annual campaigns, 13,000+ students reached, 20,000+ volunteers mobilized."
    },
    {
      number: "4",
      title: "Animal Rescue & Rehabilitation",
      description: "1,300+ dogs and cats rescued via Sato & Gato Rescue and Alina's Cat Sanctuary."
    },
    {
      number: "5",
      title: "Sustainability & Environmental Stewardship",
      description: "17+ years protecting the Espíritu Santo River and advancing the Northeast Trail System."
    }
  ];

  return (
    <section className="w-full bg-tertiary py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* Section Title */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-primary">
              Pillars of Purpose
            </h2>

            {/* Mini Stats */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 pt-8 sm:pt-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center min-w-[100px] sm:min-w-[120px]">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-light text-secondary">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-light tracking-wide text-quaternary/70 uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide text-quaternary/85 max-w-4xl mx-auto">
            Our work comes to life through five pillars that connect nature, education, community, and care.
          </p>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 pt-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`bg-white p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Pillar Number */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/10 border border-secondary/20">
                      <span className="text-xl sm:text-2xl font-light text-secondary">
                        {pillar.number}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-light tracking-wide text-primary flex-1">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Pillar Description */}
                  <p className="text-sm sm:text-base font-light leading-relaxed text-quaternary/80 pl-14">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
