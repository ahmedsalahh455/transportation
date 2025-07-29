import React from 'react'
import AboutHeader from '../Components/AboutHeader'
import WhatWeDoSection from '../Components/WhatWeDoSection'
import ClientsSlider from '../Components/ClientsSlider'
import WhyChoose from '../Components/WhyChoose'

export default function About() {
  return (
    <div>
        <AboutHeader/>
        <WhatWeDoSection />
        <ClientsSlider />
        <WhyChoose/>
    </div>
  )
}
