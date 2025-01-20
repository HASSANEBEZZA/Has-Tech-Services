const express = require('express');
const cors = require('cors');
const sendEmail = require('../config/emailService');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Configuration CORS
const corsOptions = {
  origin: 'https://www.has-tech-services.fr', // Le domaine autorisé
  methods: ['GET', 'POST'], // Méthodes autorisées
  allowedHeaders: ['Content-Type'], // En-têtes autorisés
};

app.use(cors(corsOptions));  // Appliquer CORS au serveur

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Route pour le formulaire de contact
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Vérification des champs
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Tous les champs sont requis.' });
  }

  try {
    // Envoi d'email
    const response = await sendEmail({
      to: process.env.MAIL_FROM,
      subject: 'Nouveau message de contact',
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Nom:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`
    });

    if (response.success) {
      return res.status(200).json({ success: true, message: 'Email envoyé.' });
    } else {
      throw new Error('Erreur inconnue lors de l\'envoi de l\'email.');
    }
  } catch (error) {
    console.error('Erreur:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Lancer le serveur sur Vercel
module.exports = (req, res) => {
  app(req, res);
};
