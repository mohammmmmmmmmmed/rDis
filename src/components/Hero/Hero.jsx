import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Hero.css';  // Custom CSS for additional styling

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={classNames(
        "relative h-screen bg-cover bg-center transition-opacity duration-1000 heroBg",
        { 'opacity-100': isLoaded, 'opacity-0': !isLoaded }
      )}
      
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4">
        <h1 className={classNames(
          "text-4xl md:text-6xl font-bold mb-4 transition-transform duration-1000",
          { 'translate-y-0': isLoaded, 'translate-y-10': !isLoaded }
        )}>
          Welcome to Our Website
        </h1>
        <p className={classNames(
          "text-lg md:text-2xl mb-6 transition-transform duration-1000",
          { 'translate-y-0': isLoaded, 'translate-y-10': !isLoaded }
        )}>
          Discover amazing things with us
        </p>
        <button className={classNames(
          "bg-gradient-to-r from-gray-200 to-cyan-400 hover:bg-gray-700 text-gray-900 font-bold py-2 px-4 rounded transition duration-500",
          { 'translate-y-0': isLoaded, 'translate-y-10': !isLoaded }
        )}>
          Get Started
        </button>
      </div>
      <div className={classNames(
        "absolute bottom-8 w-full flex justify-center transition-opacity duration-1000",
        { 'opacity-100': isLoaded, 'opacity-0': !isLoaded }
      )}>
        <button className="text-white text-3xl animate-bounce" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          ↓
        </button>
      </div>
    </div>
  );
};

export default Hero;