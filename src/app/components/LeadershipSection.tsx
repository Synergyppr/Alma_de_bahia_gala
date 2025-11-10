import Image from "next/image";

export default function LeadershipSection() {
  const coChairs = [
    { names: "Marc & Stephanie Grossman" },
    { names: "Scott & Laurene Sperling" },
    { names: "Russ & Lori Scaramella" },
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

          {/* Chairs Section - Single Centered Image */}
          <div className="space-y-8 sm:space-y-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wider text-secondary uppercase">
              Chairs
            </h3>
            <div className="flex justify-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-secondary/20">
                  <Image
                    src="/lidership.png"
                    alt="Leadership"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                  />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-light tracking-wide text-primary text-center">
                  Alina De Almeida & John Paulson
                </p>
              </div>
            </div>
          </div>

          {/* Co-Chairs Section */}
          <div className="space-y-8 sm:space-y-10 pt-8 sm:pt-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wider text-secondary uppercase">
              Co-Chairs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {coChairs.map((coChair, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center py-4 px-6 border-l-2 border-secondary/30"
                >
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
