import type { JSX } from "react";
import NavBar from "./NavBar";

interface HighlightCardProps {
  icon: string;
  title: string;
  description: string;
}

interface SectionProps {
  active: boolean;
}


import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  speed?: number; // scramble speed in ms
}

const ScrambleText = ({ text, speed = 50 }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const interval = setInterval(() => {
      let scrambled = "";
      for (let j = i; j < text.length; j++) {
        scrambled += letters[Math.floor(Math.random() * letters.length)];
      }
      setDisplayText(text.slice(0, i) + scrambled);
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayText}</span>;
};



function HighlightCard({ icon, title, description }: HighlightCardProps): JSX.Element {
  return (
    <div
      className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl 
                 flex flex-col items-start space-y-3 transform transition-transform duration-300
                 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                 perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Rotating Icon */}
      <div className="text-4xl w-12 h-12 flex items-center justify-center">
        <span
          className="inline-block"
          style={{
            display: "inline-block",
            animation: "rotate3d 5s linear infinite",
            transformStyle: "preserve-3d",
          }}
        >
          {icon}
        </span>
      </div>

      {/* Stable Text */}
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="text-sm text-white/70">{description}</p>

      {/* CSS for rotation */}
      <style>{`
        @keyframes rotate3d {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(90deg) rotateX(15deg); }
          50% { transform: rotateY(180deg) rotateX(0deg); }
          75% { transform: rotateY(270deg) rotateX(-15deg); }
          100% { transform: rotateY(360deg) rotateX(0deg); }
        }
      `}</style>
    </div>
  );
}


function Info({ active = true }: SectionProps) {
    return ( 
        <div> 
            <NavBar/>
            <section id="about" className={`page min-h-screen flex flex-col items-center justify-center p-8 md:p-16 transition-all duration-500 ease-in-out ${active ? 'active' : ''}`}>
      <div className={`container mx-auto max-w-6xl transition-all duration-700 delay-100 ease-out ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-600">About COSMOCON</h2>
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="w-full lg:w-1/2 p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
            <div className="text-white">
              <p className="mb-4 text-white/80 leading-relaxed">COSMOCON is the premier space technology conference bringing together leading experts, researchers, and innovators from around the globe. Join us for three days of groundbreaking presentations, hands-on workshops, and networking opportunities.</p>
              <p className="text-white/80 leading-relaxed">Explore the latest developments in space exploration, satellite technology, and commercial spaceflight while connecting with industry pioneers and future space technologists.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <HighlightCard icon="🚀" title="World-Class Speakers" description="Leading experts from NASA, ESA, SpaceX, and top universities" />
            <HighlightCard icon="🛠️" title="Technical Workshops" description="Hands-on sessions on satellite design, mission planning, and more" />
            <HighlightCard icon="🌐" title="Networking Opportunities" description="Connect with professionals from global space organizations" />
            <HighlightCard icon="💡" title="Innovation Showcase" description="Latest technologies and breakthrough research presentations" />
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}



export default Info;