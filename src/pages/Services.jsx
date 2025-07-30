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
import OurServices from '../Components/OurServices';
import ServiceHeader from '../Components/ServiceHeader';

export default function Services() {
  return (
    <div className=''>
      <ServiceHeader />
      < OurServices />

    </div>

  );
}

