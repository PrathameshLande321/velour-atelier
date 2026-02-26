import React, { useState } from "react";
import Reveal from "./Reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <section
      id="contactus"
      className="relative bg-gradient-to-b from-[#f4efe7] to-[#ede7dd] py-28 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-10">
          <div>
            <h2 className="text-5xl font-[Playfair_Display] mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Private consultations, bespoke styling, and concierge-level
              service — curated exclusively in Beverly Hills.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="uppercase text-[11px] tracking-[0.3em] text-[#C6A86E] mb-1">
                Email
              </p>
              <p className="text-lg text-gray-700">
                concierge@velouratelier.com
              </p>
            </div>

            <div>
              <p className="uppercase text-[11px] tracking-[0.3em] text-[#C6A86E] mb-1">
                Phone
              </p>
              <p className="text-lg text-gray-700">
                +1 (310) 555-4821
              </p>
            </div>

            <div>
              <p className="uppercase text-[11px] tracking-[0.3em] text-[#C6A86E] mb-3">
                Visit Our Studio
              </p>

              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/30">
                <iframe
                  title="Velour Atelier Location"
                  src="https://www.google.com/maps?q=Rodeo+Drive+Beverly+Hills&output=embed"
                  className="w-full h-64"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl
                        shadow-[0_40px_80px_rgba(0,0,0,0.12)]
                        p-10 md:p-14 border border-white/40">

          <h3 className="text-3xl font-[Playfair_Display] mb-8">
            Private Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>
              <label className="block text-[11px] tracking-[0.25em] text-gray-500 mb-1">
                FULL NAME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent
                           border-b border-gray-300
                           focus:border-[#C6A86E]
                           focus:outline-none
                           text-base
                           py-1 transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-[11px] tracking-[0.25em] text-gray-500 mb-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent
                           border-b border-gray-300
                           focus:border-[#C6A86E]
                           focus:outline-none
                           text-base
                           py-1 transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-[11px] tracking-[0.25em] text-gray-500 mb-1">
                MESSAGE
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="1"
                className="w-full bg-transparent
                           border-b border-gray-300
                           focus:border-[#C6A86E]
                           focus:outline-none
                           text-base
                           py-1
                           resize-none
                           overflow-hidden transition"
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-[#C6A86E] text-white py-4 rounded-full
                         tracking-[0.25em] text-sm shadow-lg
                         hover:shadow-xl hover:opacity-95 transition"
            >
              SEND INQUIRY
            </button>
          </form>

          {/* SUCCESS OVERLAY */}
          {sent && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-md
                            flex flex-col items-center justify-center
                            rounded-3xl text-center p-10">

              <div className="w-20 h-20 rounded-full bg-[#ede7dd]
                              flex items-center justify-center mb-6">
                <span className="text-3xl text-[#C6A86E]">✓</span>
              </div>

              <h4 className="text-3xl font-[Playfair_Display] mb-4">
                Inquiry Sent Successfully
              </h4>

              <p className="text-gray-600 max-w-md leading-relaxed">
                Our Beverly Hills concierge team will contact you shortly
                to curate your luxury salon experience.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;