import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from './logo.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header bg-blue-700 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo avec redirection vers l'accueil */}
        <div className="logo-container">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Has Tech Services Logo" className="logo w-32 h-auto" />
          </Link>
        </div>

        {/* Menu toggle button */}
        <button className="menu-toggle md:hidden" onClick={toggleMenu}>
          <span className="text-white">☰</span>
        </button>

        {/* Menu de navigation */}
        <nav
          className={`nav-links md:flex md:items-center md:justify-center ${
            isMenuOpen ? 'block' : 'hidden'
          } md:block absolute md:relative top-0 left-0 w-full bg-blue-700 bg-opacity-90 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 items-center space-y-6 md:space-y-0 text-lg">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-white hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Qui sommes-nous
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
