import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaSearchLocation size={20} style={{color: '#fff', marginRight: '2rem'}} />
                <div>
                    <p>16301 Innovation Ln</p>
                    <h4>Fort Myers, FL 33913</h4>
                </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}} />1-239-308-3104</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}} />info@Quambox.com</h4>
            </div>
        </div>

        <div className='right'>
            <h4>About the company</h4>
            <p>Quambox is a research team focused on the interpretation of neuron performance. 
                We analyze and assemble different technologies using reverse engineering to reconstruct neuron's activities.
                <div className='social'>
                    <FaFacebook size={30} style={{color: '#fff', marginRight: '1rem'}} />
                    <FaTwitter size={30} style={{color: '#fff', marginRight: '1rem'}} />
                    <FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}} />
                </div>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
