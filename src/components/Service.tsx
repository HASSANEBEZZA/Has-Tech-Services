import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        {/* Texte d'introduction */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Nos Services Informatiques : Une Solution Complète et Personnalisée
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Chez Has Tech Services, nous nous engageons à répondre aux besoins informatiques des particuliers et des petites entreprises. 
          Spécialisés dans le dépannage informatique, l'installation et la configuration d'équipements réseau, 
          nous proposons des solutions fiables, efficaces et adaptées à vos attentes.
        </p>

        <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">Nos Prestations</h3>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Nous mettons à votre disposition une large gamme de services pour garantir le bon fonctionnement de vos équipements et réseaux :
        </p>

        {/* Conteneur des prestations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Service 1 - Dépannage Informatique */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
            <img
              src="https://i.imgur.com/wzvo6pu.png"
              alt="Dépannage Informatique"
              className="w-full h-64 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Dépannage Informatique</h3>
            <ul>
              <li>Réparation de matériel informatique : PC, laptops, imprimantes, etc.</li>
              <li>Maintenance logicielle : suppression de virus, mises à jour, optimisation des performances</li>
              <li>Récupération de données : sur disques durs ou autres supports</li>
            </ul>
          </div>

          {/* Service 2 - Installation et Configuration d’Équipements Réseau */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
            <img
              src="https://i.imgur.com/CA5GfO9.png"
              alt="Installation et Configuration Réseau"
              className="w-full h-64 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Installation et Configuration d’Équipements Réseau</h3>
            <ul>
              <li>Installation et configuration de routeurs, switchs, câblage Ethernet et réseaux Wi-Fi</li>
              <li>Création de réseaux locaux (LAN) pour bureaux ou domiciles</li>
              <li>Optimisation de la couverture réseau et sécurisation</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
          {/* Service 3 - Assistance et Formation */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
            <img
              src="https://i.imgur.com/rwPFjn7.png"
              alt="Assistance et Formation"
              className="w-full h-64 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Assistance et Formation</h3>
            <ul>
              <li>Assistance technique : à distance ou sur site</li>
              <li>Formation personnalisée : à l’utilisation des outils informatiques et équipements réseau</li>
            </ul>
          </div>

          {/* Service 4 - Création de Sites Web et Accompagnement Digital */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
            <img
              src="https://i.imgur.com/VXbIgDJ.png"
              alt="Création de Sites Web et Accompagnement Digital"
              className="w-full h-64 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Création de Sites Web et Accompagnement Digital</h3>
            <ul>
              <li>Conception de sites vitrines pour particuliers ou entreprises</li>
              <li>Accompagnement sur les réseaux sociaux : gestion, optimisation et stratégie de communication</li>
            </ul>
          </div>
        </div>

        {/* Pourquoi Choisir Has Tech Services */}
        <div className="text-center mb-8 mt-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Pourquoi Choisir Has Tech Services ?</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li><strong>Une Expertise à Votre Service</strong> : Nos compétences permettent de résoudre rapidement vos problèmes informatiques et d’assurer la fiabilité de vos installations réseau.</li>
            <li><strong>Un Accompagnement Personnalisé</strong> : Nous analysons vos besoins pour offrir des solutions adaptées, que vous soyez un particulier ou une petite entreprise.</li>
            <li><strong>Une Satisfaction Garantie</strong> : Chaque intervention est suivie d'un rapport détaillé, avec une garantie de 30 jours sur les réparations effectuées.</li>
          </ul>
        </div>

        {/* Zones d'Intervention */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Zones d'Intervention</h3>
          <p className="text-lg text-gray-700">
            Basés dans le nord ..., nous intervenons aussi bien dans les zones urbaines que rurales. Des frais de déplacement s'appliquent pour les interventions au-delà de 20 km.
          </p>
        </div>

        {/* Nos Valeurs */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Nos Valeurs</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li><strong>Transparence</strong> : Des tarifs clairs et détaillés pour chaque prestation.</li>
            <li><strong>Confiance</strong> : Une confidentialité totale concernant vos données.</li>
            <li><strong>Qualité</strong> : Des délais respectés et des interventions réalisées avec professionnalisme.</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Prenez Contact Avec Nous !</h3>
          <p className="text-lg text-gray-700 mb-8">
            Que ce soit pour un dépannage urgent, une installation réseau, ou une assistance technique, Has Tech Services est votre partenaire de confiance. 
            Contactez-nous dès aujourd'hui par téléphone, e-mail ou via notre formulaire en ligne pour un diagnostic préliminaire gratuit.
          </p>
        </div>

        {/* Conclusion */}
        <div className="text-center">
          <p className="text-lg text-gray-700 font-semibold">Has Tech Services : Des solutions informatiques rapides, efficaces et accessibles pour simplifier votre quotidien.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
