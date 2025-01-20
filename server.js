const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Importer les routes pour le formulaire de contact
const contactRoutes = require('./routes/contactRoutes'); // Assurez-vous que le chemin est correct

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

const app = express();

// Middleware pour autoriser CORS depuis le domaine spécifique
const corsOptions = {
  origin: 'https://www.has-tech-services.fr', // Spécifier le domaine autorisé
  methods: 'GET,POST', // Spécifier les méthodes autorisées
  allowedHeaders: 'Content-Type', // Spécifier les en-têtes autorisés
};

app.use(cors(corsOptions)); // Appliquer CORS avec les options

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes); // Routes pour le formulaire de contact

// La fonction handler qui sera exportée pour Vercel
module.exports = (req, res) => {
  app(req, res);
};
