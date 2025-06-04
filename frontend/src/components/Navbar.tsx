import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="border-b border-border">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-folklore tracking-wide">
            The Wild Dandelion
          </Link>

          <button
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center gap-4">
            <ul className="flex gap-8">
              <li>
                <Link
                  to="/"
                  className="font-minion hover:text-blog-dark hover:underline transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/subscribe"
                  className="font-minion hover:text-blog-dark hover:underline transition-colors"
                >
                  {t("nav.subscribe")}
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="font-minion hover:text-blog-dark hover:underline transition-colors"
                >
                  {t("nav.support")}
                </Link>
              </li>
            </ul>
            <LanguageSwitcher />
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-[64px] z-50 w-full border-b border-gray-200 shadow-md">
            <nav className="container mx-auto py-4 bg-white border-t border-gray-200">
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="/"
                    className="hover:text-gray-600 transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/subscribe"
                    className="hover:text-gray-600 transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Subscribe
                  </a>
                </li>
                <li>
                  <a
                    href="/donate"
                    className="hover:text-gray-600 transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Support
                  </a>
                </li>
                <li>
                  <LanguageSwitcher />
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Blur effect div - only visible when mobile menu is open */}
      {/* {isMenuOpen && (
        <div
          className="md:hidden h-10 bg-white bg-opacity-50 backdrop-blur-sm w-full"
          onClick={() => setIsMenuOpen(false)}
        />
      )} */}
    </>
  );
};

export default Navbar;
