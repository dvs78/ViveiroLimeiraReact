import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartOverlay = () => {
  const cartInfo = useContext(CartContext);
  return (
    <div
      className={`cart__container ${
        cartInfo.isCartOpen ? "cart__container--open" : "cart__container--close"
      }`}
    >
      <section
        id="outside-of-cart"
        className="cart__outside-of-cart"
        onClick={() => cartInfo.setIsCartOpen(false)}
      ></section>
      <section id="cart" className="cart__container-section">
        <h2>Carrinho</h2>
      </section>
    </div>
  );
};

export default CartOverlay;
