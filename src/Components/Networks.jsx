import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FaBoxOpen } from 'react-icons/fa';
import network1 from '../assets/network1.png';
import network2 from '../assets/network2.png';
import network3 from '../assets/network3.png';
import network4 from '../assets/network4.png';
import network5 from '../assets/network5.png';
import network6 from '../assets/network6.png';

const logos = [network1, network2, network3, network4, network5, network6];

const Networks = () => {
  return (
    <div className="py-12 bg-white">
        <div className="text-center flex flex-col gap-2 mb-5">
          <h1 className="text-main text-4xl font-semibold">Network</h1>
          <h2 className="text-3xl font-bold flex justify-center items-center mb-6">
            <div className="border border-main h-1 w-16 bg-main mx-2"></div>
            <FaBoxOpen size={32} className="text-sec" />
            <div className="border border-main h-1 w-16 bg-main mx-2"></div>
          </h2>
      </div>

      <Swiper
        modules={[Autoplay, FreeMode, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className='pb-24'
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-32">
              <img
                src={logo}
                alt={`network ${index + 1}`}
                className="h-full w-full object-contain bg-gray-100 shadow-lg rounded-md "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination mt-4"></div>

      <style>
        {`
          .swiper-pagination {
            margin-top: 1rem;
            text-align: center;
          }
          .swiper-pagination-bullet {
            background-color: #cbd5e1;
            opacity: 1;
            width: 10px;
            height: 10px;
            margin: 0 4px;
          }
          .swiper-pagination-bullet-active {
            background-color: #2333bb !important;
          }
        `}
      </style>
    </div>
  );
};

export default Networks;
