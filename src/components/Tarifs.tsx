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
        Voici nos tarifs pour les différentes prestations de notre entreprise. Tous nos services sont réalisés avec professionnalisme et transparence.
      </p>

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
              <td>Intervention simple</td>
              <td>35€</td>
              <td><img src="https://i.imgur.com/2mPhMbD.jpeg" alt="Installation routeur" className="image-small" /></td>
            </tr>
            <tr>
              <td>Intervention intermédiaire</td>
              <td>50€</td>
              <td><img src="https://i.imgur.com/B1i4E4i.jpg" alt="Réseaux locaux" className="image-small" /></td>
            </tr>
            <tr>
              <td>Intervention complexe</td>
              <td>100€</td>
              <td><img src="https://i.imgur.com/Dk7cIgw.jpeg" alt="Optimisation Wi-Fi" className="image-small" /></td>
            </tr>
            <tr>
              <td>Assistance, Accompagnement et Formation</td>
              <td>30€/1h</td>
              <td><img src="https://i.imgur.com/dsR94dQ.jpg" alt="Maintenance et dépannage" className="image-small" /></td>
            </tr>
            <tr>
              <td>Évaluation, Audit et sécurisation du réseau</td>
              <td>50€/1h</td>
              <td><img src="https://i.imgur.com/uybf3qD.png" alt="Sécurisation réseau" className="image-small" /></td>
            </tr>
            <tr>
              <td>Maintenance et réparation des pièces d'ordinateur</td>
              <td>Prix variable selon la panne</td>
              <td><img src="https://i.imgur.com/EcvAEQf.jpeg" alt="Réparation matériel" className="image-small" /></td>
            </tr>
            <tr>
              <td>Entretien et nettoyage</td>
              <td>20€</td>
              <td><img src="https://i.imgur.com/z17iKib.jpeg" alt="Nettoyage ordinateur" className="image-small" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-center text-blue-700 mb-4">
          Forfait de Déplacement
        </h2>
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Zone de déplacement</th>
              <th className="px-4 py-2">Frais de déplacement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td className="border px-4 py-2">Jusqu'à 10 km</td>
              <td className="border px-4 py-2">Gratuit</td>
              
            </tr>
            <tr>
            <td className="border px-4 py-2">10 à 20 km</td>
              <td className="border px-4 py-2">10€</td>
              
            </tr>
            <tr>
            <td className="border px-4 py-2">20 km et plus</td>
              <td className="border px-4 py-2">20€</td>
             
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 mb-4">
          Pour toute demande spécifique ou devis personnalisé, contactez-nous directement :
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <FaPhoneAlt size={24} className="icon" />
            <p className="text-lg text-gray-700">+33 7 76 11 68 96</p>
          </div>
          <div className="contact-item">
            <FaEnvelope size={24} className="icon" />
            <p className="text-lg text-gray-700">contact@has-tech-services.fr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarifs;
