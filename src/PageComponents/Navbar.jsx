import React from "react";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      {/* Mobile backdrop blur */}
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center  md:p-2.5  relative">
          {/* <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl relative"> */}
          {/* Desktop backdrop blur */}
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>

          {/* Logo */}
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              {/* <LogoIcon className="h-8 w-8" /> */}
            </div>
          </div>

          {/* Nav + Button on the right */}
          <div className="hidden md:flex items-center gap-14">
            <div className="hidden md:flex items-center gap-8 border border-white/20 rounded-xl px-6 py-3 shadow-[0px_0px_10px_rgb(200,201,81,0.3)]">
              <nav className="flex gap-10 text-lg">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition"
                >
                  About
                </a>
              </nav>
            </div>

            <Button>Book Service now</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
