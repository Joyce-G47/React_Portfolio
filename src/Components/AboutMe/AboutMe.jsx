import React, { useState } from 'react';
import { Card, CardContent } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faAward, faTasks, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import './AboutMe.css';
import Ellipse9 from '../../assets/Ellipse9.png';

function AboutMe() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id='about-me' style={{ paddingTop: '50px'}}>
      <h3 style={{ fontWeight: 'bold', marginBottom: '50px', color: '#d62196', marginTop: '50px', textAlign: 'center' }}>About Me</h3>
      <div className="about-me-container">
        <div className="about-me-image">
          <img src={Ellipse9} alt="Ellipse9" className="about-me-image-img" />
          <p className='about-job'>I design, develop, and maintain cool software applications. My key responsibilities include coding, debugging, and testing to ensure the delivery of high-quality solutions.</p>
        </div>
        <div className="qualification-card">
          <Card className="card">
            <CardContent className="card-content">
              <FontAwesomeIcon icon={faAward} size="2x" className="card-icon" />
              <div>
                <h5 className="card-title">Qualification</h5>
              </div>
              <div className='description'>
                <h6>AWS Cloud Practitioner Certificate 2022</h6>
              </div>
              <div className='description'>
                <h6>Bachelor of Business Administration Honours 2022</h6>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="experience-card">
          <Card className="card">
            <CardContent className="card-content">
              <FontAwesomeIcon icon={faBriefcase} size="2x" className="card-icon" />
              <div>
                <h5 className="card-title">Experience</h5>
              </div>
              <div className='description'>
                <h6>Software Developer Intern 1yr</h6>
              </div>
              <div className='description'>
                <h6>Universal Banker</h6>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="statistics-card">
        <Card className="stats-card">
          <CardContent className="stats-card-content">
            <div className='description'>
              <h4 className="stats-title">
                <FontAwesomeIcon icon={faBriefcase} className="stats-icon" />
                1+
              </h4>
              <h6>Front-end Development</h6>
            </div>
            <div className='description'>
              <h4 className="stats-title">
                <FontAwesomeIcon icon={faTasks} className="stats-icon" />
                5+
              </h4>
              <h6>Completed Projects</h6>
            </div>
            <div className='description'>
              <h4 className="stats-title">
                <FontAwesomeIcon icon={faPeopleGroup} className="stats-icon" />
                2+
              </h4>
              <h6>Team Collaboration</h6>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default AboutMe;
