import React from 'react'
import Navbar from '../components/Navbar'
import AboutSection from '../components/About'
import Footer from '../components/Footer'
import AnimatedPage from '../components/AnimatedPage'
import About2 from '../components/About2'
import About3 from '../components/About3'
import About4 from '../components/About4'



const About = () => {
  return (
    <AnimatedPage>
      <div>
        <Navbar />
        <AboutSection />
        <About2 />
        <About3 />
        <About4 />
        <Footer />
      </div>
    </AnimatedPage>
  )
}

export default About
