import React from 'react'
import PrimarySearchAppBar from './Navbar'
import Service from './service'
import Footer from './Footer'
import TemporaryDrawer from './Drawer'
import ControlledAccordions from './Accordition'
import Midportion from './Midportion'

function Homepage() {
  return (
    <div>
      <PrimarySearchAppBar/>
      <TemporaryDrawer/>
      <Service/>
      <ControlledAccordions/>
      <Midportion/>
      
      <Footer/>
    </div>
  )
}

export default Homepage
