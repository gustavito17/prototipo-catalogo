import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-content">
          <h1>¡Descubre Nuestra Colección!</h1>
          <p>Los mejores productos seleccionados para ti</p>
          <Link to="/productos" className="cta-button">
            Explorar Productos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
