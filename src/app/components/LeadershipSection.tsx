export default function LeadershipSection() {
  const chairs = [
    { name: "John Paulson" },
    { name: "Alina de Almeida" }
  ];

  const coChairs = [
    { names: "Marc & Stephanie Grossman" },
    { names: "Scott & Laurene Sperling" },
    { names: "Russ & Lori Scaramella" }
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12 sm:space-y-16">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-primary">
            Guided by Visionaries
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-light tracking-wide text-quaternary/80 max-w-3xl mx-auto">
            We are honored to be led by the following Chairs and Co-Chairs
          </p>

          {/* Chairs Section */}
          <div className="space-y-8 sm:space-y-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wider text-secondary uppercase">
              Chairs
            </h3>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
              {chairs.map((chair, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  {/* Placeholder for headshot - can be replaced with actual images */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-tertiary border-2 border-secondary/20 flex items-center justify-center">
                    <span className="text-sm text-quaternary/50 font-light">Photo</span>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl font-light tracking-wide text-primary">
                    {chair.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Co-Chairs Section */}
          <div className="space-y-8 sm:space-y-10 pt-8 sm:pt-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wider text-secondary uppercase">
              Co-Chairs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {coChairs.map((coChair, index) => (
                <div key={index} className="flex items-center justify-center py-4 px-6 border-l-2 border-secondary/30">
                  <p className="text-base sm:text-lg md:text-xl font-light tracking-wide text-primary text-center">
                    {coChair.names}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
