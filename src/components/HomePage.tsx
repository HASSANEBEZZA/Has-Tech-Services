import React from 'react';
import Header from './Header';
import QuiSommesNous from './QuiSommesNous';
import Contact from './Contact';
import Footer from './Footer';
import './HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        {/* Section Accueil */}
        <section id="home" className="py-16 text-center bg-blue-100">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-blue-700"> Has Tech Services</h1>
            <p className="mt-4 text-lg text-gray-700">
              Votre partenaire technologique pour des solutions efficaces et accessibles.
            </p>
            
            {/* Utilisation de l'image via un lien direct */}
            <div className="mt-8">
              <img 
              src="https://i.imgur.com/9Ht2sWW.png" 
alt="Technologie" 
style={{
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
  margin: '0 auto',
  border: '2px solid red', // Bordure temporaire
}}
/>

            </div>
          </div>
        </section>

        {/* Section Qui sommes-nous */}
        <section id="about-us" className="py-16 bg-gray-100">
          <QuiSommesNous />
        </section>

        {/* Section Contact */}
        <section id="contact" className="py-16 bg-gray-100">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
