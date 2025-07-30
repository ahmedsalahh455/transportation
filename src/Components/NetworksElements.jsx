import React from 'react';
import network1 from '../assets/network1.png';
import network2 from '../assets/network2.png';
import network3 from '../assets/network3.png';

const logos = [network1, network2, network3];

export default function NetworksElements() {
  return (
    <div className="w-full py-24 flex justify-center">
      <div className="flex flex-wrap gap-6 justify-center ">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-[212px] h-[200px] bg-white border border-gray-200 shadow-md rounded-md flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="max-h-[80%] max-w-[80%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
