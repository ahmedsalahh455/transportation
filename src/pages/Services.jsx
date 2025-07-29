import React from 'react';
import heroImg from '../assets/bg2.avif';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import service1 from "../assets/custom-clearance.png"; 
import service2 from "../assets/air-plane.png"; 
import service3 from "../assets/shipping.png"; 
import service4 from "../assets/shipping (1).png"; 
import service5 from "../assets/health-insurance.png"; 
import service6 from "../assets/package.png"; 
import service7 from "../assets/warehouse.png"; 
import service8 from "../assets/door-to-door.png"; 
import { Link } from 'react-router-dom';

export default function Services() {
      const services = [
        {
          id: 1,
          name: "Customs Clearance",
          desc: "We ensure fast and secure clearance for all shipments through customs ports.",
          image:service1,
        },
        {
          id: 2,
          name: "Air Freight",
          desc: "The fastest solution is to get your goods delivered anywhere in the world.",
          image:service2,
        },
        {
          id: 3,
          name: "Sea Freight",
          desc: "Flexible international shipping options through all major ports.",
          image:service3,
        },
        {
          id: 4,
          name: "Special Cargo",
          desc: "Expert handling of sensitive, oversized, or complex shipments.",
          image:service4,
        },
        {
          id: 5,
          name: "Insurance",
          desc: "Full protection for your shipment against risks, locally and globally.",
          image:service5,
        },
        {
          id: 6,
          name: "Packing",
          desc: "Professional packing that protects your cargo, no matter the type.",
          image:service6,
        },
        {
          id: 7,
          name: "Storage",
          desc: "Secure and flexible storage solutions tailored to your cargo needs.",
          image:service7,
        },
        {
          id: 8,
          name: "Door-to-Door",
          desc: "Complete delivery from origin to destination, fast, direct, and reliable.",
          image:service8,
        },
      ];
  return (
    <div>
        <div className="relative min-h-80">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImg})` }}
            ></div>
            <div className="absolute inset-0 bg-[rgba(35,56,118,0.7)] z-20"></div>
            <div className="relative z-30 flex flex-col items-center justify-end h-full text-white text-center max-w-[85%] mx-auto pt-32">
                <h1 className="text-5xl font-bold mb-2">Services</h1>
                <p className=""> <Link to="/" className='hover:text-sec underline mr-1'>Home</Link> / Services</p>
            </div>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-20 max-w-[85%] mx-auto">
            {services.map((serv) => (
              <div key={serv.id} className="rounded-lg bg-main p-5 flex flex-col items-center justify-center text-center gap-5 hover:shadow-lg transition-shadow duration-300">
                <img src={serv.image} alt="icon" className="h-20 w-20" />
                <h1 className="text-white font-semibold text-2xl">{serv.name}</h1>
                <p className="text-gray-300 ">{serv.desc}</p>
                <button className="w-fit flex items-center bg-sec rounded-md hover:bg-white hover:text-main text-white p-2 gap-2 transition-all duration-300 ease-in-out font-semibold">
                  Read More
                  <FaRegArrowAltCircleRight size={20} />
                </button>
              </div>
            ))}
          </div>
    </div>
    
  );
}

