import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import img1 from "../assets/img 15.webp";
import img2 from "../assets/img 16.webp";
import img3 from "../assets/img 17.webp";

const slides = [
  {
    image: img1,
    subtitle: "Radiance",
    title: "Unmatched Hair",
    desc: "Premium hair extensions & styling tailored for modern elegance.",
  },
  {
    image: img2,
    subtitle: "Elegance",
    title: "Elevate Your Look",
    desc: "Luxury treatments crafted with precision and refinement.",
  },
  {
    image: img3,
    subtitle: "Prestige",
    title: "Luxury Salon Experience",
    desc: "Indulge in world-class artistry within a serene setting.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); // ✅ Added

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] pt-20 md:pt-24 overflow-hidden"
    >
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index].image}
          src={slides[index].image}
          alt="slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[100svh] px-6 sm:px-10 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-lg text-white">

          <h4 className="text-[#C6A86E] text-sm sm:text-base tracking-[0.25em] uppercase mb-4">
            {slides[index].subtitle}
          </h4>

          <h1 className="font-[Playfair_Display] text-3xl sm:text-4xl md:text-6xl font-light leading-tight mb-4">
            {slides[index].title}
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
            {slides[index].desc}
          </p>

         <button
  onClick={() => {
    const section = document.getElementById("wardrobe");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }}
  className="inline-block border border-[#C6A86E] px-6 sm:px-8 py-3 rounded-full uppercase tracking-[0.15em] text-xs sm:text-sm hover:bg-[#C6A86E] hover:text-black transition"
>
  Discover
</button>

        </div>
      </div>
    </section>
  );
};

export default Hero;