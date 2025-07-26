import './AboutMe.css'
import Profile from '../assets/MyPhoto.jpg'
function AboutMe() {
  return (
    <section className="about-wrapper" id="about">
      <div className="about-glass-box">
        <img src={Profile} alt="Akash" className="about-image" />
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hey there, I’m Akash — a full-stack web developer who loves building clean, responsive, and scalable web apps. I work with React, Vite, and JavaScript on the front end, and Django or Node.js on the back. From crafting smooth UIs to designing robust backends, I enjoy bringing ideas to life with code that’s fast, functional, and user-focused. Always building, always learning. And...
          I'm a 3D enthusiast who brings ideas to life through Blender. From modeling immersive environments to animating sleek visual stories, I blend form and function with creativity. Whether it’s for games, websites, or cinematic scenes, I craft visuals that don’t just look good — they move you. So.. Yeah thats it. You can go exploring below now!.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
