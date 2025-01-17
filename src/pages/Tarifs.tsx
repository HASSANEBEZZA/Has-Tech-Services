import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 
import '../styles/Tarifs.scss';

const Tarifs: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="tarifs container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Nos Tarifs pour les Interventions
      </h1>

      <p className="text-lg text-gray-700 text-center mb-8">
        Voici nos tarifs pour les différentes prestations de notre micro-entreprise. Tous nos services sont réalisés avec professionnalisme et transparence.
      </p>

      {/* Tableau des tarifs */}
      <div className="tarifs-table">
        <table>
          <thead>
            <tr>
              <th>Prestation</th>
              <th>Tarif</th>
              <th>Illustration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Installation et configuration de routeur</td>
              <td>00€</td>
              <td><img src="https://i.imgur.com/Dk7cIgw.jpeg" alt="Installation routeur" className="image-small" /></td>
            </tr>
            <tr>
              <td>Création de réseaux locaux (LAN)</td>
              <td>00€</td>
              <td><img src="https://i.imgur.com/wltfMpI.jpeg" alt="Réseaux locaux" className="image-small" /></td>
            </tr>
            <tr>
              <td>Optimisation Wi-Fi</td>
              <td>00€</td>
              <td><img src="https://i.imgur.com/UKMUQY4.jpeg" alt="Optimisation Wi-Fi" className="image-small" /></td>
            </tr>
            <tr>
              <td>Maintenance et dépannage</td>
              <td>00€/h</td>
              <td><img src="https://i.imgur.com/rw0vmlu.jpg" alt="Maintenance et dépannage" className="image-small" /></td>
            </tr>
            <tr>
              <td>Audit et sécurisation du réseau</td>
              <td>00€</td>
              <td><img src="https://i.imgur.com/TmTOkwi.jpeg" alt="Sécurisation réseau" className="image-small" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      
{/* Section Contact  */}
<div className="text-center mt-12">
  <p className="text-lg text-gray-700 mb-4">
    Pour toute demande spécifique ou devis personnalisé, contactez-nous directement :
  </p>

  {/* Informations de contact avec icônes */}
  <div className="contact-info">
    {/* Téléphone */}
    <div className="contact-item">
      <FaPhoneAlt size={24} className="icon" />
      <p className="text-lg text-gray-700">+33 7 76 11 68 96</p>
    </div>

    {/* Email */}
    <div className="contact-item">
      <FaEnvelope size={24} className="icon" />
      <p className="text-lg text-gray-700">contact@hastech.com</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Tarifs;
