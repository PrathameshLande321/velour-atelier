import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import Services from "./components/Services";
import Shop from "./components/Shop";
import WardrobeEssentials from "./components/WardrobeEssentials";
import Contact from "./components/Contact";
import Appointment from "./pages/Appointment";
import Footer from "./components/Footer";

/* =========================
   HOME PAGE WITH SCROLL LOGIC
========================= */
function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <div id="home">
        <Slider />
      </div>

      <div id="aboutus">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="shop">
        <Shop />
      </div>

      <WardrobeEssentials />

      <div id="contactus">
        <Contact />
      </div>
    </>
  );
}

/* =========================
   MAIN APP ROUTING
========================= */
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </div>

      
        <Footer />
      </div>
    </Router>
  );
}

export default App;