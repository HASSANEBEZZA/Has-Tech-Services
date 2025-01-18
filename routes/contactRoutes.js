const express = require('express');
const sendEmail = require('../config/emailService'); 
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Tous les champs sont requis.' });
  }

  try {
    const response = await sendEmail({
      to: process.env.MAIL_FROM, 
      subject: 'Nouveau message via le formulaire de contact',
      text: `Nom : ${name}\nEmail : ${email}\nMessage : ${message}`,
      html: `<p><b>Nom :</b> ${name}</p>
             <p><b>Email :</b> ${email}</p>
             <p><b>Message :</b></p>
             <p>${message}</p>`,
    });

    if (response.success) {
      res.status(200).json({ success: true, message: 'Email envoyé avec succès.' });
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
   
    res.status(500).json({ success: false, error: 'Impossible d\'envoyer l\'email.' });
  }
});

module.exports = router;
