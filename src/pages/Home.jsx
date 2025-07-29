import React from 'react'
import ClientsSlider from '../Components/ClientsSlider'
import WhatWeDoSection from '../Components/WhatWeDoSection'
import Networks from '../Components/Networks'
import ConsultationSection from '../Components/ConsultationSection'
import MainSection from '../Components/MainSection'

export default function Home() {
  return (
    <div>
      <MainSection/>
      <ClientsSlider />
<WhatWeDoSection isHomepage={true} />
      <Networks />
      <ConsultationSection/>
    </div>  
  )
}
