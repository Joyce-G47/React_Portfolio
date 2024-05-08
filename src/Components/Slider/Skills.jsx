import React from 'react';
import Card from 'react-bootstrap/Card';
import { LinearProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faLaptop, faLaptopCode, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <section id='Skills' style={{padding:'50px'}}>
      <h3 style={{ fontWeight: 'bold', marginBottom: '30px', color: '#d62196', marginTop: '50px', textAlign: 'center' }}>Skills</h3>

      <div className="skills-cards" style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
        {/* Front-End Development Card */}
        <Card style={{ width: '20rem', height: '25rem', marginBottom: '10px', border: '1px solid #CDB7FA', boxShadow: 'none', transition: 'transform 0.3s' }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faLaptop} size="3x" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', color: '#CDB7FA' }} />
            </div>

              <h6 style={{ fontWeight: 'bold', marginTop:'12px', textAlign: 'center' }}>Front-End Development</h6>
              <ul style={{marginTop:'10'}}>
                <li><span style={{ fontSize: '0.8em' }}>HTML</span> <LinearProgress variant="determinate" value={90} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>90%</span></li>
                <li><span style={{ fontSize: '0.8em' }}>CSS</span> <LinearProgress variant="determinate" value={85} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>85%</span></li>
                <li><span style={{ fontSize: '0.8em' }}>Bootstrap</span> <LinearProgress variant="determinate" value={80} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>80%</span></li>
                <li><span style={{ fontSize: '0.8em' }}>React</span> <LinearProgress variant="determinate" value={75} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>75%</span></li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        {/* Back-End Development Card */}
        <Card style={{ width: '20rem', height: '25rem', marginBottom: '10px', border: '1px solid #CDB7FA', boxShadow: 'none', transition: 'transform 0.3s' }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faLaptopCode} size="3x" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', color: '#CDB7FA' }} />
            </div>
              <h6 style={{ fontWeight: 'bold' , marginTop:'12px', textAlign: 'center'}}>Back-End Development</h6>
              <ul style={{marginTop:'10'}}>
                <li><span style={{ fontSize: '0.8em' }}>Node.js</span> <LinearProgress variant="determinate" value={85} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>85%</span></li>
                <li><span style={{ fontSize: '0.8em' }}>Express.js</span> <LinearProgress variant="determinate" value={80} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>80%</span></li>
                <li><span style={{ fontSize: '0.8em' }}>MongoDB</span> <LinearProgress variant="determinate" value={75} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>75%</span></li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        {/* Programming Languages Card */}
        <Card style={{ width: '20rem', height: '25rem', marginBottom: '10px', border: '1px solid #CDB7FA', boxShadow: 'none', transition: 'transform 0.3s' }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faLayerGroup} size="3x" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', color: '#CDB7FA' }} />
            </div>
              <h6 style={{ fontWeight: 'bold' , marginTop:'12px', textAlign: 'center' }}>Programming Languages</h6>
              <ul style={{marginTop:'10'}}>
                <li><span style={{ fontSize: '0.8em' }}>Python</span> <LinearProgress variant="determinate" value={90} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>90%</span></li>
                <li><span style={{ fontSize: '0.8em' }}>Java</span> <LinearProgress variant="determinate" value={85} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>85%</span></li>
                <li><span style={{ fontSize: '0.8em' }}>C++</span> <LinearProgress variant="determinate" value={80} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>80%</span></li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default Skills;
