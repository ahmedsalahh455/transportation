import React from 'react'
import screen from '../assets/clientsscreen.png';

 function ClientsGrid() {
  return (
    <div>
        <img
        src={screen}
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover"
      /> 
        
    </div>
  )
}

export default ClientsGrid;

