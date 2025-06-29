import Header from "./components/Header";
import Home from "./pages/HomePage/Home";
import PurchaseHistory from "./pages/PurchaseHistoryPage/PurchaseHistory";
import Checkout from "./pages/CheckoutPage/Checkout";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Checkout />
    </>
  );
}

export default App;
