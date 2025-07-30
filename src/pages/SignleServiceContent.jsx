import React from 'react';
import { useParams, Link } from 'react-router-dom';
import supply from '../assets/SupplyChain.jpg';
import Air from '../assets/Air.avif';
import Sea from '../assets/Sea.avif';
import heroImg from '../assets/bg1.webp';

const serviceData = {
'air-freight': {
  name: 'Air Freight',
  desc: `The fastest solution to get your goods delivered globally with minimal delays.
Ideal for high-value or time-sensitive shipments across continents and remote regions.
We offer reliable air cargo handling, customs support, and real-time tracking for peace of mind.`,
  image: Air,
},

'sea-freight': {
  name: 'Sea Freight',
  desc: `Flexible international shipping options through all major ports at competitive rates.
Perfect for bulk or heavy shipments that require economical long-distance transport.
We ensure reliable schedules, container tracking, and expert handling of customs documentation.`,
  image: Sea,
},

'supply-chain': {
  name: 'Supply Chain',
  desc: `End-to-end supply chain services including warehousing, inventory, and timely delivery.
Our network supports scalable logistics tailored to your unique business needs.
Benefit from streamlined operations, real-time visibility, and reduced operational risks.`,
  image: supply,
}

};

export default function SingleServiceContent() {
  const { serviceName } = useParams();
  const service = serviceData[serviceName];

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl text-red-600 font-bold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-[rgba(35,51,187,0.5)]"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-5">{service.name}</h1>
            <p className="text-sm md:text-base text-gray-300 mb-2">
              <Link to="/" className="hover:underline">Home</Link> / <Link to="/services">Services</Link> / {service.name}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto my-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h2>
            <p className="text-gray-600">{service.desc}</p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={service.image}
              alt={service.name}
              className="w-[465px] h-[260px] border border-gray-300 rounded-3xl object-cover max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
