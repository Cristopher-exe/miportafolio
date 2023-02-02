import {React, useState } from 'react'
import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Work from './components/portafolio/Work';
import Qualification from './components/qualification/Qualification';

const App = () => {

  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Work />
      <Qualification />
    </main>
    </>
  )
}

export default App
