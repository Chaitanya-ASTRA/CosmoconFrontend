// NavBar.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import AstraImg from './astra.png';
import VectorImg from './vector.png';


const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);


  return (
    <nav className="fixed top-[2%] md:left-1/2 right-1 md:transform md:-translate-x-1/2 w-full md:w-[60%] md:backdrop-blur-md text-white z-50 bg-transparent rounded-2xl md:border md:border-white/20 shadow-lg">
      <div className="flex items-center mx-0 sm:bg-black  justify-end md:justify-around h-16 px-0 md:px-8">

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-23">
          <a href="#home" className="text-white hover:text-white hover:bg-white/20 px-2 py-2 rounded-md transition-all duration-300 font-semibold text-xl">Home</a>
          <a href="#about"  className="text-white hover:text-white hover:bg-white/20 px-2 py-2 rounded-md transition-all duration-300 font-semibold text-xl">About</a>
          <a href="#objectives"  className="text-white hover:text-white hover:bg-white/20 px-2 py-2 rounded-md transition-all duration-300 font-semibold text-xl">Objectives</a>
          <a href="#events"  className="text-white hover:text-white hover:bg-white/20 px-2 py-2 rounded-md transition-all duration-300 font-semibold text-xl">Events</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-between w-full px-4">
          <div className=" flex items-center space-x-2 md:space-x-3">
            <img
           src={VectorImg}
           alt="Vector Logo"
           className="h-12 w-auto object-contain md:h-16"
         />
         <span className="text-white text-lg md:text-xl font-bold">×</span>
         <img
           src={AstraImg}
           alt="Astra Logo"
           className="h-12 w-auto object-contain md:h-16"
         /></div> {/* Astra Logo */}
          <button onClick={toggleMenu} className="p-2">
            {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-black px-6 py-4 space-y-3  rounded-b-2xl shadow-lg">
          <a href="#home" onClick={()=>setOpen(false)}  className="block text-white hover:text-white hover:bg-white/10 px-0 py-0 rounded-md transition-all duration-300 font-semibold text-xl">Home</a>
          <a href="#about" onClick={()=>setOpen(false)} className="block text-white hover:text-white hover:bg-white/10 px-0 py-0 rounded-md transition-all duration-300 font-semibold text-xl">About</a>
          <a href="#objectives" onClick={()=>setOpen(false)} className="block text-white hover:text-white hover:bg-white/10 px-0 py-0 rounded-md transition-all duration-300 font-semibold text-xl">Objectives</a>
          <a href="#events" onClick={()=>setOpen(false)} className="block text-white hover:text-white hover:bg-white/10 px-0 py-0 rounded-md transition-all duration-300 font-semibold text-xl">Events</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
