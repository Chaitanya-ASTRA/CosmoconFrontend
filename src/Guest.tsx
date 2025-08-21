interface GuestItem {
  name: string;
  role: string;
}
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

function Guest() {
    const guests: GuestItem[] = [
    { name: 'Dr. Anya Sharma', role: 'Aerospace Engineer, NASA' },
    { name: 'Mark Johnson', role: 'CEO, Space-X' },
    { name: 'Dr. Emily Carter', role: 'Astrophysicist, MIT' },
    { name: 'Dr. David Chen', role: 'Head of Robotics, ESA' },
  ];

  const [active, setActive] = useState(false);

  useEffect(() => {
    // Example: activate after mount
    setActive(true);
  }, []);

  return (
    <div>
        <NavBar/>
    <section id="guests" className={`page min-h-screen flex flex-col items-center justify-center p-8 md:p-16 transition-all duration-500 ease-in-out ${active ? 'active' : ''}`}>
      <div className={`container mx-auto max-w-5xl transition-all duration-700 delay-100 ease-out ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-600">Our Esteemed Guests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guests.map((guest, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 rounded-full bg-gray-600 mb-4 flex items-center justify-center text-5xl text-white">👤</div>
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