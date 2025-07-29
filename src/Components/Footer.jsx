import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Main Section */}
      <div className="bg-sec py-10 px-4">
        <div className="max-w-[90%] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          
          {/* Left - Nav Links */}
          <div className="text-lg font-medium">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Our Team</a>
              <a href="#" className="hover:underline">Networks</a>
              <a href="#" className="hover:underline">Our Clients</a>
              <a href="#" className="hover:underline">News</a>
              <a href="#" className="hover:underline">Careers</a>
              <a href="#" className="hover:underline">Contact Us</a>
            </div>
          </div>

          {/* Middle - Logo and Socials */}
          <div className="flex-1 text-center text-white font-bold text-5xl leading-tight">
            <div>
              El<span className="text-main">K</span>halifa
            </div>
            <div className="text-sm font-light mt-1">Cargo</div>
            <div className="flex justify-center mt-4 gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-main p-2 rounded-full transition-transform hover:scale-110"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-main p-2 rounded-full transition-transform hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-main p-2 rounded-full transition-transform hover:scale-110"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="text-lg space-y-2">
            <p className="font-semibold">Contact Us</p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
              <li>43 Asmaa Fahmy st., Ard El-Golf, Heliopolis, Cairo, Egypt</li>
              <li>+20222900438</li>
              <li>Info@elkhalifacargo.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Optional WhatsApp Button */}
      {/* 
      <a
        href="https://wa.me/201234567890"
        className="absolute -top-6 left-6 md:left-10 bg-white text-main border-4 border-main rounded-full w-12 h-12 flex items-center justify-center text-xl hover:scale-110 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a> 
      */}

      {/* Bottom copyright */}
      <div className="bg-main py-3 text-center text-base">
        Copyright 2025 © Khalifa Cargo — Developed by <span className="font-semibold">Sedra Media</span>
      </div>
    </footer>
  );
}
