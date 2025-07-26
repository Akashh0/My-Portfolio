import { useEffect, useRef } from 'react'
import './ProjectsGallery.css'
import HorizonX from "../assets/HorizonX.jpg"
import Github from "../assets/Github-Tracker.jpg"
import Career from "../assets/Career.png"
import Emotion from "../assets/Emotion.png"
const projects = [
  {
    image: HorizonX,
    title: 'Weather App',
  },
  {
    image: Emotion,
    title: 'Emotion Detection using Wave Format',
  },
  {
    image: Career,
    title: 'Career Path Recommendation (ML Model)',
  },
  {
    image: '',
    title: 'Resume Analyzer',
  },
  {
    image: Github,
    title: 'GitHub Globe',
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
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <p>{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
