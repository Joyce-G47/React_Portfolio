import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab'; // Update the import path
import './AboutMe.css';
import { Card } from 'react-bootstrap';

function AboutMe() {
  return (
    <div className="about-me-container" style={{display:'flex'}}>
    <h3 className='text-left  text-bold margin-100rem font-size-1rem' style={{ marginBottom: '30px', marginTop: '150px', textAlign:'left', color:'#d62196' }}>About Me
    <p style={{width:'30rem', height:'30rem',lineHeight: '1.5', fontSize:'large', marginTop: '10px', color:'#6e636b'}}>As a Junior Software Developer, I collaborated with my team
members to design, develop, and maintain software applications.
Responsibilities include coding, debugging, and testing to ensure
the delivery of high-quality solutions. I acquired a very strong
understanding of programming languages such as Java, Python, and
JavaScript. I am familiar with web development technologies and a
proactive approach to learning and problem-solving are essential.</p></h3>



    <div className="about-me" style={{marginTop:'100px', width:'30rem', height:'30rem'}}> 
      <p style={{ fontWeight: 'bold', textAlign: 'center'}}>Education</p>
    <Timeline align="left" >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{marginRight:'15rem', padding:'10px'}}>
          <h4 className="timeline-title" style={{fontWeight: 'bold',fontSize: '0.9em' }}>Bachelor of Business Administration Honours</h4>
          <p>
            <span style={{ fontSize: '0.9em', marginBottom: '5px'}}>Management College of South Africa</span><br />
            <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>2021</span><br />
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{marginRight:'15rem', fontSize: '0.9em'}}>
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
        <TimelineContent style={{marginRight:'15rem'}}>
          <div className="timeline-title">AWS Cloud Practitioner Certificate</div>
          <p>
            <span style={{ fontSize: '0.9em', fontWeight: 'bold' }}>Pearson</span><br />
            <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>2022</span>
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>

    
    <Card className="about-me" style={{marginTop:'100px', width:'30rem', height:'30rem'}}> 
      <p style={{ fontWeight: 'bold', textAlign: 'center'}}>Experience</p>
    <Timeline align="alternate" style={{ width:'30rem', height:'30rem',}}>
      <TimelineItem>
        <TimelineSeparator align='left'>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{marginRight:'15rem', fontSize: '0.9em'}}>
          <div className="timeline-title" style={{fontWeight: 'bold' }}>Junior Software Developer</div>
          <p>
            <span style={{ fontSize: '0.8em', marginBottom: '5px'}}>ABSA partnering with Capaciti</span><br />
            <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>Jan 2024- Present</span><br />
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{marginRight:'15rem', fontSize: '0.9em'}} >
          <div className="timeline-title" style={{fontWeight: 'bold' }}>Universal Banker</div>
          <p>
            <span style={{ fontSize: '0.8em', marginBottom: '5px',}}>Standard Bank</span><br />
            <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>2022-2023</span><br />
          </p>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
    </Card>
    </div>
  );
}

export default AboutMe;

