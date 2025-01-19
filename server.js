const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

// Importer les routes pour le formulaire de contact
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Spécifier les origines autorisées
const allowedOrigins = ['https://has-tech-service.vercel.app']; // Ajoute l'URL de ton frontend

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true); // Permet l'accès si l'origine est autorisée
    } else {
      callback(new Error('CORS not allowed')); // Refuse les autres origines
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Spécifie les méthodes HTTP autorisées
  allowedHeaders: ['Content-Type', 'Authorization'], // Spécifie les en-têtes autorisés
};

// Middleware
app.use(express.json()); // Pour analyser les requêtes JSON
app.use(cors(corsOptions)); // Utiliser les options CORS configurées

// Routes
app.use('/api/services/send-email', contactRoutes); // Routes pour le formulaire de contact

// Démarrer le serveur
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
