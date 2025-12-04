"use client";

import Image from "next/image";

interface ArtworkPiece {
  title?: string;
  created?: string;
  medium?: string;
  size?: string;
  value: string;
  details?: string;
  image?: string;
}

interface ArtworkItem {
  id: number;
  artistName: string;
  location?: string;
  biography: string;
  artistImage?: string;
  artworkImage: string;
  pieces: ArtworkPiece[];
}

const artworks: ArtworkItem[] = [
  {
    id: 1,
    artistName: "Ángel Botello-Barros",
    location: "Galicia, Spain, 1913–1986",
    biography:
      "Painter, graphic artist, and sculptor. He began his art studies in 1930 under the mentorship of François Maurice Roganeaux at the School of Fine Arts in Bordeaux, France. In 1935, he returned to Spain to continue his training at the Royal Academy of Fine Arts of San Fernando in Madrid. The Spanish Civil War interrupted his education, and in 1940 he relocated to the Dominican Republic, later moving to Haiti. In 1953, he settled in Puerto Rico and opened Galería Las Antillas (later Galería Botello), one of the island's first art galleries. From that point on, he dedicated himself fully to his artistic practice. Although he explored landscapes and still lifes, the human figure, particularly children, became the central theme of his work. His artistic language is defined by the geometric simplification of forms and large, flat areas of color outlined with strong contours, characteristics that have become essential to his style.",
    artistImage: "/soulofbahia/Juan Botello.jpeg",
    artworkImage: "/soulofbahia/Botello-papel.jpg",
    pieces: [
      {
        created: "1980",
        medium: "Lithograph, Edition of 150",
        size: "24 x 18 in",
        value: "$5,500",
        details: "Hand-signed in pencil",
      },
    ],
  },
  {
    id: 2,
    artistName: "Damien Hirst",
    biography: `Damien Hirst, a leading figure among the Young British Artists who rose to prominence in late-1980s London, is one of the most provocative and influential artists of his generation. He has consistently pushed the boundaries of fine art, and public taste, with works such as dead animals preserved in formaldehyde, his prolific spot paintings, and the infamous For the Love of God (2007), a platinum cast of a human skull encrusted with 8,601 diamonds. His work explores themes of religion, mortality, beauty, and desire. Since curating the groundbreaking 1988 exhibition "Freeze," he has been featured in major institutions including Tate Modern, the National Gallery of Art in Washington, D.C., and the Rijksmuseum in Amsterdam. In 2008, he made headlines by selling his work directly through Sotheby's in "Beautiful Inside My Head Forever," earning approximately $200 million. Several of his works have sold for more than $10 million at auction.`,
    artistImage: "/soulofbahia/damien-hirst-.jpg.webp",
    artworkImage: "/soulofbahia/Damaine Hirst- papel.jpg",
    pieces: [
      {
        title:
          "Beautiful, Perfect By Comparison, Unpleasantly Peculiar, Kind, Rather Impertinent, Pure and Frank Vapor Painting",
        size: "40 cm diameter",
        value: "$5,000",
        details: "Hand-signed in paint pen on the front, Unique, AI-generated",
      },
    ],
  },
  {
    id: 3,
    artistName: "Sophie Lelouch",
    biography: `Sophie Lelouch is a French oral surgeon, health coach, content creator, and writer whose journey into art began after she moved to the United States. During a period of personal transition, she discovered her passion for painting, using acrylics as a creative and emotional outlet. Just before the COVID-19 pandemic, she began pouring acrylic paint onto blank canvases, finding healing and liberation in the process. Her enthusiasm for living fully inspires those who encounter her work. Drawing from Paul Cézanne's belief that the artist's personality is the most seductive part of art, Sophie's paintings combine vibrant energies, grace, delicacy, and color into powerful expressions. Her collection, "Dancing Goddesses," celebrates the feminine energy within us all through color, motion, and texture. She works primarily with acrylics, incorporating fluid and thick textures, gold and silver leaf, and 3D visual effects that reveal something new with every viewing.`,
    artistImage: "/soulofbahia/sophie lelouch.jpeg",
    artworkImage:
      "/soulofbahia/Naiades in Red Sea - Dancing Goddesses Collection With Prices.jpeg",
    pieces: [
      {
        title: "NAIADES IN RED SEA",
        created: "May 2022",
        size: "48 x 30 in",
        value: "$7,100",
        details:
          "Naiads were believed to embody the healing, life-giving power of water and were worshipped as goddesses of renewal and prophecy.",
      },
    ],
  },
  {
    id: 4,
    artistName: "Jun Martinez",
    biography:
      'José Jun Martínez (Bayamón, 1992) is a London-based visual artist from Puerto Rico. His practice spans a decade of immersive contemplation in natural environments, translating his perceptions and memories into a language of painting materiality. He received a BA in Fine Arts from the University of Puerto Rico, Rio Piedras (2015) and an MA in Painting from the Royal College of Art in London, where he was awarded the Valerie Beston Artists\' Trust Prize (2024). His recent solo exhibitions include "Esto También Permanece" (Fundación Ángel Ramos, San Juan, 2022) and "El abrazo de las fieras" (Walter Otero Contemporary Art, San Juan, 2022) and upcoming shows in Galería Leyendecker, Tenerife; Matt Carey-Williams, London; and Ordovas, London. "I paint places of encounter for ecological, historical, and poetic reflections that transcend location specificity, creating sensorial, conceptual, and emotional bridges of experience. Approaching the subjects from an immersive perspective, the paintings embody a sense of solidarity and a commitment to liberation. Coming from a land that, like many others, is continually threatened and exploited by political and economic structures, I insist on painting as an act of reaffirmation while holding the tensions between beauty and violence, praise and lament, celebration and protest." JJM 2024',
    artistImage: "/soulofbahia/jun martinesz2.png",
    artworkImage: "/soulofbahia/Jun - painting.jpg",
    pieces: [
      {
        title: "Sonrisas al por venir- Print 6/6 AP 2024",
        size: "22 x 18 in",
        value: "$1,500",
      },
    ],
  },
  {
    id: 5,
    artistName: "Bernardo Medina",
    biography:
      "Bernardo Medina is a Puerto Rican artist, entrepreneur, creative strategist, communicator, and author of The Sofrito Manifesto book series. He studied Humanities, Theatre, and Education at the University of Puerto Rico, later completing a master's degree in Communications and an MBA in International Business and Marketing in Connecticut and Luxembourg. His creative vision has shaped major and memorable campaigns in Puerto Rico's advertising industry. As a visual artist, he is recognized for his pop-inspired interpretations of Puerto Rico's rural cultural symbols. His passion for color and innovation has led him to exhibit in Madrid, Havana, Miami, New York, and beyond, always driven by an unwavering curiosity and the desire to be an insatiable idea hunter.",
    artistImage: "/soulofbahia/Bernardo Medina.jpg.webp",
    artworkImage: "/soulofbahia/Platano- Beme.jpg",
    pieces: [
      {
        title: "Skateboard",
        size: "Approx. 32 x 8 in",
        value: "$3,500",
        image: "/soulofbahia/Skate BEME.jpg",
      },
      {
        title: "Pica Horses",
        size: "Approx. 24 x 18 in",
        value: "$3,500",
        image: "/soulofbahia/PIca- Beme.jpg",
      },
      {
        title: "Plátano Repetition",
        size: "5 x 4 ft",
        value: "$7,000",
        image: "/soulofbahia/Platano- Beme.jpg",
      },
    ],
  },
];

