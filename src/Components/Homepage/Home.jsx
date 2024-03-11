import React, { useState } from 'react';
import './Home.css';
import imag from "../../assets/Image1.png";
import Sibongile from '../../assets/Sibongile Gumbi (1).pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faTwitter,faLinkedinIn} from "@fortawesome/free-brands-svg-icons";


const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

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
        
      

      
        
        
  



  <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="flip-card-info">
        <span>
          <p className='paraInfo'>Hi there, my name is Sibongile and I am a Software Developer.
            I create cool web applications! I've learned how to use languages like HTML, CSS, Java, Python, and JavaScript.
            This job isn't just a regular job; it's a journey where I enjoy working with different people and solve interesting life problems.
          </p>
        </span>
        </div>
        </div>

        <div className="flip-card-back">
          <div className='education-experience-container'>
            <div className='Education' style={{ textAlign: 'left', marginLeft: '10px', padding: '10px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1em', textAlign: 'center', marginTop: '10px', marginBottom: '5px' }}>Education</p>
              <span style={{ fontSize: '0.9em', marginBottom: '5px', fontWeight: 'bold' }}>Bachelor of Business Administration Honours</span><br />
              <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>Management College of South Africa</span><br />
              <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>2021</span><br />
              <span style={{ fontSize: '0.9em', marginBottom: '5px', fontWeight: 'bold' }}>IT Technician Certificate</span><br />
              <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>CIDA CITY Campus ICT</span><br />
              <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>2013</span><br />
              <span style={{ fontSize: '0.9em', marginBottom: '5px', fontWeight: 'bold' }}>AWS Cloud Practitioner Certificate</span><br />
              <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>Pearson</span><br />
              <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>2022</span>
            </div>
          
          <div className='Experience' style={{ textAlign: 'left', marginLeft: '10px', padding: '10px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '1em', textAlign: 'center', marginBottom: '5px' }}>Experience</p>
            <span style={{ fontSize: '0.9em', marginBottom: '5px', fontWeight: 'bold' }}>Software Developer</span><br />
            <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>Younglings Africa</span><br />
            <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>Jan 2024- Present</span><br />
            <span style={{ fontSize: '0.9em', marginBottom: '5px', fontWeight: 'bold' }}>Universal Banker</span><br />
            <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>Standard Bank</span><br />
            <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>2022-2023</span><br />
          </div>
        </div>
      </div>

       


        </div>
      </div>
    </section>
  );
}

export default Home;


