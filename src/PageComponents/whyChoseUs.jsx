"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { Crown, Utensils, Sparkles, Wine } from "lucide-react";

const highlights = [
  {
    title: "Exclusivity",
    desc: "Private, high-end dining tailored only for you and your guests.",
    icon: <Crown className="w-10 h-10 text-[#C8A951]" />,
  },
  {
    title: "Personalized Menus",
    desc: "Every menu is customized around your taste, allergies, and preferences.",
    icon: <Utensils className="w-10 h-10 text-[#C8A951]" />,
  },
  {
    title: "High-End Ingredients",
    desc: "Only premium, fresh, and seasonal ingredients for unforgettable flavors.",
    icon: <Sparkles className="w-10 h-10 text-[#C8A951]" />,
  },
  {
    title: "Memorable Experiences",
    desc: "Transform your home into a fine-dining experience you’ll always remember.",
    icon: <Wine className="w-10 h-10 text-[#C8A951]" />,
  },
];

const Card = ({ item, index }) => {
  const cardRef = useRef(null);
  const xPercent = useMotionValue(0);
  const yPercent = useMotionValue(0);

  const borderMask = useMotionTemplate`radial-gradient(80px 80px at ${xPercent}% ${yPercent}%, rgba(200,201,81,0.7), transparent)`;

  useEffect(() => {
    if (!cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    const circumference = width * 2 + height * 2;

    const options = {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercent, [0, 100, 100, 0, 0], options);
    animate(yPercent, [0, 0, 100, 100, 0], options);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
      className="relative rounded-3xl p-10 flex flex-col items-center text-center backdrop-blur-md border border-white/10"
    >
      {/* Animated glowing border */}
      <motion.div
        style={{ maskImage: borderMask }}
        className="absolute inset-0 rounded-3xl border border-[#C8A951] pointer-events-none"
      ></motion.div>

      {/* Icon */}
      <div className="mb-4">{item.icon}</div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-[#F5F5F5] mb-2">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-[#F5F5F5]/70 text-base md:text-lg">{item.desc}</p>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-16">
          Why Choose Us
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
