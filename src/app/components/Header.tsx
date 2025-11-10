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
          <nav className="w-full">
            <ul className="flex justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-light tracking-wide text-quaternary">
              <li>
                <a
                  href="#home"
                  className="transition-colors hover:text-secondary text-center"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#mission"
                  className="transition-colors hover:text-secondary text-center"
                >
                  Pillars of Purpose
                </a>
              </li>
              <li>
                <a
                  href="#sponsorship"
                  className="transition-colors hover:text-secondary text-center"
                >
                  Circle of Giving
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
            <ul className="flex gap-6 md:gap-8 lg:gap-12 xl:gap-16 text-sm lg:text-base font-light tracking-wide text-quaternary">
              <li>
                <a
                  href="#home"
                  className="transition-colors hover:text-secondary whitespace-nowrap"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#mission"
                  className="transition-colors hover:text-secondary whitespace-nowrap"
                >
                  Pillars of Purpose
                </a>
              </li>
              <li>
                <a
                  href="#sponsorship"
                  className="transition-colors hover:text-secondary whitespace-nowrap"
                >
                  Circle of Giving
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
