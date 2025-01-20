// api/contact.js
const express = require('express');
const cors = require('cors');
const contactController = require('../controllers/emailController'); // Importation du contrôleur

const app = express();

// Middleware pour gérer les requêtes CORS (si nécessaire)
app.use(cors());

// Middleware pour analyser les données JSON dans le corps de la requête
app.use(express.json());

// Route POST pour gérer le formulaire de contact
app.post('/', contactController.handleContactForm);  // Appel du contrôleur pour traiter le formulaire

// Exporter la fonction serverless
module.exports = app;
