import React from "react";
import '../App.css';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Omorfia Skincare</h1>
        <p>
          Discover the secret to glowing, healthy skin with our premium skincare range.
          Nourish, protect, and enhance your natural beauty every day ✨
        </p>

        <a href="/products" className="hero-btn">
          Shop Skincare
        </a>
      </div>
    </section>
  );
};

export default Home;