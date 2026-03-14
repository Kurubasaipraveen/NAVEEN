import React from "react";

const CartSection = ({ cartCount, onCheckout }) => {
  return (
    <div className="cart-section">

      <h2>Your Shopping Bag</h2>

      {cartCount === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <p className="cart-count">
            You have <b>{cartCount}</b> items in your cart
          </p>

          <button className="checkout-btn" onClick={onCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}

    </div>
  );
};

export default CartSection;