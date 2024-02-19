import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Homepage/Home'
import Skills from './Components/Slider/Skills'
import Projects from './Components/Projects/Projects'
import ContactForm from './Components/ContactForm/ContactForm'

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>  
      <ContactForm/>
    </div>
  )
}

export default App
