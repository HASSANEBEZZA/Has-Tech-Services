import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        {/* Texte d'introduction */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Nos Services Informatiques : Une Solution Complète et Personnalisée
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Chez Has Tech Services, nous répondons aux besoins informatiques des particuliers et des petites entreprises.
          Spécialisés dans le dépannage informatique, l'installation et la configuration d'équipements réseau, nous proposons des solutions fiables, efficaces et adaptées à vos attentes.
        </p>

        {/* Présentation des prestations */}
        <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">Nos Prestations</h3>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Découvrez une large gamme de services pour garantir le bon fonctionnement de vos équipements et réseaux.
        </p>

        {/* Liste des services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Service 1 */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
            <Link to="/repair-info">
              <img
                src="https://i.imgur.com/wzvo6pu.png"
                alt="Illustration de dépannage informatique"
                className="w-full h-64 object-contain mb-4"
              />
            </Link>
            <h3 className="text-xl font-semibold text-center">
              <Link to="/repair-info">Dépannage Informatique</Link>
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Réparation de matériel informatique : PC, laptops, imprimantes.</li>
              <li>Maintenance logicielle : suppression de virus, mises à jour.</li>
              <li>Récupération de données sur disques durs ou autres supports.</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
            <Link to="/network-setup">
              <img
                src="https://i.imgur.com/CA5GfO9.png"
                alt="Illustration de configuration réseau"
                className="w-full h-64 object-contain mb-4"
              />
            </Link>
            <h3 className="text-xl font-semibold text-center">
              <Link to="/network-setup">Installation et Configuration Réseau</Link>
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Installation de routeurs, switchs, et câblage Ethernet.</li>
              <li>Création de réseaux locaux (LAN) pour bureaux ou domiciles.</li>
              <li>Optimisation et sécurisation des réseaux Wi-Fi.</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
            <Link to="/support-training">
              <img
                src="https://i.imgur.com/rwPFjn7.png"
                alt="Illustration d'assistance et formation"
                className="w-full h-64 object-contain mb-4"
              />
            </Link>
            <h3 className="text-xl font-semibold text-center">
              <Link to="/support-training">Assistance et Formation</Link>
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Assistance technique à distance ou sur site.</li>
              <li>Formation personnalisée sur les outils informatiques.</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
            <Link to="/web-creation">
              <img
                src="https://i.imgur.com/VXbIgDJ.png"
                alt="Illustration de création de sites web"
                className="w-full h-64 object-contain mb-4"
              />
            </Link>
            <h3 className="text-xl font-semibold text-center">
              <Link to="/web-creation">Création de Sites Web et Accompagnement Digital</Link>
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Conception de sites vitrines pour entreprises ou particuliers.</li>
              <li>Stratégie et gestion de présence sur les réseaux sociaux.</li>
            </ul>
          </div>
        </div>

        {/* Pourquoi choisir Has Tech Services */}
        <div className="text-center my-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Pourquoi Choisir Has Tech Services ?</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li><strong>Expertise</strong> : Solutions rapides et fiables.</li>
            <li><strong>Accompagnement personnalisé</strong> : Services adaptés à vos besoins.</li>
            <li><strong>Satisfaction garantie</strong> : Rapport détaillé et garantie de 30 jours.</li>
          </ul>
        </div>

        {/* Zones d'intervention */}
        <div className="text-center my-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Zones d'Intervention</h3>
          <p className="text-lg text-gray-700">
            Nous intervenons à Senlis et dans les principales villes de la région de l’Oise : Noyon, Clermont, Compiègne, et au-delà.
            Des frais de déplacement s'appliquent au-delà de 20 km.
          </p>
        </div>

        {/* Conclusion */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 font-semibold">
            Has Tech Services : Des solutions informatiques fiables et accessibles pour simplifier votre quotidien.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
