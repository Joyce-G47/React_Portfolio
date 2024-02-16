import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo .png'


const Navbar = () => {
  return (
    
    <div className='navbar'>
      <img src={Logo} alt="logo" style={{ width: '80px', height: '80px', marginLeft: '100px' }} />

      <ul>
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      
    </div>
  )
}


export default Navbar
