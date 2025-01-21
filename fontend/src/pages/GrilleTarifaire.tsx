
import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';

const GrilleTarifaire: React.FC = () => {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    // Utiliser fetch pour récupérer les services depuis le backend
    fetch('http://localhost:5000/api/services')
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="grille-tarifaire">
      <h2>Grille Tarifaire</h2>
      <div className="services">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            description={service.description}
            price={service.price}
          />
        ))}
      </div>
    </div>
  );
};

export default GrilleTarifaire;
