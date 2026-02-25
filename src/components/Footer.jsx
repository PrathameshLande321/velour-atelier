import React from "react";
import { FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-16">

      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* BRAND / STATEMENT */}
        <div>
          <h2 className="text-4xl font-[Playfair_Display] tracking-wide mb-8 text-white">
            Velour Atelier
          </h2>

          <p className="text-gray-300 leading-relaxed text-base max-w-md">
            A private Los Angeles luxury hair studio located in the heart of 
            Beverly Hills. Specializing in couture extensions, 
            precision styling, and bespoke transformation experiences 
            curated for an elite clientele.
          </p>
        </div>

        {/* LOCATION & CONTACT */}
        <div className="md:text-right">
          <h3 className="text-[#C6A86E] tracking-[0.3em] text-xs mb-8">
            BEVERLY HILLS PRIVATE STUDIO
          </h3>

          <div className="text-gray-300 text-base space-y-5 leading-relaxed">

            <p>
              468 N Rodeo Drive <br />
              Beverly Hills, California 90210 <br />
              United States
            </p>

            <p>
              +1 (310) 555-4821
            </p>

            <p>
              concierge@velouratelier.com
            </p>

            <div className="border border-white/20 px-6 py-4 text-xs tracking-[0.25em] inline-block mt-6">
              OPEN DAILY · 11 AM — 8 PM
            </div>

          </div>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10 mt-20 pt-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

          {/* COPYRIGHT */}
          <div className="text-sm text-gray-400 tracking-wide text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} Velour Atelier.
            <span className="text-[#C6A86E]"> All Rights Reserved.</span>
            <div className="mt-2">
              A Private Luxury Hair Studio by{" "}
              <span className="text-white font-medium">
                Prathamesh Lande
              </span>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-8 text-gray-400">

            <a
              href="#"
              className="hover:text-[#C6A86E] transition duration-300 transform hover:-translate-y-[2px]"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="hover:text-[#C6A86E] transition duration-300 transform hover:-translate-y-[2px]"
              aria-label="X"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="#"
              className="hover:text-[#C6A86E] transition duration-300 transform hover:-translate-y-[2px]"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;