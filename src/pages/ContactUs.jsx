import React, { useState } from 'react';
import heroImg from '../assets/bg2.avif';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaMinus, FaPlus } from 'react-icons/fa';



export default function ContactUs() {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqData = [
    {
        question: 'Which countries do you ship to?',
        answer:
        'We ship to most countries worldwide, with a focus on the Gulf region, Europe, and the US. Contact us to confirm your destination.',
    },
    {
        question: 'What types of shipping do you offer?',
        answer: 'We offer air, sea, and land freight options depending on destination and budget.',
    },
    {
        question: 'How long does shipping take?',
        answer: 'Shipping time varies by destination. Contact us for an accurate quote.',
    },
    {
        question: 'How can I track my shipment?',
        answer: 'We provide tracking links or direct updates via email/WhatsApp.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept wire transfer, credit card, and cash payments in Egypt.',
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
          <h1 className="text-5xl font-bold mb-2">Contact Us</h1>
          <p>
            <Link to="/" className="hover:text-sec underline mr-1">Home</Link> / Contact Us
          </p>
        </div>
      </div>

      <section className="bg-white py-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[90%] mx-auto">
        <div>
          <h2 className="text-4xl font-bold mb-6">Call To Action</h2>

          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-main" />
              <span className=' hover:text-sec'>43 Asmaa Fahmy st., Ard El-Golf, Heliopolis Cairo, Egypt</span>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-main" />
              <span className=' hover:text-sec'>+20222900438</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-main" />
              <span className=' hover:text-sec'>Info@elkhalifacargo.com</span>
            </li>
          </ul>

          <div className="flex gap-4 mt-6">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-sec text-white"><FaFacebookF /></a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-sec text-white"><FaInstagram /></a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-sec text-white"><FaLinkedinIn /></a>
          </div>

         <div className="mt-10">
            <h3 className="text-3xl font-semibold mb-4">FAQ</h3>
            <div className="border border-gray-300 rounded-md divide-y divide-gray-200">
                {faqData.map((item, index) => (
                <div
                    key={index}
                    className="py-4 px-5 cursor-pointer hover:bg-gray-50 transition"
                    onClick={() => toggleAccordion(index)}
                >
                    <div className="flex gap-4 items-center">
                    {openIndex === index ? (
                        <FaMinus className="text-sec" />
                    ) : (
                        <FaPlus className="text-sec" />
                    )}
                    <h4 className="font-semibold">{item.question}</h4>
                    </div>
                    {openIndex === index && (
                    <p className="pt-2 pl-8 text-sm text-gray-700">{item.answer}</p>
                    )}
                </div>
                ))}
            </div>
        </div>
        </div>

        <div className="bg-[#f5f2ea] p-6 md:p-10 rounded-md shadow-sm">
          <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Type Full Name" className="w-full p-3 rounded border focus:outline-none" />
            <input type="email" placeholder="Type Email" className="w-full p-3 rounded border focus:outline-none" />
            <input type="text" placeholder="Type Phone Number" className="w-full p-3 rounded border focus:outline-none" />
            <textarea rows="4" placeholder="Type Message..." className="w-full p-3 rounded border focus:outline-none "></textarea>
            <div className="flex justify-end text-sm text-gray-600">0 / 180</div>

            {/* Simulated CAPTCHA */}
            <div className="bg-white p-3 border rounded flex items-center gap-4">
              <input type="checkbox" />
              <span className="text-sm">I'm not a robot</span>
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha" className="h-6 ml-auto" />
            </div>

            <button className="bg-main text-white px-6 py-2 mt-4 rounded hover:bg-white hover:text-main border border-main transition-all">
              Send
            </button>
          </form>
        </div>
        
      </section>
       <div className="w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1771305718457!2d31.278661376248767!3d29.974339074958984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583866ca76a241%3A0x80ca48128a0ee5f9!2sAl%20Lasilki%2C%20Ezbet%20Fahmy%2C%20El%20Basatin%2C%20Cairo%20Governorate%204234310!5e0!3m2!1sen!2seg!4v1753787481462!5m2!1sen!2seg"
                className="w-full h-[450px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
  );
}
