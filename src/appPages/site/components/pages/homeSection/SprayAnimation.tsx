import React, { useEffect } from 'react';
import './SprayAnimation.css'

const SprayAnimation: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector('.spray-container');
    if (container) {
      setInterval(() => {
        const spray = document.createElement('div');
        spray.className = 'spray';
        spray.style.left = `${Math.random() * 100}%`;
        container.appendChild(spray);

        setTimeout(() => {
          spray.remove();
        }, 3000); // Время жизни каждого впрыска
      }, 500); // Интервал появления новых впрысков
    }
  }, []);

  return <div className="spray-container"></div>;
};

export default SprayAnimation;



