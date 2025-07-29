import React from 'react';
import sampleImg from '../assets/Why-Choose-Us-en.webp'; 
import icon from '../assets/recommend.png'; 
import shipping from '../assets/global-shipping.png'; 
import clearance from '../assets/custom-clearance.png'; 
import price from '../assets/best-price.png';
import networking from '../assets/networking.png'; 

const features = [
  {
    title: 'Experience Since 1969',
    description: 'Over 50 years of continuous service have given us deep market insight and operational excellence.',
    icon: icon,
  },
  {
    title: 'Integrated Solutions',
    description: 'From pickup to final delivery, we manage every step of the logistics chain.',
    icon: networking,
  },
  {
    title: 'Extensive Global Network',
    description: 'Our worldwide agents ensure timely delivery wherever your cargo is headed.',
    icon: shipping,
  },
  {
    title: 'Expert Customs Clearance',
    description: 'We get your shipment through customs quickly and efficiently, without delays or complications.',
    icon: clearance,
  },
  {
    title: 'A Team That Cares',
    description: 'We treat every shipment as a priority, not just a number.',
    icon: networking,
  },
  {
    title: 'Competitive & Transparent Pricing',
    description: 'What we agree upon is what you pay, no hidden fees, no unexpected changes.',
    icon: price,
  },
];

const WhyChoose = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="w-full w-[90%] mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2 justify-items-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="w-[260px] h-[220px] border border-gray-300 rounded-xl p-4 flex items-start gap-4 bg-white shadow-sm"
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={sampleImg}
            alt="Feature Visual"
            className="w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
