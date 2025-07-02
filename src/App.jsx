import { useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import PurchaseHistory from "./pages/PurchaseHistoryPage/PurchaseHistory";
import Checkout from "./pages/CheckoutPage/Checkout";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});
  return (
    <CartContext.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/history" element={<PurchaseHistory />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
