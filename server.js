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

// Fonction handler qui sera utilisée pour Vercel
module.exports = (req, res) => {
  app(req, res); // Appelle Express pour gérer les requêtes
};
