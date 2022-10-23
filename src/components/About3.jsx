import React from 'react'
import './About3Styles.css'
import { GiBurstBlob, GiFamilyTree, GiFishingNet, GiFireBottle } from "react-icons/gi"
import AboutCard from './AboutCard'


const About3 = () => {
  return (
    <div className='aboutSection3'>
        <div className='container'>
            <h2>A Revolutionary Procedure</h2>
            <p>It allows practitioners to develope an invasive surgery at a much lower risk</p>
            <div className='card-container'>
                <div className='card'>
                    <AboutCard icon={<GiBurstBlob className='icon' />} heading= 'Reliable, tamper-proof network' 
                    text='Graphic proofs to connect highly accurate and available data/APIs to any smart contract'/>
                </div>
                <div className='card'>
                    <AboutCard icon={<GiFamilyTree className='icon' />} heading= 'Reliable, tamper-proof network' 
                    text='Graphic proofs to connect highly accurate and available data/APIs to any smart contract'/>
                </div>
                <div className='card'>
                    <AboutCard icon={<GiFishingNet className='icon' />} heading= 'Reliable, tamper-proof network' 
                    text='Graphic proofs to connect highly accurate and available data/APIs to any smart contract'/>
                </div>
                <div className='card'>
                    <AboutCard icon={<GiFireBottle className='icon' />} heading= 'Reliable, tamper-proof network' 
                    text='Graphic proofs to connect highly accurate and available data/APIs to any smart contract'/>
                </div>
            </div>
            <a href='/' className='btn'>Use Defi</a>
        </div>
    </div>
  )
}

export default About3
