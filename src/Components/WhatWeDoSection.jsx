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
            <div className="w-full md:w-1/2 py-10">
              <img
                src={img}
                alt="What We Do"
                className="w-full h-auto md:w-[420px] md:h-[416px] rounded-lg shadow-md object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 py-10 flex flex-col items-center text-center md:items-start md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                What Are We ?
              </h2>
              <p className="text-white leading-relaxed text-base font-normal w-[70%]">
                At Air Sea City Logistics, we specialize in delivering seamless, end-to-end logistics solutions with a focus on air and sea freight and supply chain management. Our mission is to simplify global trade for businesses by offering reliable, cost-effective services tailored to each client’s needs.        <br /><br />

                What sets us apart is our ability to manage the complete logistics cycle — from cargo pickup and documentation, through international freight handling, inland transportation, and warehousing, to final delivery. Whether you're shipping within Egypt or across borders, we ensure precision, speed, and security at every stage.
                <br /><br />
                At Air Sea City Logistics, we don’t just move goods. We build trust, streamline operations, and form long-term partnerships grounded in reliability, responsiveness, and logistics expertise.      </p>
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
                At Air Sea City Logistics, we specialize in delivering seamless, end-to-end logistics solutions with a focus on air and sea freight and supply chain management. Our mission is to simplify global trade for businesses by offering reliable, cost-effective services tailored to each client’s needs.        <br /><br />

                What sets us apart is our ability to manage the complete logistics cycle — from cargo pickup and documentation, through international freight handling, inland transportation, and warehousing, to final delivery. Whether you're shipping within Egypt or across borders, we ensure precision, speed, and security at every stage.
                <br /><br />
                At Air Sea City Logistics, we don’t just move goods. We build trust, streamline operations, and form long-term partnerships grounded in reliability, responsiveness, and logistics expertise.      </p>
          </div>
        </div>
      )}
    </div>
  );
}
