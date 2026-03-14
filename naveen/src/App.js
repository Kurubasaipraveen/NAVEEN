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
      name: "Elegant Silk Party Dress",
      price: "1,999",
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
    },
    {
      id: 2,
      name: "Urban Denim Jacket",
      price: "2,499",
      img: "https://images.unsplash.com/photo-1544441893-675973e31985"
    },
    {
      id: 3,
      name: "Cotton Floral Kurti",
      price: "1,299",
      img: "https://images.unsplash.com/photo-1521334884684-d80222895322"
    }
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