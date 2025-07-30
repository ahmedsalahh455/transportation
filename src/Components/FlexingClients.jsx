import React from 'react';
import screen from '../assets/clientsscreen.png';
import client1 from '../assets/Clients/Client1.png'
import client2 from '../assets/Clients/Client2.png'
import client3 from '../assets/Clients/Client3.png'
import client4 from '../assets/Clients/Client4.jpeg'
import client5 from '../assets/Clients/Client5.png'
import client6 from '../assets/Clients/Client6.png'
import client7 from '../assets/Clients/Client7.png'
import client8 from '../assets/Clients/Client8.png'
import client9 from '../assets/Clients/Client9.png'
import client10 from '../assets/Clients/Client10.png'
function FlexingClients() {
  const clients = [
  client1, client2, client3, client4, client5,
  client6, client7, client8, client9, client10,
];
  return (
     <div className="max-w-[90%] mx-auto py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {clients.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Client ${index + 1}`}
            className="max-w-[60%]  object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default FlexingClients;
