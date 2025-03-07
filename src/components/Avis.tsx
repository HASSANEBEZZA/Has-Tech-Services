import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import des icônes de flèche
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Avis.scss";

const Avis: React.FC = () => {
  // Liens des avis (screenshots des réseaux sociaux)
  const avisImages = [
    { id: 1, src: "https://i.imgur.com/punHr3O.png", alt: "Avis client 1" },
    { id: 2, src: "https://i.imgur.com/punHr3O.png", alt: "Avis client 2" },
    { id: 3, src: "https://i.imgur.com/punHr3O.png", alt: "Avis client 3" },
    { id: 4, src: "https://i.imgur.com/punHr3O.png", alt: "Avis client 4" },
  ];

  // Configuration du carrousel avec personnalisation des flèches
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomArrow direction="prev" />, // Flèche précédente
    nextArrow: <CustomArrow direction="next" />, // Flèche suivante
  };

  return (
    <section className="avis-section py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Avis de nos clients sur les réseaux sociaux
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Découvrez ce que nos clients pensent de nos services.
        </p>

        <div className="avis-slider mx-auto max-w-4xl">
          <Slider {...settings}>
            {avisImages.map((avis) => (
              <div key={avis.id} className="slide">
                <img
                  src={avis.src}
                  alt={avis.alt}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

// Composant pour les flèches personnalisées
const CustomArrow: React.FC<{ direction: string }> = ({ direction }) => {
  return (
    <div className={`custom-arrow ${direction}`}>
      {direction === "prev" ? <FaArrowLeft size={30} /> : <FaArrowRight size={30} />}
    </div>
  );
};

export default Avis;
