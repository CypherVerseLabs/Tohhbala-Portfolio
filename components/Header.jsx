import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-8">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              width={220}
              height={80}
              alt="Tohbala LLC"
              priority
            />
          </Link>


          {/* Navigation */}
          <nav className="hidden xl:flex items-center gap-x-8">
            <Link
              href="/"
              className="hover:text-accent transition-all"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="hover:text-accent transition-all"
            >
              Solutions
            </Link>

            <Link
              href="/work"
              className="hover:text-accent transition-all"
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="hover:text-accent transition-all"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="hover:text-accent transition-all"
            >
              Discovery
            </Link>

            <a
              href="https://portal.tohbalallc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border
                border-white/40
                px-5
                py-2
                transition-all
                hover:border-accent
                hover:text-accent
              "
            >
              Client Portal
            </a>
          </nav>


          {/* Social Icons */}
          <Socials />

        </div>
      </div>
    </header>
  );
};

export default Header;