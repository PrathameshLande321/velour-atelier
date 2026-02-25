import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* =============================
   IMPORT YOUR 7 LOCAL IMAGES
============================= */
import img1 from "../assets/appoint img 1.webp";
import img2 from "../assets/appoint img 2.webp";
import img3 from "../assets/appoint img 3.webp";
import img4 from "../assets/appoint img 4.webp";
import img5 from "../assets/appoint img 5.webp";
import img6 from "../assets/appoint img 6.webp";
import img7 from "../assets/appoint img 7.webp";

/* =============================
   STYLIST DATA
============================= */
const stylists = [
  { name: "Isabella Laurent", image: img1, unavailable: ["2026-03-22"] },
  { name: "Camille Dupont", image: img2, unavailable: ["2026-03-25"] },
  { name: "Sophia Valentino", image: img3, unavailable: ["2026-03-21"] },
  { name: "Anastasia Volkov", image: img4, unavailable: ["2026-03-28"] },
  { name: "Elena Rossi", image: img5, unavailable: [] },
  { name: "Mina Park", image: img6, unavailable: ["2026-03-24"] },
  { name: "Layla Rahman", image: img7, unavailable: [] },
];

const services = [
  "Luxury Blowout",
  "Signature Extensions",
  "Keratin Ritual",
  "Bridal Couture Styling",
  "Gold Hydration Therapy",
];

