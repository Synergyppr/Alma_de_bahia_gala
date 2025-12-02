import Image from "next/image";

const CircleOfGiving = () => {
  const sponsors = [
    {
      id: 1,
      name: "Paulson PR",
      image: "/SponsorshipLogos/1- paulsonPR LOGO.PNG",
    },
    {
      id: 2,
      name: "Four Seasons",
      image: "/SponsorshipLogos/2- Four Seasons.png",
    },
    { id: 3, name: "McGuire", image: "/SponsorshipLogos/5.png" },
    {
      id: 4,
      name: "Munoz Holdings LLC",
      image: "/SponsorshipLogos/4- MunozHoldingsLLC_MB_FullColor_Logo.png",
    },
    {
      id: 5,
      name: "UAGM",
      image: "/SponsorshipLogos/5- uagm_vertical_med.png",
    },
    { id: 6, name: "McConnell", image: "/SponsorshipLogos/6.png" },
    { id: 7, name: "Keane", image: "/SponsorshipLogos/4.png" },
    { id: 8, name: "McKenna", image: "/SponsorshipLogos/3.png" },
    { id: 9, name: "RP Logo", image: "/SponsorshipLogos/8- RP Logo BLK.png" },
    {
      id: 10,
      name: "Roche Bobois",
      image: "/SponsorshipLogos/1.png",
    },
    { id: 11, name: "BEME", image: "/SponsorshipLogos/10-LOGO_BEME-01.png" },
    {
      id: 12,
      name: "Walter Otero",
      image: "/SponsorshipLogos/2.png",
    },
    {
      id: 13,
      name: "Luxe Properties",
      image:
        "/SponsorshipLogos/12- LOGO LUXE PROPERTIES-FINAL-01-01 copy - Duque.jpeg",
    },
    {
      id: 14,
      name: "Corcoran",
      image: "/SponsorshipLogos/13- Corcoran Logo.png",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-primary">
            Circle of Giving
          </h2>
          {/* <p className="text-base sm:text-lg md:text-xl font-light tracking-[0.2em] text-primary uppercase">
            Saturday, December 6, 2025
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-secondary">
            Four Seasons Resort | Puerto Rico
          </p>
          <div className="space-y-2">
            <p className="text-xs sm:text-sm md:text-base font-light tracking-widest text-secondary uppercase">
              Attire
            </p>
            <p className="text-xs sm:text-sm md:text-base font-light tracking-widest text-secondary uppercase">
              Black Tie
            </p>
          </div> */}
          <p className="text-base sm:text-lg md:text-xl text-secondary/80 font-light max-w-3xl mx-auto mb-4">
            Thank you to our supporters for making this evening possible.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex items-center justify-center p-4 sm:p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg group"
            >
              <div className="relative w-full h-20 sm:h-24 md:h-28 lg:h-32">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-contain transition-all duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircleOfGiving;
