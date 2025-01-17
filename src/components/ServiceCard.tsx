import React from 'react';

interface ServiceCardProps {
  name: string;
  description: string;
  price: number; //  Changement de  'string' en 'number' pour plus de flexibilité
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, price }) => {
  return (
    <div className="service-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{`$${price.toFixed(2)}`}</p> {/* Affichage formaté avec un nombre flottant */}
    </div>
  );
};

export default ServiceCard;
