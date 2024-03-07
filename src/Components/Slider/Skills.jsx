import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

import imag from '../../assets/Group 99.png';
import Group102 from '../../assets/Group 102.png';
import Group100 from '../../assets/Group 100.png';
import Group103 from '../../assets/Group 103.png';
import Group104 from '../../assets/Group 104.png';
import Group00 from '../../assets/Group 00.png';

function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const skillsData = [
    { image: imag, title: 'Html', rating: 4 },
    { image: Group102, title: 'CSS', rating: 4 },
    { image: Group100, title: 'Javascript', rating: 4 },
    { image: Group103, title: 'Python', rating: 3 },
    { image: Group104, title: 'JAVA', rating: 3 },
    { image: Group00, title: 'Power BI', rating: 3 },
  ];

  return (
    <Container  id='Skills'  className='My Skills' style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <h3 className='text-center text-black text-bold margin-100rem font-size-1rem' style={{ marginBottom: '30px' }}>Skills</h3>
      <Row>
        {skillsData.map((skill, index) => (
          <Col key={index}>
            <Card
              style={{
                width: '20rem',
                border: '0px solid #534666',
                background: hoveredIndex === index ? 'white' : '#f2f9fa',
                transform: hoveredIndex === index ? 'scale(1.01)' : 'scale(1)',
                boxShadow: '0 8px 10px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px 20px',
                justifyItems: 'center',
                margin: '20px',
                justifyContent: 'center',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                variant="top"
                src={skill.image}
                style={{ width: '150px', height: '170px', paddingTop: '10px', paddingBottom: '10px' }}
                className="mx-auto d-block"
              />
              <Card.Body>
                <Card.Title className="text-center">{skill.title}</Card.Title>
                <Card.Text className="text-center">
                  <div>
                    {[...Array(skill.rating)].map((_, i) => (
                      <span key={i} style={{ color:  'gold'}}>★</span>
                    ))}
                    {[...Array(5 - skill.rating)].map((_, i) => (
                      <span key={i} style={{ color: 'grey' }}>★</span>
                    ))}
                  </div>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
