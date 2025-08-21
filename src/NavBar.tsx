import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = ["Home", "About","Objectives","Events","Guests","gallery"];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10 shadow-lg "
>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between hover:custome-bright-glow transition-all duration-300">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-2xl font-extrabold tracking-widest text-white drop-shadow-lg"
        >
          COSMOCON
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 pointer-events-auto">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.15, textShadow: "0px 0px 8px #60a5fa" }}
              whileTap={{ scale: 0.9 }}
              className="text-white text-lg font-semibold cursor-pointer relative"
            >
                <Link to={`/${item.toLowerCase()}`} >
              {item}
              </Link>
              <motion.span
                className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-400 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden flex flex-col space-y-6 items-center py-6 bg-black/80 backdrop-blur-lg text-white pointer-events-auto"
        >
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.2, color: "#60a5fa" }}
              whileTap={{ scale: 0.9 }}
              className="text-xl font-semibold"
              onClick={() => setIsOpen(false)}
            >
            <Link to={`/${item.toLowerCase()}`} >
              {item}
              </Link>
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}


