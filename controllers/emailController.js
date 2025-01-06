const sendEmail = require('../config/emailService'); 

const sendEmailController = async (req, res) => {
  const { name, email, message } = req.body;

  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  try {
    // Appel de la fonction d'envoi d'email
    const result = await sendEmail({
      to: 'support@has-tech.com',
      subject: `Nouveau message de ${name}`,
      text: `De : ${name} <${email}>\n\nMessage:\n${message}`,
      html: `<p><strong>De :</strong> ${name} &lt;${email}&gt;</p><p><strong>Message :</strong></p><p>${message}</p>`,
    });

    // Vérifier si l'email a été envoyé avec succès
    if (result.success) {
      return res.status(200).json({ message: 'Email envoyé avec succès.' });
    } else {
      return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email.' });
    }
  } catch (error) {
    // Gestion des erreurs lors de l'envoi de l'email
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
};


module.exports = { sendEmailController };
