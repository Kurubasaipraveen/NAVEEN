import React from 'react';
import ProductCard from './ProductCard';
import '../App.css'

const ProductList = ({ products, onAdd }) => {
  return (
    <main className="container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAdd={onAdd} 
          />
        ))}
      </div>
    </main>
  );
};

export default ProductList;