import React, { useEffect, useState } from 'react';
import './App.css';
import { gsap } from 'gsap';

// Generate random positions for stars
const generateStars = (numStars) => {
  return Array.from({ length: numStars }).map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 6 + 6, // Larger size for stars
  }));
};

const App = () => {
  const [stars, setStars] = useState(generateStars(150));

  // Twinkling effect for stars
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to('.star', {
        opacity: Math.random(),
        stagger: 0.05,
        duration: 0.5,
      });
    }, 800); // Faster twinkling effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="sky">
        <div className="moon"></div>
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              position: 'absolute',
              top: `${star.y}px`,
              left: `${star.x}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;
