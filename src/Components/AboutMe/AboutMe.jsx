import React, { useState } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase,faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import Sibo from '../../assets/Sibo2.png';

function AboutMe() {
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(false);

  return (
    <section id='about-me'>
      <div className="about-me-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="about-me-content" style={{ maxWidth: '600px', marginRight: '50px' }}>
         
        <h3 style={{ fontWeight: 'bold', marginBottom: '30px', color: '#d62196', marginTop: '100px', textAlign: 'center' }}>About Me</h3>
          <img src={Sibo} alt=""  style={{border:'50%', width:'300px'}}/>
          <p style={{ lineHeight: '1.5', fontSize: 'large', color: '#6e636b' , marginTop:'2px'}}>
            As a Junior Software Developer, I create cool web applications! I've learned how to use languages like HTML, CSS, Java, Python, and JavaScript. I collaborated with my team members to design, develop, and maintain software applications. Responsibilities include coding, debugging, and testing to ensure the delivery of high-quality solutions. This job isn't just a regular job; it's a journey where I enjoy working with different people and solve interesting life problems.
          </p>
        </div>
        <div className="education-experience-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="buttons-container" style={{ display: 'flex', gap: '5px'}}>
            
            <button
              style={{
                backgroundColor: '#d62196',
                color: 'white',
                paddingLeft: '1rem',
                width: 150,
                height: 35,
                transition: 'background-color 0.3s',
                cursor: 'pointer',
                borderRadius: '10px',
                border: 'none',
                marginTop: '150px',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#d62196';
                e.target.style.boxShadow = '0 0 10px #d62196';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#d62196';
                e.target.style.boxShadow = 'none';
                e.target.style.color = 'white';
              }}
              onClick={() => { setShowEducation(true); setShowExperience(false); }}
              >
                <FontAwesomeIcon icon={faGraduationCap} /> Education
                </button>

            <button
              style={{
                backgroundColor: '#d62196',
                color: 'white',
                paddingLeft: '1rem',
                width: 150,
                height: 35,
                transition: 'background-color 0.3s',
                cursor: 'pointer',
                borderRadius: '10px',
                border: 'none',
                marginTop: '150px',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#d62196';
                e.target.style.boxShadow = '0 0 10px #d62196';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#d62196';
                e.target.style.boxShadow = 'none';
                e.target.style.color = 'white';
              }}
              onClick={() => { setShowEducation(false); setShowExperience(true); }}
              >
                <FontAwesomeIcon icon={faBriefcase} /> Experience
                </button>

            <button
              style={{
                backgroundColor: '#d62196',
                color: 'white',
                paddingLeft: '1rem',
                width: 150,
                height: 35,
                transition: 'background-color 0.3s',
                cursor: 'pointer',
                borderRadius: '10px',
                border: 'none',
                marginTop: '150px',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#d62196';
                e.target.style.boxShadow = '0 0 10px #d62196';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#d62196';
                e.target.style.boxShadow = 'none';
                e.target.style.color = 'white';
              }}
              onClick={() => { setShowEducation(false); setShowExperience(true); }}
              >
                <FontAwesomeIcon icon={faScrewdriverWrench} /> Skills
                </button>
          </div>

          {showEducation && (
            <div className="education-container" style={{ display: 'flex' }} >
              <Card className="about-me" style={{ marginTop: '50px', width:'450px' }}>
              
                <Timeline align="left" >
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{ marginRight: '15rem', padding: '10px' }}>
                      <h4 className="timeline-title" style={{ fontWeight: 'bold', fontSize: '0.8em' }}>Bachelor of Business Administration Honours</h4>
                      <p>
                        <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>Management College of South Africa</span><br />
                        <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>2021</span><br />
                      </p>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{ marginRight: '15rem', fontSize: '0.9em' }}>
                      <div className="timeline-title">IT Technician Certificate</div>
                      <p>
                        <span style={{ fontSize: '0.9em', marginBottom: '5px', fontWeight: 'bold' }}>CIDA CITY Campus ICT</span><br />
                        <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>2013</span><br />
                      </p>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{ marginRight: '15rem' }}>
                      <div className="timeline-title">AWS Cloud Practitioner Certificate</div>
                      <p>
                        <span style={{ fontSize: '0.9em', fontWeight: 'bold' }}>Pearson</span><br />
                        <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>2022</span>
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Card>
            </div>
          )}

          {showExperience && (
            <Card className="about-me" style={{ marginTop: '50px', width: '450px', height: '30rem' }}>
              <Timeline align="alternate" style={{ width: '30rem', height: '30rem' }}>
                <TimelineItem>
                  <TimelineSeparator align='left'>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent style={{ marginRight: '15rem', fontSize: '0.9em' }}>
                    <div className="timeline-title" style={{ fontWeight: 'bold' }}>Junior Software Developer</div>
                    <p>
                      <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>ABSA partnering with Capaciti</span><br />
                      <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>Jan 2024- Present</span><br />
                    </p>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent style={{ marginRight: '15rem', fontSize: '0.9em' }} >
                    <div className="timeline-title" style={{ fontWeight: 'bold' }}>Universal Banker</div>
                    <p>
                      <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>Standard Bank</span><br />
                      <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>2022-2023</span><br />
                    </p>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

