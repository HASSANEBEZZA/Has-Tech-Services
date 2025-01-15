import React from 'react';
import './RepairInfo.scss';

const RepairInfo: React.FC = () => {
  return (
    <div className="repair-info container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
      Nos Prestations
      </h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Réparation de matériel informatique</h2>
        <p className="text-lg text-gray-700 mb-4">
          Nous proposons des services de réparation pour tous vos appareils informatiques, y compris les ordinateurs de bureau, portables et imprimantes. Quel que soit le problème, nous avons la solution.
        </p>
        <img 
          src="https://i.imgur.com/EcvAEQf.jpeg" 
          alt="Réparation informatique" 
          className="w-1/3 h-auto mb-8 mx-auto"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Maintenance logicielle</h2>
        <p className="text-lg text-gray-700 mb-4">
          Nous offrons des services de maintenance logicielle, y compris la suppression de virus, l'optimisation des performances et la gestion des mises à jour. Assurez-vous que votre système fonctionne à son meilleur niveau.
        </p>
        <img 
          src="https://i.imgur.com/2mPhMbD.jpeg" 
          alt="Maintenance logicielle" 
          className="w-1/3 h-auto mb-8 mx-auto"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Récupération de données</h2>
        <p className="text-lg text-gray-700 mb-4">
          Vous avez perdu des données importantes ? Nous proposons des services de récupération de données à partir de disques durs endommagés ou d'autres supports de stockage. Nous récupérons vos données avec soin et sécurité.
        </p>
        <img 
          src="https://i.imgur.com/tX1EQ1d.jpeg" 
          alt="Récupération de données" 
          className="w-1/3 h-auto mb-8 mx-auto"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Précautions d'utilisation et entretien préventif</h2>
        <p className="text-lg text-gray-700 mb-4">
        Votre ordinateur comporte de nombreux composants sensibles et fragiles. Je vous conseille de prendre soin de votre appareil en évitant les chocs, l'exposition à l'eau, à l'humidité, à la poussière et aux températures extrêmes. Mon service de réparation inclut également des vérifications pour assurer une bonne ventilation et préserver les charnières, afin de garantir une utilisation optimale et une plus longue durée de vie de votre appareil.
        </p>
        <img 
          src="https://i.imgur.com/EXWwYlt.jpeg" 
          alt="Précautions pour ordinateur" 
          className="w-full h-auto mb-8"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Préservez la performance de votre ordinateur</h2>
        <p className="text-lg text-gray-700 mb-4">
        La poussière est l’un des principaux ennemis de votre appareil. Je propose un service de nettoyage complet, en dépoussiérant les parties visibles et internes de votre ordinateur à l’aide d’outils professionnels, pour garantir une meilleure longévité.
        </p>
        <img 
          src="https://i.imgur.com/z17iKib.jpeg" 
          alt="Nettoyage de l'ordinateur" 
          className="w-full h-auto mb-8"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Optimisez la durée de vie de votre batterie</h2>
        <p className="text-lg text-gray-700 mb-4">
        Les batteries au lithium fonctionnent de manière optimale lorsque leur charge est maintenue entre 20% et 80%. Grâce à mes services de réparation, je vous aide à optimiser la gestion de la batterie pour éviter les décharges complètes et les surcharges prolongées, contribuant ainsi à la préservation de sa durée de vie.
        </p>
        <img 
          src="https://i.imgur.com/hT14sXY.jpeg" 
          alt="Prolonger la vie de la batterie" 
          className="w-full h-auto mb-8"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Réparez votre ordinateur pour un impact environnemental positif</h2>
        <p className="text-lg text-gray-700 mb-4">
        En réparant votre ordinateur plutôt que d’en acheter un nouveau, vous réduisez l'impact environnemental en limitant la consommation de ressources naturelles et en diminuant les déchets électroniques. Mon service de réparation contribue à prolonger la durée de vie de votre appareil tout en préservant notre planète.
        </p>
        <img 
          src="https://i.imgur.com/C8OkuzZ.jpeg" 
          alt="Réparation et écologie" 
          className="w-full h-auto mb-8"
        />
      </section>

     


    </div>
  );
};

export default RepairInfo;
