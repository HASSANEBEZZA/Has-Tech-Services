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
        {/* Barre haut de la page et en-tête */}
        <TopBar />
        <Header />
        
        {/* Contenu principal */}
        <main>
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<HomePage />} />
            
            {/* Page des informations de réparation */}
            <Route path="/repair-info" element={<RepairInfo />} />
            
            {/* Page Installation et Configuration Réseau */}
            <Route path="/network-setup" element={<NetworkServices />} />

            {/* Page Assistance et Formation */}
            <Route path="/assistance-formation" element={<AssistanceFormation />} />

            {/* Page Création de Sites Web et Accompagnement Digital */}
            <Route path="/creation-sites-accompagnement" element={<CreationSitesAccompagnement />} />

            {/* Page Tarifs */}
            <Route path="/tarifs" element={<Tarifs />} /> 
          </Routes>
        </main>
        
        {/* Pied de page */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
