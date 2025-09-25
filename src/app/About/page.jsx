"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Exclusivity",
    desc: "Private, high-end dining tailored only for you and your guests.",
  },
  {
    title: "Personalized Menus",
    desc: "Every menu is customized around your taste, allergies, and preferences.",
  },
  {
    title: "Premium Ingredients",
    desc: "Only premium, fresh, and seasonal ingredients for unforgettable flavors.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen px-6 md:px-16 py-16">
      
      {/* Intro Section */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#C8A951] mb-6">
          About PrivateChef
        </h1>
        <p className="text-lg text-[#F5F5F5]/70 leading-relaxed">
          We bring the art of fine dining directly into your home.  
          Crafted menus, handpicked ingredients, and unforgettable moments—  
          all designed exclusively for you.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-[#C8A951] mb-4">Our Story</h2>
        <p className="text-[#F5F5F5]/80 leading-relaxed text-lg">
          PrivateChef was founded with one mission: to redefine luxury dining.  
          We believe that memorable experiences are created not only by  
          exquisite flavors but also by the warmth of personalization.  
          Every dish, every detail, and every service is tailored exclusively  
          for you and your guests.
        </p>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            className="h-72 w-full border border-[#C8A951]/30 rounded-2xl p-8 flex flex-col justify-center items-center text-center backdrop-blur-sm shadow-[0px_0px_20px_rgba(200,169,81,0.15)]"
            whileHover={{
              scale: 1.07,
              z: 50,
              rotateX: 5,
              rotateY: -5,
              boxShadow:
                "0px 20px 40px rgba(200, 169, 81, 0.3), 0px 10px 20px rgba(0,0,0,0.4)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <h3 className="text-2xl font-semibold text-[#C8A951] mb-4">
              {item.title}
            </h3>
            <p className="text-[#F5F5F5]/80 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Chef’s Philosophy */}
      <section className="max-w-4xl mx-auto text-center border-t border-white/10 pt-12">
        <blockquote className="text-2xl md:text-3xl italic text-[#F5F5F5]/90">
          “Cooking is not just about food,  
          it’s about creating memories at your table.”
        </blockquote>
        <p className="mt-4 text-[#C8A951] font-semibold">— PrivateChef</p>
      </section>
    </div>
  );
};

export default AboutPage;
