import { useState, useEffect } from 'react';


function Gallery() {
    const [active, setActive] = useState(false);
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    useEffect(() => {
      // Example: activate gallery after mount
      setActive(true);
    }, []);

    // Close on Esc
    useEffect(() => {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setLightboxSrc(null);
      };
      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    // Configurable image count
    const NUM_IMAGES = 20;
    const images = Array.from({ length: NUM_IMAGES }, (_, i) => ({
      src: '/gallery-placeholder.png',
      alt: `Gallery image ${i + 1}`,
    }));

  return (
    <div>
    <section id="gallery" className={`page mt-10 min-h-screen flex flex-col items-center justify-center py-8 md:py-16 px-0 transition-all duration-500 ease-in-out ${active ? 'active' : ''}`}>
      <div className={`w-full max-w-none px-0 transition-all duration-700 delay-100 ease-out ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <h2 className=" text-4xl md:text-5xl font-bold text-center mb-12 text-white">Gallery</h2>
        <div className="w-full grid gap-4 sm:gap-5 md:gap-6 [grid-template-columns:repeat(auto-fill,minmax(180px,1fr))]">
          {images.map((img, index) => (
            <div key={index}>
              <button
                type="button"
                onClick={() => setLightboxSrc(img.src)}
                className="block w-full focus:outline-none"
                aria-label={`Open ${img.alt}`}
              >
                <div className="relative aspect-square rounded-2xl bg-white/5 backdrop-blur-sm shadow-md overflow-hidden transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-zoom-in">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={lightboxSrc}
            alt="Full size image"
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl"
            onClick={() => setLightboxSrc(null)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </section>
    </div>
  );
}

export default Gallery;