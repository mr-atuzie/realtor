import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AllProducts from "./pages/AllProducts";
import Navbar from "./components/Navbar";
import Order from "./pages/Order";
import ScrollTop from "./components/ScrollTop";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Shipping from "./pages/Shipping";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
