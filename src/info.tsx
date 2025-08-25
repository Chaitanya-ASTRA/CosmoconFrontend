
import dartImg from './dart.png';
import rplImg from './rpl.png';
import satelliteImg from './satellite.png';


interface SectionProps {
  active: boolean;
}







import { useRef, type JSX } from "react";

interface HighlightCardProps {
  icon?: string;
  imgSrc?: string;
  imgAlt?: string;
  title: string;
  description: string;
  learnMoreLink?: string;
}

function useTilt(max = 16) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1; // -1..1
    const py = (y / rect.height) * 2 - 1; // -1..1
    const rx = (-py * max).toFixed(2);
    const ry = (px * max).toFixed(2);
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg)`;
  }

  return { ref, onMove, onLeave };
}

// function HighlightCard({
//   icon,
//   imgSrc,
//   imgAlt,
//   title,
//   description,
//   learnMoreLink,
// }: HighlightCardProps) {
//   const { ref, onMove, onLeave } = useTilt();

//   return (
//     <div
//       ref={ref}
//       onMouseMove={onMove}
//       onMouseLeave={onLeave}
//       className="group relative rounded-2xl p-[1px]
//                  bg-gradient-to-br from-white/20 to-white/5
//                  shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]
//                  transition-transform duration-200"
//     >
//       {/* Card inner */}
//       <div className="relative rounded-2xl bg-black overflow-hidden border border-white/20">
//         {/* subtle stars effect */}
//         <div
//           className="absolute inset-0 opacity-30"
//           style={{
//             background:
//               "radial-gradient(1px 1px at 10% 20%, #fff 50%, transparent 51%)," +
//               "radial-gradient(1px 1px at 70% 30%, #fff 50%, transparent 51%)," +
//               "radial-gradient(1px 1px at 30% 80%, #fff 50%, transparent 51%)," +
//               "radial-gradient(1px 1px at 90% 60%, #fff 50%, transparent 51%)",
//             backgroundSize: "auto",
//             mixBlendMode: "screen",
//           }}
//         />

//         {/* content */}
//         <div className="relative z-10 p-6 flex flex-col h-full justify-between">
//           <div>
//             <div className="w-16 h-16 flex items-center justify-center mb-4 rounded-xl bg-white/5 border border-white/20">
//               {imgSrc ? (
//                 <img
//                   src={imgSrc}
//                   alt={imgAlt}
//                   className="w-14 h-14 object-contain"
//                 />
//               ) : (
//                 <span className="text-4xl text-white">{icon}</span>
//               )}
//             </div>
//             <h4 className="text-xl font-semibold text-white">{title}</h4>
//             <p className="text-sm text-white/70 mt-2">{description}</p>
//           </div>

//           {learnMoreLink && (
//             <a
//               href={learnMoreLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-6 text-sm font-medium px-4 py-2 rounded-lg self-start
//                          bg-white text-black
//                          hover:bg-black hover:text-white border border-white
//                          transition-all duration-200"
//             >
//               Learn More
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


function HighlightCard({ icon, imgSrc, imgAlt, title, description, learnMoreLink }: HighlightCardProps): JSX.Element {
  const { ref, onMove, onLeave } = useTilt();
  return (
    <div
    ref={ref}
    onMouseMove={onMove}
    onMouseLeave={onLeave}
      className="md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl 
                 flex flex-col items-start space-y-3 transition-transform duration-300
                 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                 perspective-1000"
    >
      {/* Icon or Image */}
     <div className="flex flex-col justify-between h-full p-4 bg-[#0B0F1A] rounded-lg shadow-lg">
  {/* Top content */}
  <div>
    <div className="w-16 h-16 flex items-center justify-center mb-2">
      {imgSrc ? (
        <img src={imgSrc} alt={imgAlt} style={{ width: 56, height: 56, objectFit: 'contain' }} />
      ) : (
        <span className="text-4xl">{icon}</span>
      )}
    </div>
    <h4 className="text-xl font-semibold text-white">{title}</h4>
    <p className="text-sm text-white/70">{description}</p>
  </div>

  {/* Bottom anchor */}
 {learnMoreLink && (
  <a
    href={learnMoreLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 hover:underline cursor-pointer mt-4"
  >
    Learn More
  </a>
)}
</div>
    </div>
  );
}


function Info({ active = true }: SectionProps) {
    return ( 
        <div> 
            <section id="about" className={`page min-h-screen flex flex-col items-center justify-center p-4 md:p-16 transition-all duration-500 ease-in-out ${active ? 'active' : ''}`}>
      <div className={`container mx-auto max-w-6xl transition-all duration-700 delay-100 ease-out ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">ABOUT COSMOCON</h2>
        <div className="flex flex-col items-center space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="w-full  about-cosmo-box">
            <div className="text-white">
              <p className="mb-4 text-white/90 text-sm md:text-lg">COSMOCON 2025 is India's largest student-led space carnival by ASTRA, designed to inspire and educate students about space exploration, research, and applications. This flagship event fosters interest in aeronautics, space science, and technology.</p>
              <p className="text-white/90 text-sm md:text-lg">Through hands-on workshops, technical showcases, and cultural events, COSMOCON provides a platform for students to engage with cutting-edge space advancements, interact with ISRO and DRDO experts, and showcase innovation in science and technology.</p>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2">
            <HighlightCard 
              imgSrc={rplImg}
              imgAlt="Rocketry Workshop"
              title="Rocketry Workshop" 
              description="Design, build and launch rockets with aerospace experts" 
              learnMoreLink="https://drive.google.com/file/d/1sN9YOlOW9edQpVCoZb0tkjk-6kAaFGoB/view?usp=sharing"
            />
            <HighlightCard 
              imgSrc={satelliteImg}
              imgAlt="CubeSat Hackathon"
              title="CubeSat Hackathon" 
              description="Build satellite prototypes with real-time data acquisition" 
              learnMoreLink="https://drive.google.com/file/d/183b45f0esOYrmQFdL83vEHTxoTUmPiD9/view?usp=sharing"
            />
            <HighlightCard 
              imgSrc={dartImg}
              imgAlt="Rover & Robotics"
              title="Rover & Robotics" 
              description="Assemble and program rovers and robotic arms" 
              learnMoreLink="https://drive.google.com/file/d/1PXH98u2nG2zqoNX2nd8fNNoo1N1jsXWm/view?usp=sharing"
            />
            <HighlightCard 
              icon="🎭" 
              title="Cultural Evening" 
              description="Music performances by Chaitanya Geethi & Vaadya" 
              learnMoreLink=""
            />
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}



export default Info;