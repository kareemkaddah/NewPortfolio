import React, { useEffect, useState } from 'react';
import './WavingHand.css';

const WavingHand: React.FC = () => {
  const [isInitialWave, setIsInitialWave] = useState(true);

  useEffect(() => {
    // After the initial wave animation completes, remove the class
    const timer = setTimeout(() => {
      setIsInitialWave(false);
    }, 2500); // Match this with the animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <span
      style={{ overflowY: 'hidden' }}
      className={`waving-hand ${isInitialWave ? 'initial-wave' : ''}`}
    >
      👋
    </span>
  );
};

export default WavingHand;
