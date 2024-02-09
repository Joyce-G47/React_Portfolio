import React from 'react'
import './Skills.css'
import html from "../../assets/Group 99.png"
import css from "../../assets/Group 102.png"
import javascript from "../../assets/Group 100.png"
import python from "../../assets/Group 103.png"


const Skills = () => {
  return (
    <section id='skills'>
        <div className='skillTopic'>
            <h1>Skills</h1>
        </div>

      <img src={html} alt='Group 99' className='html'/>
      <img src={css} alt='Group 102' className='css'/>
      <img src={javascript} alt='Group 100' className='javascript'/>
      <img src={python} alt='Group 103' className='python'/>
        
    </section>
  )
}

export default Skills
