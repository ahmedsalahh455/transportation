import React from 'react';
import { FaBoxOpen, FaRegArrowAltCircleRight } from 'react-icons/fa';
import service1 from "../assets/custom-clearance2.png";
import service2 from "../assets/air-plane.png";
import service3 from "../assets/shipping.png";
import service4 from "../assets/shipping (1).png";
import service5 from "../assets/health-insurance.png";
import service6 from "../assets/package.png";
import service7 from "../assets/warehouse.png";
import service8 from "../assets/door-to-door.png";
import { Link } from 'react-router-dom';

export default function OurServices() {
  const services = [

    {
      id: 1,
      name: "Air Freight",
      desc: "The fastest solution is to get your goods delivered anywhere in the world.",
      image: service2,
    },
    {
      id: 2,
      name: "Sea Freight",
      desc: "Flexible international shipping options through all major ports.",
      image: service3,
    },

    {
      id: 3,
      name: "Supply Chain",
      desc: "End-to-end supply chain services including storage, inventory, and reliable delivery.",
      image: service7,
    },

  ];

  return (
    <div className="mx-auto max-w-[90%] py-12">
      <div className="text-center flex flex-col gap-2 mb-5">
        <h1 className="text-main text-4xl font-semibold">Our Services</h1>
        <p className="text-gray-600 text-base">
          Choose the right service for your needs and let us take care of the rest.
        </p>
        <h2 className="text-3xl font-bold flex justify-center items-center mb-6">
          <div className="border border-main h-1 w-16 bg-main mx-2"></div>
          <FaBoxOpen size={32} className="text-sec" />
          <div className="border border-main h-1 w-16 bg-main mx-2"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-6xl mx-auto">
        {services.map((serv) => (
          <div key={serv.id} className="rounded-lg bg-main p-5 flex flex-col items-center justify-center text-center gap-5 hover:shadow-lg transition-shadow duration-300">
            <img src={serv.image} alt="icon" className="h-20 w-20" />
            <h1 className="text-white font-semibold text-2xl">{serv.name}</h1>
            <p className="text-gray-300">{serv.desc}</p>
            <Link to={`/services/${serv.name.replace(/\s+/g, '-').toLowerCase()}`}>
            <button className="w-fit flex items-center bg-sec rounded-md hover:bg-white hover:text-main text-white p-2 gap-2 transition-all duration-300 ease-in-out font-semibold">
              Read More
              <FaRegArrowAltCircleRight size={20} />
            </button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}
