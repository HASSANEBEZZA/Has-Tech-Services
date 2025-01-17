import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from './logo.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header bg-blue-700 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Has Tech Services Logo" className="logo w-32 h-auto" />
          </Link>
        </div>

        {/* Menu toggle button */}
        <button className="menu-toggle md:hidden" onClick={toggleMenu}>
          <span className="text-white">☰</span>
        </button>

        {/* Navigation menu */}
        <nav
          className={`nav-links md:flex md:items-center md:justify-center ${
            isMenuOpen ? 'block' : 'hidden'
          } md:block absolute md:relative top-0 left-0 w-full bg-blue-700 bg-opacity-90 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 items-center space-y-6 md:space-y-0 text-lg">
            <li>
              <Link to="/" className="text-white hover:text-gray-300 cursor-pointer">
                Accueil
              </Link>
            </li>
            <li>
              <ScrollLink
                to="about-us"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                Qui sommes-nous
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                Contact
              </ScrollLink>
            </li>
            <li>
              <Link to="/tarifs" className="text-white hover:text-gray-300 cursor-pointer">
                Tarifs
              </Link>
            </li> {/* ✅ Ajout du lien vers la page Tarifs */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
