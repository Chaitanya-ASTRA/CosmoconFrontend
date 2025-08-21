
interface TimelineEvent {
  time: string;
  title: string;
  details: string;
}

import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useSwipeable } from 'react-swipeable';


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
    { time: 'Day 1', title: 'Opening Ceremony', details: 'Welcome address, keynote speech by Dr. Anya Sharma, and a sneak peek into the future of space.' },
    { time: '10:00 AM - 12:00 PM', title: 'Keynote & Presentations', details: 'Groundbreaking talks on orbital mechanics and satellite communication systems.' },
    { time: '12:00 PM - 01:00 PM', title: 'Lunch Break', details: 'Enjoy a delicious lunch and network with fellow attendees.' },
    { time: '01:00 PM - 03:00 PM', title: 'Workshop: Mars Colony Design', details: 'Interactive workshop on designing sustainable habitats for Mars missions.' },
    { time: '03:00 PM - 05:00 PM', title: 'Startup Pitch Competition', details: 'Witness the next big ideas in space tech as startups pitch to a panel of VCs.' },
    { time: 'Day 2', title: 'Advanced Robotics Session', details: 'Discussions on robotics for in-orbit servicing and asteroid mining.' },
    { time: '02:00 PM - 04:00 PM', title: 'Panel: Space for All', details: 'A discussion on democratizing space and making it accessible to a wider audience.' },
    { time: 'Day 3', title: 'Innovation Awards & Closing', details: 'Celebrating the best of COSMOCON 2025 and a forward-looking closing speech.' },
  ];

  return (
    <div>
    <NavBar/>
   <section
  id="events"
 
  className={`page mt-10 min-h-screen w-full flex flex-col items-center justify-start p-8 md:p-16 overflow-y-auto transition-all duration-500 ease-in-out ${active ? 'active' : ''}  `}
>
      <div className="relative space-y-8 before:absolute before:left-1/2 before:-translate-x-1/2 before:w-1 before:top-0 before:bottom-0 before:bg-white/10 before:rounded-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-600">Events Timeline</h2>
        <div className="relative space-y-8 before:absolute before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-full before:bg-white/10 before:rounded-full">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`relative w-full md:w-1/2 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-md transform hover:scale-105 transition-transform duration-300 ${index % 2 === 0 ? 'mr-auto md:mr-6' : 'ml-auto md:ml-6'}`}>
                <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-cyan-400 -left-3 md:-left-3 z-10" />
                <h3 className="text-xl font-bold text-white mb-1">{event.time}</h3>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">{event.title}</h4>
                <p className="text-sm text-white/70">{event.details}</p>
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