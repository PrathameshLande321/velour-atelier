import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";
import visaLogo from "../assets/VISA-logo.svg";
import masterLogo from "../assets/mastercard-logo.svg";
import amexLogo from "../assets/american-express-logo.svg";
import Reveal from "./Reveal";

import serum from "../assets/img 15.webp";
import mask from "../assets/img 17.webp";
import shampoo from "../assets/img 16.webp";
import dryer from "../assets/img 14.webp";
import conditioner from "../assets/img 18.webp";
import oilset from "../assets/img 19.webp";

/* ================= PRODUCTS ================= */

const products = [
  {
    id: 1,
    name: "Velour Atelier Signature Ritual Collection",
    price: 120,
    image: serum,
    description:
      "Luxury argan-infused serum engineered for shine amplification, heat protection, and silk-level smoothness."
  },
  {
    id: 2,
    name: "Nourishing Hair Serum",
    price: 180,
    image: mask,
    description:
      "Professional-grade keratin mask restoring structural integrity and delivering salon-level conditioning."
  },
  {
    id: 3,
    name: "Keratin Repair Mask",
    price: 95,
    image: shampoo,
    description:
      "Sulfate-free cleansing formula designed specifically for premium hair extensions."
  },
  {
    id: 4,
    name: "Professional Ionic Dryer",
    price: 350,
    image: dryer,
    description:
      "High-performance ionic airflow technology for precision styling and elite volume finish."
  },
  {
    id: 5,
    name: "Silk Luxury Conditioner",
    price: 160,
    image: conditioner,
    description:
      "Ultra-smoothing silk protein conditioner delivering runway-level shine and softness."
  },
  {
    id: 6,
    name: "Velour Signature Oil Trio",
    price: 420,
    image: oilset,
    description:
      "Exclusive three-oil treatment set crafted for deep nourishment and red-carpet gloss."
  }
];

const Shop = () => {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [checkoutStage, setCheckoutStage] = useState(null);
  const [orderRef, setOrderRef] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const scrollRef = useRef(null);

  /* ================= LOCAL STORAGE ================= */

  useEffect(() => {
    const stored = localStorage.getItem("velour_cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("velour_cart", JSON.stringify(cart));
  }, [cart]);

  /* ================= AUTO CLOSE EMPTY CART ================= */

useEffect(() => {
  if (cart.length === 0) {
    setDrawerOpen(false);
  }
}, [cart]);

  /* ================= SCROLL ================= */

  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });

  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });

  /* ================= CART LOGIC ================= */

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setDrawerOpen(true);
    setSelected(null);
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  /* ================= CHECKOUT FLOW ================= */

  const openCheckout = () => {
    if (cart.length === 0) return;
    setCheckoutStage("details");
  };

  const simulateLuxuryPayment = () => {
    setCheckoutStage("processing");

    setTimeout(() => {
      const ref =
        "VA-" +
        Math.random().toString(36).substring(2, 8).toUpperCase();

      setOrderRef(ref);
      setCheckoutStage("success");
      setCart([]);
    }, 3500);
  };

  const closeCheckout = () => {
    setCheckoutStage(null);
    setDrawerOpen(false);
  };
  /* ================= CARD FORMATTER ================= */

