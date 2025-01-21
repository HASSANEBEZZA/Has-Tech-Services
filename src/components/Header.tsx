import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
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
          <Link to="/" onClick={scrollToTop}>
            <img src={logo} alt="Has Tech Services Logo" className="logo w-32 h-auto" />
          </Link>
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
              <Link to="/" className="text-white hover:text-gray-300 cursor-pointer" onClick={scrollToTop}>
                Accueil
              </Link>
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
                to="contact"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300 cursor-pointer"
                onClick={closeMenu}
              >
                Contact
              </ScrollLink>
            </li>
            <li>
              <Link to="/tarifs" className="text-white hover:text-gray-300 cursor-pointer" onClick={closeMenu}>
                Tarifs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
