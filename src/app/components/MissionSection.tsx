export default function MissionSection() {
  return (
    <section id="mission" className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 sm:space-y-10">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-primary">
            The Heart of Alma de Bahía
          </h2>

          {/* Mission Description */}
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide text-quaternary/85 max-w-4xl mx-auto">
            The Alma de Bahía Foundation is a nonprofit dedicated to protecting Puerto Rico&apos;s natural resources and wildlife while fostering sustainable, community-driven growth. From safeguarding endangered sea turtles to rescuing animals and supporting neighboring communities in Río Grande and Loíza, Alma de Bahía embodies stewardship, compassion, and legacy, transforming every action into lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
}
