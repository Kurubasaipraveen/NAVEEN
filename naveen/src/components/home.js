import React from "react";
import '../App.css'
const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>New Luxury Collection</h1>
        <p>
          Discover elegant fashion designed for modern style and timeless
          beauty.
        </p>

        <a href="/products" className="hero-btn">
          Shop Collection
        </a>
      </div>
    </section>
  );
};

export default Home;