import React from 'react';
import ProductGrid from '../components/ProductGrid';
import './Products.css';

const Products: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="page-title">Catálogo de Productos</h1>
        <ProductGrid />
      </div>
    </div>
  );
};

export default Products;
