import React from 'react';
import './QuiSommesNous.scss'; 

const QuiSommesNous: React.FC = () => {
  return (
    <section id="about-us" className="qui-sommes-nous py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Qui sommes-nous ?
        </h2>

        <div className="text-gray-800">
          {/* Présentation Générale */}
          <h3 className="text-2xl font-semibold mb-4">Présentation Générale</h3>
          <p className="mb-4">
            Has Tech Services est une entreprise dynamique spécialisée
            dans le dépannage informatique, l'installation d’équipements réseau
            et l’accompagnement digital. Notre mission est de proposer des
            solutions rapides, efficaces et accessibles aux particuliers, et aux entreprises,
            tout en valorisant l’utilisation des outils informatiques
            pour optimiser leurs activités.
          </p>

          {/* Ajout de la vidéo YouTube */}
          <div className="video-container mt-4 mb-8 text-center">
            <iframe
              src="https://www.youtube.com/embed/X37ZSsuOha4"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <ul className="list-disc pl-8 mb-6 mt-6">
            <li>Assurer un service de qualité : pour la réparation et l'entretien des équipements informatiques.</li>
            <li>Offrir un accompagnement personnalisé : pour l'installation et la configuration des réseaux et outils digitaux.</li>
            <li>Garantir la satisfaction client : en proposant des solutions adaptées aux besoins spécifiques de chaque client.</li>
            <li>
              Promouvoir l’usage optimal des technologies : en accompagnant les particuliers et les petites entreprises dans la maîtrise des outils informatiques.
            </li>
          </ul>

          {/* Services Proposés */}
          <h3 className="text-2xl font-semibold mb-4">Services Proposés</h3>
          <ul className="list-disc pl-8 mb-6">
            <li>
              <strong>Dépannage Informatique:</strong> Réparation de matériel informatique, maintenance logicielle et récupération de données.
            </li>
            <li>
              <strong>Installation et Configuration d’Équipements Réseau:</strong> Installation et configuration de routeurs, switchs, câblage Ethernet et Wi-Fi. Création de réseaux locaux (LAN) pour bureaux ou domiciles.
            </li>
            <li>
              <strong>Assistance et Formation:</strong> Assistance technique à distance ou sur site, formation personnalisée à l’utilisation des outils informatiques et des équipements réseau.
            </li>
            <li>
              <strong>Création de Sites Web et Accompagnement Digital:</strong> Conception de sites vitrines, accompagnement sur les réseaux sociaux (gestion, optimisation et stratégie de communication).
            </li>
          </ul>

          {/* Conclusion */}
          <p className="mt-6">
            Chez Has Tech Services, nous nous engageons à être un partenaire de confiance pour vous accompagner dans tous vos besoins technologiques. 
            Notre objectif est de vous offrir des solutions clés en main, adaptées à vos attentes et à vos ambitions.
          </p>

          
          <div className="image-container mt-8 text-center">
            <img 
              src="https://i.imgur.com/KD3Ooh6.jpeg" 
              alt="Nos Services" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuiSommesNous;