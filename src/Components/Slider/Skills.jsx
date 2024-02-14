import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css';
import imag from '../../assets/Group 99.png';
import Group102 from '../../assets/Group 102.png';
import Group100 from '../../assets/Group 100.png';
import Group103 from '../../assets/Group 103.png';
import { Container, Row, Col,} from 'react-bootstrap';



function Skills() {
  return (
    <Container className='My Skills'>
      <h1 className='text-center white-bold'>My Skills</h1>
      <Row>
        <Col>
          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={imag} style={{ width: '150px', height: '150px' }}  className="mx-auto d-block"/>
            <Card.Body>
              <Card.Title className="text-center">Html</Card.Title>
              <Card.Text className="text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={Group102} style={{ width: '150px', height: '150px' }}  className="mx-auto d-block"/>
            <Card.Body>
              <Card.Title className="text-center">CSS</Card.Title>
              <Card.Text className="text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={Group100} style={{ width: '150px', height: '150px' }}  className="mx-auto d-block"/>
            <Card.Body>
              <Card.Title className="text-center">Javascript</Card.Title>
              <Card.Text className="text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={Group103} style={{ width: '150px', height: '150px' }}  className="mx-auto d-block"/>
            <Card.Body>
              <Card.Title className="text-center">Python</Card.Title>
              <Card.Text className="text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className="text-center">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  );
}

export default Skills;
