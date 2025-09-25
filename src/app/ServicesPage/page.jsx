
"use client";
import React from "react";
import DomeGallery from "../../PageComponents/DomeGallery";

const packages = [
  {
    name: "Luxury Celebration Dining",
    price: "$350",
    desc: "An unforgettable dining experience for your special occasions.",
    img: "/services/service1.avif", // placeholder
  },
  {
    name: "Private Romantic Dinner",
    price: "$500",
    desc: "Exquisite, intimate dining with curated flavors.",
    img: "/services/service1.avif",
  },
  {
    name: "Corporate Gourmet Package",
    price: "$800",
    desc: "Luxury dining tailored for corporate events and teams.",
    img: "/services/service1.avif",
  },
  {
    name: "Family Feast",
    price: "$400",
    desc: "A warm, lavish meal designed for family gatherings.",
    img: "/services/service1.avif",
  },
  {
    name: "Chef’s Signature Experience",
    price: "$1000",
    desc: "Exclusive tasting menu by our master chef.",
    img: "/services/service1.avif",
  },
  {
    name: "Cultural Fusion Dining",
    price: "$600",
    desc: "A global journey of flavors in a single evening.",
    img: "/services/service1.avif",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen">
      {/* Hero Section */}
      <section className="relative text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
          Our Exclusive Dining Packages
        </h1>
        <p className="text-lg md:text-xl text-[#C0C0C0] max-w-3xl mx-auto mb-20">
          Choose from a curated selection of luxury dining experiences, tailored
          to your needs.
        </p>

        {/* Dome Gallery as centerpiece */}
        <div className="w-full h-[60vh] min-h-[400px] md:h-[70vh] lg:h-[80vh]">
          <DomeGallery />
        </div>

        {/* CTA Button */}
        <a
          href="#packages"
          className="inline-block mt-20 px-8 py-4 bg-[#C8A951] text-black font-semibold rounded-xl shadow-lg hover:bg-[#B8654D] transition-colors duration-300"
        >
          Book Your Service Today
        </a>
      </section>

      {/* Packages Section */}
      <section
        id="packages"
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden flex flex-col shadow-lg border border-white/10 hover:bg-[#1A1A1A] transition-colors duration-300"
            >
              {/* Image Banner */}
              <div className="h-40 w-full bg-black">
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-2">
                  {pkg.name}
                </h3>
                <p className="text-[#C8A951] text-lg font-bold mb-3">
                  {pkg.price}
                </p>
                <p className="text-[#D0D0D0] mb-6">{pkg.desc}</p>
                <a
                  href="#"
                  className="mt-auto block text-center px-6 py-3 bg-[#C8A951] text-black font-semibold rounded-lg hover:bg-black hover:text-[#C8A951] transition-colors duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note / Highlight Section */}
      <section className="bg-[#0A0A0A] py-12 border-t border-[#C8A951]/30 text-center">
        <p className="text-lg text-[#F5F5F5] max-w-2xl mx-auto">
          Each experience is fully customized with your preferences, allergies,
          and dietary needs in mind.
        </p>
        <div className="w-24 h-1 bg-[#C8A951] mx-auto mt-6 rounded-full"></div>
      </section>
    </div>
  );
};

export default ServicesPage;
