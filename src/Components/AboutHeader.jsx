import React from 'react';
// import aboutBg from '../assets/about-bg.jpg'; // Replace with your actual image path
import { Link } from 'react-router-dom';
import heroImg from '../assets/bg1.webp';

const AboutHeader = () => {
  return (
   <div
      className="relative h-[300px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >      {/* Background image */}
      {/* <img
        src={aboutBg}
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover"
      /> */}

      {/* Black overlay */}
      <div className="absolute inset-0 bg-[rgba(35,51,187,0.5)]"></div>

      {/* Centered breadcrumb */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-5">About Us</h1>
          <p className="text-sm md:text-base text-gray-300 mb-2">
            <Link to="/" className="hover:underline">Home</Link> / About Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