const experiences = [
  {
    id: 6,
    title: "Four Seasons Hotel Gresham Palace Budapest",
    subtitle: "European Luxury Getaway",
    description:
      "Escape to the heart of Europe with a stay at the Four Seasons Hotel Gresham Palace Budapest, a majestic Art Nouveau palace resting on the banks of the Danube River, right beside the iconic Chain Bridge. The elegance of the building, combined with refined Four Seasons hospitality and panoramic city-and-river views, make this the ideal luxurious getaway for art lovers, romantic escapes, or cultural adventurers. Whether you stroll across historic bridges, explore nearby architecture, or relax in supreme comfort, this experience brings together heritage, luxury and serenity in the heart of Budapest.",
    image: "/soulofbahia/Four Seasons Budapest.png",
    includes: [
      "A 3-night stay in a well-appointed guest room or suite with city or river views — classic Four Seasons comfort meets European grandeur.",
      "Daily breakfast for two at the hotel's elegant dining venues or lobby restaurant — start your days with sophistication and ease.",
      "Full access to the hotel's spa & wellness center, including an indoor pool with panoramic views, sauna, steam rooms, whirlpool and luxury treatments using tradition-inspired methods for ultimate relaxation.",
      "Use of the state-of-the-art fitness centre — cardio and strength equipment available 24/7 for in-house guests.",
      "Access to signature dining and bar experiences — from the refined brasserie and bar to the elegant lobby lounge, offering European and Hungarian cuisine, cocktails, and a vibrant cultural atmosphere",
      "Concierge-curated city experiences — whether it's a romantic walking tour by the Danube, a cultural visit to historic sites, or an elegant evening out, the concierge will ensure a seamless stay.",
    ],
    valueNote:
      "Exact value to be confirmed based on room category, dates, and optional add-ons (spa treatments, special dining, etc.).",
  },
  {
    id: 7,
    title: "Four Seasons Hotel George V Paris",
    subtitle: "Parisian Luxury Experience",
    description:
      "Indulge in the timeless elegance of Four Seasons Hotel George V Paris, an iconic landmark just steps from the Champs-Élysées. Set within the Golden Triangle at the heart of Paris, this legendary palace hotel blends classic French sophistication with contemporary luxury, world-renowned dining, and extraordinary floral artistry created by Jeff Leatham. From the grand marble interiors to breathtaking city views, every moment at George V is designed to immerse guests in the magic, romance, and beauty of Paris.",
    image: "/soulofbahia/Four Seasons Hotel Paris.png",
    includes: [
      "A 3-night stay in a beautifully appointed guest room or suite, showcasing refined Parisian décor and exceptional comfort",
      "Daily breakfast for two served in your room or at one of the hotel's award-winning restaurants",
      "Access to the Spa at Four Seasons George V, including indoor pool, vitality pool, sauna, steam room, and state-of-the-art fitness facilities",
      "Preferred reservations at the hotel's Michelin-starred restaurants, including Le Cinq (three Michelin stars), Le George, and L'Orangerie",
      "Concierge-curated Parisian experiences, such as private museum visits, river cruises, or personalized shopping routes in the Golden Triangle",
      "Signature Four Seasons touches, including nightly turndown, luxury amenities, and impeccable service throughout your stay",
    ],
    valueNote:
      "To be finalized based on accommodation category and travel dates.",
  },
];

