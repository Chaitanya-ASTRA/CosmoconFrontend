import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import CBITLogo from "https://image-static.collegedunia.com/public/image/01-22:18-Chaitany-Bharathi_Institute_of_Technology_logo.png"; // Using CBIT logo as the footer logo

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B0F1A] text-white py-10 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
      {/* Logo Section - Bottom Left */}
      <div className="flex flex-col items-center md:items-start">
        <img
          src={CBITLogo}
          alt="Footer Logo"
          className="h-20 w-auto object-contain mb-4"
        />
        <p className="text-gray-400 text-sm text-center md:text-left">
          © 2025 COSMOCON. All rights reserved.
        </p>
      </div>

      {/* Links and Text Section - Right */}
      <div className="flex flex-col items-center md:items-end space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-400 text-sm text-center md:text-right mt-4 md:mt-0">
          Contact us at info@cosmocon.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
