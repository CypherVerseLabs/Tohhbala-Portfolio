import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-6 xl:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">

          {/* logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              width={220}
              height={80}
              alt="Tohbala LLC"
              priority
            />
          </Link>

          {/* navigation */}
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
              className="border border-white/40 rounded-full px-5 py-2 hover:border-accent hover:text-accent transition-all"
            >
              Client Portal
            </a>
          </nav>

          {/* socials */}
          <Socials />

        </div>
      </div>
    </header>
  );
};

export default Header;