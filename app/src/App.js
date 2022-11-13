import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Socials from './components/Socials'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const App = () => {
  return (
    <div >
        <Navbar />
        <Home />
        <AboutMe />
        <Portfolio />
        <Contact />

        <Socials />


    </div>
  )
}

export default App