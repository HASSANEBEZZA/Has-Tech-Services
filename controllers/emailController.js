const sendEmail = require('../config/emailService'); // Assurez-vous du chemin d'importation
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

const sendEmailController = async (req, res) => {
  const { name, email, message } = req.body;

  // Vérification des champs
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  try {
    const emailDestinataire = process.env.EMAIL_DESTINATAIRE;
    const subjectPrefix = process.env.EMAIL_SUBJECT_PREFIX || 'Nouveau message de';

    // Appel du service pour envoyer l'email
    const result = await sendEmail({
      to: emailDestinataire, 
      subject: `${subjectPrefix} ${name}`, 
      text: `De : ${name} <${email}>\n\nMessage:\n${message}`,
      html: `<p><strong>De :</strong> ${name} &lt;${email}&gt;</p><p><strong>Message :</strong></p><p>${message}</p>`,
    });

    // Vérification de l'envoi de l'email
    if (result.success) {
      return res.status(200).json({ message: 'Email envoyé avec succès.' });
    } else {
      return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email.' });
    }
  } catch (error) {
    // Gestion des erreurs
    console.error('Erreur serveur:', error.message);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
};

module.exports = { sendEmailController };
