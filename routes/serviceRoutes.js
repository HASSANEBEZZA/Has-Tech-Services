const express = require('express');
const { sendEmailController } = require('../controllers/emailController'); // Correction ici: utiliser `sendEmailController` au lieu de `sendEmail`

const router = express.Router();

// Définir la route pour envoyer un email
router.post('/send-email', sendEmailController);

// Exporter le router en utilisant CommonJS
module.exports = router;
