import { useState } from 'react'
import Beams from './components/Beams'
import './App.css'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import ProjectsGallery from './components/ProjectsGallery'
import CertificationsGrid from './components/CertificationsScroll'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Fullscreen fixed Beams background */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Send it behind everything
        overflow: 'hidden'
      }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={7}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={35}
        />
      </div>
      <Navbar />
      <div className='about-container'>
        <AboutMe />
      </div>
      <div className='skill-container'>
        <Skills />
      </div>
      <ProjectsGallery />
      {/* Foreground content */}
      <CertificationsGrid />
      <Footer />
    </>
  )
}

export default App