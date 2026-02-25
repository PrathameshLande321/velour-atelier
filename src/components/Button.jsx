import React from "react";

const Button = ({ children }) => {
  const handleClick = () => {
    window.location.hash = "#wardrobe";
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#C6A86E] text-black px-8 py-3
                 rounded-full tracking-[0.2em]
                 hover:opacity-90 transition"
    >
      {children}
    </button>
  );
};

export default Button;