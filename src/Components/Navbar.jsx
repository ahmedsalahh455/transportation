import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="max-w-[85%] mx-auto flex items-center justify-between py-3 px-4 md:px-6 font-medium">
        <div className="flex flex-col items-start text-xl font-bold leading-tight">
          <span>
            El<span className="text-sec">K</span>halifa
          </span>
          <span className="text-sm font-normal text-gray-300 -mt-1">Cargo</span>
        </div>
        <ul className="hidden xl:flex gap-6 text-lg items-center">
          <li>
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          </li>
          <li className="relative group flex items-center">
            <NavLink to="/services" className={navLinkClass}>
              <span className="flex items-center">
                Services <MdKeyboardArrowDown size={20} className="ml-1" />
              </span>
<<<<<<< HEAD
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
=======
>>>>>>> 89892d6 (Update: Added)
            </NavLink>
            {/* Dropdown */}
            <ul className="absolute top-full mt-2 right-0 w-40 bg-white text-main rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 invisible group-hover:visible transition-all duration-200 z-50">
              <li>
                <NavLink to="/services/insurance" className="block px-4 py-2 hover:bg-main hover:text-white text-sm">Insurance</NavLink>
              </li>
              <li>
                <NavLink to="/services/air-freight" className="block px-4 py-2 hover:bg-main hover:text-white text-sm">Air Freight</NavLink>
              </li>
              <li>
                <NavLink to="/services/customs" className="block px-4 py-2 hover:bg-main hover:text-white text-sm">Customs Clearance</NavLink>
              </li>
            </ul>
          </li>
          <li><NavLink to="/team" className={navLinkClass}>Our Team</NavLink></li>
          <li><NavLink to="/networks" className={navLinkClass}>Networks</NavLink></li>
          <li><NavLink to="/clients" className={navLinkClass}>Our Clients</NavLink></li>
          <li><NavLink to="/news" className={navLinkClass}>News</NavLink></li>
          <li><NavLink to="/careers" className={navLinkClass}>Careers</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
          <li><NavLink to="/ar" className={navLinkClass}>العربية</NavLink></li>
        </ul>
        <div className="hidden xl:flex gap-5 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
        <button
          className="xl:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-main text-white px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg">
            <li><NavLink to="/" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/services" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/team" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Our Team</NavLink></li>
            <li><NavLink to="/networks" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Networks</NavLink></li>
            <li><NavLink to="/clients" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Our Clients</NavLink></li>
            <li><NavLink to="/news" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>News</NavLink></li>
            <li><NavLink to="/careers" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Careers</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink></li>
            <li><NavLink to="/ar" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>العربية</NavLink></li>
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