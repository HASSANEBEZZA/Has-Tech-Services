import React from 'react';
import Header from './Header';
import QuiSommesNous from './QuiSommesNous';
import Services from './Service'; 
import Contact from './Contact';
import Footer from './Footer';
import './HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* En-tête */}
      <Header />

      {/* Contenu principal */}
      <main className="main-content">
        {/* Section Accueil */}
        <section id="home" className="py-16 text-center bg-blue-100">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-blue-700">
              Has Tech Services
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Votre partenaire technologique pour des solutions efficaces et accessibles.
            </p>

            {/* Image */}
            <div className="mt-8">
              <img
                src="https://i.imgur.com/CKsWnbu.jpeg"
                alt="Technologie"
                className="mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Section Qui sommes-nous */}
        <section id="about-us" className="py-16 bg-gray-100">
          <QuiSommesNous />
        </section>

        {/* Section Services */}
        <section id="services" className="py-16">
          <Services />
        </section>

        {/* Section Contact */}
        <section id="contact" className="py-16 bg-gray-100">
          <Contact />
        </section>
      </main>

      {/* Pied de page */}
      <Footer />
    </div>
  );
};

export default HomePage;
