import React from 'react';
import heroImg from '../assets/bg1.webp';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

export default function MainSection() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      <div className="absolute inset-0 bg-[rgba(35,56,118,0.5)]"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full text-white text-center max-w-[85%] mx-auto">
        <div className="w-2/3 text-start">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to ElKhalifa Cargo
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            Welcome to ElKhalifa Cargo, your trusted partner in shipping and logistics solutions since 1969. With over 50 years of experience, we offer fully integrated services including air and sea freight, customs clearance, transportation, warehousing, and insurance, both locally and internationally. We don’t just move goods, we deliver trust, precision, and commitment in every shipment.
          </p>
          <button className="flex items-center bg-sec rounded-md hover:bg-white hover:text-main text-white p-2 mt-5 gap-2 transition-all duration-300 ease-in-out font-semibold">
            <FaRegArrowAltCircleRight size={20} />
            About Us
          </button>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center">
        <FiArrowUpRight className="text-sec text-[300px] sm:text-[400px] md:text-[400px] lg:text-[400px] xl:text-[500px]" />
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full"
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
    </div>
  );
<<<<<<< HEAD
}
=======
}

>>>>>>> 89892d6 (Update: Added)
