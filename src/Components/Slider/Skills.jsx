import React from 'react'
import './Skills.css'
import html from "../../assets/Group 99.png"
import css from "../../assets/Group 102.png"
import javascript from "../../assets/Group 100.png"
import python from "../../assets/Group 103.png"


const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillsTopic'>My Skills</span>
      <div className='skillBars'>
        <div className='skillsBar'>
          <img src={html} alt='Group 99' className='html'/>
        </div>

        <div>
          <img src={css} alt='Group 102' className='css'/>
        </div>
        
        <div>
          <img src={javascript} alt='Group 100' className='javascript'/>
        </div>

        <div>
          <img src={python} alt='Group 103' className='python'/>
        </div>
      </div>
        
    </section>
  )
}

export default Skills
