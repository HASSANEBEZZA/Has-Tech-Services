import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './CreationSitesAccompagnement.scss';

const CreationSitesAccompagnement: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="creation-sites container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Création de Sites Web et Accompagnement Digital
      </h1>

      {/* Section 1 - Conception de sites vitrines */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Conception de sites vitrines</h2>
        <p className="text-lg text-gray-700 mb-4">
          Nous créons des sites vitrines professionnels pour les entreprises ou les particuliers. Notre approche est personnalisée pour chaque projet afin de garantir que votre site reflète parfaitement l'image de votre entreprise et répond à vos besoins spécifiques.
        </p>  
        <img
          src="https://i.imgur.com/4uuCkvg.jpg"
          alt="Conception de sites vitrines"
          className="image-small"
        />
      </section>

      {/* Section 2 - Design responsive */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Design responsive</h2>
        <p className="text-lg text-gray-700 mb-4">
          Tous nos sites sont conçus pour être entièrement responsive, c'est-à-dire adaptés à tous les types d'appareils : ordinateurs, tablettes, et smartphones. Un site bien conçu doit offrir une expérience utilisateur optimale, peu importe la taille de l'écran.
        </p>
        <img
          src="https://i.imgur.com/3tJy8kZ.jpg"
          alt="Design responsive"
          className="image-small"
        />
      </section>

      {/* Section 3 - Stratégie et gestion de présence sur les réseaux sociaux */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Stratégie et gestion de présence sur les réseaux sociaux</h2>
        <p className="text-lg text-gray-700 mb-4">
          Nous vous aidons à élaborer une stratégie efficace pour augmenter votre présence en ligne. Que ce soit sur Facebook, Instagram, LinkedIn ou d'autres réseaux sociaux, nous gérons vos comptes et créons des contenus engageants pour attirer plus de clients.
        </p>
        <img
          src="https://i.imgur.com/eqkUnud.jpg"
          alt="Réseaux sociaux"
          className="image-small"
        />
      </section>

      {/* Section 4 - SEO et optimisation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">SEO et optimisation</h2>
        <p className="text-lg text-gray-700 mb-4">
          Nos services incluent l'optimisation pour les moteurs de recherche (SEO). Nous vous aidons à améliorer la visibilité de votre site sur Google, en vous assurant qu'il apparaît dans les résultats de recherche pertinents pour vos mots-clés cibles.
        </p>
        <img
          src="https://i.imgur.com/28dcKJx.jpg"
          alt="SEO et optimisation"
          className="image-small"
        />
      </section>

      {/* Section 5 - Maintenance et support */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Maintenance et support</h2>
        <p className="text-lg text-gray-700 mb-4">
          Après la création de votre site, nous offrons un service de maintenance pour nous assurer que votre site reste toujours à jour et fonctionne parfaitement. Nous offrons également un support continu pour répondre à toutes vos questions ou préoccupations.
        </p>
        <img
          src="https://i.imgur.com/rw0vmlu.jpg"
          alt="Maintenance et support"
          className="image-small"
        />
      </section>
    </div>
  );
};

export default CreationSitesAccompagnement;
