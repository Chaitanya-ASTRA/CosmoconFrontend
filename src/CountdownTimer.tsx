import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { hours?: number; minutes?: number; seconds?: number } = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: React.ReactNode[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const value = timeLeft[interval as keyof typeof timeLeft];
    if (value === undefined) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/60 rounded-lg px-4 py-3 min-w-[80px] text-center">
          <div className="text-gray-200 text-2xl md:text-4xl font-mono font-bold">
            {value.toString().padStart(2, '0')}
          </div>
        </div>
        <div className="text-gray-400 text-sm md:text-base mt-2 font-medium uppercase tracking-wider">
          {interval}
        </div>
      </div>
    );
  });

  return (
    <div className="mt-6 flex space-x-4 md:space-x-6">
      {timerComponents.length ? timerComponents : <span className="text-white cosmo-text text-3xl md:text-4xl font-mono">Event Started!</span>}
    </div>
  );
};

export default CountdownTimer;
