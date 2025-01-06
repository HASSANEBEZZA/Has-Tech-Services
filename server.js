const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const serviceRoutes = require('./routes/serviceRoutes'); // Importer les routes pour les services

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Pour analyser les requêtes JSON
app.use(cors()); // Activer les CORS

// Routes

app.use('/api/services', serviceRoutes); // Routes pour les services

// Démarrer le serveur
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
