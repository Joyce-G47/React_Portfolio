import React, { useState } from 'react';
import './Home.css';
import imag from "../../assets/Image1.png";
import Sibongile from '../../assets/Sibongile Gumbi (1).pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faTwitter,faLinkedinIn} from "@fortawesome/free-brands-svg-icons";


const Home = () => {
 

  return (
    <section id='home'>
    
        <div className="card-info">
          <div className="card-avatar">
            <img src={imag} alt="Picture" className='imag'/>
          </div>
          <div className="card-title">Sibongile Gumbi</div>
          <div className="card-subtitle">Software Developer</div>
          <span>
          <a href={Sibongile} target='_blank' rel='noopener noreferrer'>
            <button className='btn' 
            style={{ 
              backgroundColor: '#d62196', 
              color: 'white', 
              paddingLeft: '1rem',  
              marginLeft: 185, 
              marginTop: 20,  
              width: 150,
              height: 35,
              transition: 'background-color 0.3s',
              cursor: 'pointer', 
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#d62196'
                e.target.style.boxShadow = '0 0 10px #d62196'; 
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#d62196';
                e.target.style.boxShadow = 'none'; 
                e.target.style.color = 'white'
              }}>Hire Me
            </button>
          </a>
        </span>
        <div className='card-social'>
  <a href="https://www.linkedin.com/in/joyce-gumbi/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BI9Dnnlx2SPKPmeEw6LxH9g%3D%3D/" target="_blank" rel="noopener noreferrer">
    <button className="card1">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </button>
  </a>

  <a href="https://github.com/Joyce-G47" target="_blank" rel="noopener noreferrer">
    <button className="card3">
      <FontAwesomeIcon icon={faSquareGithub} />
    </button>
  </a>

  <a href="https://twitter.com/sbo_gumbi" target="_blank" rel="noopener noreferrer">
    <button className="card2">
      <FontAwesomeIcon icon={faTwitter} />
    </button>
  </a>
</div>
        </div> 
        
      
<div>
        <span>
          <p className='paraInfo'>Hey there, I'm Sibongile, a passionate Software Developer based in vibrant Cape Town, South Africa. Let's connect and build something extraordinary together.

            
          </p>
        </span>   

        </div>
        
        
  



  
       


        
      
    </section>
  );
}

export default Home;


