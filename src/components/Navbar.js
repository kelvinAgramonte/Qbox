import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import CubeLogo from '../assets/Cube_Logo.png'


const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [color, setColor] = useState(false)
      const changeColor = () => {
        if(window.scrollY >= 100) {
          setColor(true)
        } else {
          setColor(false)
        }
      }

      window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to= '/'><h1 style={{position: 'absolute', top: '30px', left: '25px'}}>Qu<span>&Lambda;</span>mbox</h1><img src={CubeLogo} className='cube-logo spin-logo' alt='Cube Logo' /> </Link>
      
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/research'>Research</Link>
        </li>
        <li>
            <Link to='/team'>Team</Link>
        </li>
        {/* <li>
            <Link to='/crypto'>Crypto</Link>
        </li> */}
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
      </div>
    </div>
  )
}

export default Navbar
