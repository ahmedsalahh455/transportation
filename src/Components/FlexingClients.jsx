import React from 'react';
import screen from '../assets/clientsscreen.png';

function FlexingClients() {
  return (
    <div className="flex justify-center items-center max-w-[90%] mx-auto px-56 py-16">
      <img
        src={screen}
        alt="Clients Screen"
        className="w-full max-w-full h-auto object-contain"
      />
    </div>
  );
}

export default FlexingClients;
