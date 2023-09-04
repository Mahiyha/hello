// src/Parallax.js
import React, { useState, useEffect } from 'react';
import './Parallax.css';

const imagePaths = [
  'C:\Users\SAI SRUJAN\Dropbox\My PC (SUCHARITHA-LAPTOP-1TMKEF7T)\Downloads\one.jpg',
  'C:\Users\SAI SRUJAN\Dropbox\My PC (SUCHARITHA-LAPTOP-1TMKEF7T)\Downloads\c1.jpeg',
  'C:\Users\SAI SRUJAN\Dropbox\My PC (SUCHARITHA-LAPTOP-1TMKEF7T)\Downloads\c2.jpeg',
  // Add more image paths
];

const Parallax = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScroll = () => {
    const parallaxContainer = document.querySelector('.parallax-container');
    const scrollValue = window.scrollY;
    parallaxContainer.style.transform = `translateY(-${scrollValue * 0.3}px)`;
  };

  const changeBackgroundImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const imageChangeInterval = setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageChangeInterval);
    };
  }, []);

  return (
    <div className="parallax-container">
      {imagePaths.map((path, index) => (
        <img
          key={index}
          src={path}
          alt={`Background ${index + 1}`}
          className={`parallax-background ${index === currentImageIndex ? 'visible' : 'hidden'}`}
        />
      ))}
      <div className="parallax-content">
        {/* Your login form content */}
      </div>
    </div>
  );
};

export default Parallax;
