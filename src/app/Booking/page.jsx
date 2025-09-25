"use client";
import React, { useState } from "react";

const BookingPage = () => {
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, notes });
    // Here you can integrate checkout logic or API call
  };

  const pkg = {
    name: "Luxury Celebration Dining",
    price: "$350",
    desc: "A premium private dining experience with curated menus, elegant service, and an unforgettable evening.",
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1000&auto=format&fit=crop", // Replace with your package image
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-[#1A1A1A] rounded-2xl shadow-lg overflow-hidden">
        {/* Package Info */}
        <div className="h-60 w-full">
          <img
            src={pkg.img}
            alt={pkg.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-bold text-[#F5F5F5] mb-2">{pkg.name}</h1>
          <p className="text-[#C8A951] text-xl font-semibold mb-4">
            {pkg.price}
          </p>
          <p className="text-[#D0D0D0] mb-8">{pkg.desc}</p>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Date Picker */}
            <div>
              <label className="block text-[#F5F5F5] mb-2 text-lg">
                Select Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#C8A951] text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#C8A951] cursor-pointer"
                required
              />
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-[#F5F5F5] mb-2 text-lg">
                Special Requests / Allergies
              </label>
              <textarea
                rows="4"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Please mention if you have any allergies or specific preferences..."
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#C8A951] text-[#F5F5F5] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#C8A951]"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#C8A951] text-black font-semibold rounded-lg transition-transform hover:scale-105"
            >
              Proceed to Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
