import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './AssistanceFormation.scss'; 

const AssistanceFormation: React.FC = () => {
  const location = useLocation();

  // Scroll vers le haut lors du changement de route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="assistance-formation container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Assistance et Formation
      </h1>

      {/* Section 1 - Assistance technique */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Assistance technique</h2>
        <p className="text-lg text-gray-700 mb-4">
        On propose une assistance technique pour résoudre vos problèmes informatiques, que ce soit à distance ou directement sur site. Que vous rencontrez des soucis logiciels, matériels ou réseau, on est là pour vous aider à trouver des solutions rapides et efficaces.
        </p>
        <img
          src="https://i.imgur.com/cka8WlV.jpeg"
          alt="Assistance technique"
          className="w-1/3 h-auto mb-8 mx-auto"  
        />
      </section>

      {/* Section 2 - Formation personnalisée */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Formation personnalisée</h2>
        <p className="text-lg text-gray-700 mb-4">
        Apprenez à utiliser les outils informatiques grâce à une formation personnalisée. On vous accompagne dans la prise en main de votre ordinateur, l'utilisation d'Internet et d'autres logiciels essentiels pour vos besoins quotidiens ou professionnels.
        </p>
        <img
          src="https://i.imgur.com/fBmtjqU.jpeg"
          alt="Formation personnalisée"
          className="w-1/3 h-auto mb-8 mx-auto"  
        />
      </section>

      {/* Section 3 - Utilisation d'Internet */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Utilisation d'Internet</h2>
        <p className="text-lg text-gray-700 mb-4">
        Découvrez comment naviguer sur Internet en toute sécurité, gérez vos emails, utilisez les moteurs de recherche efficacement et bien plus encore. On vous aide à maîtriser ces compétences essentielles pour rester connecté au monde numérique.
        </p>
        <img
          src="https://i.imgur.com/Nk3nu9i.jpeg"
          alt="Utilisation d'Internet"
          className="w-1/3 h-auto mb-8 mx-auto"  
        />
      </section>

      {/* Section 4 - Sécurité informatique */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sécurité informatique</h2>
        <p className="text-lg text-gray-700 mb-4">
        Apprenez les bases de la sécurité informatique pour protéger vos données personnelles et professionnelles. On vous accompagne pour comprendre les bonnes pratiques, telles que la gestion des mots de passe, la détection des emails frauduleux et la protection de votre réseau.
        </p>
        <img
          src="https://i.imgur.com/is88Oik.jpeg"
          alt="Sécurité informatique"
          className="w-1/3 h-auto mb-8 mx-auto"  
        />
      </section>
    </div>
  );
};

export default AssistanceFormation;
