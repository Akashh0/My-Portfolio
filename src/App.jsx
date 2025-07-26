import { useState } from 'react'
import Beams from './components/Beams'
import './App.css'
import Navbar from './components/Navbar'

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
      {/* Foreground content */}
    </>
  )
}

export default App
