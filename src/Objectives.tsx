import React, { useState } from 'react';
import NavBar from './NavBar';

// Define the type for the objective items for better code clarity and type safety
interface ObjectiveItem {
  num: number;
  title: string;
  description: string;
}

function Objectives() {
  // 'active' state controls the animation. For this standalone component,
  // it's set to true to ensure the content is always visible.
  const [active, setActive] = useState(true); 
  
  // Data for the different objectives
  const objectives: ObjectiveItem[] = [
    { num: 1, title: 'Inspire the Next Generation', description: 'Engage students and young professionals in space exploration and technology through interactive sessions and competitions.' },
    { num: 2, title: 'Foster Collaboration', description: 'Provide a platform for industry experts, researchers, and startups to collaborate on new projects.' },
    { num: 3, title: 'Showcase Innovation', description: 'Highlight cutting-edge technologies and research shaping the future of space.' },
    { num: 4, title: 'Promote Sustainability', description: 'Discuss and develop solutions for sustainable space activities and orbital debris mitigation.' },
    { num: 5, title: 'Advance Space Education', description: 'Contribute to the global knowledge base by sharing the latest findings and advancements.' },
    // Adding more content to demonstrate scrolling
    { num: 6, title: 'Expand Global Partnerships', description: 'Build and strengthen international collaborations to foster a unified approach to space exploration.' },
    { num: 7, title: 'Encourage Entrepreneurship', description: 'Support new ventures in the space sector with resources, mentorship, and networking opportunities.' },
  ];

  return (
    <div>
         <NavBar/>
      <section 
        id="objectives" 
        className={`page flex flex-col items-center justify-center p-8 md:p-16 transition-all duration-500 ease-in-out ${active ? 'active' : ''}`}
      >
        <div 
          className={`container mx-auto max-w-4xl transition-all duration-700 delay-100 ease-out ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-600">Our Objectives</h2>
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