import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Skills() {
  return (
    <Container id='Skills' className='My Skills' style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: '30px', color: '#d62196', marginTop: '100px', textAlign: 'center', justifyContent:'center'}}>Skills</h3>
      <Row>
        <Col>
          <Card
            style={{
              width: '20rem',
              border: '0px solid #534666',
              background: '#f2f9fa',
              boxShadow: '0 8px 10px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px 20px',
              justifyItems: 'center',
              margin: '20px',
              justifyContent: 'center',
              height: '25rem',
              marginTop: '20px',
            }}
          >
            <Card.Body>
              <Card.Title className="text-center">Programming Languages</Card.Title>
              <Card.Text className="text-center">
        
                <div>JavaScript</div>
                <ProgressBar now={80} label={`${80}%`} variant="success" />
                <div>Java</div>
                <ProgressBar now={70} label={`${70}%`} variant="info" />
                <div>Python</div>
                <ProgressBar now={70} label={`${70}%`} variant="warning" />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: '20rem',
              border: '0px solid #534666',
              background: '#f2f9fa',
              boxShadow: '0 8px 10px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px 20px',
              justifyItems: 'center',
              margin: '20px',
              justifyContent: 'center',
              height: '25rem',
            }}
          >
            <Card.Body>
              <Card.Title className="text-center">Front-end Development</Card.Title>
              <Card.Text className="text-center">
              <ProgressBar now={80} label={`${80}%`} variant="success" />
                <div>HTML</div>
                <ProgressBar now={70} label={`${70}%`} variant="info" />
                <div>CSS</div>
                <ProgressBar now={80} label={`${80}%`} variant="success" />
                <div>SCSS</div>
                <ProgressBar now={70} label={`${70}%`} variant="info" />
                <div>Tailwind</div>
                <ProgressBar now={70} label={`${70}%`} variant="warning" />
                <div>Bootstrap</div>
                <ProgressBar now={70} label={`${70}%`} variant="warning" />
                <div>React</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: '20rem',
              border: '0px solid #534666',
              background: '#f2f9fa',
              boxShadow: '0 8px 10px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px 20px',
              justifyItems: 'center',
              margin: '20px',
              justifyContent: 'center',
              height: '25rem',
            }}
          >
            <Card.Body>
              <Card.Title className="text-center">Back-end Development</Card.Title>
              <Card.Text className="text-center">
              <ProgressBar now={80} label={`${80}%`} variant="success" />
                <div>Node JS</div>
              
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;

