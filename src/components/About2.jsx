import React from 'react'
import './About2Styles.css'
import Brain from '../assets/BRain-removebg-preview (1).png'

const About2 = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 Brain-floating' src={Brain} alt="/" />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold '>OUR HISTORY AND MOTIVES</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl text-[black] font-bold py-2'>Manage Data analytics Centrally</h1>
            <p className='text-[black]'>
                lorem aaoinraorin aigna o isnoinsgasogna sdognsogndog ndsognosdgn sdogansosang odsn odsn
                adosgnsogansognsidodsngosngsodginsgiansoisngosng  oasdngdoign sodgnsdo nsgosng osnsod ndsognosdgn
                asdngsi gnsdogi dns sgsngowieniwirgnr inargianapingpasgn pnp np arp anr pangainspg saingpdsgnpra n 
                apgo apon pnwaiwpqqp qofgn agpangpnwgpgn a  wpng anw gnapn an[rngargna ernhnep an pinpnrn a]
            </p>
            <button className='bg-black text-[#00df0a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get started</button>
        </div>
      </div>
    </div>
  )
}

export default About2
