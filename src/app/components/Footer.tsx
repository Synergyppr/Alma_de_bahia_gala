export default function Footer() {
  return (
    <footer className="w-full border-t border-secondary/20 bg-primary text-tertiary">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <p className="text-sm font-light tracking-wide">
            &copy; {new Date().getFullYear()} Paulson Puerto Rico. All rights reserved.
          </p>
          {/* <div className="flex gap-6 text-sm font-light tracking-wide">
            <a href="#privacy" className="transition-colors hover:text-secondary">
              Privacy Policy
            </a>
            <a href="#terms" className="transition-colors hover:text-secondary">
              Terms
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
