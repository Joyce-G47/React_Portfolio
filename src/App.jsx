import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Homepage/Home'
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Slider/Skills'
import Projects from './Components/Projects/Projects'
import ContactForm from './Components/ContactForm/ContactForm'
import Footer from './Components/Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>  
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
