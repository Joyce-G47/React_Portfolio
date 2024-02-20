import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo .png'


const Navbar = () => {
  return (
    


    
    <div className='navbar'>
      <img src={Logo} alt="logo" style={{ width: '80px', height: '80px', marginLeft: '50px' }} />

      <ul>
        <li style={{color:'white'}}><a href="#Home">Home</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

    
      
    </div>

    
  )
}


export default Navbar
