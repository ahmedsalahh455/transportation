import React from 'react';
import consultationImg from '../assets/contact-us-image.webp'; // Replace with your actual image path

const ConsultationSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Form */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-sm text-gray-500 uppercase">Fill out this form</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2333bb]">Free Consultation</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2333bb]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2333bb]"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2333bb]"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2333bb]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#2333bb] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1a2999] transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={consultationImg}
            alt="Consultation"
            className="w-full  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
