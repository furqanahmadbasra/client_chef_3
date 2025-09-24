"use client";
import Button from "../components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import React from "react";

const HeroSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.section
      ref={sectionRef}
      // 👇 Account for navbar height & apply mask-image for smooth edges
      className="min-h-screen flex items-start pt-24 relative overflow-hidden 
                 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        background: `radial-gradient(circle at center, rgba(200,201,81,0.1), rgba(10,10,10,1) 90%)`,
        backgroundPositionY,
      }}
    >
      {/* Smooth gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/90 to-transparent"></div>

      {/* Hero content */}
      <div className="max-w-5xl mx-auto relative z-10 text-center px-4">
        {/* Headline */}
        <h1 className="text-5xl md:text-[80px] font-bold text-[#F5F5F5] leading-tight">
          Experience Exclusive Dining at Home
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#F5F5F5]/80 mt-4 max-w-2xl mx-auto">
          Private chef services bringing exquisite Mediterranean flavors to your home.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <Button className="bg-gradient-to-b from-[#C8A951] to-[#A88F42] hover:from-[#B8654D] hover:to-[#9c4a36] py-3 px-6 text-lg">
            Book Your Service Now
          </Button>
        </div>

        {/* Optional trust/highlight points */}
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-6 text-[#F5F5F5] text-sm md:text-base">
          <span>Predefined dinner packages</span>
          <span>Luxury, high-end experience</span>
          <span>Custom dietary accommodations</span>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
