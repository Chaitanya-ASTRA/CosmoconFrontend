
interface GuestItem {
  name: string;
  role: string;
  img?: string;
}
import { useState, useEffect } from "react";

function Guest() {
    const guests: GuestItem[] = [
  { 
    name: 'Dr. V. Narayan', 
    role: 'The Chairman of the ISRO', 
    img: 'https://www.isro.gov.in/media_isro/image/drvNarayanan_Chairman.png' 
  },
   { 
    name: 'Dr. Samir V. Kamat', 
    role: 'Secretary, DRDD and Chairman, DRDO', 
    img: 'guests/Samir.jpg' 
  },
  { 
    name: 'Dr. Vinod M Bothale', 
    role: 'Associate Director at National Remote Sensing Center (NRSC)', 
    img: 'guests/vinod.jpg' 
  },
  { 
    name: 'Dr. R.V. Hara Prasad', 
    role: 'DS & DG (NS&M), Director General, Naval Systems & Materials', 
    img: 'guests/hara.jpg' 
  },
  { 
    name: 'Dr. Santi Sree', 
    role: 'Scientist-G, Group Head - Satellite Data Product Evaluation Group', 
    img: 'guests/santisree.jpg' 
  },
];


  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div>

    <section id="guests" className={`page h-50vh flex flex-col items-center p-8 md:p-16 justify-center transition-all duration-500 ease-in-out ${active ? 'active' : ''}`}>
      <div className={`container mx-auto max-w-5xl transition-all duration-700 delay-100 ease-out ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <h2 className=" text-4xl md:text-5xl font-bold text-center mb-12 text-white">Our Esteemed Guests</h2>
        <div className=" space-y-6">
          <div className="flex gap-6">
            {guests.slice(0, 2).map((guest, index) => (
              <div
                key={index}
                className={`w-full md:w-1/2 h-80  md:h-50 md:p-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-md flex flex-col items-center text-center overflow-hidden transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300`}
              >
                {guest.img ? (
                  <img 
                    src={guest.img} 
                    alt={guest.name} 
                    className="w-25 h-25 rounded-full object-contain mb-4"
                  />
                ) : (
                  <div className="w-25 h-25 rounded-full bg-gray-600 mb-4 flex items-center justify-center text-5xl text-white">👤</div>
                )}
                <h3 className="text-xl font-semibold text-white">{guest.name}</h3>
                <p className="text-sm text-cyan-400">{guest.role}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {guests.slice(2).map((guest, index) => (
              <div
                key={index}
                className={`w-full h-50 md:h-50 md:p-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-md flex flex-col items-center text-center overflow-hidden transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300`}
              >
                {guest.img ? (
                  <img 
                    src={guest.img} 
                    alt={guest.name} 
                    className="w-25 h-25 rounded-full object-contain mb-4"
                  />
                ) : (
                  <div className="w-25 h-25 rounded-full bg-gray-600 mb-4 flex items-center justify-center text-5xl text-white">👤</div>
                )}
                <h3 className="text-xl font-semibold text-white">{guest.name}</h3>
                <p className="text-sm text-cyan-400">{guest.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Guest;