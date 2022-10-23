// You can create a default template from extension ES7 called: rafce

import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Video from '../components/Video'



const Home = () => {
  return (
    <AnimatedPage>
      <div>
        <Navbar />
        <Video />
        <Footer />
      </div>
    </AnimatedPage>
  )
}

export default Home
