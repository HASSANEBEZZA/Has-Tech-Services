import React, { useState } from 'react';
import axios from 'axios';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa'; 
import '../components/SocialMedia.scss';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // URL du backend hébergé sur Railway
      const response = await axios.post(
        'https://serveur-dispose-de-services-technologiques.railway.internal/api/contact',
        formData
      );
      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
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
            Besoin d'assistance ? Contactez-nous via le formulaire ou par email à{' '}
            <a href="mailto:support@has-tech.com" className="text-blue-500 underline">
              support@has-tech.com
            </a>
            .
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
            <button
              type="submit"
              className="w-full py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-600 text-xl"
              disabled={status === 'loading'}
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

      {/* Section Réseaux Sociaux */}
      <section className="social-media-section py-6">
        <div className="container mx-auto text-center max-w-4xl px-4">
          <h3 className="text-lg font-bold text-white mb-4">
            SUIVEZ-NOUS SUR LES <span className="font-extrabold">RÉSEAUX SOCIAUX</span>
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://x.com/has_svc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/people/Has-Tech-Services/61571620113575/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/has.tech.svc/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/has-tech-svc-10bb27345/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.tiktok.com/@has.tech.svc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-300"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@HasTechServices"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
