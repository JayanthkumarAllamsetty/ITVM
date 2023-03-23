import React from 'react'
import Navbar from '../Components/Navbar'

import Footer from '../Components/footer'
import HeroImg from '../Components/HeroImg'
import AboutContent from '../Components/AboutContent'
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="About" text="Our Face Recognition Technology offers unparalleled security and surveillance capabilities with real-time monitoring and multi-factor authentication. With privacy controls and customization options, it's the future of security and available now for high-security environments. "/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About