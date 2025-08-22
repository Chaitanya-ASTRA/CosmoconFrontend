import { BackgroundBeams } from "./components/ui/backgroundBeams";
interface GuestItem {
  name: string;
  role: string;
  img?: string;
}
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

function Guest() {
    const guests: GuestItem[] = [
    { name: 'Dr. Vinod Kumar', role: 'Director, Promotion Directorate, Department of Space (IN-SPACe).', img: '/guests/Dr-Vinod-Kumar.png' },
    { name: 'Dr. G. Satheesh Reddy', role: 'Ex-Chairman DRDO', img: '/guests/G_Satheesh_Reddy.jpg' },
    { name: 'Dr. Raghunandan K', role: 'ISRO' },
  ];

  const [active, setActive] = useState(false);

  useEffect(() => {
    // Example: activate after mount
    setActive(true);
  }, []);

  return (
    <div>
        <NavBar/>
        <BackgroundBeams />
    <section id="guests" className={`page min-h-screen flex flex-col items-center justify-center p-8 md:p-16 transition-all duration-500 ease-in-out ${active ? 'active' : ''}`}>
      <div className={`container mx-auto max-w-5xl transition-all duration-700 delay-100 ease-out ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-600">Our Esteemed Guests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guests.map((guest, index) => (
            <div key={index} className="w-full h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-md flex flex-col items-center text-center transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300">
              {guest.img ? (
                <img 
                  src={guest.img} 
                  alt={guest.name} 
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-600 mb-4 flex items-center justify-center text-5xl text-white">👤</div>
              )}
              <h3 className="text-xl font-semibold text-white">{guest.name}</h3>
              <p className="text-sm text-cyan-400">{guest.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Guest;