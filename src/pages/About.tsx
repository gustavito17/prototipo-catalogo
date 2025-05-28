import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="page-title">Nuestra Historia</h1>
        <div className="about-section">
          <h2>¿Quiénes Somos?</h2>
          <p>
            Somos una empresa familiar dedicada a ofrecer la mejor calidad en calzados y prendas de vestir. 
            Desde nuestros inicios en 2020, nos hemos comprometido a brindar productos que combinen estilo, 
            comodidad y durabilidad.
          </p>
        </div>

        <div className="about-section">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Calidad</h3>
              <p>Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad a nuestros clientes.</p>
            </div>
            <div className="value-card">
              <h3>Atención Personalizada</h3>
              <p>Nos enfocamos en entender las necesidades de cada cliente para ofrecer la mejor asesoría.</p>
            </div>
            <div className="value-card">
              <h3>Compromiso</h3>
              <p>Trabajamos con dedicación para mantener la confianza que nuestros clientes depositan en nosotros.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Nuestro Propósito</h2>
          <p>
            Buscamos ser más que una tienda de ropa y calzado. Queremos ser parte de los momentos importantes 
            de nuestros clientes, ayudándoles a encontrar exactamente lo que necesitan para cada ocasión.
            Nuestro objetivo es ofrecer productos de calidad a precios justos, manteniendo siempre un 
            servicio cercano y profesional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
