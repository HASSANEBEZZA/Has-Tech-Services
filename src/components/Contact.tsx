import React, { useState } from 'react';
import axios from 'axios';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa'; 
import '../components/SocialMedia.scss';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', acceptPrivacy: false });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [privacyError, setPrivacyError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, acceptPrivacy: e.target.checked });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    setPrivacyError('');

    if (!formData.acceptPrivacy) {
      setPrivacyError('Vous devez accepter la politique de confidentialité pour soumettre le formulaire.');
      setStatus('idle');
      return;
    }

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL || '',
        formData
      );

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', acceptPrivacy: false });
      }
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(
        error.response?.data?.error || "Une erreur s'est produite lors de l'envoi de l'email."
      );
    }
  };

  return (
    <>
      <section id="contact" className="contact-section py-20 bg-gray-100">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-5xl font-extrabold text-blue-700 mb-8">Contactez-nous</h2>
          <p className="text-xl text-gray-700 mb-10">
            Besoin d'assistance ? Contactez-nous via le formulaire ou par email à {' '}
            <a href="mailto:contact@has-tech-services.fr" className="text-blue-500 underline">
              contact@has-tech-services.fr
            </a>.
          </p>
          <form
            className="bg-white p-12 shadow-lg rounded-lg max-w-5xl mx-auto space-y-8"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 text-xl"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 text-xl"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Votre message"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 text-xl"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  name="acceptPrivacy"
                  checked={formData.acceptPrivacy}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                J'accepte la {' '}<a href="/privacy-policy" className="text-blue-500"> politique de confidentialité</a>.
              </label>
              {privacyError && <p className="text-red-600 text-sm">{privacyError}</p>}
            </div>
            <button
              type="submit"
              className={`w-full py-3 font-medium rounded-lg text-xl 
                ${!formData.acceptPrivacy ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-600 text-white'}`}
              disabled={!formData.acceptPrivacy || status === 'loading'}
            >
              {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
          {status === 'success' && (
            <p className="text-green-600 text-lg mt-4">Votre message a été envoyé avec succès !</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-lg mt-4">{errorMessage}</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;
