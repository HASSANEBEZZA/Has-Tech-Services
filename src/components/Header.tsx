import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import de react-scroll
import logo from './logo.svg';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu(); 
  };

  return (
    <header className="header bg-blue-700 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="logo-container">
          <ScrollLink to="home" smooth={true} duration={500} onClick={scrollToTop}>
            <img src={logo} alt="Has Tech Services Logo" className="logo w-32 h-auto" />
          </ScrollLink>
        </div>

        <button className="menu-toggle md:hidden" onClick={toggleMenu}>
          <span className="text-white">☰</span>
        </button>

        {/* Navigation menu */}
        <nav
          className={`nav-links ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 items-center space-y-6 md:space-y-0 text-lg">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300 cursor-pointer"
                onClick={closeMenu}
              >
                Accueil
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about-us"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300 cursor-pointer"
                onClick={closeMenu}
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
                onClick={closeMenu}
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="tarifs"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300 cursor-pointer"
                onClick={closeMenu}
              >
                Tarifs
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="avis"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300 cursor-pointer"
                onClick={closeMenu}
              >
                Avis
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300 cursor-pointer"
                onClick={closeMenu}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
