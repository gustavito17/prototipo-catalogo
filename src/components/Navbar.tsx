import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Tu Logo Aquí
        </Link>
        
        <div className="nav-content">
          {/* Menú principal que se mostrará en PC y se ocultará en móvil */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/productos" onClick={() => setIsMenuOpen(false)}>Productos</Link></li>
            <li><Link to="/nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</Link></li>
            <li className="desktop-only"><Link to="/carrito" className="cart-link">
              <span className="cart-icon">🛒</span>
              {getTotalItems() > 0 && (
                <span className="cart-count">{getTotalItems()}</span>
              )}
            </Link></li>
          </ul>

          {/* Controles móviles (carrito y botón hamburguesa) */}
          <div className="mobile-controls">
            {/* Carrito siempre visible en móvil */}
            <Link to="/carrito" className="cart-link mobile-cart">
              <span className="cart-icon">🛒</span>
              {getTotalItems() > 0 && (
                <span className="cart-count">{getTotalItems()}</span>
              )}
            </Link>

            {/* Botón hamburguesa solo en móvil */}
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menú principal"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
