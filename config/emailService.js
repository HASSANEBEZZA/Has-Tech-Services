const nodemailer = require('nodemailer');
const dotenv = require('dotenv');


dotenv.config();

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_SECURE === 'true', 
      auth: {
        user: process.env.LWS_EMAIL_USERNAME,
        pass: process.env.LWS_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM, 
      to, 
      subject, 
      text, 
      html, 
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email envoyé : ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error.message);
    return { success: false, error: error.message };
  }
};

module.exports = sendEmail;
