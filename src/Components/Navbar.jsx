import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `hover:text-sec font-semibold transition ${
      isActive ? "text-sec" : "text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-main shadow text-white"
          : "bg-[rgba(35,51,187,0.5)] text-white"
      }`}
    >

      <div className="max-w-[85%] mx-auto flex items-center justify-between py-3 px-6 font-medium">
        {/* Left: Logo */}
        <div className="flex flex-col items-start text-xl font-bold leading-tight">
          <span>
            El<span className="text-sec">K</span>halifa
          </span>
          <span className="text-sm font-normal text-gray-300 -mt-1">Cargo</span>
        </div>

        {/* Center: Navigation */}
        <ul className="flex gap-6 text-lg items-center">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
          </li>
         <li className="relative group flex items-center">
          <NavLink to="/services" className={navLinkClass}>
            <span className="flex items-center">
              Services
              <span className="ml-1">
                <MdKeyboardArrowDown size={20}/>
              </span>
            </span>
          </NavLink>

          {/* Dropdown menu */}
          <ul className="absolute top-full mt-2 right-0 w-40 bg-white text-main rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 invisible group-hover:visible transition-all duration-200 z-50">
            <li>
              <NavLink
                to="/services/insurance"
                className="block px-4 py-2 hover:bg-main hover:text-white transition text-sm"
              >
                Insurance
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services/air-freight"
                className="block px-4 py-2 hover:bg-main hover:text-white transition text-sm"
              >
                Air Freight
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services/customs"
                className="block px-4 py-2 hover:bg-main hover:text-white transition text-sm"
              >
                Customs Clearance
              </NavLink>
            </li>
          </ul>
        </li>
          <li>
            <NavLink to="/team" className={navLinkClass}>
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/networks" className={navLinkClass}>
              Networks
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourclients" className={navLinkClass}>
              Our Clients
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={navLinkClass}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" className={navLinkClass}>
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/ar" className={navLinkClass}>
              العربية
            </NavLink>
          </li>
        </ul>

        {/* Right: Social Icons */}
        <div className="flex gap-5 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </nav>
  );
}