export default function ArtworkGallery() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Gallery Title */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-primary mb-4">
            Featured Collection
          </h2>
          <div className="h-px w-24 sm:w-32 bg-quinary mx-auto" />
        </div>

        {/* Artworks */}
        <div className="space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 xl:gap-16`}
            >
              {/* Artwork Image Section - Large */}
              <div className="lg:w-1/2">
                {/* Check if pieces have individual images */}
                {artwork.pieces.some((piece) => piece.image) ? (
                  // Display grid of individual piece images
                  <div className="grid grid-cols-1 gap-4">
                    {artwork.pieces.map(
                      (piece, pieceIdx) =>
                        piece.image && (
                          <div
                            key={pieceIdx}
                            className="relative aspect-4/5 w-full overflow-hidden bg-tertiary"
                          >
                            <Image
                              src={piece.image}
                              alt={
                                piece.title ||
                                `${artwork.artistName} artwork ${pieceIdx + 1}`
                              }
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-700"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Piece title overlay */}
                            {piece.title && (
                              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-primary/80 to-transparent p-4">
                                <p className="text-white text-sm sm:text-base font-light tracking-wide">
                                  {piece.title}
                                </p>
                              </div>
                            )}
                          </div>
                        )
                    )}
                  </div>
                ) : (
                  // Display single artwork image
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-tertiary">
                    <Image
                      src={artwork.artworkImage}
                      alt={`${artwork.artistName} artwork`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                {/* Artist Number */}
                <div className="text-quinary text-5xl sm:text-6xl font-light">
                  {artwork.id}
                </div>

                {/* Artist Name */}
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-primary mb-2">
                    {artwork.artistName}
                  </h3>
                  {artwork.location && (
                    <p className="text-sm sm:text-base font-light italic tracking-wide text-secondary">
                      {artwork.location}
                    </p>
                  )}
                </div>

                {/* Biography with Artist Portrait */}
                <div>
                  <div className="flex gap-4 items-start mb-3">
                    <h4 className="text-base sm:text-lg font-light tracking-widest text-secondary uppercase flex-1">
                      Biography
                    </h4>
                    {artwork.artistImage && (
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-secondary/30 shrink-0">
                        <Image
                          src={artwork.artistImage}
                          alt={artwork.artistName}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    )}
                  </div>
                  <p className="text-sm sm:text-base font-light leading-relaxed text-quaternary/80">
                    {artwork.biography}
                  </p>
                </div>

                {/* Pieces */}
                <div className="border-t border-secondary/20 pt-6 space-y-4">
                  <h4 className="text-base sm:text-lg font-light tracking-widest text-secondary uppercase">
                    Available Piece{artwork.pieces.length > 1 ? "s" : ""}
                  </h4>
                  {artwork.pieces.map((piece, pieceIndex) => (
                    <div key={pieceIndex} className="space-y-2">
                      {piece.title && (
                        <p className="text-base sm:text-lg font-light text-primary">
                          {piece.title}
                        </p>
                      )}
                      <div className="text-sm sm:text-base font-light text-quaternary/70 space-y-1">
                        {piece.created && <p>Created: {piece.created}</p>}
                        {piece.medium && <p>Medium: {piece.medium}</p>}
                        {piece.size && <p>Size: {piece.size}</p>}
                        {piece.details && <p>Details: {piece.details}</p>}
                      </div>
                      <p className="text-lg sm:text-xl font-light text-quinary">
                        Value: {piece.value}
                      </p>
                      {pieceIndex < artwork.pieces.length - 1 && (
                        <div className="h-px w-16 bg-secondary/20 my-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Experiences */}
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className={`flex flex-col ${
                experience.id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 xl:gap-16`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2">
                <div className="relative aspect-4/5 w-full overflow-hidden bg-tertiary">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                {/* Experience Number */}
                <div className="text-quinary text-5xl sm:text-6xl font-light">
                  {experience.id}
                </div>

                {/* Experience Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-primary mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-lg sm:text-xl font-light italic tracking-wide text-secondary">
                    {experience.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base font-light leading-relaxed text-quaternary/80">
                  {experience.description}
                </p>

                {/* Includes */}
                <div className="border-t border-secondary/20 pt-6 space-y-4">
                  <h4 className="text-base sm:text-lg font-light tracking-widest text-secondary uppercase">
                    Included in This Experience
                  </h4>
                  <ul className="space-y-3">
                    {experience.includes.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-sm sm:text-base font-light text-quaternary/80"
                      >
                        <span className="text-quinary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {experience.valueNote && (
                    <p className="text-sm sm:text-base font-light italic text-secondary mt-4">
                      {experience.valueNote}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
