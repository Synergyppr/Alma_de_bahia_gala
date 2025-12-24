import Header from "./components/Header";
import Footer from "./components/Footer";
import MissionSection from "./components/MissionSection";
import EveningSection from "./components/EveningSection";
import LeadershipSection from "./components/LeadershipSection";
import PillarsSection from "./components/PillarsSection";
import CircleOfGiving from "./components/CircleOfGiving";
import LegacyFooter from "./components/LegacyFooter";
import Gallery from "./components/Gallery";
import HeroBanner from "./components/HeroBanner";
import ContactForm from "./components/ContactForm";
import GalaVideoSection from "./components/GalaVideoSection";
import EventPhotosCarousel from "./components/EventPhotosCarousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Banner - Where Soul Meets Purpose */}
        <HeroBanner />
        <section id="home">{/* <AlmaHeroBanner /> */}</section>

        {/* Mission - The Heart of Alma de Bahía */}
        <MissionSection />

        {/* Evening Under the Stars with Four Seasons */}
        <EveningSection />

        {/* Leadership - Guided by Visionaries */}
        <LeadershipSection />

        {/* Gala Video Recap */}
        <GalaVideoSection />

        {/* Pillars of Purpose */}
        <PillarsSection />

        {/* Event Photos Carousel */}
        <EventPhotosCarousel />

        {/* Sponsorship Levels - Join the Circle of Giving */}
        {/* <TableLevels /> */}

        {/* Sponsorship - Circle of Giving */}
        <CircleOfGiving />

        {/* Gallery Section */}
        <Gallery />

        {/* Contact Form Section */}
        <ContactForm />

        {/* Legacy Footer - Be Part of the Legacy */}
        <LegacyFooter />
      </main>
      <Footer />
    </div>
  );
}
