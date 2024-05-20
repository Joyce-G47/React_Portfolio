import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import Rectangle52 from '../../assets/Rectangle 52.png';
import ToDoList from '../../assets/Rectangle 36.png';
import BankingApp from '../../assets/Rectangle 43.png';
import FinancialCalculator from '../../assets/Rectangle 59a.png';
import './Projects.css';

// Define your project data
const projects = [
  {
    id: 1,
    title: 'Hlalanathi B&B',
    description: 'Provide essential information about the bed and breakfast. Showcase unique features and offerings.',
    faLaptopCode: 'HTML, CSS, JavaScript',
    faLightbulb: 'Provide essential information about the bed and breakfast. Showcase unique features and offerings.',
    faCalendar: '2023',
    image: Rectangle52,
    viewLink: 'file:///C:/Users/sibon/OneDrive/Desktop/Work/Hlalanathi%20B%26B/index.html#home', // Add the link here
    githubLink: 'https://github.com/your-repo', // Example GitHub link
  },
  {
    id: 2,
    title: 'Banking App',
    description: 'Description of Project 2',
    image: BankingApp,
    viewLink: 'https://example.com/project2', // Example external link
    githubLink: 'https://github.com/your-repo',
  },
  {
    id: 3,
    title: 'Financial Calculator',
    description: 'Description of Project 2',
    image: FinancialCalculator,
    viewLink: 'https://example.com/project3', // Example external link
    githubLink: 'https://github.com/your-repo',
  },
  {
    id: 4,
    title: 'To-Do List App',
    description: 'Description of Project 2',
    image: ToDoList,
    viewLink: 'https://example.com/project4', // Example external link
    githubLink: 'https://github.com/your-repo',
  },
];

const Projects = () => {
  return (
    <section id='projects' className="projects-section">
      <div className="projects-info">
        <h3>My latest work</h3>
        <h4>Don't be shy; take a peek at my work and see what I've been up to!</h4>
      </div>

      <div className="carousel-container">
        <Carousel>
          {projects.map(project => (
            <Carousel.Item key={project.id}>
              <Card className="project-card">
                <Card.Img variant="top" src={project.image} className="project-image" />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>
                    <button className="project-button" onClick={() => window.open(project.viewLink, '_blank')}>
                      View
                    </button>
                    <button className="project-button" onClick={() => window.open(project.githubLink, '_blank')}>
                      Github
                    </button>
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

export default Projects;
