import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TopBar from './components/TopBar';
import QuiSommesNous from './components/QuiSommesNous';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Service';
import RepairInfo from './components/RepairInfo';
import NetworkServices from './components/NetworkServices';
import AssistanceFormation from './components/AssistanceFormation';
import CreationSitesAccompagnement from './components/CreationSitesAccompagnement';
import Tarifs from './pages/Tarifs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import MentionsLegales from './pages/MentionsLegales';

const HomePage: React.FC = () => {
  return (
    <>
      <section id="home" className="py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-blue-700 tracking-wide">
            Has Tech Services
          </h1>
          <p className="mt-6 text-xl lg:text-2xl text-gray-700 leading-relaxed">
            Votre partenaire technologique de confiance.
          </p>
        </div>
      </section>

      <section id="about-us" className="py-16 bg-gray-100">
        <QuiSommesNous />
      </section>

      <Services />

      {/* Ajout de la section Tarifs ici */}
      <section id="tarifs" className="py-16 bg-gray-100">
        <Tarifs />
      </section>

      <section id="contact" className="py-16 bg-gray-100">
        <Contact />
      </section>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Barre du haut et en-tête */}
        <TopBar />
        <Header />
        
        {/* Contenu principal */}
        <main>
          <Routes>
            {/* Page d'accueil avec la section Tarifs incluse */}
            <Route path="/" element={<HomePage />} />
            
            {/* Pages individuelles */}
            <Route path="/repair-info" element={<RepairInfo />} />
            <Route path="/network-setup" element={<NetworkServices />} />
            <Route path="/assistance-formation" element={<AssistanceFormation />} />
            <Route path="/creation-sites-accompagnement" element={<CreationSitesAccompagnement />} />

            {/* Page Tarifs (indépendante) */}
            <Route path="/tarifs" element={<Tarifs />} /> 
            
            {/* Pages légales */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        
        {/* Pied de page */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
