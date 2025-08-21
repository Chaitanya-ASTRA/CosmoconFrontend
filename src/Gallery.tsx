
interface GalleryItem {
  icon: string;
  title: string;
}
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

function Gallery() {
    const [active, setActive] = useState(false);
    useEffect(() => {
      // Example: activate gallery after mount
      setActive(true);
    }, []);

    const galleryItems: GalleryItem[] = [
    { icon: '📷', title: 'Group Photo' },
    { icon: '🔬', title: 'Space Technology Demo' },
    { icon: '💬', title: 'Panel Discussion' },
    { icon: '📊', title: 'Poster Session' },
    { icon: '📈', title: 'Startup Presentations' },
    { icon: '🎉', title: 'Closing Ceremony' },
  ];

  return (
    <div>
         <NavBar/>
    <section id="gallery" className={`page mt-10 min-h-screen flex flex-col items-center justify-center p-8 md:p-16 transition-all duration-500 ease-in-out ${active ? 'active' : ''}`}>
      <div className={`container mx-auto max-w-5xl transition-all duration-700 delay-100 ease-out ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-600">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">{item.icon}</div>
              <p className="text-white">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Gallery;