const Appointment = () => {
  const navigate = useNavigate();
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [index, setIndex] = useState(0);
 const [selectedStylist, setSelectedStylist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  /* =============================
     SLIDER CONTROLS
  ============================== */
const next = () => {
  setIndex((prev) => (prev + 1) % stylists.length);
};

const prev = () => {
  setIndex((prev) =>
    prev === 0 ? stylists.length - 1 : prev - 1
  );
};

  /* =============================
     DYNAMIC CALENDAR
  ============================== */
 const year = currentDate.getFullYear();
const month = currentDate.getMonth();

  const calendarDays = useMemo(() => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startingDayIndex = firstDayOfMonth.getDay();
  const totalDays = lastDayOfMonth.getDate();

  const days = [];

  // empty cells
  for (let i = 0; i < startingDayIndex; i++) {
    days.push(null);
  }

  // real days
  for (let day = 1; day <= totalDays; day++) {
    const fullDate = new Date(year, month, day);
    const iso = fullDate.toISOString().split("T")[0];

    days.push({
      day,
      iso,
      unavailable:
        selectedStylist?.unavailable?.includes(iso) || false,
    });
  }

  return days;
}, [year, month, selectedStylist]);

  const timeSlots = [
    "10:00 AM",
    "11:30 AM",
    "1:00 PM",
    "2:30 PM",
    "4:00 PM",
    "5:30 PM",
    "6:30 PM",
    "8:00 PM",
  ];

  const nextMonth = () => {
  setCurrentDate(new Date(year, month + 1, 1));
};

const prevMonth = () => {
  setCurrentDate(new Date(year, month - 1, 1));
};

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!selectedStylist || !selectedDate || !selectedTime || !selectedService)
    return;

  setConfirmed(true);

  setTimeout(() => {
    navigate("/", { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 2200);
};
  return (
    <section className="min-h-screen bg-[#f4efe7] pt-32 pb-20 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-[Playfair_Display] text-center mb-20">
          Private Appointment Booking
        </h1>

        {/* =============================
            PREMIUM STYLIST SLIDER
        ============================== */}
        <div className="relative mb-24">

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2
                       bg-white shadow-xl w-12 h-12 rounded-full
                       flex items-center justify-center z-10"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2
                       bg-white shadow-xl w-12 h-12 rounded-full
                       flex items-center justify-center z-10"
          >
            ›
          </button>

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${index * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {stylists.map((stylist, i) => (
                <div
                  key={i}
                  className="min-w-full flex justify-center px-4"
                >
 
<div
  onClick={() => setSelectedStylist(stylist)}
  className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500
    ${
      selectedStylist?.name === stylist.name
        ? "border-4 border-[#C6A86E] scale-105 shadow-[0_25px_70px_rgba(198,168,110,0.35)]"
        : "border border-transparent hover:scale-105"
    }`}
>
{selectedStylist?.name === stylist.name && (
  <div className="absolute top-4 right-4 bg-[#C6A86E] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm shadow-lg">
    ✓
  </div>
)}
                    <img
                      src={stylist.image}
                      alt={stylist.name}
                      className="h-[420px] w-[340px] object-cover"
                    />
                    <div className="text-center py-4 text-xl font-medium">
                      {stylist.name}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* =============================
            REAL CALENDAR GRID
        ============================== */}
        <div className="mb-24">

  <h3 className="uppercase tracking-[0.3em] text-sm mb-8 text-gray-500">
    Select Date
  </h3>

  {/* Premium Month Header */}
  <div className="flex items-center justify-between mb-8 px-2">

    <button
      onClick={prevMonth}
      className="w-10 h-10 rounded-full border border-gray-300 
                 hover:border-[#C6A86E] transition"
    >
      ‹
    </button>

    <h2 className="text-2xl font-[Playfair_Display] tracking-wide">
      {currentDate.toLocaleString("default", {
        month: "long",
      })}{" "}
      {year}
    </h2>

    <button
      onClick={nextMonth}
      className="w-10 h-10 rounded-full border border-gray-300 
                 hover:border-[#C6A86E] transition"
    >
      ›
    </button>

  </div>

  {/* Weekday Labels */}
  <div className="grid grid-cols-7 text-center text-xs tracking-widest mb-4 text-gray-500">
    {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((day) => (
      <div key={day}>{day}</div>
    ))}
  </div>

  {/* Calendar Grid */}
  <div className="grid grid-cols-7 gap-3 sm:gap-4">

    {calendarDays.map((day, index) =>
      day === null ? (
        <div key={index}></div>
      ) : (
        <button
          key={index}
          disabled={day.unavailable}
          onClick={() => setSelectedDate(day.iso)}
          className={`aspect-square rounded-xl border text-sm md:text-base transition-all duration-300
            ${
              day.unavailable
                ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                : selectedDate === day.iso
                ? "bg-[#C6A86E] text-white border-[#C6A86E] shadow-lg scale-105"
                : "border-gray-300 hover:border-[#C6A86E] hover:shadow-md"
            }`}
        >
          {day.day}
        </button>
      )
    )}

  </div>
</div>

        {/* =============================
            TIME SLOTS
        ============================== */}
        <div className="mb-20">
          <h3 className="uppercase tracking-[0.3em] text-sm mb-6 text-gray-500">
            Select Time
          </h3>

          <div className="flex flex-wrap gap-4">
            {timeSlots.map((slot, i) => (
              <button
                key={i}
                onClick={() => setSelectedTime(slot)}
                className={`px-6 py-3 rounded-full border transition
                  ${
                    selectedTime === slot
                      ? "bg-[#C6A86E] text-white border-[#C6A86E]"
                      : "border-gray-300 hover:border-[#C6A86E]"
                  }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* =============================
            SERVICES
        ============================== */}
        <div className="mb-16">
          <h3 className="uppercase tracking-[0.3em] text-sm mb-6 text-gray-500">
            Select Service
          </h3>

          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full border-b border-gray-400 bg-transparent
                       focus:outline-none py-3 text-lg"
          >
            <option value="">Choose Service</option>
            {services.map((service, i) => (
              <option key={i}>{service}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-[#C6A86E] text-white py-5 rounded-full
                     tracking-[0.25em] text-sm shadow-xl hover:opacity-90 transition"
        >
          CONFIRM APPOINTMENT
        </button>

      </div>

      {/* =============================
          SUCCESS OVERLAY
      ============================== */}
      <AnimatePresence>
        {confirmed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-md
                       flex flex-col items-center justify-center text-center"
          >
            <div className="w-24 h-24 rounded-full bg-[#ede7dd]
                            flex items-center justify-center mb-6">
              <span className="text-4xl text-[#C6A86E]">✓</span>
            </div>

            <h3 className="text-4xl font-[Playfair_Display] mb-4">
              Appointment Confirmed
            </h3>

            <p className="text-gray-600 max-w-md">
              Your luxury session at Velour Atelier Beverly Hills has been scheduled.
              Redirecting you home.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Appointment;