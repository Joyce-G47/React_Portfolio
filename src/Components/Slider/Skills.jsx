import React from 'react';
import Card from 'react-bootstrap/Card';
import { CardContent, LinearProgress, Select } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faLaptop, faLaptopCode, faLayerGroup, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons/faNetworkWired';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
import { faHandFist } from '@fortawesome/free-solid-svg-icons/faHandFist';
import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons/faCreativeCommons';
import { faIdeal } from '@fortawesome/free-brands-svg-icons/faIdeal';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons/faBullhorn';
import { faIndustry } from '@fortawesome/free-solid-svg-icons/faIndustry';

function Skills() {
  return (
    <section id='Skills' style={{padding:'50px'}}>
      <h3 style={{ fontWeight: 'bold', marginBottom: '30px', color: '#d62196', marginTop: '50px', textAlign: 'center' }}>Skills</h3>

      <div className="skills-cards" style={{ display: 'flex',flexDirection:'column',alignItems:'center', justifyContent: 'center' }}>
        {/* Front-End Development Card */}
        <Card style={{ width: '40rem', height: '5rem', marginBottom: '10px', border: 'none', borderRadius:'20px', boxShadow: 'none', transition: 'transform 0.3s' }}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faLaptop} size="2x" style={{ color: '#CDB7FA', marginRight: '10px' }} />
            <h6 style={{ fontWeight: 'bold', marginTop: '15px', color: '#6e636b', textAlign: 'center' }}>Front-End Development</h6>
            </div>
              <Select style={{ width: '35rem'}}>
              <ul>
                <li><span style={{ fontSize: '0.8em' }}>HTML</span> <LinearProgress variant="determinate" value={90} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>90%</span></li>
                <li><span style={{ fontSize: '0.8em' }}>CSS</span> <LinearProgress variant="determinate" value={85} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>85%</span></li>
                <li><span style={{ fontSize: '0.8em' }}>JavaScript</span> <LinearProgress variant="determinate" value={80} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>80%</span></li>
                <li><span style={{ fontSize: '0.8em' }}>React</span> <LinearProgress variant="determinate" value={75} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>75%</span></li>
              </ul>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Back-End Development Card */}
        <Card style={{ width: '40rem', height: '5rem', marginBottom: '10px', border: 'none',borderRadius:'20px', boxShadow: 'none', transition: 'transform 0.3s' }}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
  <FontAwesomeIcon icon={faLaptopCode} size="2x" style={{ color: '#CDB7FA', marginRight: '10px' }} />
  <h6 style={{ fontWeight: 'bold', marginTop: '15px', color: '#6e636b', textAlign: 'center' }}>Back-End Development</h6>
</div>

              <Select style={{ width: '35rem'}}>
              <ul >
                <li><span style={{ fontSize: '0.8em' }}>Node.js</span> <LinearProgress variant="determinate" value={60} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>85%</span></li>
                <li><span style={{ fontSize: '0.8em' }}>Express.js</span> <LinearProgress variant="determinate" value={60} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>80%</span></li>
                
              </ul>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Programming Languages Card */}
        <Card style={{ width: '40rem', height: '5rem', marginBottom: '10px', border: 'none', borderRadius:'20px', boxShadow: 'none', transition: 'transform 0.3s' }}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faLayerGroup} size="2x" style={{ color: '#CDB7FA', marginRight: '10px'}}/>
            <h6 style={{ fontWeight: 'bold', marginTop: '15px', color: '#6e636b', textAlign: 'center' }}>Programming Languages</h6>
            </div>
             <Select style={{ width: '35rem'}}>
              <ul >
                <li><span style={{ fontSize: '0.8em' }}>Python</span> <LinearProgress variant="determinate" value={70} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>90%</span></li>
                <li><span style={{ fontSize: '0.8em' }}>Java</span> <LinearProgress variant="determinate" value={70} /><span style={{ fontSize: '0.8em', marginLeft: '5px' }}>85%</span></li>
                
              </ul>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='soft-skills'>
      <div className="skills-cards" style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop:'20px' }}>
        {/* Soft-Skills */}
        <Card style={{ width: '35rem', height: '8rem', marginBottom: '10px', border: '1px solid #CDB7FA', borderRadius:'20px', boxShadow: 'none', transition: 'transform 0.3s' }}>
          <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faLightbulb} size="2x" style={{ color: '#CDB7FA', marginRight: '10px'}}/>
            <h6 style={{ fontWeight: 'bold', marginTop: '15px', color: '#6e636b', textAlign: 'center' }}>Soft Skills</h6>
            </div>

           <div className='description' style={{display:'flex', gap:'10px', marginTop:'5px'}}>
           < div className='description'>
                  <h6 style={{ textAlign:'center' }}>Communication</h6>
                </div>
              
              
                <div className='description'>
                  <h6 style={{ textAlign:'center' }}>Teamwork </h6>
                </div>

                <div className='description'>
                  <h6 style={{ textAlign:'center' }}>Problem-solving</h6>
                </div>
              
              
                <div className='description'>
                  <h6 style={{ textAlign:'center' }}>Continuos Learning</h6>
                </div>
                </div>

              
              
            </div>
          </CardContent>
        </Card>

        {/* Desired Job Opportunities */}
        <Card style={{ width: '35rem', height: '8rem', marginBottom: '10px', border: '1px solid #CDB7FA',borderRadius:'20px', boxShadow: 'none', transition: 'transform 0.3s' }}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faIndustry} size="2x" style={{ color: '#CDB7FA', marginRight: '10px'}}/>
            <h6 style={{ fontWeight: 'bold', marginTop: '15px', color: '#6e636b', textAlign: 'center' }}>Desired Job Opportunities</h6>
            </div>

           <div className='description' style={{display:'flex', gap:'10px', marginTop:'5px'}}>
           < div className='description'>
                  <h6 style={{ textAlign:'center' }}>Front-end Developer</h6>
                </div>
              
              
                <div className='description'>
                  <h6 style={{ textAlign:'center' }}>UI/UX Designer </h6>
                </div>

                <div className='description'>
                  <h6 style={{ textAlign:'center' }}>Product Designer</h6>
                </div>
              
              
                <div className='description'>
                  <h6 style={{ textAlign:'center' }}>Digital Marketing</h6>
                </div>
                </div>
              
            </div>
          </CardContent>
        </Card>
        </div>
        </div>
    </section>
  );
}

export default Skills;
