const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Importer les routes pour le formulaire de contact
const contactRoutes = require('./routes/contactRoutes'); // Assurez-vous que le chemin est correct

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Pour analyser les requêtes JSON
app.use(cors()); // Activer les CORS

// Routes
app.use('/api/contact', contactRoutes); // Routes pour le formulaire de contact

// La fonction handler qui sera exportée pour Vercel
module.exports = (req, res) => {
  // Vous pouvez définir un handler par méthode HTTP si nécessaire
  // Par exemple, ici on gère les méthodes POST pour l'API de contact
  app(req, res);
};
