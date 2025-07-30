import React from 'react';
import heroImg from '../assets/bg2.avif';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import service1 from "../assets/custom-clearance2.png"; 
import service2 from "../assets/air-plane.png"; 
import service3 from "../assets/shipping.png"; 
import service4 from "../assets/shipping (1).png"; 
import service5 from "../assets/health-insurance.png"; 
import service6 from "../assets/package.png"; 
import service7 from "../assets/warehouse.png"; 
import service8 from "../assets/door-to-door.png"; 
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      name: t("services.customs.name"),
      desc: t("services.customs.desc"),
      image: service1,
    },
    {
      id: 2,
      name: t("services.air.name"),
      desc: t("services.air.desc"),
      image: service2,
    },
    {
      id: 3,
      name: t("services.sea.name"),
      desc: t("services.sea.desc"),
      image: service3,
    },
    {
      id: 4,
      name: t("services.special.name"),
      desc: t("services.special.desc"),
      image: service4,
    },
    {
      id: 5,
      name: t("services.insurance.name"),
      desc: t("services.insurance.desc"),
      image: service5,
    },
    {
      id: 6,
      name: t("services.packing.name"),
      desc: t("services.packing.desc"),
      image: service6,
    },
    {
      id: 7,
      name: t("services.storage.name"),
      desc: t("services.storage.desc"),
      image: service7,
    },
    {
      id: 8,
      name: t("services.door.name"),
      desc: t("services.door.desc"),
      image: service8,
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
        <div className="relative z-30 flex flex-col items-center justify-end h-full text-white text-center max-w-[90%] mx-auto pt-32">
          <h1 className="text-5xl font-bold mb-2">{t("services.title")}</h1>
          <p>
            <Link to="/" className="hover:text-sec underline mx-1">{t("home")}</Link> / {t("services.title")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-20 max-w-[90%] mx-auto">
        {services.map((serv) => (
          <div key={serv.id} className="rounded-lg bg-main p-5 flex flex-col items-center justify-center text-center gap-5 hover:shadow-lg transition-shadow duration-300">
            <img src={serv.image} alt="icon" className="h-20 w-20" />
            <h1 className="text-white font-semibold text-2xl">{serv.name}</h1>
            <p className="text-gray-300">{serv.desc}</p>
            <button className="w-fit flex items-center bg-sec rounded-md hover:bg-white hover:text-main text-white p-2 gap-2 transition-all duration-300 ease-in-out font-semibold">
              {t("services.read_more")}
              <FaRegArrowAltCircleRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
