import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contáctanos</h3>
        <div className="contact-links">
          <a 
            href="https://wa.me/595976553462?text=Hola%2C%20quisiera%20consultar%20sobre%20los%20productos%20del%20cat%C3%A1logo"
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Chatea con nosotros
          </a>
          <a 
            href="mailto:tecnologygaas@gmail.com"
            className="footer-link"
          >
            Envíanos un correo
          </a>
        </div>
        <p className="footer-info">
          Estamos disponibles para atenderte de Lunes a Viernes de 9:00 a 18:00
        </p>
        <p className="copyright">
          © {new Date().getFullYear()} Tu Catálogo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
