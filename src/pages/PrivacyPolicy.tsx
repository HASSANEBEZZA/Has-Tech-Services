import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Politique de Confidentialité</h1>

      <p className="text-lg text-gray-700 mb-6">
        Votre confidentialité est importante pour nous. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
      </p>

      <div className="border-t-2 border-gray-200 my-6"></div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Collecte des Informations</h2>
      <p className="text-lg text-gray-700 mb-4">
        Nous collectons uniquement les informations fournies via notre formulaire de contact, à savoir votre nom, votre adresse e-mail et votre message.
      </p>

      <div className="border-t-2 border-gray-200 my-6"></div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Utilisation des Informations</h2>
      <p className="text-lg text-gray-700 mb-4">
        Vos informations sont uniquement utilisées pour répondre à vos demandes et ne sont pas partagées avec des tiers.
      </p>

      <div className="border-t-2 border-gray-200 my-6"></div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Protection des Données</h2>
      <p className="text-lg text-gray-700 mb-4">
        Nous mettons en œuvre des mesures de sécurité pour protéger vos informations contre tout accès non autorisé.
      </p>

      <div className="border-t-2 border-gray-200 my-6"></div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Droits des Utilisateurs</h2>
      <p className="text-lg text-gray-700 mb-4">
        Vous avez le droit d'accéder, de modifier ou de supprimer vos données. Contactez-nous pour toute demande relative à vos informations.
      </p>

      <div className="border-t-2 border-gray-200 my-6"></div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Contact</h2>
      <p className="text-lg text-gray-700 mb-6">
        Pour toute question concernant cette politique, veuillez nous contacter à <a href="mailto:contact@votresite.com" className="text-blue-500 hover:underline">contact@has-tech-services.fr</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
