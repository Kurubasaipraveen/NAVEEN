import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import '../App.css'

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">

      <h2 className="logo">Lemana</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/contact">Contact</Link>

        {/* Cart Button */}
        <Link to="/cart" className="cart-btn">
          <FaShoppingBag />
          <span>{cartCount}</span>
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;