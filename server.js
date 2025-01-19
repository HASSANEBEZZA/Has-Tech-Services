const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Liste des origines autorisées
const allowedOrigins = [
  'https://has-tech-service.vercel.app',  // Ton frontend Vercel
  'https://www.has-tech-services.fr'     // Ton domaine en production
];

const corsOptions = {
  origin: function (origin, callback) {
    // Vérifie si l'origine est autorisée
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true); // Permet l'accès si l'origine est autorisée
    } else {
      callback(new Error('CORS not allowed')); // Refuse les autres origines
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions)); // Applique les options CORS

// Routes
app.use('/api/services/send-email', contactRoutes);  // Assure-toi que la route est correcte

// Démarrer le serveur
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
