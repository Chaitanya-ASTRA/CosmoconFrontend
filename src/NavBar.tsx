// NavBar.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons from lucide-react

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="fixed top-[15%] left-[10%] w-80% bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <div className="text-2xl font-extrabold tracking-wider">COSMOCON</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#objectives" className="hover:text-blue-400 transition">Objectives</a>
            <a href="#events" className="hover:text-blue-400 transition">Events</a>
            <a href="#gallery" className="hover:text-blue-400 transition">Gallery</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-black/90 px-4 py-3 space-y-2">
          <a href="#home" className="block hover:text-blue-400">Home</a>
          <a href="#about" className="block hover:text-blue-400">About</a>
          <a href="#objectives" className="block hover:text-blue-400">Objectives</a>
          <a href="#events" className="block hover:text-blue-400">Events</a>
          <a href="#gallery" className="block hover:text-blue-400">Gallery</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
