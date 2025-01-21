const express = require('express');
const cors = require('cors');
const sendEmail = require('../config/emailService');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


const corsOptions = {
  origin: 'https://www.has-tech-services.fr', 
  methods: ['GET', 'POST', 'OPTIONS'], 
  allowedHeaders: ['Content-Type'],
  preflightContinue: false,
  optionsSuccessStatus: 204 
};


app.use(cors(corsOptions));


app.use(express.json());


app.options('/api/contact', cors(corsOptions)); 


app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Tous les champs sont requis.' });
  }

  try {
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
    
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = (req, res) => {
  app(req, res);
};
