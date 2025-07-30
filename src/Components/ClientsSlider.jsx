//ClientsSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FaBoxOpen } from 'react-icons/fa';
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


const logos = [
  client1,
  client2, client3, client4, client5, client6, client7 , client8 , client9 , client10 ]

const ClientsSlider = () => {
  return (
    <div className="py-12 bg-white">
      <div className="text-center flex flex-col gap-2 mb-5">
        <h1 className="text-main text-4xl font-semibold">Our Clients</h1>
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
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className='client-swiper'
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-20">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
      className="max-w-[60%]  object-contain hover:grayscale-0 transition duration-300"
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
      margin-top: 1rem;
    }

    .swiper-pagination-bullet-active {
      background-color: #2333bb !important;
    }

    .client-swiper{
    
      height: 250px;
      padding-top:3rem
    }

  `}
      </style>
    </div>
  );
};

export default ClientsSlider;
