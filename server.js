const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Importer les routes pour le formulaire de contact
const contactRoutes = require('./routes/contactRoutes'); // Assurez-vous que le chemin est correct

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

const app = express();

// Configurer CORS pour accepter les requêtes des origines spécifiques
const allowedOrigins = process.env.NODE_ENV === 'production' ? [
  'https://has-tech-service.vercel.app',  // Frontend sur Vercel
  'https://www.has-tech-services.fr',     // Ton domaine de production
] : ['http://localhost:3000'];             // Frontend en local (par exemple)

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true); // Autoriser l'origine
    } else {
      callback(new Error('CORS not allowed')); // Refuser l'origine
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],  // Ajout de la méthode OPTIONS pour gérer la pré-vérification
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false, // Important pour permettre le traitement de la pré-vérification
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));  // Activer CORS avec les options personnalisées

// Middleware
app.use(express.json()); // Pour analyser les requêtes JSON

// Routes
app.use('/api/services', contactRoutes); // Routes pour le formulaire de contact

// Démarrer le serveur
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
