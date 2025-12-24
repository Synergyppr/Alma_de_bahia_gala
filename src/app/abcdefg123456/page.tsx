import Footer from "../components/Footer";
import SilentAuctionHero from "../components/SilentAuctionHero";
import ArtworkGallery from "../components/ArtworkGallery";
import AuctionDetails from "../components/AuctionDetails";

export const metadata = {
  title: "Silent Auction | Alma de Bahía Gala",
  description:
    "Celebrating Art, Community, and Conservation. Explore our exclusive collection of artwork and luxury experiences at the inaugural Alma de Bahía Gala silent auction.",
};

export default function SilentAuctionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* <Header /> */}

      <main className="flex-1">
        {/* Hero Section */}
        <SilentAuctionHero />

        {/* Featured Artwork Gallery */}
        <ArtworkGallery />

        {/* Auction Details and Information */}
        <AuctionDetails />

        {/* Call to Action */}
        {/* <AuctionCTA /> */}
      </main>

      <Footer />
    </div>
  );
}
