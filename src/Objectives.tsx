import { useState } from 'react';

// Define the type for the objective items for better code clarity and type safety
interface ObjectiveItem {
  num: number;
  title: string;
  description: string;
}

function Objectives() {
  // 'active' state controls the animation. For this standalone component,
  // it's set to true to ensure the content is always visible.
  const [active] = useState(true); 
  
  // Data for the different objectives
  const objectives: ObjectiveItem[] = [
    { num: 1, title: 'Foster Practical Skills', description: 'Develop hands-on understanding in aerospace, robotics, and satellite systems through immersive workshops like rocketry, CanSat, A-Rover, and robotic arm fabrication.' },
    { num: 2, title: 'Showcase Student Innovation', description: 'Provide a platform for student innovation and research through project exhibitions and technical conferences that encourage knowledge exchange across institutions.' },
    { num: 3, title: 'Promote Interdisciplinary Collaboration', description: 'Host technical and non-technical events from robotics challenges to debates and quizzes, fostering creative problem-solving and collaboration.' },
    { num: 4, title: 'Celebrate India\'s Space Achievements', description: 'Create awareness about India\'s growing prominence in space and defense technologies, inspiring youth to contribute to the nation\'s technological progress.' },
    { num: 5, title: 'Position as STEM Excellence Center', description: 'Establish the college as a center of excellence in STEM education and innovation, enhancing its reputation in academic and professional circles.' },
    { num: 6, title: 'Create Balanced Experience', description: 'Combine technical rigor with cultural vibrance through activities like musical night, ensuring a memorable and engaging experience for all participants.' },
  ];

  return (
    <div>
      <section 
        id="objectives" 
        className={`page flex flex-col items-center justify-center p-8 md:p-16 transition-all duration-500 ease-in-out ${active ? 'active' : ''}`}
      >
        <div 
          className={`container mx-auto max-w-4xl transition-all duration-700 delay-100 ease-out ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Our Objectives</h2>
          {/* CORRECTED: The class was changed from 'space-y-6l' to 'space-y-6' */}
          <div className="flex flex-col space-y-6">
            {objectives.map((obj, index) => (
              <div 
                key={index} 
                className="relative flex flex-col md:flex-row items-start md:items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-md transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-cyan-400 text-black font-bold text-xl mb-4 md:mb-0 md:mr-6">
                  {obj.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white">{obj.title}</h3>
                  <p className="text-white/70 mt-2">{obj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Objectives;