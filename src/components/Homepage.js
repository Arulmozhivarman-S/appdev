import React from 'react'
import PrimarySearchAppBar from './Navbar'
import Service from './service'
import Footer from './Footer'
import ControlledAccordions from './Accordition'
import Midportion from './Midportion'
import VoiceNavigation from './VoiceNavigation'

function Homepage() {
  return (
    <div>
      <PrimarySearchAppBar/>
      <VoiceNavigation/>
      <Service/>
      <ControlledAccordions/>
      <Midportion/>
      
      <Footer/>
    </div>
  )
}

export default Homepage
