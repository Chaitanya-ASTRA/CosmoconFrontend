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
      <span key={interval} className="text-white text-3xl font-mono">
        {value.toString().padStart(2, '0')}{interval.charAt(0)}
      </span>
    );
  });

  return (
    <div className="mt-4 flex space-x-4">
      {timerComponents.length ? timerComponents : <span className="text-white cosmo-text text-3xl md:text-9xl font-mono">Event Started!</span>}
    </div>
  );
};

export default CountdownTimer;
