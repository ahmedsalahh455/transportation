import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/bg1.webp';

const ClientsHeader = () => {
  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-[rgba(35,51,187,0.5)]"></div>

      {/* Centered breadcrumb */}
      <div className="relative z-10 flex items-center justify-center w-full h-[350px] text-white text-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-5">Our Clients</h1>
          <p className="text-sm md:text-base text-gray-300">
            <Link to="/" className="hover:underline">Home</Link> / Our Clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientsHeader;
