import React from 'react'
import './ResearchStyles.css'
import { Link } from 'react-router-dom'
import Nanotechnology from '../assets/nanotechnology.jpg'
import QuantumEntanglement from '../assets/QEntanglement.png'

const Research = () => {
  return (
    <div className='research'>
        <div className='left'>
            <h1>Research</h1>
            <p>Lorem adgoidpgagpagsa asg psdgod pdagd paadjgadp ogd adgadpg adg adadp godjg paogjadpgdao adgpadgo adg padog adpa adjg
            </p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={QuantumEntanglement} className='img' alt='Quantum-Entanglement' />
                </div>
                <div className='image-stack bottom'>
                    <img src={Nanotechnology} className='img' alt='Nanotechnology' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Research
