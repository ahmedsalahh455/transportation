// Navbar.jsx
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `hover:text-sec font-semibold transition ${isActive ? "text-sec" : "text-white"}`;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-main shadow text-white" : "bg-[rgba(35,56,118,0.5)] text-white"}`}>
      <div className="max-w-[90%] mx-auto flex items-center justify-between py-3 font-medium">
        <div className="flex flex-col items-start text-xl font-bold leading-tight">
          <span>
            El<span className="text-sec">K</span>halifa
          </span>
          <span className="text-sm font-normal text-gray-300 -mt-1">{t("cargo")}</span>
        </div>

        <ul className="hidden xl:flex gap-6 text-lg items-center">
          <li><NavLink to="/" className={navLinkClass}>{t("home")}</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>{t("about")}</NavLink></li>
          <li className="relative group flex items-center">
            <NavLink to="/services" className={navLinkClass}>
              <span className="flex items-center">
                {t("service")} <MdKeyboardArrowDown size={20} className="ml-1" />
              </span>
            </NavLink>
            <ul className="absolute top-full mt-2 right-0 w-40 bg-white text-main rounded shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-200 z-50">
              <li><NavLink to="/services/insurance" className="block px-4 py-2 hover:bg-main hover:text-white text-sm">{t("insurance")}</NavLink></li>
              <li><NavLink to="/services/air-freight" className="block px-4 py-2 hover:bg-main hover:text-white text-sm">{t("air_freight")}</NavLink></li>
              <li><NavLink to="/services/customs" className="block px-4 py-2 hover:bg-main hover:text-white text-sm">{t("customs")}</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/networks" className={navLinkClass}>{t("networks")}</NavLink></li>
          <li><NavLink to="/ourclients" className={navLinkClass}>{t("clients")}</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>{t("contactu")}</NavLink></li>
          <button onClick={changeLanguage} className="hover:text-sec font-semibold transition">
            {t("arabic")}
          </button>
        </ul>

        <div className="hidden xl:flex gap-5 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedinIn />
        </div>

        <button className="xl:hidden text-white text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="xl:hidden bg-main text-white px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg">
            <li><NavLink to="/" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>{t("home")}</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>{t("about")}</NavLink></li>
            <li><NavLink to="/services" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>{t("service")}</NavLink></li>
            <li><NavLink to="/networks" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>{t("networks")}</NavLink></li>
            <li><NavLink to="/clients" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>{t("clients")}</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>{t("contactu")}</NavLink></li>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                changeLanguage();
              }}
              className="hover:text-sec font-semibold transition"
            >
              {t("arabic")}
            </button>
          </ul>
          <div className="flex gap-4 text-xl mt-4">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      )}
    </nav>
  );
}
