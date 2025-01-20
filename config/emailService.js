const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    // Vérifier si toutes les variables nécessaires sont présentes
    const requiredEnvVars = [
      'SMTP_HOST',
      'SMTP_PORT',
      'SMTP_SECURE',
      'LWS_EMAIL_USERNAME',
      'LWS_EMAIL_PASSWORD',
      'MAIL_FROM'
    ];

    requiredEnvVars.forEach((envVar) => {
      if (!process.env[envVar]) {
        throw new Error(`Variable d'environnement manquante : ${envVar}`);
      }
    });

    // Créer le transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_SECURE === 'true',  // True pour SSL/TLS
      auth: {
        user: process.env.LWS_EMAIL_USERNAME,
        pass: process.env.LWS_EMAIL_PASSWORD,
      },
    });

    // Options de l'email
    const mailOptions = {
      from: process.env.MAIL_FROM,  // Expéditeur
      to,                          // Destinataire
      subject,                     // Sujet de l'email
      text,                        // Texte brut
      html,                        // HTML formaté
    };

    // Envoi de l'email
    const info = await transporter.sendMail(mailOptions);

    console.log(`Email envoyé : ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error.message);
    return { success: false, error: error.message };
  }
};

module.exports = sendEmail;
