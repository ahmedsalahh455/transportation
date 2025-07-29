import React from 'react'
import ClientsSlider from '../Components/ClientsSlider'
import WhatWeDoSection from '../Components/WhatWeDoSection'
import Networks from '../Components/Networks'
import ConsultationSection from '../Components/ConsultationSection'
import MainSection from '../Components/MainSection'
import OurServices from '../Components/OurServices'
import { MdOutlineChat } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      <MainSection/>
<<<<<<< HEAD
      <ClientsSlider />
<WhatWeDoSection isHomepage={true} />
      <Networks />
      <ConsultationSection/>
    </div>  
=======
      <OurServices/>
        <div className="fixed bottom-6 left-6 z-50 ">
        <button
          className="bg-sec border-main text-main border-2 p-3 rounded-full flex items-center transition-all duration-300"
        >
          <FaWhatsapp size={32}/>
        </button>
      </div>
    </div>
>>>>>>> 89892d6 (Update: Added)
  )
}
