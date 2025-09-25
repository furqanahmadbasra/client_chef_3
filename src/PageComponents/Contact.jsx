"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 relative overflow-hidden">
      {/* Floating gradient circles */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-[#C8A951]/40 to-transparent blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-52 h-52 rounded-full bg-gradient-to-tr from-[#C8A951]/30 to-transparent blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-gradient-to-tr from-[#C8A951]/20 to-transparent blur-2xl"
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">
            Get in Touch
          </h2>
          <p className="text-[#F5F5F5]/70 text-lg mt-2">
            We’d love to hear from you
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 relative z-10 border-2 border-[#C8A951]">
          <form className="space-y-6">
            {/* Name + Email Row */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 px-4 py-3 rounded-lg bg-[#3C3C3C]/60 text-[#F5F5F5] placeholder-[#aaa] border border-[#555] focus:outline-none focus:ring-2 focus:ring-[#C8A951]"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 rounded-lg bg-[#3C3C3C]/60 text-[#F5F5F5] placeholder-[#aaa] border border-[#555] focus:outline-none focus:ring-2 focus:ring-[#C8A951]"
                required
              />
            </div>

            {/* Message */}
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-[#3C3C3C]/60 text-[#F5F5F5] placeholder-[#aaa] border border-[#555] focus:outline-none focus:ring-2 focus:ring-[#C8A951]"
              required
            />

            {/* Send Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full md:w-1/2 px-10 py-4 bg-[#C8A951] text-black font-semibold rounded-lg hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
