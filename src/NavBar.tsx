// NavBar.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="fixed top-[2%] left-1/2 transform -translate-x-1/2 w-[70%] md:w-[60%] bg-black/70 backdrop-blur-md text-white z-50 rounded-2xl border border-white/20 shadow-lg">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left Image */}
        <div className="hidden md:flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3TUTFJs3rP3y1xIlBxKzCJe0cmpAYLBVdw&s" alt="Logo Left" className="h-13 w-25 mr-3 rounded-full" />
          <span className="text-xl font-bold tracking-wider">COSMOCON</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 font-medium">Home</a>
          <a href="#about" className="text-white hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 font-medium">About</a>
          <a href="#objectives" className="text-white hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 font-medium">Objectives</a>
          <a href="#events" className="text-white hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 font-medium">Events</a>
          <a href="#gallery" className="text-white hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 font-medium">Gallery</a>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex items-center">
          <img src="https://play-lh.googleusercontent.com/9narPKsFpTtuEXC3ctqdoh8qJVRdcymAXfUzqEuRqayPczmOFrMIMobRZ_EIC0v8HGdT=w600-h300-pc0xffffff-pd" alt="Logo Right" className="h-13 w-35 ml-3 rounded-full" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-black/90 px-4 py-3 space-y-2 rounded-b-2xl shadow-lg">
          <a href="#home" className="block text-white hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 font-medium">Home</a>
          <a href="#about" className="block text-white hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 font-medium">About</a>
          <a href="#objectives" className="block text-white hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 font-medium">Objectives</a>
          <a href="#events" className="block text-white hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 font-medium">Events</a>
          <a href="#gallery" className="block text-white hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 font-medium">Gallery</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
