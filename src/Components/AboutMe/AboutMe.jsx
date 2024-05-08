
import React, { useState } from 'react';
import { Card, CardContent } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faAward } from '@fortawesome/free-solid-svg-icons';
import './AboutMe.css';
import Ellipse9 from '../../assets/Ellipse9.png';
import { faRProject } from '@fortawesome/free-brands-svg-icons/faRProject';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';


function AboutMe() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id='about-me' style={{ paddingTop: '50px'}}>
    
      <h3 style={{ fontWeight: 'bold', marginBottom: '50px', color: '#d62196', marginTop: '50px', textAlign: 'center' }}>About Me</h3>
      <div className="about-me-container" style={{ gap: '2rem',display:'flex',flexDirection:'row',justifyContent:'right' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
  <img src={Ellipse9} alt="Ellipse9" style={{ width: '10rem', height: '10rem', borderRadius: '20px', marginBottom: '20px' }} />
  <p style={{ color: '#6e636b', textAlign: 'justify', fontSize: '18px', lineHeight: '1.7', marginTop: '20px', marginBottom: '20px' }}>I design, develop, and maintain cool software applications. My key responsibilities include coding, debugging, and testing to ensure the delivery of high-quality solutions.</p>
</div>

        <div className="qualification-card" style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center' }}>
        
          <Card style={{ display: 'flex',flexDirection:'column', alignItems: 'left', width: '16rem', height: '15rem',color: '#6e636b',marginBottom: '20px', border: '1px solid #6e636b',borderRadius:'20px', boxShadow: 'none', transition: 'transform 0.3s' }}>
            <CardContent style={{ display: 'flex',flexDirection:'column', alignContent: 'center', justifyContent: 'center' }} className="hoverEffect">
            <FontAwesomeIcon icon={faAward} size="2x" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', color: '#CDB7FA' }} />
            <div>
            <h5 style={{ fontWeight: 'bold', marginTop: '15px', color: '', textAlign: 'center' }}>Qualification</h5>
          </div>
          <div className='description'>
            <h6 style={{textAlign: 'center'}}>AWS Cloud Practitioner Certificate 2022</h6>
          </div>
          <div className='description'>
            <h6 style={{textAlign: 'center'}} >Bachelor of Business Administration Honours 2022</h6>
          </div>
            </CardContent>
          </Card>
        </div>

        <div className="experience-card" style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center' }}>
          <Card style={{ display: 'flex',flexDirection: 'column', alignItems: 'right', width: '16rem', height: '15rem', color:'#6e636b' , marginBottom: '20px',border: '1px solid #6e636b',borderRadius:'20px', boxShadow: 'none', transition: 'transform 0.3s' }}>
            <CardContent style={{ display: 'flex',flexDirection:'column', alignContent: 'center',justifyContent:'center' }} className="hoverEffect">
            <FontAwesomeIcon icon={faBriefcase} size="2x" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', color: '#CDB7FA' }} />
              <div>
              <h5 style={{ fontWeight: 'bold', marginTop: '15px', color: '#6e636b', textAlign: 'center' }}>Experience</h5>
              </div>
                <div className='description'>
                  <h6 style={{ textAlign:'center' }}>Software Developer Intern 1yr</h6>
                </div>
              
              
                <div className='description'>
                  <h6 style={{ textAlign:'center' }}>Universal Banker </h6>
                </div>
              
          
            </CardContent>
          </Card>
          
        </div>

      </div>

      
      <div className="experience-card" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Card style={{ display: 'flex',flexDirection: 'column', alignItems: 'center', width: '45rem', height: '6rem', color:'#6e636b' , marginBottom: '20px',border: 'none',borderRadius:'20px', boxShadow: 'none', transition: 'transform 0.3s' }}>
            <CardContent style={{ gap:'20px',display: 'flex', alignContent: 'center',justifyContent:'center' }} className="hoverEffect">
           
                <div className='description'>
                  <h4 style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                    <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '10px',color: '#CDB7FA' }} />
                     1+
                  </h4>
                  <h6>Front-end Development</h6>
                </div>
              
              
                <div className='description'>
  <h4 style={{ textAlign: 'center', fontWeight: 'bolder' }}>
    <FontAwesomeIcon icon={faTasks} style={{ marginRight: '10px',color: '#CDB7FA' }} />
    5+ 
  </h4>
  <h6>Completed Projects</h6>
</div>

                <div className='description'>
                  <h4 style={{ textAlign:'center',fontWeight:'bolder'  }}>
                  <FontAwesomeIcon icon={faPeopleGroup} style={{ marginRight: '10px',color: '#CDB7FA' }} />
                   
                    2+ </h4>
                  <h6>Team Collaboration</h6>
                </div>
              
          
            </CardContent>
          </Card>
          
        </div>
          
      
    </section>
  );
}

export default AboutMe;
