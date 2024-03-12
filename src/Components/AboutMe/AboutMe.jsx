import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab'; // Update the import path
import './AboutMe.css';

function AboutMe() {
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="timeline-title">Bachelor of Business Administration Honours</div>
          <p>
          <span style={{ fontSize: '0.9em', marginBottom: '5px', fontWeight: 'bold' }}>Bachelor of Business Administration Honours</span><br />
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
        <TimelineContent>
        <div className="timeline-title">IT Technician Certificate</div>
        <span style={{ fontSize: '0.9em', marginBottom: '5px', fontWeight: 'bold' }}>IT Technician Certificate</span><br />
              <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>CIDA CITY Campus ICT</span><br />
              <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>2013</span><br />
        </TimelineContent>

        <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <span style={{ fontSize: '0.9em', fontWeight: 'bold' }}>AWS Cloud Practitioner Certificate</span><br />
              <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>Pearson</span><br />
              <span style={{ fontSize: '0.8em', marginBottom: '5px' }}>2022</span>
        </TimelineContent>
        </TimelineItem>

        
      </TimelineItem>

     
    </Timeline>
  );
}

export default AboutMe;

