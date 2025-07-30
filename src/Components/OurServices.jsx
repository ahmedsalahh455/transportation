import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaBoxOpen, FaRegArrowAltCircleRight } from 'react-icons/fa';
import service1 from "../assets/custom-clearance2.png"; 
import service2 from "../assets/air-plane.png"; 
import service3 from "../assets/shipping.png"; 
import service4 from "../assets/shipping (1).png"; 
import service5 from "../assets/health-insurance.png"; 
import service6 from "../assets/package.png"; 
import service7 from "../assets/warehouse.png"; 
import service8 from "../assets/door-to-door.png"; 

export default function OurServices() {
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
    <div className="mx-auto max-w-[90%] py-12">
      <div className="text-center flex flex-col gap-2 mb-5">
        <h1 className="text-main text-4xl font-semibold">{t("services.title")}</h1>
        <p className="text-gray-600 text-base">
          {t("services.subtitle")}
        </p>
        <h2 className="text-3xl font-bold flex justify-center items-center mb-6">
          <div className="border border-main h-1 w-16 bg-main mx-2"></div>
          <FaBoxOpen size={32} className="text-sec" />
          <div className="border border-main h-1 w-16 bg-main mx-2"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
