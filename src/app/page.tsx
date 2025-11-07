import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Main content section - placeholder for future content */}
        <section id="home" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-light tracking-wider text-primary sm:text-6xl lg:text-7xl mb-6">
              Welcome to the Paulson Gala
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-light tracking-wide text-quaternary/80">
              An exclusive evening of elegance and sophistication
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <Gallery />

        {/* Contact Form Section - positioned above the footer */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
