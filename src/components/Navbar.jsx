import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (section) => {
    setOpen(false);

    if (location.pathname === "/") {
      // Already on home → scroll only
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On appointment → go home first, then scroll
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/85 backdrop-blur-md text-white">

      <div className="max-w-7xl mx-auto flex justify-between items-center
                      px-4 sm:px-8 lg:px-16
                      py-4 lg:py-6">

        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer font-[Playfair_Display]
                     tracking-[0.18em] text-sm sm:text-lg lg:text-xl"
        >
          VELOUR ATELIER
        </h1>

        {/* DESKTOP */}
        <ul className="hidden xl:flex items-center gap-10
                       text-sm tracking-[0.15em] font-medium">

          <li onClick={() => handleNav("home")} className="cursor-pointer hover:text-[#C6A86E]">HOME</li>
          <li onClick={() => handleNav("aboutus")} className="cursor-pointer hover:text-[#C6A86E]">ABOUT US</li>
          <li onClick={() => handleNav("services")} className="cursor-pointer hover:text-[#C6A86E]">SERVICES</li>
          <li onClick={() => handleNav("shop")} className="cursor-pointer hover:text-[#C6A86E]">SHOP</li>
          <li onClick={() => handleNav("contactus")} className="cursor-pointer hover:text-[#C6A86E]">CONTACT US</li>
        </ul>

        <button
          onClick={() => navigate("/appointment")}
          className="hidden xl:block border border-[#C6A86E]
                     px-6 py-2 rounded-full text-xs uppercase
                     tracking-[0.15em] hover:bg-[#C6A86E]
                     hover:text-black transition"
        >
          BOOK ONLINE
        </button>

        {/* MOBILE ICON */}
        <div className="xl:hidden">
          {open ? (
            <X size={26} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={26} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="xl:hidden bg-black/95 py-10 flex flex-col
                        items-center space-y-8 uppercase tracking-[0.2em]">

          <span onClick={() => handleNav("home")} className="cursor-pointer">HOME</span>
          <span onClick={() => handleNav("aboutus")} className="cursor-pointer">ABOUT US</span>
          <span onClick={() => handleNav("services")} className="cursor-pointer">SERVICES</span>
          <span onClick={() => handleNav("shop")} className="cursor-pointer">SHOP</span>
          <span onClick={() => handleNav("contactus")} className="cursor-pointer">CONTACT US</span>

          <button
            onClick={() => {
              setOpen(false);
              navigate("/appointment");
            }}
            className="border border-[#C6A86E]
                       px-6 py-2 rounded-full"
          >
            BOOK ONLINE
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;