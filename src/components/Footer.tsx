import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center max-w-4xl px-4">
        {/* Liens de navigation */}
        <div className="mb-6">
          <ul className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
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
            </li>
          </ul>
        </div>

        {/* Liens vers les pages légales */}
        <div className="mb-6">
          <ul className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
            <li>
              <Link to="/privacy-policy" className="text-white hover:text-gray-300 cursor-pointer">
                Politique de Confidentialité
              </Link>
            </li>
            <li>
              <Link to="/mentions-legales" className="text-white hover:text-gray-300 cursor-pointer">
                Mentions Légales
              </Link>
            </li>
          </ul>
        </div>

        {/* Message de copyright */}
        <div className="mt-6">
          <p className="text-gray-400 text-sm">
            © 2016 - 2025. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
