import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/home';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartSection from './components/CartSection';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const products = [
  {
    id: 1,
    name: "Omorfia Hydrating Face Serum",
    price: 1299,
    img: "https://res.cloudinary.com/dyutmmnia/image/upload/v1774413375/Screenshot_2026-03-25_095853_v5tjpd.png",
    category: "Skincare"
  },
  {
    id: 2,
    name: "Omorfia Vitamin C Face Cream",
    price: 999,
    img: "https://res.cloudinary.com/dyutmmnia/image/upload/v1774413375/Screenshot_2026-03-25_095837_mqb55n.png",
    category: "Skincare"
  },
  {
    id: 3,
    name: "Omorfia Aloe Vera Gel",
    price: 499,
    img: "https://res.cloudinary.com/dyutmmnia/image/upload/v1774413375/Screenshot_2026-03-25_095916_wugvdt.png",
    category: "Skincare"
  },
  {
    id: 4,
    name: "Omorfia Sunscreen SPF 50",
    price: 799,
    img: "https://res.cloudinary.com/dyutmmnia/image/upload/v1774413375/Screenshot_2026-03-25_095845_znrur7.png",
    category: "Skincare"
  },
  {
    id: 5,
    name: "Omorfia Face Wash",
    price: 399,
    img: "https://res.cloudinary.com/dyutmmnia/image/upload/v1774413375/Screenshot_2026-03-25_095904_gqik7j.png",
    category: "Skincare"
  },
  
];
  const handleAddToCart = (product, qty) => {

    const items = [];

    for (let i = 0; i < qty; i++) {
      items.push(product);
    }

    setCartItems(prev => [...prev, ...items]);
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      alert(`Proceeding to checkout with ${cartItems.length} items!`);
      setCartItems([]);
    } else {
      alert("Cart is empty");
    }
  };

  return (
    <Router>

      <div className="App">

        <Navbar cartCount={cartItems.length} />

        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <ProductList
                  products={products}
                  onAdd={handleAddToCart}
                />
              </>
            }
          />

          {/* Products Page */}
          <Route
            path="/products"
            element={
              <ProductList
                products={products}
                onAdd={handleAddToCart}
              />
            }
          />

          {/* Cart Page */}
          <Route
            path="/cart"
            element={
              <CartSection
                cartItems={cartItems}
                setCartItems={setCartItems}
                onCheckout={handleCheckout}
              />
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

        <Footer />

      </div>

    </Router>
  );
}

export default App;