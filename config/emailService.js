// emailService.js
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config(); 


const sendEmail = async ({ to, subject, text, html }) => {
  try {
    // Configuration du transporteur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp-relay.brevo.com', 
      port: parseInt(process.env.SMTP_PORT, 10) || 587, 
      secure: process.env.SMTP_SECURE === 'true', 
      auth: {
        user: process.env.BERVO_USERNAME, 
        pass: process.env.BERVO_PASSWORD, 
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: process.env.MAIL_FROM || 'smtp-relay.brevo.com', 
      to, 
      subject, 
      text, 
      html, 
    };

    // Envoyer l'email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email envoyé : ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, error: error.message };
  }
};


module.exports = sendEmail;
