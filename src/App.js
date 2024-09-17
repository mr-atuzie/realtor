import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import AllProducts from "./pages/AllProducts";
// import Navbar from "./components/Navbar";
// import Order from "./pages/Order";
import ScrollTop from "./components/ScrollTop";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Shipping from "./pages/Shipping";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Toaster position="top-center" reverseOrder={false} />
          <ScrollTop />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
