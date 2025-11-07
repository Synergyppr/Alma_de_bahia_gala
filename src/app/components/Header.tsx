import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-secondary/20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Mobile Layout: Centered logo and navigation */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          <Image
            src="/logo.png"
            alt="Paulson Puerto Rico"
            width={200}
            height={80}
            priority
            className="h-auto w-48"
          />
          <nav>
            <ul className="flex gap-6 text-sm font-light tracking-wide text-quaternary">
              <li>
                <a href="#home" className="transition-colors hover:text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition-colors hover:text-secondary">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Desktop Layout: Logo left, navigation right */}
        <div className="hidden md:flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Paulson Puerto Rico"
            width={150}
            height={60}
            priority
            className="h-auto w-22 lg:w-32"
          />
          <nav>
            <ul className="flex gap-8 text-sm font-light tracking-wide text-quaternary">
              <li>
                <a href="#home" className="transition-colors hover:text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition-colors hover:text-secondary">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
