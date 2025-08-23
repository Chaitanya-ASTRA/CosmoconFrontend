import { BackgroundBeams } from './components/ui/backgroundBeams';
interface TimelineEvent {
  time: string;
  title: string;
  details: string[];
}

import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useSwipeable } from 'react-swipeable';
import BackgroundBeam from "./BackgroundBeam"; // Import BackgroundBeam


const backgrounds = [
  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  "radial-gradient(circle at top, #ff9a9e, #fad0c4)",
  "linear-gradient(45deg, #00c6ff, #0072ff)",
  "linear-gradient(120deg, #ff6a00, #ee0979)"
];
 
function Event() {
  const [active, setActive] = useState(true);
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((i) => (i + 1) % backgrounds.length),
    onSwipedRight: () => setIndex((i) => (i - 1 + backgrounds.length) % backgrounds.length),
  });
  const timelineEvents: TimelineEvent[] = [
    { time: 'Day 1', title: 'Inauguration & Immersion', details: ['Grand Opening Ceremony with VIP dignitaries.','Keynote addresses from leading scientists.','Workshop Kickoff: Rocketry, CubeSat Hackathon, Rover & Robotic Arm.','Non-technical competitions.'] },
    { time: 'Day 2', title: 'Workshop Deep-Dives & Cultural Engagement', details: ['Technical workshops continue','Cultural Evening with DJ and student performances.'] },
    { time: 'Day 3', title: 'Showcase, Competitions & Closing', details: ['Common Space Tech Expo \n','Awards, networking, and closing ceremony.'] },
  ];

  return (
    <div className="w-full relative flex flex-col antialiased z-10">
     <BackgroundBeam /> {/* Add BackgroundBeam here */}
   <section
  id="events"
  className={`page mt-10 w-full flex flex-col items-center justify-start p-8 md:p-16 transition-all duration-500 ease-in-out ${active ? 'active' : ''}  `}
>
      <div className="relative space-y-8 before:absolute before:left-1/2 before:-translate-x-1/2 before:w-1 before:top-0 before:bottom-0 before:bg-white/10 before:rounded-full">
        <h2 className=" text-4xl md:text-5xl font-bold text-center mb-12 text-white">Events Timeline</h2>
        <div className="relative space-y-8 before:absolute before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-full before:bg-white/10 before:rounded-full">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'} md:${index % 2 === 0 ? 'justify-start' : 'justify-end'} justify-center`}>
              {/* Event Time - Desktop: outside card, Mobile: inside card */}
              <div className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'left-1/2 md:left-1/2' : 'right-1/2 md:right-1/2'} transform -translate-y-1/2 ${index % 2 === 0 ? 'translate-x-[25%]' : 'translate-x-[-25%]'} z-20 hidden md:block`}>
                <h3 className=" text-xl font-bold text-white bg-black/50 px-3 py-1 rounded-lg backdrop-blur-sm whitespace-nowrap">
                  {event.time}
                </h3>
              </div>

              <div className={`relative z-0 w-full md:w-1/2 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-md transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300 ${index % 2 === 0 ? 'mr-auto md:mr-6' : 'ml-auto md:ml-6'} mx-auto md:mx-0`}>
                {/* Cyan Circle - Hidden on mobile */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-cyan-400 ${index % 2 === 0 ? '-right-3 md:-right-3' : '-left-3 md:-left-3'} z-10 hidden md:block`} />

                {/* Event Time - Mobile: inside card */}
                <div className="md:hidden mb-3">
                  <h3 className=" text-lg font-semibold text-cyan-400">{event.time}</h3>
                </div>

                <h4 className=" text-lg font-semibold text-cyan-400 mb-2">{event.title}</h4>
                <div className=" text-md text-white">
                  <ul className="list-disc list-inside space-y-1">
                    {event.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Event;