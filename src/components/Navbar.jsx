import './Navbar.css'

function Navbar() {
  return (
    <nav className="glass-navbar">
      <div className="nav-left">
        <img src="https://imgs.search.brave.com/B2x54HyRtJJLxzPrRaeIKL8UTtrNNi4BLHR9u6l1ONM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvcHJvbW90/aW9uLWRhdGEtcG9y/dGZvbGlvLWlsbHVz/dHJhdGlvbi1kb3du/bG9hZC1pbi1zdmct/cG5nLWdpZi1maWxl/LWZvcm1hdHMtLXBs/YXRmb3JtLW1lYW5p/bmctd29ya3BsYWNl/LXRlY2hub2xvZ3kt/YW5kLWJ1c2luZXNz/LXBhY2staWxsdXN0/cmF0aW9ucy04MTE0/ODQxLnBuZz9mPXdl/YnA" alt="Logo" className="nav-icon" />
        <span className="nav-title">Akash's Portfolio</span>
      </div>
      <div className="nav-right">
        <a href="#home">Home</a>
        <a href="#docs">Docs</a>
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
      </div>
    </nav>
  )
}

export default Navbar
