const express = require('express');
const sendEmail = require('../config/emailService'); // Importer le service d'envoi d'email
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Vérification des champs obligatoires
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Tous les champs (nom, email, message) sont requis.' });
  }

  // Tentative d'envoi de l'email
  try {
    // Appel du service d'envoi d'email
    const response = await sendEmail({
      to: process.env.MAIL_FROM,  // L'email du destinataire (par exemple, admin ou support)
      subject: 'Nouveau message via le formulaire de contact',
      text: `Nom : ${name}\nEmail : ${email}\nMessage : ${message}`,
      html: `<p><b>Nom :</b> ${name}</p>
             <p><b>Email :</b> ${email}</p>
             <p><b>Message :</b></p>
             <p>${message}</p>`,
    });

    // Si l'email est envoyé avec succès, on renvoie une réponse positive
    if (response.success) {
      return res.status(200).json({ success: true, message: 'Email envoyé avec succès.' });
    } else {
      // En cas d'échec de l'envoi, on renvoie l'erreur
      throw new Error(response.error || 'Erreur inconnue lors de l\'envoi de l\'email.');
    }
  } catch (error) {
    // Gestion des erreurs (serveur ou service d'email)
    console.error('Erreur lors de l\'envoi de l\'email:', error.message);
    res.status(500).json({ success: false, error: error.message || 'Impossible d\'envoyer l\'email.' });
  }
});

module.exports = router;
