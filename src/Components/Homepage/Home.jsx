import React from 'react'
import './Home.css'
import imag from "../../assets/Image1.png"

const Home = () => {
  return (
    
    <section id='home'>
      <div className='homeContainer'>
        <img src={imag} alt="Picture" className='imag'/>
      </div>

      <div className='homeContent'>
        <span className='nameTitle'>Sibongile <span className='orangeText'>Gumbi</span></span>
        <span className='position'>Software Developer</span>
        <button className='btn' style={{ backgroundColor: '#d62196', color: 'white' }} >Hire Me</button>
        <p className='paraInfo'>Hi there, my name is Sibongile and I am a Software Developer. 
            I create cool web applications! I've learned how to use languages like HTML, CSS, Java, Python, and JavaScript.
             This job isn't just a regular job;
             it's a journey where I enjoy working with different people and solve interesting life problems. </p>
      </div>
        
    </section>
  
  );
}

export default Home;
