import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import './NetworkServices.scss'; 

const NetworkServices: React.FC = () => {
  // Utilisation du hook useLocation pour détecter les changements de route
  const location = useLocation();

  // Scroll vers le haut lors du rendu ou du changement de route
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]); 

  return (
    <div className="network-services container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Installation et Configuration Réseau
      </h1>
<br></br>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation de routeurs et switchs</h2>
        <p className="text-lg text-gray-700 mb-4">
        On s'occupe de l'installation et de la configuration de vos équipements réseau, tels que les routeurs et commutateurs, pour assurer une connexion fiable et rapide dans votre environnement professionnel ou domestique.
        </p>
        <img
          src="https://i.imgur.com/Dk7cIgw.jpeg/600x400" 
          alt="Installation routeurs et switchs"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Création de réseaux locaux (LAN)</h2>
        <p className="text-lg text-gray-700 mb-4">
        On crée des réseaux locaux (LAN) adaptés à vos besoins, que ce soit pour un bureau ou une maison. Que ce soit pour une petite entreprise ou un réseau domestique complexe, on vous accompagne pour établir une infrastructure performante et sécurisée.
        </p>
        <img
          src="https://i.imgur.com/Ob8PiW0.jpg/600x400" 
          alt="Création réseaux locaux"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Optimisation des réseaux Wi-Fi</h2>
        <p className="text-lg text-gray-700 mb-4">
        Améliorez la portée et la performance de votre réseau Wi-Fi. On propose des solutions pour optimiser votre signal Wi-Fi et garantir une couverture homogène dans toute votre maison ou bureau, tout en assurant une connexion stable pour tous vos appareils.
        </p>
        <img
          src="https://i.imgur.com/jsPv7hL.jpg/600x400" 
          alt="Optimisation réseaux Wi-Fi"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sécurisation des réseaux</h2>
        <p className="text-lg text-gray-700 mb-4">
        On s'assure que votre réseau est protégé contre les menaces extérieures en configurant des pare-feu, des protocoles de sécurité avancés et des réseaux privés virtuels (VPN), pour une sécurité renforcée de vos données et de vos connexions.
        </p>
        <img
          src="https://i.imgur.com/Yj7bY2y.jpg/600x400" 
          alt="Sécurisation des réseaux"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Gestion des IP et du câblage Ethernet</h2>
        <p className="text-lg text-gray-700 mb-4">
        On vous aide à gérer vos adresses IP et à installer un câblage Ethernet propre et performant, permettant une communication rapide et stable entre vos équipements.
        </p>
        <img
          src="https://i.imgur.com/G513vIt.jpg/600x400" 
          alt="Gestion IP et câblage Ethernet"
        />
      </section>
    </div>
  );
};

export default NetworkServices;
