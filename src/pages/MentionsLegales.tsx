import React from "react";

const MentionsLegales = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Mentions Légales</h1>
      
      <p className="text-lg text-gray-700 mb-6">
        Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, nous vous informons des éléments suivants :
      </p>

      <div className="border-t-2 border-gray-200 my-6"></div>
      
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Éditeur du Site</h2>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Nom :</strong> Has Tech Services <br />
        <strong>Adresse :</strong> 6 Impasse des peupliers, 59247 Hem-Lenglet  <br />
        <strong>Téléphone :</strong> 0776116896 <br />
        <strong>Email :</strong> contact@has-tech-services.fr
      </p>

      <div className="border-t-2 border-gray-200 my-6"></div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Hébergement</h2>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Le site est hébergé par :</strong> <br />
        <strong>Nom:</strong> vercel <br />
        <strong>Adresse :</strong> San Francisco, California, États-Unis États-Unis <br />
      </p>

      <div className="border-t-2 border-gray-200 my-6"></div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Propriété Intellectuelle</h2>
      <p className="text-lg text-gray-700 mb-4">
        Tout le contenu présent sur ce site (textes, images, logos, etc.) est la propriété exclusive de Has Tech Services, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation est interdite.
      </p>

      <div className="border-t-2 border-gray-200 my-6"></div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Responsabilité</h2>
      <p className="text-lg text-gray-700 mb-6">
        L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site.
      </p>
    </div>
  );
};

export default MentionsLegales;
