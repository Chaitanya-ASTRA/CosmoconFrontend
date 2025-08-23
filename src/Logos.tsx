import React from 'react';
import AstraImg from './astra.png';
import VectorImg from './vector.png';

const Logos = () => {
  return (
    <>
             {/* Vector × ASTRA Logo - Fixed Top Left Corner */}
       <div className="fixed top-4 left-4 md:left-10 z-40 flex items-center space-x-2 md:space-x-3">
         <img
           src={VectorImg}
           alt="Vector Logo"
           className="h-10 w-auto object-contain md:h-14"
         />
         <span className="text-white text-lg md:text-xl font-bold">×</span>
         <img
           src={AstraImg}
           alt="Astra Logo"
           className="h-12 w-auto object-contain md:h-18"
         />
       </div>

             {/* CBIT Logo - Hidden on mobile, visible on desktop */}
       <div className="hidden md:block fixed top-4 right-10 z-40">
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
