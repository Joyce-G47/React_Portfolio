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
import './Skills.css';

function Skills() {
  return (
    <section id='skills' style={{ padding: '50px' }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: '30px', color: '#d62196', marginTop: '50px', textAlign: 'center' }}>Skills</h3>

      <div className="skills-cards">
        {/* Front-End Development Card */}
        <Card className="skills-card">
          <CardContent className="skills-card-content">
            <div>
              <div className="skills-card-header">
                <FontAwesomeIcon icon={faLaptop} size="2x" className="skills-icon" />
                <h6 className="skills-title">Front-End Development</h6>
              </div>
              <Select className="skills-select">
                <ul>
                  <li><span className="skills-text">HTML</span> <LinearProgress variant="determinate" value={90} /><span className="skills-percent">90%</span></li>
                  <li><span className="skills-text">CSS</span> <LinearProgress variant="determinate" value={85} /><span className="skills-percent">85%</span></li>
                  <li><span className="skills-text">JavaScript</span> <LinearProgress variant="determinate" value={80} /><span className="skills-percent">80%</span></li>
                  <li><span className="skills-text">React</span> <LinearProgress variant="determinate" value={75} /><span className="skills-percent">75%</span></li>
                </ul>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Back-End Development Card */}
        <Card className="skills-card">
          <CardContent className="skills-card-content">
            <div>
              <div className="skills-card-header">
                <FontAwesomeIcon icon={faLaptopCode} size="2x" className="skills-icon" />
                <h6 className="skills-title">Back-End Development</h6>
              </div>
              <Select className="skills-select">
                <ul>
                  <li><span className="skills-text">Node.js</span> <LinearProgress variant="determinate" value={60} /><span className="skills-percent">85%</span></li>
                  <li><span className="skills-text">Express.js</span> <LinearProgress variant="determinate" value={60} /><span className="skills-percent">80%</span></li>
                </ul>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Programming Languages Card */}
        <Card className="skills-card">
          <CardContent className="skills-card-content">
            <div>
              <div className="skills-card-header">
                <FontAwesomeIcon icon={faLayerGroup} size="2x" className="skills-icon" />
                <h6 className="skills-title">Programming Languages</h6>
              </div>
              <Select className="skills-select">
                <ul>
                  <li><span className="skills-text">Python</span> <LinearProgress variant="determinate" value={70} /><span className="skills-percent">90%</span></li>
                  <li><span className="skills-text">Java</span> <LinearProgress variant="determinate" value={70} /><span className="skills-percent">85%</span></li>
                </ul>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="soft-skills">
        <div className="soft-skills-cards">
          {/* Soft-Skills */}
          <Card className="skills-card soft-skills-card">
            <CardContent className="soft-skills-card-content">
              <div>
                <div className="skills-card-header">
                  <FontAwesomeIcon icon={faLightbulb} size="2x" className="skills-icon" />
                  <h6 className="skills-title">Soft Skills</h6>
                </div>
                <div className="description">
                  <h6>Communication</h6>
                  <h6>Teamwork</h6>
                  <h6>Problem-solving</h6>
                  <h6>Continuous Learning</h6>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Desired Job Opportunities */}
          <Card className="skills-card soft-skills-card">
            <CardContent className="soft-skills-card-content">
              <div>
                <div className="skills-card-header">
                  <FontAwesomeIcon icon={faIndustry} size="2x" className="skills-icon" />
                  <h6 className="skills-title">Desired Job Opportunities</h6>
                </div>
                <div className="description">
                  <h6>Front-end Developer</h6>
                  <h6>UI/UX Designer</h6>
                  <h6>Product Designer</h6>
                  <h6>Digital Marketing</h6>
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
