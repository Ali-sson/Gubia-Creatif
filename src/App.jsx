import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      disable: () => window.innerWidth < 640, // safer disable for small screens
    });
  }, []);

useEffect(() => {
  setTimeout(() => {
    AOS.refreshHard(); // force re-detect all AOS elements
  }, 50);
}, [location.pathname]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
