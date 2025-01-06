import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Création de la racine du rendu avec createRoot
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Utilisation de  root.render() 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Appel à reportWebVitals pour mesurer les performances
reportWebVitals();
