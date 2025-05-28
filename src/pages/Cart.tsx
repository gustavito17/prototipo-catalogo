import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleCheckout = () => {
    const mensaje = items.map(item => 
      `• ${item.name} x${item.quantity} - Gs. ${(item.price * item.quantity).toLocaleString('es-PY')}`
    ).join('\n');

    const total = `\n\nTotal: Gs. ${getTotalPrice().toLocaleString('es-PY')}`;
    
    const whatsappLink = `https://wa.me/595976553462?text=${encodeURIComponent('Hola, quiero confirmar mi compra del catálogo:\n' + mensaje + total)}`;
    window.open(whatsappLink, '_blank');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="page-container">
        <div className="content-container">
          <div className="cart-page">
            <h1 className="page-title">Tu Carrito</h1>
            <div className="cart-empty">
              <h2>Tu carrito está vacío</h2>
              <p>¡Agrega algunos productos para comenzar!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="content-container">
        <div className="cart-page">
          <h1 className="page-title">Tu Carrito</h1>
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <span className="item-category">{item.category}</span>
                  <p className="item-price">Gs. {item.price.toLocaleString('es-PY')}</p>
                </div>
                <div className="quantity-controls">
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    aria-label="Reducir cantidad"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                </div>
                <p className="item-subtotal">
                  Gs. {(item.price * item.quantity).toLocaleString('es-PY')}
                </p>
                <button 
                  className="remove-item"
                  onClick={() => removeItem(item.id)}
                  aria-label="Eliminar producto"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-total">
              <span>Total:</span>
              <span>Gs. {getTotalPrice().toLocaleString('es-PY')}</span>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>
              Confirmar Compra por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
