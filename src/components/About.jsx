import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import introVideo from "../assets/salon background .mp4";
import Reveal from "./Reveal";

import work1 from "../assets/img 20.webp";
import work2 from "../assets/img 23.webp";
import work3 from "../assets/img 9.webp";
import work4 from "../assets/img 22.webp";

import client1 from "../assets/client 1.webp";
import client2 from "../assets/client 2.webp";
import client3 from "../assets/client 3.webp";
import client4 from "../assets/client 4.webp";

/* ================= COUNTER ================= */

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return <span>{count}{suffix}</span>;
};

/* ================= DATA ================= */

const testimonials = [
  {
    name: "Isabella Monroe",
    rating: 5,
    image: client1,
    text: "Velour Atelier redefined luxury for me. The precision and artistry are unmatched in Los Angeles.",
  },
  {
    name: "Sophia Bennett",
    rating: 5,
    image: client2,
    text: "The extensions are seamless and weightless. The experience felt truly elite and personalized.",
  },
  {
    name: "Ava Richardson",
    rating: 4,
    image: client3,
    text: "Exceptional attention to detail and premium service. My go-to luxury salon.",
  },
  {
    name: "Olivia Hart",
    rating: 5,
    image: client4,
    text: "Every visit feels exclusive. The results are flawless and the service is beyond expectations.",
  },
];

const About = () => {
const [index, setIndex] = useState(0);
const intervalRef = React.useRef(null);

/* START AUTO */
const startAuto = () => {
  stopAuto();
  intervalRef.current = setInterval(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, 9000);
};

/* STOP AUTO */
const stopAuto = () => {
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
  }
};

/* INIT AUTO ON LOAD */
useEffect(() => {
  startAuto();
  return stopAuto;
}, []);

/* MANUAL CONTROLS */
const nextSlide = () => {
  stopAuto();
  setIndex((prev) => (prev + 1) % testimonials.length);
  startAuto();
};

