import React, { useState } from 'react';
import './Home.css';
import imag from "../../assets/Image1.png";
import Sibongile from '../../assets/Sibongile Gumbi (1).pdf';

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id='home'>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="flip-card-info">
                <div className="card-avatar">
                  <img src={imag} alt="Picture" className='imag'/>
                </div>
                <div className="card-title">Sibongile Gumbi</div>
                <div className="card-subtitle">Software Developer</div>
            </div>
              
            
          </div>
          <div className="flip-card-back">
  <div className='education-experience-container'>
    <div className='Education'>
      <p style={{ fontWeight: 'bold', fontSize: '1.2em', textAlign: 'center' }}>Education</p>
      <span>Bachelor of Business Administration Honours</span>
      <span>Management College of South Africa</span>
      <span>2021</span>
      <span>IT Technician Certificate</span>
      <span>CIDA CITY Campus ICT</span>
      <span>2013</span>
      <span>AWS Cloud Practitioner Certificate</span>
      <span>Pearson</span>
      <span>2022</span>
    </div>

    <div className='Experience'>
      <p style={{ fontWeight: 'bold', fontSize: '1.2em', textAlign: 'center' }}>Experience</p>
      <span>Software Developer</span>
      <span>Younglings Africa</span>
      <span>Jan 2024- Present</span>
      <span>Universal Banker</span>
      <span>Standard Bank</span>
      <span>2022-2023</span>
    </div>
  </div>
</div>

        </div>
      </div>

      <div className='Intro'>
        <div className='paragraph'>
        <span>
          <p className='paraInfo'>Hi there, my name is Sibongile and I am a Software Developer.
            I create cool web applications! I've learned how to use languages like HTML, CSS, Java, Python, and JavaScript.
            This job isn't just a regular job; it's a journey where I enjoy working with different people and solve interesting life problems.
          </p>
        </span>

        <span>
          <a href={Sibongile} target='_blank' rel='noopener noreferrer'>
            <button className='btn' style={{ backgroundColor: '#d62196', color: 'white', paddingLeft: '1rem' }}>Hire Me</button>
          </a>
        </span>   
        <ul className="card-social">
                <li className="card-social__item">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
                  </svg>
                </li>
                
                <li className="card-social__item">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
                  </svg>
                </li>
                
                <li className="card-social__item">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                  </svg>
                </li>
             </ul>

        </div>
      </div>
    </section>
  );
}

export default Home;


