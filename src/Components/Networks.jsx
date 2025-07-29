//Networks.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FaBoxOpen } from 'react-icons/fa';

const logos = [
    '/logos/client1.png',
    '/logos/client2.png',
    '/logos/client3.png',
    '/logos/client4.png',
    '/logos/client5.png',
    '/logos/client6.png',
];

const Networks = () => {
    return (
        <div className="py-12 bg-white">
<div className="text-center mb-20">
  {/* Title above the shape */}
  <h2 className="text-3xl font-bold text-main mb-2">Network</h2>

  {/* Decorative shape line with icon */}
  <div className="flex justify-center items-center">
    <div className="border border-main h-1 w-16 bg-main mx-2"></div>
    <FaBoxOpen size={22} className="text-sec" />
    <div className="border border-main h-1 w-16 bg-main mx-2"></div>
  </div>
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
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center h-20">
                            <img
                                src={logo}
                                alt={`Client ${index + 1}`}
                                className="h-full object-contain grayscale hover:grayscale-0 transition duration-300"
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
  `}
</style>


        </div>
    );
};

export default Networks;
