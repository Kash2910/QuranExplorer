import React, { useEffect, useState } from 'react';
import { namesOfAllah } from '../namesOfAllah';
import '../assets/LoadingScreen.css'; 

function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(1);
  const [name, setName] = useState(namesOfAllah[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        const next = prev + 1;
        if (next <= 100) {
          setName(namesOfAllah[(next - 1) % 99]);
          return next;
        } else {
          clearInterval(interval);
          onComplete(); 
          return prev;
        }
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <h1 className="count">{count}</h1>
      <h2 className="name">{name}</h2>
    </div>
  );
}

export default LoadingScreen;
