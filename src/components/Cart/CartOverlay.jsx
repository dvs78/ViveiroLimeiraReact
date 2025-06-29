import React, { useState } from "react";

const CartOverlay = () => {
  const [isCartOpen, setIsCartOpen] = useState(true);

  return (
    <div
      className={`cart__container ${
        isCartOpen ? "cart__container--open" : "cart__container--close"
      }`}
    >
      <section
        id="outside-of-cart"
        className="cart__outside-of-cart"
        onClick={() => setIsCartOpen(false)}
      ></section>
      <section id="cart" className="cart__container-section">
        <h2>Carrinho</h2>
      </section>
    </div>
  );
};

export default CartOverlay;
