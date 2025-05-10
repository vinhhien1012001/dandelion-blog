
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b border-border">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-folklore tracking-wide">
          Folklore Blog
        </Link>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link to="/" className="font-minion hover:text-blog-dark transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="font-minion hover:text-blog-dark transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
