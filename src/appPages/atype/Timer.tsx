import React, { useEffect, useState } from 'react';

interface TimerProps {
  isActive: boolean;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ isActive, onTimeUp }) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, onTimeUp]);

  return (
    <div style={{color: 'white', fontFamily: 'DM mono'}} className="timer">
      Time left: {seconds}s
    </div>
  );
};

export default Timer;
