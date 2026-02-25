import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/img 22.webp";
import img2 from "../assets/img 2.webp";
import img3 from "../assets/img 3.webp";

const slides = [
  {
    image: img1,
    subtitle: "Radiance",
    title: "Unmatched Hair Extensions & Styling",
    desc: "Explore top-quality hair extensions that ensure your hair looks stunning and feels healthy.",
    button: "READ MORE",
  },
  {
    image: img2,
    subtitle: "Elegance",
    title: "Elevate Your Look",
    desc: "Luxury treatments crafted with precision and refinement.",
    button: "DISCOVER",
  },
  {
    image: img3,
    subtitle: "Prestige",
    title: "Luxury Salon Experience",
    desc: "Indulge in world-class artistry within a serene setting.",
    button: "BOOK NOW",
  },
];

const AUTO_DELAY = 7000;

const Slider = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
    const navigate = useNavigate();

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_DELAY);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
    resetAutoSlide();
  };

  // ✅ NEW BUTTON ACTION LOGIC
const handleAction = () => {
  if (index === 0) {
    const section = document.getElementById("testimonials");
    section?.scrollIntoView({ behavior: "smooth" });
  }

  else if (index === 1) {
    const section = document.getElementById("services");
    section?.scrollIntoView({ behavior: "smooth" });
  }

  else if (index === 2) {
    window.location.href = "/appointment";
  }
};

  return (
    <section className="relative w-full h-screen overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={slides[index].image}
            alt="slide"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-[#efe6d8]/95 via-[#efe6d8]/75 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>

      <div className="relative z-10 h-full flex items-center px-6 md:px-16 max-w-7xl mx-auto">

        <motion.div
          key={slides[index].title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-xl"
        >
          <h4 className="font-[Cormorant_Garamond] text-[#C97C68] text-2xl italic mb-6 tracking-wide">
            {slides[index].subtitle}
          </h4>

          <h1 className="font-[Playfair_Display] text-5xl md:text-6xl font-medium leading-tight mb-6">
            {slides[index].title}
          </h1>

          <p className="text-gray-700 text-lg mb-10 leading-relaxed font-light">
            {slides[index].desc}
          </p>

          <button
            onClick={handleAction}
            className="bg-[#C97C68] text-white px-8 py-4 rounded-full uppercase tracking-[0.15em] text-sm hover:bg-[#b76552] transition duration-500 shadow-lg hover:shadow-xl"
          >
            {slides[index].button}
          </button>

        </motion.div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 text-4xl text-gray-600 hover:text-black transition z-20"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl text-gray-600 hover:text-black transition z-20"
      >
        ›
      </button>

      <div className="absolute bottom-10 w-full flex justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              setIndex(i);
              resetAutoSlide();
            }}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === index
                ? "bg-[#C97C68] scale-125"
                : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
};

export default Slider;