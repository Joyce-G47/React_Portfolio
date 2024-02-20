import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import Group50a from '../../assets/Group 50a.png';
import Rectangle36 from '../../assets/Rectangle 36.png';
import Rectangle43 from '../../assets/Rectangle 43.png';
import Rectangle52 from '../../assets/Rectangle 52.png';
import Rectangle59a from '../../assets/Rectangle 59a.png';

function Projects() {
  return (
    <Carousel id='Projects'  className='My projects' style={{ paddingTop: '100px', paddingBottom: '100px', background: '#f2f9fa' }}>
      <h1 className='text-center text-black text-bold margin-100rem font-size-10rem'>My Projects</h1>
      <Carousel.Item>
        <img className="d-block w-100" style={{ maxWidth: '600px', margin: 'auto' }} src={Group50a} alt="Personal Portfolio" />
        <Carousel.Caption className='text-black'>
          <h3>Personal Portfolio</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{ maxWidth: '600px', margin: 'auto' }} src={Rectangle36} alt="To-Do list" />
        <Carousel.Caption className='text-black'>
          <h3>To-Do list</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{ maxWidth: '600px', margin: 'auto' }} src={Rectangle43} alt="Financial Calculator" />
        <Carousel.Caption className='text-black'>
          <h3>Financial Calculator</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{ maxWidth: '600px', margin: 'auto' }} src={Rectangle52} alt="Hlalanathi B&B Website" />
        <Carousel.Caption className='text-black'>
          <h3>Hlalanathi B&B Website</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{ maxWidth: '600px', margin: 'auto' }} src={Rectangle59a} alt="Banking App" />
        <Carousel.Caption className='text-black'>
          <h3>Banking App</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Projects;

