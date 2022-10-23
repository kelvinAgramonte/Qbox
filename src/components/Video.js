
import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'
import simulatorVideo from '../assets/Tunnel - 64628.mp4'

const Video = () => {
  return (
    <div>
      <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={simulatorVideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Defined Memory</h1>
            <p>Observe Our Neurons A Lot Closer</p> 
        <div>
            <Link to='/about' className='btn'>About</Link>
            <Link to='/research' className='btn'>Research</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Video