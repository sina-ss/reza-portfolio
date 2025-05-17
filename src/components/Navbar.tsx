import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-card text-card-foreground shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Reza F. Hosseini
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="#about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#education"
              className="hover:text-primary transition-colors"
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
          {/* Mobile menu button (optional for now) */}
        </div>
      </div>
    </nav>
  );
}
