import React from 'react'
import './AboutStyles.css'
import HumanModel from '../assets/img/3D Model Face.jpg'
import Typed from 'react-typed'



const About = () => {
  return (
    <>
  
    <div className='text-white'>
      <div className='container'>
        {/* Left-Side */}
        <div className='left'>
            <h1 className='main-title-about md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>At Quambox</h1>
                <p className='sub-title-about md:text-5xl sm:text-4xl text-xl font-bold py-4'>We're Curious as Much as You are with</p>
                <Typed
                    className='auto-typing md:text-5xl sm:text-4xl text-xl font-bold'
                    strings={['Memory', 'Behavior', 'Longevity']}
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop 
                />
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Implementing a more detailed definition on how to communicate with our body.</p>
          </div>

          {/* Right-Side */}
          <div className='right'>
            <div className='img-container'>
              <img src={HumanModel} alt=''></img>
            </div>
          </div>
      </div>
    </div>

    </>
  )
}

export default About
