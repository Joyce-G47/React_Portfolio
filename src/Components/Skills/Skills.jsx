import React from 'react'
import './Skills.css'
import imag from "../../assets/Image1.png"


const Skills = () => {
  return (
    <section id='skills'>
      <img src={imag} alt="Picture" className='imag'/>
      
        <div className='homeContent'>
            <span className='nameTitle'>Sibongile Gumbi</span>
            <span><br/>Software Developer</span>
            <bv/><button className='btn'>Hire Me</button>
            <p className='paraInfo'>Hi there, my name is Sibongile and I am a Software Developer. 
            I create cool web applications! I've learned how to use languages like HTML, CSS, Java, Python, and JavaScript.
             This job isn't just a regular job;
             it's a journey where I enjoy working with different people and solve interesting life problems. </p>
            

        </div>
        
    </section>
  )
}

export default Skills