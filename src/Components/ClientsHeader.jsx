import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/bg1.webp';
import { useTranslation } from 'react-i18next';

const ClientsHeader = () => {
  const { t } = useTranslation();
  return (
     <div className="relative min-h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
        <div className="absolute inset-0 bg-[rgba(35,56,118,0.7)] z-20"></div>
        <div className="relative z-30 flex flex-col items-center justify-end h-full text-white text-center max-w-[90%] mx-auto pt-32">
          <h1 className="text-5xl font-bold mb-2">{t("client.title")}</h1>
          <p>
            <Link to="/" className="hover:text-sec underline mx-1">{t("home")}</Link> / {t("client.title")}
          </p>
        </div>
      </div>
  );
};

export default ClientsHeader;
