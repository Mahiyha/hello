// src/Slideshow.js
import React from 'react';
import './Slideshow.css';

const imagePaths = [
  'C:\Users\SAI SRUJAN\Dropbox\My PC (SUCHARITHA-LAPTOP-1TMKEF7T)\Downloads\one.jpg',
  'C:\Users\SAI SRUJAN\Dropbox\My PC (SUCHARITHA-LAPTOP-1TMKEF7T)\Downloads\five.jpeg',
  'C:\Users\SAI SRUJAN\Dropbox\My PC (SUCHARITHA-LAPTOP-1TMKEF7T)\Downloads\three.png',
  // Add more image paths
];

const Slideshow = () => {
  return (
    <div className="slideshow">
      {imagePaths.map((path, index) => (
        <img key={index} src={path} alt={`Slide ${index + 1}`} />
      ))}
    </div>
  );
};

export default Slideshow;
