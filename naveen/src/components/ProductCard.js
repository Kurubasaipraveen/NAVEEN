import React, { useState } from "react";
import '../App.css'

const ProductCard = ({ product, onAdd }) => {

  const [qty, setQty] = useState(1);

  const increase = () => {
    setQty(qty + 1);
  };

  const decrease = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <div className="card">

      {/* Discount Badge */}
      <span className="discount-badge">30% OFF</span>

      <div className="img-box">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="card-content">

        <h3 className="product-title">{product.name}</h3>

        {/* Price Section */}
        <div className="price-section">
          <span className="actual-price">₹2999</span>
          <span className="discount-price">₹{product.price}</span>
        </div>

        {/* Quantity Selector */}
        <div className="qty-box">
          <button onClick={decrease}>-</button>
          <span>{qty}</span>
          <button onClick={increase}>+</button>
        </div>

        {/* Add to Cart */}
        <button
          className="btn-add"
          onClick={() => onAdd(product, qty)}
        >
          Add to Bag
        </button>

      </div>

    </div>
  );
};

export default ProductCard;