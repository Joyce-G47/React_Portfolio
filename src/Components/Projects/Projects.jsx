import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';


import Rectangle52 from '../../assets/Rectangle 52.png';
import ToDoList from '../../assets/Rectangle 36.png';
import BankingApp from '../../assets/Rectangle 43.png';
import FinancialCalculator from '../../assets/Rectangle 59a.png';
import { ButtonBase } from '@material-ui/core';
import { faCalendar, faLaptopCode, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


// Define your project data
const projects = [
  {
    id: 1,
    title: 'Hlalanathi B&B',
    faLaptopCode: 'HTML, CSS, JavaScript',
    faLightbulb: 'Provide essential information about the bed and breakfast. Showcase unique features and offerings.',
    faCalendar: '2023',
    image: Rectangle52,
  },
  {
    id: 2,
    title: 'Banking App',
    description: 'Description of Project 2',
    image: BankingApp,
  },
  {
    id: 3,
    title: 'Financial Calculator',
    description: 'Description of Project 2',
    image: FinancialCalculator,
  },
  {
    id: 4,
    title: 'To-Do List App',
    description: 'Description of Project 2',
    image: ToDoList,
  },
  
];

const ProjectCarousel = () => {
  return (
    <section id='projects' style={{ paddingTop: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px',backgroundColor:'#f2f9fa'  }}>

      <div style={{ gridColumn: '1 / 2' }}>
        <h3 style={{ fontWeight: 'bold', marginBottom: '30px', color: '#d62196', marginTop: '50px', textAlign: 'center' }}>My latest work</h3>
      <h4 style={{
        width:'30rem',
        height:'50px',
        lineHeight: '1.5', 
        fontSize: 'extralarge', 
        color: '#6e636b',
        padding:'40px' }}
          >
            Don't be shy; take a peek at my work and see what I've been up to!
      </h4>
      
      </div>
      <div style={{ gridColumn: '2 / 3' }}>
      <Carousel style={{marginTop: '50px'}}>
          {projects.map(project => (
            <Carousel.Item key={project.id}>
              <Card style={{backgroundColor:'#f2f9fa',border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <Card.Img variant="top" src={project.image} style={{ width: '100%', height: 'auto'}} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text style={{ fontSize: '16px'}}>
                    
                  <FontAwesomeIcon icon={faLaptopCode} style={{color: '#d62196' }} /> {project.faLaptopCode} <br />
                  <FontAwesomeIcon icon={faLightbulb} style={{color: '#d62196' }} /> {project.faLightbulb} <br />
                  <FontAwesomeIcon icon={faCalendar} style={{color: '#d62196' }}/> {project.faCalendar}

                    </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
    </div>
    
    </section>
  );
};

export default ProjectCarousel;
