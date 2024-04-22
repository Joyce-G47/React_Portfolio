
import React, { useState } from 'react';
import { Tabs, Tab, Card, CardContent } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faGears, faInstitution } from '@fortawesome/free-solid-svg-icons';
import Ellipse7 from '../../assets/Ellipse7.png';


function AboutMe() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id='about-me'>
       <h3 style={{ fontWeight: 'bold', marginBottom: '30px', color: '#d62196', marginTop: '100px', textAlign: 'center', justifyContent:'center'}}>About Me</h3>
      <div className="about-me-container" style={{gap:'3rem'}}>


      <div className="qualification-card" style={{display: 'flex', justifyContent: 'center'}}>
      <div>
      <FontAwesomeIcon icon={faGraduationCap} size="4x" style={{ marginRight: '50px',marginTop:'25px' ,color: '#CDB7FA' }} />
      <h5 style={{fontWeight:'bold',marginTop:'15px',color: '#CDB7FA'}}>Qualification</h5>
      </div>
      <Card style={{ display: 'flex', alignItems: 'left' ,width:'50rem',height:'10rem', marginBottom:'30px', border:'none'}}>
      <CardContent style={{ display: 'flex' , gap:'6rem', alignContent: 'center'}}> 
  <div style={{ flex: 1 }}>
   
    <div className='description'>
      <h6 style={{fontWeight:'bold'}}>AWS Cloud Practitioner Certificate</h6>
      <ul>
        <li FontAwesomeIcon icon={faInstitution}><span style={{ fontSize: '0.8em' }}>Pearson</span></li>
        <li><span style={{ fontSize: '0.8em' }}>2022</span></li>
        
      </ul>
    </div>
  </div>
  <div style={{ flex: 1 }}>
    <div className='description'>
      <h6 style={{fontWeight:'bold'}}>Bachelor of Business Administration Honours</h6>
      <ul>
        <li><span style={{ fontSize: '0.8em' }}>Management College of South Africa</span></li>
        <li><span style={{ fontSize: '0.8em' }}>2021</span></li>
        
      </ul>
    </div>
  </div>
  <div style={{ flex: 1 }}>
    <div className='description'>
      <h6 style={{fontWeight:'bold'}}>Bachelor of Business Administration Degree</h6>
      <ul>
        <li><span style={{ fontSize: '0.8em' }}>CIDA City Campus</span></li>
        <li><span style={{ fontSize: '0.8em' }}>2013</span></li>
        
      </ul>
    </div>
  </div>
</CardContent>
    </Card>
      </div>


      

      <div className="experience-card" style={{display: 'flex', justifyContent: 'center'}}>
      
      <Card  style={{ display: 'flex', alignItems: 'left', width:'50rem',height:'10rem', marginBottom:'30px' }}>
      <CardContent style={{ display: 'flex' , gap:'6rem',alignContent: 'center'}}> 
  <div style={{ flex: 1 }}>
   
    <div className='description'>
      <h6 style={{fontWeight:'bold'}}>Software Developer Intern</h6>
      <ul>
        <li><span style={{ fontSize: '0.8em' }}>CapaCiti</span></li>
        <li><span style={{ fontSize: '0.8em' }}>June 2023-Present</span></li>
        
      </ul>
    </div>
  </div>
  <div style={{ flex: 1 }}>
    <div className='description'>
      <h6 style={{fontWeight:'bold'}}>Univesal Banker</h6>
      <ul>
        <li><span style={{ fontSize: '0.8em' }}>Standard Bank</span></li>
        <li><span style={{ fontSize: '0.8em' }}>2022-2023</span></li>
        
      </ul>
    </div>
  </div>
  <div style={{ flex: 1 }}>
    <div className='description'>
      <h6 style={{fontWeight:'bold'}}>Cashier</h6>
      <ul>
        <li><span style={{ fontSize: '0.8em' }}>Mr Price</span></li>
        <li><span style={{ fontSize: '0.8em' }}>2013-2015</span></li>
        
      </ul>
    </div>
  </div>
</CardContent>
    </Card>
    <div>
    <FontAwesomeIcon icon={faBriefcase} size="4x" style={{ marginLeft: '50px',marginTop:'25px', color: '#CDB7FA' }} />
    <h5 style={{fontWeight:'bold',marginTop:'15px',marginLeft: '50px', color: '#CDB7FA'}}>Experience</h5>
    </div>
      </div>

      <div className="skills-card" style={{display: 'flex', justifyContent: 'center'}}>
      <div >
      <FontAwesomeIcon  icon={faGears} size="4x" style={{ marginRight: '50px',marginTop:'25px', color: '#CDB7FA' }} />
      <h5 style={{fontWeight:'bold',marginTop:'15px',color: '#CDB7FA'}}>Skills</h5>
      </div>
      <Card  style={{ display: 'flex', alignItems: 'left',width:'50rem',height:'10rem' ,marginBottom:'30px'}}>
      <CardContent style={{ display: 'flex' , gap:'6rem'}}> 
  <div style={{ flex: 1 }}>
   
    <div className='description'>
      <h6 style={{fontWeight:'bold'}}>Front-End Development</h6>
      <ul>
        <li><span style={{ fontSize: '0.8em' }}>HTML</span></li>
        <li><span style={{ fontSize: '0.8em' }}>CSS</span></li>
        <li><span style={{ fontSize: '0.8em' }}>Bootstrap</span></li>
        <li><span style={{ fontSize: '0.8em' }}>React</span></li>
      </ul>
    </div>
  </div>
  <div style={{ flex: 1 }}>
    <div className='description'>
      <h6 style={{fontWeight:'bold'}}>Back-End Development</h6>
      <ul>
        <li><span style={{ fontSize: '0.8em' }}>Node.js</span></li>
        <li><span style={{ fontSize: '0.8em' }}>Express.js</span></li>
        <li><span style={{ fontSize: '0.8em' }}>MongoDB</span></li>
      </ul>
    </div>
  </div>
  <div style={{ flex: 1 }}>
    <div className='description'>
      <h6 style={{fontWeight:'bold'}}>Programming Languages</h6>
      <ul>
        <li><span style={{ fontSize: '0.8em' }}>Python</span></li>
        <li><span style={{ fontSize: '0.8em' }}>Java</span></li>
        <li><span style={{ fontSize: '0.8em' }}>C++</span></li>
      </ul>
    </div>
  </div>
</CardContent>

    </Card>
    
      </div>
      </div>


      
    </section>
  );
}

export default AboutMe;