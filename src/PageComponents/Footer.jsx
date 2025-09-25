"use client";

import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-[#F5F5F5] py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        {/* Brand / Tagline */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-[#C8A951]">PrivateChef</h2>
          <p className="text-sm text-[#F5F5F5]/60 mt-2">
            Luxury dining, right at your table.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-[#C8A951]">Contact</h3>
          <p className="text-sm">info@privatechef.com</p>
          <p className="text-sm">+92 300 1234567</p>
          <p className="text-sm">123 Luxury St, City, Pakistan</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-[#C8A951]">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#C8A951] transition-colors">
              <Instagram />
            </a>
            <a href="#" className="hover:text-[#C8A951] transition-colors">
              <Facebook />
            </a>
            <a href="#" className="hover:text-[#C8A951] transition-colors">
              <Twitter />
            </a>
            <a href="#" className="hover:text-[#C8A951] transition-colors">
              <Linkedin />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Note */}
      <div className="mt-12 text-center text-[#F5F5F5]/50 text-sm border-t border-white/10 pt-6">
        &copy; {new Date().getFullYear()} PrivateChef. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
