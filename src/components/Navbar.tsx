
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useLanguage();
  
  return (
    <header className="border-b border-border">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-folklore tracking-wide">
          Folklore Blog
        </Link>
        <nav className="flex items-center gap-4">
          <ul className="flex gap-8">
            <li>
              <Link to="/" className="font-minion hover:text-blog-dark transition-colors">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link to="/subscribe" className="font-minion hover:text-blog-dark transition-colors">
                {t("nav.subscribe")}
              </Link>
            </li>
            <li>
              <Link to="/donate" className="font-minion hover:text-blog-dark transition-colors">
                {t("nav.support")}
              </Link>
            </li>
          </ul>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
