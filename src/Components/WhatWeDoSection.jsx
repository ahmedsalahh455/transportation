import React from 'react';
import img from '../assets/about.webp';
import background from '../assets/image36-copyright.jpg';

export default function WhatWeDoSection({ isHomepage = false }) {
  return (
    <div className={`py-6 md:py-12 ${isHomepage ? '' : 'bg-white'}`}>
      {isHomepage ? (
<div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
  {/* ✅ Top SVG wave */}
  <div className="absolute top-0 left-0 right-0 overflow-hidden z-10">
    <svg
      className="w-full h-[80px] transform scale-y-[-1]"
      viewBox="0 0 1440 150"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 C480,150 960,150 1440,0 L1440,150 L0,150 Z"
        fill="white"
      />
    </svg>
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-[rgba(1,35,87,0.85)] z-0"></div>

  {/* Content */}
  <div className="relative z-20 max-w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 py-12">
    <div className="w-full md:w-1/2">
      <img
        src={img}
        alt="What We Do"
        className="w-[420px] h-[416px] rounded-lg shadow-md"
      />
    </div>

    <div className="w-full md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        What Are We ?
      </h2>
      <p className="text-white leading-relaxed text-base font-normal w-[70%]">
        ElKhalifa Cargo was established in 1969 as a company specializing in customs clearance services. Since then, it has solidified its position in the shipping and logistics industry within both the Egyptian and international markets.
        <br /><br />
        Over the decades, ElKhalifa Cargo has grown to become one of the leading providers of integrated shipping solutions. In 1993, the company launched its air freight services, followed by sea freight in 2000, expanding its capabilities to meet a wide range of logistics needs.
        <br /><br />
        What sets EKhalifa Cargo apart is its ability to manage the full shipping process, starting from cargo pickup at the client’s location, through customs clearance, inland transportation, and storage, all the way to final delivery, whether within Egypt or anywhere in the world.
        <br /><br />
        We believe that shipping is not just about moving goods, it’s about precise timing, deep attention to detail, and building long-term partnerships with our clients.
      </p>
    </div>
  </div>
</div>

      ) : (
        <div className="max-w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 py-12">
          <div className="w-full md:w-1/2">
            <img
              src={img}
              alt="What We Do"
              className="w-[420px] h-[416px] "
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#012357]">
              What Are We ?
            </h2>
            <p className="text-gray-700 leading-relaxed text-base font-normal w-[70%]">
              ElKhalifa Cargo was established in 1969 as a company specializing in customs clearance services. Since then, it has solidified its position in the shipping and logistics industry within both the Egyptian and international markets.
              Over the decades, ElKhalifa Cargo has grown to become one of the leading providers of integrated shipping solutions. In 1993, the company launched its air freight services, followed by sea freight in 2000, expanding its capabilities to meet a wide range of logistics needs.
              What sets EKhalifa Cargo apart is its ability to manage the full shipping process, starting from cargo pickup at the client’s location, through customs clearance, inland transportation, and storage, all the way to final delivery, whether within Egypt or anywhere in the world.
              We believe that shipping is not just about moving goods, it’s about precise timing, deep attention to detail, and building long-term partnerships with our clients.            </p>
          </div>
        </div>
      )}
    </div>
  );
}
