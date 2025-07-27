import { useEffect, useRef } from 'react'
import './ProjectsGallery.css'
import HorizonX from "../assets/HorizonX.jpg"
import Github from "../assets/Github-Tracker.jpg"
import Career from "../assets/Career.png"
import Emotion from "../assets/Emotion.png"
import Resumate from "../assets/Resumate.jpg"
const projects = [
  {
    image: HorizonX,
    title: 'Weather App',
    src: 'https://akashh0.github.io/WeatherSite/',
  },
  {
    image: Emotion,
    title: 'Emotion Detection using Wave Format',
    src: 'https://github.com/Akashh0/Emotion-Detection-Using-Wave-Format',
  },
  {
    image: Career,
    title: 'Career Path Recommendation (ML Model)',
    src: 'https://github.com/Akashh0/Career-Roadmap-ML-Model',
  },
  {
    image: Resumate,
    title: 'Resume Analyzer',
    src: 'https://github.com/Akashh0/Resumate',
  },
  {
    image: Github,
    title: 'GitHub Globe',
    src: 'https://akashh0.github.io/Github-Tracker/',
  },
]

export default function ProjectsGallery() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const container = scrollRef.current
    let scrollAmount = 0

    const autoScroll = setInterval(() => {
      if (!container) return

      scrollAmount += 1
      container.scrollLeft += 1

      // Looping logic
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0
        container.scrollLeft = 0
      }
    }, 15)

    return () => clearInterval(autoScroll)
  }, [])

  return (
    <div className="projects-gallery-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="carousel-bend-wrapper" ref={scrollRef}>
        <div className="carousel-track">
          {[...projects, ...projects].map((project, index) => (
            <a key={index} href={project.src} className="project-card" target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <p>{project.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
