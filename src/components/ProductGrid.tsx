import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './ProductGrid.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Champion Deportivo",
    price: 500000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Champion deportivo con tecnología de amortiguación avanzada",
    category: "Calzado"
  },
  {
    id: 2,
    name: "Chaqueta de Cuero",
    price: 850000,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Chaqueta de cuero genuino con forro interior",
    category: "Prendas"
  },
  {
    id: 3,
    name: "Botas Elegantes",
    price: 800000,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Botas de cuero con diseño elegante y duradero",
    category: "Calzado"
  },
  {
    id: 4,
    name: "Vestido de Noche",
    price: 149000,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Vestido elegante para ocasiones especiales",
    category: "Prendas"
  },
  {
    id: 5,
    name: "Champion Casual",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Champion casual perfecto para el día a día",
    category: "Calzado"
  },
  {
    id: 6,
    name: "Jeans Premium",
    price: 89000,
    image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Jeans de alta calidad con ajuste perfecto",
    category: "Prendas"
  }
];

const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { addItem } = useCart();
  
  const filteredProducts = products
    .filter(product => selectedCategory === 'Todos' || product.category === selectedCategory)
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleAddToCart = (product: Product) => {
    addItem(product, 1);
  };

  return (
    <section className="product-grid">
      <div className="search-and-filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="category-container">
          <select 
            className="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Seleccionar categoría"
          >
            <option value="Todos">Todas las Categorías</option>
            <option value="Calzado">Calzado</option>
            <option value="Prendas">Prendas</option>
          </select>
        </div>
      </div>

      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="image-container">
                <img src={product.image} alt={product.name} loading="lazy" />
                <button 
                  className="add-to-cart-overlay"
                  onClick={() => handleAddToCart(product)}
                >
                  + Agregar al Carrito
                </button>
              </div>
              <div className="product-info">
                <span className="category-tag">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <div className="price">Gs. {product.price.toLocaleString('es')}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