const formatCardNumber = (value) => {
  const cleaned = value.replace(/\D/g, "").slice(0, 16);
  const formatted = cleaned.match(/.{1,4}/g);
  return formatted ? formatted.join(" ") : cleaned;
};

  /* ================= BODY LOCK ================= */

  useEffect(() => {
    if (drawerOpen || checkoutStage || selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [drawerOpen, checkoutStage, selected]);

  return (
    <section
      id="shop"
      className="bg-[#f7f3ed] py-28 px-0 md:px-16 relative overflow-hidden"
    >
      {/* TITLE */}
      <Reveal>
  <div className="text-center mb-20">
    <h4 className="italic text-[#C6A86E] mb-3 font-[Cormorant_Garamond]">
      Exclusive Collection
    </h4>
    <h2 className="text-4xl md:text-6xl font-[Playfair_Display]">
      The Velour Atelier Shop
    </h2>
  </div>
</Reveal>

      {/* SLIDER */}
      <div className="relative max-w-[1400px] mx-auto md:px-12">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                     w-12 h-12 bg-white rounded-full shadow-xl
                     hover:bg-[#C6A86E] hover:text-white transition"
        >
          ‹
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                     w-12 h-12 bg-white rounded-full shadow-xl
                     hover:bg-[#C6A86E] hover:text-white transition"
        >
          ›
        </button>

<div
  ref={scrollRef}
  className="
    flex
    gap-0 md:gap-10 lg:gap-14
    overflow-hidden
    snap-x snap-mandatory
    scroll-smooth
    no-scrollbar
  "
>
          {products.map((product, i) => (
  <Reveal key={product.id} delay={i * 0.12}>
    <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -12 }}
className="
flex-shrink-0
w-[100vw] md:w-[340px] lg:w-[360px]
snap-center
bg-white
rounded-2xl
shadow-md hover:shadow-2xl
transition-all duration-500
flex flex-col
h-[520px] md:h-[540px]
"

            >
              <div className="overflow-hidden rounded-t-2xl">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="p-6 text-center flex flex-col flex-grow">
                <h3 className="font-[Playfair_Display] text-lg mb-2">
                  {product.name}
                </h3>

                <p className="text-[#C6A86E] text-xl font-semibold mb-4">
                  ${product.price}
                </p>

                <div className="flex justify-center gap-3 mt-auto">
                  <button
                    onClick={() => setSelected(product)}
                    className="border border-[#C6A86E] px-5 py-2 rounded-full text-xs
                               hover:bg-[#C6A86E] hover:text-white transition"
                  >
                    VIEW
                  </button>

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#C6A86E] text-white px-5 py-2 rounded-full text-xs
                               hover:opacity-90 transition"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

       {/* ================= CART DRAWER ================= */}
    <AnimatePresence>
      {drawerOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
          />

          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-[420px]
                       bg-white z-50 shadow-2xl p-8 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl mb-8 font-[Playfair_Display]">
              Your Cart
            </h3>

            {cart.length === 0 && (
              <p className="text-gray-500">Your cart is empty.</p>
            )}

            {cart.map((item) => (
              <div key={item.id} className="mb-6 border-b pb-4">
                <h4 className="text-sm font-medium">{item.name}</h4>

                <p className="text-[#C6A86E] text-sm">
                  ${item.price} × {item.quantity}
                </p>

                <div className="flex gap-3 mt-3 items-center">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="border px-3 py-1 rounded"
                  >
                    -
                  </button>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="border px-3 py-1 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {cart.length > 0 && (
              <div className="border-t pt-6 mt-6">
                <p className="text-lg font-semibold">Total: ${total}</p>

                <button
                  onClick={openCheckout}
                  className="w-full mt-6 bg-[#C6A86E] text-white py-3 rounded-full tracking-widest text-sm"
                >
                  Proceed to Secure Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>

      {/* ================= PRODUCT DETAIL MODAL ================= */}

 {/* ================= PRODUCT DETAIL MODAL ================= */}

<AnimatePresence>
  {selected && (
    <>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelected(null)}
      />

      <motion.div
  initial={{ scale: 0.95, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.95, opacity: 0 }}
  transition={{ duration: 0.35 }}
  className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
>
  {/* CLOSE BUTTON — OUTSIDE CARD */}
<button
  onClick={() => setSelected(null)}
  className="
    absolute
    top-4 right-4
    w-8 h-8
    flex items-center justify-center
    rounded-full
    bg-white
    shadow-lg
    text-gray-500
    text-sm
    hover:text-black
    transition
    z-50
  "
>
  ×
</button>

  {/* WHITE CARD */}
  <div
    className="
      relative bg-white 
      w-full max-w-5xl 
      rounded-3xl 
      shadow-[0_40px_80px_rgba(0,0,0,0.25)] 
      overflow-visible
      max-h-[95vh] overflow-y-auto
      grid grid-cols-1 md:grid-cols-2
    "
  >

          {/* IMAGE SIDE */}
          <div className="bg-[#f4efe7] flex items-center justify-center p-6 sm:p-10">
            <motion.img
              src={selected.image}
              alt={selected.name}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="
                w-full 
                max-h-[280px] 
                sm:max-h-[420px] 
                object-contain
              "
            />
          </div>

          {/* CONTENT SIDE */}
          <div className="p-6 sm:p-12 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-[Playfair_Display] mb-4">
              {selected.name}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              {selected.description}
            </p>

            <div className="bg-[#f4efe7] p-5 sm:p-6 rounded-2xl mb-8">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">
                Ingredients Insight
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Silk Protein Matrix, Deep Hydration Blend,
                Gloss Enhancement Complex.
              </p>
            </div>

            <p className="text-2xl sm:text-3xl text-[#C6A86E] font-semibold mb-6">
              ${selected.price}
            </p>

            <button
              onClick={() => addToCart(selected)}
              className="
                bg-[#C6A86E] 
                text-white 
                py-4 
                rounded-full 
                tracking-widest 
                text-sm 
                hover:opacity-90 
                transition
              "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
{/* ================= PREMIUM LA PAYMENT MODAL ================= */}

<AnimatePresence>
  {checkoutStage && (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-[80] p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-[0_80px_160px_rgba(0,0,0,0.45)] 
                   px-6 py-8 sm:px-10 sm:py-12 overflow-y-auto max-h-[95vh]"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={closeCheckout}
          className="absolute top-5 right-6 text-2xl text-gray-400 hover:text-black transition"
        >
          ×
        </button>

        {checkoutStage === "details" && (
          <>
            <h2 className="text-2xl sm:text-3xl font-[Playfair_Display] text-center mb-2">
              Secure Private Payment Portal
            </h2>

            <p className="text-center text-gray-500 text-sm mb-6 tracking-wide">
              Encrypted • PCI Compliant • Beverly Hills, CA
            </p>

            {/* TRUST BADGES */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-xs sm:text-sm text-gray-500">
              <span>🔒 256-bit SSL</span>
              <span>🛡 Fraud Protection</span>
              <span>🇺🇸 LA Secure Gateway</span>
            </div>

            {/* PREMIUM CARD */}
<div className="relative bg-gradient-to-br from-black via-[#1a1a1a] to-[#2c2c2c] 
                rounded-3xl p-6 sm:p-8 text-white shadow-2xl mb-8 overflow-hidden">

  {/* metallic shine effect */}
  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-12"></div>

  <div className="relative z-10">
    <div className="flex justify-between items-center mb-6">
      <p className="text-sm opacity-70">
        Velour Atelier Black Card
      </p>
      <span className="text-xs opacity-60">Premium Client</span>
    </div>

    <p className="tracking-[0.3em] text-lg sm:text-xl mb-8 font-light">
      {cardNumber || "•••• •••• •••• ••••"}
    </p>

    <div className="flex justify-between text-xs sm:text-sm opacity-80">
      <span>Card Holder</span>
      <span>VALID THRU</span>
    </div>
  </div>
</div>

            {/* FORM */}
            <div className="space-y-4 mb-8">
              <input
                placeholder="Cardholder Name"
                className="w-full border border-gray-300 p-3 sm:p-4 rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-[#C6A86E]"
              />

              <input
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                className="w-full border border-gray-300 p-3 sm:p-4 rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-[#C6A86E]"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="MM / YY"
                  className="border border-gray-300 p-3 sm:p-4 rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-[#C6A86E]"
                />
                <input
                  type="password"
                  maxLength={4}
                  placeholder="CVC"
                  className="border border-gray-300 p-3 sm:p-4 rounded-xl 
               focus:outline-none focus:ring-2 focus:ring-[#C6A86E]"
                />
              </div>
            </div>
{/* PREMIUM PAYMENT BRANDS */}
<div className="mt-10 mb-12">

  <div className="flex items-center justify-center 
                  gap-6 sm:gap-12 md:gap-16">

    {/* VISA */}
    <img
      src={visaLogo}
      alt="Visa"
      className="h-9 sm:h-11 md:h-14
                 object-contain
                 opacity-95
                 transition duration-300"
    />

    {/* MASTERCARD — bigger */}
    <img
      src={masterLogo}
      alt="Mastercard"
      className="h-14 sm:h-16 md:h-20
                 object-contain
                 drop-shadow-sm
                 transition duration-300"
    />

    {/* AMERICAN EXPRESS — much bigger */}
    <img
      src={amexLogo}
      alt="American Express"
      className="h-16 sm:h-20 md:h-24
                 object-contain
                 drop-shadow-sm
                 transition duration-300"
    />

  </div>

</div>

            {/* APPLE STYLE CONFIRM */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={simulateLuxuryPayment}
              className="w-full bg-[#C6A86E] text-white py-4 sm:py-5 
                         rounded-full tracking-widest text-sm sm:text-base
                         shadow-xl hover:opacity-90 transition"
            >
              Swipe to Confirm Payment →
            </motion.button>
          </>
        )}

        {checkoutStage === "processing" && (
          <div className="text-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-14 h-14 border-4 border-[#C6A86E] border-t-transparent 
                         rounded-full mx-auto mb-6"
            />
            <p className="text-gray-600 text-sm sm:text-base">
              Processing via Los Angeles Secure Banking Network...
            </p>
          </div>
        )}

        {checkoutStage === "success" && (
          <div className="text-center py-10">
            <h2 className="text-2xl sm:text-3xl font-[Playfair_Display] mb-4">
              Payment Approved
            </h2>

            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Transaction secured under U.S. Financial Protection Standard.
            </p>

            <div className="bg-[#f7f3ed] p-6 rounded-xl mb-6">
              <p className="text-sm text-gray-500">Order Reference</p>
              <p className="text-lg tracking-widest font-semibold">
                {orderRef}
              </p>
            </div>

            <button
              onClick={closeCheckout}
              className="bg-black text-white px-8 py-3 rounded-full tracking-widest text-sm"
            >
              Return to Collection
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      
    </section>
  );
};

export default Shop;