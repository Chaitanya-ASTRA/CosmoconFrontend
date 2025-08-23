import React from 'react';
import AstraImg from './astra.png';

const Logos = () => {
  return (
    <>
      {/* Astra Logo - Fixed Left Corner */}
      <div className="fixed top-4 md:left-10 left-4 z-40">
        <img
          src={AstraImg}
          alt="Astra Logo"
          className="h-12 w-auto object-contain md:h-16"
        />
      </div>

      {/* CBIT Logo - Absolute Right Corner (scrolls with page) */}
      <div className="absolute top-4 md:right-10  z-40 sm:display-none">
        <img
          src="https://image-static.collegedunia.com/public/image/01-22:18-Chaitanya_Bharathi_Institute_of_Technology_logo.png"
          alt="CBIT Logo"
          className="h-12 w-auto object-contain md:h-16"
        />
      </div>
    </>
  );
};

export default Logos;
