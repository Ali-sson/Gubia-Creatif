import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";

// Sub-Menus
import Residential  from "./pages/Residential";
import Industrial from "./pages/Industrial";
import Commercial from "./pages/Commercial";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import ScrollToTop from "./components/ScrollToTop";


export default function App() {
    useEffect(() => {
    AOS.init({
      duration: 800,   // animation duration
      once: false,     // allow animation every time on scroll
    });
  }, []);

  return (

    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-success" element={<BookingSuccess />} />

        {/* Services Routes */}
      <Route
  path="/services/residential-cleaning" element={<Residential />}/>

      <Route path="/services/industrial" element={<Industrial />} />
      <Route path="/services/commercial" element={<Commercial />} />
      </Routes>
      
    </>
  );
}
