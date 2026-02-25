import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Added

import img1 from "../assets/img 5.webp";
import img2 from "../assets/img 6.webp";
import img3 from "../assets/img 7.webp";
import img4 from "../assets/img 8.webp";

const services = [
  {
    image: img1,
    title: "Italian Keratin Extensions – 100 Capsules",
    desc: "Ultra-premium keratin extensions for volume and red-carpet elegance.",
    price: "$2,950",
    popular: true,
  },
  {
    image: img2,
    title: "Tape Extension Method",
    desc: "Flawless seamless tape transformation.",
    price: "$950",
    popular: true,
  },
  {
    image: img3,
    title: "Removal Tape (each sandwich)",
    desc: "Professional safe removal service.",
    price: "$85",
  },
  {
    image: img4,
    title: "Keratin or Ice Extension Removal",
    desc: "Precision luxury removal treatment.",
    price: "$45",
  },
];

const Services = () => {
  const navigate = useNavigate(); // ✅ Added

  return (
    <section
      id="services"
      className="bg-[#f6f3ee] py-20 md:py-28 px-6 md:px-16 scroll-mt-28"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
        <h4 className="font-[Cormorant_Garamond] text-[#C97C68] text-lg italic mb-2">
          Beverly Hills Luxury Hair Studio
        </h4>

        <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-medium tracking-wide">
          OUR EXCLUSIVE SERVICES
        </h2>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-xl overflow-hidden border border-[#ece7df] hover:shadow-md transition-all duration-400 group flex flex-col"
          >
            {/* Badge */}
            {service.popular && (
              <div className="absolute top-3 left-3 bg-[#C6A86E] text-black text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full z-10">
                Most Popular
              </div>
            )}

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 md:h-52 object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-center flex flex-col flex-grow">

              <h3 className="font-[Playfair_Display] text-base font-medium mb-2 leading-snug">
                {service.title}
              </h3>

              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                {service.desc}
              </p>

              <p className="text-lg font-medium tracking-wide text-[#1a1a1a] mb-4">
                {service.price}
              </p>

              <button
                onClick={() => navigate("/appointment")}
                className="mt-auto border border-[#C6A86E] px-5 py-2 rounded-full uppercase tracking-[0.15em] text-[10px] hover:bg-[#C6A86E] hover:text-black transition duration-400"
              >
                Book Now
              </button>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;