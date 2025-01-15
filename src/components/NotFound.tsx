import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Titre principal */}
      <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page non trouvée</h2>
      
      {/* Description */}
      <p className="text-lg text-gray-600 text-center max-w-md mb-6">
        Oups ! La page que vous cherchez n'existe pas ou a été déplacée. Veuillez vérifier l'URL ou revenir à l'accueil.
      </p>
      
      {/* Bouton pour retourner à l'accueil */}
      <button
        className="px-6 py-2 bg-blue-700 text-white text-lg font-medium rounded-lg hover:bg-blue-800 transition-colors"
        onClick={() => navigate('/')}
      >
        Retour à l'accueil
      </button>
    </div>
  );
};

export default NotFound;
