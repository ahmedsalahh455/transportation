import React from 'react';
import logo1 from '../assets/networks/1.png'; 
import logo2 from '../assets/networks/2.jpg'; 
import logo3 from '../assets/networks/3.png'; 
import logo4 from '../assets/networks/4.png'; 
import logo5 from '../assets/networks/5.png'; 

const logos = [logo1,logo2,logo3,logo4,logo5];

export default function NetworksElements() {
  return (
    <div className="w-full py-24 flex justify-center">
      <div className="flex flex-wrap gap-6 justify-center ">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-[212px] h-[200px] bg-white border border-gray-200 shadow-md rounded-md flex items-center justify-center"
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
