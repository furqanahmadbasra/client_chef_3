// "use client";
// import React from "react";
// import Button from "../components/Button";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
//       {/* Mobile backdrop blur */}
//       <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>

//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center  md:p-2.5  relative">
//           {/* <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl relative"> */}
//           {/* Desktop backdrop blur */}
//           <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>

//           {/* Logo */}
//           <div>
//             <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
//               {/* <LogoIcon className="h-8 w-8" /> */}
//             </div>
//           </div>

//           {/* Nav + Button on the right */}
//           <div className="hidden md:flex items-center gap-14">
//             <div className="hidden md:flex items-center gap-8 border border-white/20 rounded-xl px-6 py-3 shadow-[0px_0px_10px_rgb(200,201,81,0.3)]">
//               <nav className="flex gap-10 text-lg">
//                 <Link
//                   href="/"
//                   className="text-white/70 hover:text-white transition"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   href="/About"
//                   className="text-white/70 hover:text-white transition"
//                 >
//                   About
//                 </Link>
//               </nav>
//             </div>

//             <Link href="/ServicesPage">
//               <Button>Book Service now</Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      {/* Mobile backdrop blur */}
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center md:p-2.5 relative">
          {/* Desktop backdrop blur */}
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>

          {/* Logo */}
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              {/* <LogoIcon className="h-8 w-8" /> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Nav + Button on the right */}
          <div className="hidden md:flex items-center gap-14">
            <div className="hidden md:flex items-center gap-8 border border-white/20 rounded-xl px-6 py-3 shadow-[0px_0px_10px_rgb(200,201,81,0.3)]">
              <nav className="flex gap-10 text-lg">
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition"
                >
                  Home
                </Link>
                <Link
                  href="/About"
                  className="text-white/70 hover:text-white transition"
                >
                  About
                </Link>
              </nav>
            </div>

            <Link href="/ServicesPage">
              <Button>Book Service now</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border border-white/20 rounded-xl p-6 shadow-[0px_0px_10px_rgb(200,201,81,0.3)] backdrop-blur">
            <nav className="flex flex-col gap-4 text-lg">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/About"
                className="text-white/70 hover:text-white transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 border-t border-white/15">
                <Link href="/ServicesPage" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full justify-center">Book Service now</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;