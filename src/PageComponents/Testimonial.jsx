"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { text: "An unforgettable private dining experience. The chef transformed our evening into pure luxury!", client: "Sarah L." },
  { text: "Every detail was perfect – from menu customization to impeccable service.", client: "James R." },
  { text: "Highly recommend for anyone wanting a sophisticated at-home dining experience.", client: "Emma K." },
  { text: "Luxury dining at home has never been easier and more elegant.", client: "Oliver M." },
  { text: "The chef exceeded all expectations, creating an extraordinary experience.", client: "Sophia K." },
  { text: "A true high-end culinary delight delivered to your doorstep.", client: "Liam T." },
];

const TestimonialCard = ({ text, client }) => (
  <div className="bg-[#F5F5F5]/90 backdrop-blur-md text-[#3C3C3C] rounded-2xl shadow-lg p-6 w-72 flex flex-col items-center text-center flex-shrink-0">
    <Quote className="text-[#C8A951] w-6 h-6 mb-3" />
    <p className="text-base md:text-lg">{text}</p>
    <span className="mt-4 font-semibold text-[#C8A951]">{client}</span>
  </div>
);

// Animates cards infinitely in one direction
const rowAnimation = (direction = "left") => ({
  animate: {
    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
});

const Testimonial = () => {
  const topRow = testimonials.slice(0, 3);
  const middleRow = testimonials.slice(2, 5);
  const bottomRow = testimonials.slice(1, 4);

  return (
    <section className="bg-[#0A0A0A] py-24 relative overflow-hidden">
      <div className="max-w-[80%] mx-auto relative">
        {/* Fade masks */}
        <div className="absolute inset-y-0 left-0 w-12 pointer-events-none" style={{
          maskImage: "linear-gradient(to right, transparent, black)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black)"
        }} />
        <div className="absolute inset-y-0 right-0 w-12 pointer-events-none" style={{
          maskImage: "linear-gradient(to left, transparent, black)",
          WebkitMaskImage: "linear-gradient(to left, transparent, black)"
        }} />

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">What Our Clients Say</h2>
          <p className="text-[#F5F5F5]/70 text-lg mt-2">Experience luxury at home through reviews</p>
        </div>

        <div className="space-y-12 overflow-hidden">
          {/* Top Row */}
          <div className="overflow-hidden">
            <motion.div className="flex gap-6" variants={rowAnimation("left")} animate="animate">
              {topRow.concat(topRow).map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </motion.div>
          </div>

          {/* Middle Row */}
          <div className="overflow-hidden">
            <motion.div className="flex gap-6 justify-center" variants={rowAnimation("right")} animate="animate">
              {middleRow.concat(middleRow).map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="overflow-hidden">
            <motion.div className="flex gap-6" variants={rowAnimation("left")} animate="animate">
              {bottomRow.concat(bottomRow).map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
