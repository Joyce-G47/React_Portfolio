import React from 'react'
import './Home.css'
import {imag} from '../../assets/imag/Image1.png'

const Home = () => {
  return (
    <section id='home'>
        <div className='homeContect'>
            <span className='Sibongile Gumbi'><br/>Software Developer</span>
            

        </div>
        <img src={imag} alt='Picture' className='imag'/>

    </section>
  
  );
}

export default Home;
