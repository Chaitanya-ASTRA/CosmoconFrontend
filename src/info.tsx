
import dartImg from './dart.png';
import rplImg from './rpl.png';
import satelliteImg from './satellite.png';

interface HighlightCardProps {
  icon?: string;
  imgSrc?: string;
  imgAlt?: string;
  title: string;
  description: string;
  learnMoreLink: string;
}

interface SectionProps {
  active: boolean;
}


import { type JSX } from "react";




function HighlightCard({ icon, imgSrc, imgAlt, title, description, learnMoreLink }: HighlightCardProps): JSX.Element {
  return (
    <div
      className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl 
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
          <div className="w-full lg:w-1/2 about-cosmo-box">
            <div className="text-white">
              <p className="mb-4 text-white/90 text-sm">COSMOCON 2025 is India's largest student-led space carnival by ASTRA, designed to inspire and educate students about space exploration, research, and applications. This flagship event fosters interest in aeronautics, space science, and technology.</p>
              <p className="text-white/90 text-sm">Through hands-on workshops, technical showcases, and cultural events, COSMOCON provides a platform for students to engage with cutting-edge space advancements, interact with ISRO and DRDO experts, and showcase innovation in science and technology.</p>
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
              learnMoreLink=""
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