
interface GuestItem {
  name: string;
  role: string;
  img?: string;
}
import { useState, useEffect } from "react";

function Guest() {
    const guests: GuestItem[] = [
    { name: 'Dr.V.Narayan', role: 'The Chairman of the Indian Space Research Organisation(ISRO)', img: 'https://www.isro.gov.in/media_isro/image/drvNarayanan_Chairman.png' },
    
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
        <div className=" flex justify-center items-center">
          {guests.map((guest, index) => (
            <div key={index} className="w-full h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-md flex flex-col items-center text-center transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300">
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
    </section>
    </div>
  );
}

export default Guest;