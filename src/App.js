import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
// import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Phone from "./pages/Phone";
import Main from "./pages/Main";
import Otp from "./pages/Otp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reg" element={<Register />} />
        <Route path="/dashboard" element={<Main />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
