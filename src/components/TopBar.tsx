import React from 'react';
import { FaPhoneAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import './TopBar.scss';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-2">
        {/* Contact par téléphone */}
        <div className="top-bar-item">
          <FaPhoneAlt className="icon" />
          <span>
            Appelez-nous : <strong>+33 7 76 11 68 96</strong> 
          </span>
        </div>

        {/* Horaires */}
        <div className="top-bar-item">
          <FaClock className="icon" />
          <span>
            Horaires : <strong>Lundi/Dimanche : 08:00 - 19:00</strong>
          </span>
        </div>

        {/* Adresse email */}
        <div className="top-bar-item">
          <FaEnvelope className="icon" />
          <span>
            <a href="mailto:contact@has-tech-services.fr">contact@has-tech-services.fr</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
