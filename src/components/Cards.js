import React from 'react'
import './About4Styles.css'
// import Quantum from '../assets/Quantum.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <h1 className='main-heading-values'>OUR VALUES</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem]' src={Quantum} alt='' /> */}
                <h2 className='text-2xl font-bold text-center py-8'>Mission</h2>
                <div className='our-values'>
                    <p className='text-center text-md '>Rompiendo la liga</p>
                </div>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem]' src={Quantum} alt='' /> */}
                <h2 className='text-2xl font-bold text-center py-8'>Vision</h2>
                <div className='our-values'>
                    <p className='text-center text-md '>Loremgsingsin aog nasoiasng osaingsad ogindsosdin osgsgson asgoasgn s osn s
                    apso gaps osp so psog msp somgp so msp osmgp ogm pogm p osm psgo msp gsom p osmg</p>
                </div>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem]' src={Quantum} alt='' /> */}
                <h2 className='text-2xl font-bold text-center py-8'>Commitment</h2>
                <div className='our-values'>
                    <p className='text-center text-md '>Loremgsingsin aog nasoiasng osaingsad ogindsosdin osgsgson asgoasgn s osn s
                    apso gaps osp so psog msp somgp so msp osmgp ogm pogm p osm psgo msp gsom p osmg</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
