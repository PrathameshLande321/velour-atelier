import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img 12.webp";
import img2 from "../assets/img 13.webp";
import img3 from "../assets/img 10.webp";

const WardrobeEssentials = () => {
  const navigate = useNavigate();

  return (
    <section
      className="bg-[#f8f5ef] py-28 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto text-center mb-20">
        <p className="uppercase tracking-[0.4em] text-xs text-[#C6A86E] mb-4">
          Beverly Hills Edit
        </p>
        <h2 className="text-5xl md:text-6xl font-[Playfair_Display] mb-6">
          Wardrobe Essentials
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Curated beauty luxuries for the modern woman — refined,
          polished, and designed for the Los Angeles lifestyle.
        </p>
      </div>

      {/* Premium Image Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {[img1, img2, img3].map((image, index) => (
          <div
            key={index}
            className="group relative rounded-3xl overflow-hidden
                       shadow-[0_30px_60px_rgba(0,0,0,0.08)]
                       hover:shadow-[0_40px_90px_rgba(0,0,0,0.15)]
                       transition duration-500"
          >
            <img
              src={image}
              alt="Luxury Product"
              className="w-full h-[500px] object-cover
                         group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/20 opacity-0
                            group-hover:opacity-100 transition duration-500" />

            <div className="absolute bottom-8 left-8 text-white opacity-0
                            group-hover:opacity-100 transition duration-500">
              <h3 className="text-2xl font-[Playfair_Display] mb-2">
                Signature Luxury
              </h3>
              <p className="text-sm tracking-widest">
                DISCOVER COLLECTION →
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Appointment CTA */}
      <div className="text-center mt-24">
        <button
          onClick={() => navigate("/appointment")}
          className="bg-[#C6A86E] text-white px-12 py-4
                     rounded-full tracking-[0.3em] text-sm
                     shadow-lg hover:shadow-xl transition"
        >
          BOOK PRIVATE APPOINTMENT
        </button>
      </div>
    </section>
  );
};

export default WardrobeEssentials;