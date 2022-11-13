import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Socials from './components/Socials'
import AboutMe from './components/AboutMe'

const App = () => {
  return (
    <div >
        <Navbar />
        <Home />
        <AboutMe />
        <Socials />


    </div>
  )
}

export default App