const prevSlide = () => {
  stopAuto();
  setIndex((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
  );
  startAuto();
};

    const handleRedirect = () => {
  if (slides[index].button === "DISCOVER") {
    const section = document.getElementById("wardrobe");
    section?.scrollIntoView({ behavior: "smooth" });
  } else if (slides[index].button === "READ MORE") {
    const section = document.getElementById("testimonials");
    section?.scrollIntoView({ behavior: "smooth" });
  } else {
    navigate("/appointment");
  }
};

  return (
    <section
      id="aboutus"
      className="bg-white py-20 md:py-32 px-0 md:px-16 scroll-mt-28 overflow-hidden"
    >

      {/* INTRO */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h4 className="font-[Cormorant_Garamond] text-[#C6A86E] text-lg italic mb-3">
          Our Legacy
        </h4>

        <h2 className="font-[Playfair_Display] text-3xl md:text-5xl font-medium mb-6">
          Where Luxury Meets Technical Mastery
        </h2>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Velour Atelier stands among Los Angeles’ finest luxury salons —
          trusted by celebrities, influencers, and elite clientele.
        </p>
      </div>

{/* VIDEO */}

  <motion.div
  className="max-w-6xl mx-auto mb-28 px-0 sm:px-6"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 1.8, ease: "easeOut" }}
>
  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
    <video
      src={introVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="
  w-full
  h-[80vh] md:h-[520px]
  object-cover
  scale-[1.12]
  origin-center
  translate-y-[1px]
"
    />
  </div>
</motion.div>


{/* ================= PREMIUM FULL-WIDTH STATS ================= */}

<section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#f9f7f3] via-[#f3efe8] to-[#f9f7f3]">

  {/* Top Fade */}
  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

  <div className="relative max-w-6xl mx-auto px-6 md:px-12">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 text-center">

      {/* ITEM */}
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-4xl md:text-5xl font-[Playfair_Display] font-light text-[#C6A86E] shimmer-text">
          <Counter end={10} suffix="K+" />
        </h3>
        <div className="w-8 h-[1px] bg-[#C6A86E]/60"></div>
        <p className="text-xs tracking-[0.28em] text-gray-500 uppercase">
          Elite Clients
        </p>
      </div>

      {/* ITEM */}
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-4xl md:text-5xl font-[Playfair_Display] font-light text-[#C6A86E] shimmer-text">
          <Counter end={15} suffix="+" />
        </h3>
        <div className="w-8 h-[1px] bg-[#C6A86E]/60"></div>
        <p className="text-xs tracking-[0.28em] text-gray-500 uppercase">
          Years Legacy
        </p>
      </div>

      {/* ITEM */}
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-4xl md:text-5xl font-[Playfair_Display] font-light text-[#C6A86E] shimmer-text">
          4.9★
        </h3>
        <div className="w-8 h-[1px] bg-[#C6A86E]/60"></div>
        <p className="text-xs tracking-[0.28em] text-gray-500 uppercase">
          Average Rating
        </p>
      </div>

      {/* ITEM */}
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-4xl md:text-5xl font-[Playfair_Display] font-light text-[#C6A86E] shimmer-text">
          <Counter end={98} suffix="%" />
        </h3>
        <div className="w-8 h-[1px] bg-[#C6A86E]/60"></div>
        <p className="text-xs tracking-[0.28em] text-gray-500 uppercase">
          Client Retention
        </p>
      </div>

    </div>
  </div>
</section>
{/* ================= TESTIMONIAL SLIDER ================= */}

<Reveal>
  <div id="testimonials" className="scroll-mt-28 text-center mb-12">
    <h3 className="font-[Playfair_Display] text-2xl md:text-3xl font-medium">
      Client Testimonials
    </h3>
  </div>

  <div className="max-w-4xl mx-auto relative">

    {/* LEFT ARROW */}
    <button
      onClick={prevSlide}
      className="
        absolute -left-16 top-1/2 -translate-y-1/2 z-20
        hidden md:flex
        w-12 h-12 rounded-full
        bg-white shadow-lg border border-[#C6A86E]
        items-center justify-center
        text-lg
        hover:bg-[#C6A86E] hover:text-white
        transition duration-300
      "
    >
      ‹
    </button>

    {/* RIGHT ARROW */}
    <button
      onClick={nextSlide}
      className="
        absolute -right-16 top-1/2 -translate-y-1/2 z-20
        hidden md:flex
        w-12 h-12 rounded-full
        bg-white shadow-lg border border-[#C6A86E]
        items-center justify-center
        text-lg
        hover:bg-[#C6A86E] hover:text-white
        transition duration-300
      "
    >
      ›
    </button>

    <AnimatePresence mode="wait">
     <motion.div
  key={index}
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.6}
  onDragEnd={(e, info) => {
    const threshold = 80;
    if (info.offset.x < -threshold) nextSlide();
    else if (info.offset.x > threshold) prevSlide();
  }}
  initial={{ opacity: 0, x: 120 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -120 }}
  transition={{
    duration: 1.1,
    ease: [0.22, 1, 0.36, 1]
  }}
  className="bg-[#f6f3ee] p-8 md:p-12 rounded-2xl shadow-lg text-center cursor-grab active:cursor-grabbing"
>
        <div className="flex justify-center mb-6">
          <img
            src={testimonials[index].image}
            alt="client"
            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full border-2 border-[#C6A86E] shadow-md"
          />
        </div>

        <div className="mb-4 text-[#C6A86E] text-lg tracking-wide">
          {"★".repeat(testimonials[index].rating)}
          {"☆".repeat(5 - testimonials[index].rating)}
        </div>

        <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
          {testimonials[index].text}
        </p>

        <h4 className="font-[Playfair_Display] text-lg">
          {testimonials[index].name}
        </h4>
      </motion.div>
    </AnimatePresence>

    {/* MOBILE ARROWS */}
    <div className="flex justify-center gap-6 mt-6 md:hidden">
      <button
        onClick={prevSlide}
        className="w-9 h-9 rounded-full border border-[#C6A86E]
                   flex items-center justify-center
                   text-sm hover:bg-[#C6A86E] hover:text-white
                   transition duration-300"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="w-9 h-9 rounded-full border border-[#C6A86E]
                   flex items-center justify-center
                   text-sm hover:bg-[#C6A86E] hover:text-white
                   transition duration-300"
      >
        ›
      </button>
    </div>

    {/* PREMIUM DOTS */}
    <div className="flex justify-center items-center gap-5 mt-10">
      {testimonials.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`relative transition-all duration-500 ease-out ${
            i === index
              ? "w-3 h-3 bg-[#C6A86E] scale-110"
              : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
          } rounded-full`}
        />
      ))}
    </div>

  </div>
  </Reveal>

    </section>
  );
};

export default About;