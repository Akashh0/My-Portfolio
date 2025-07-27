import React from 'react';
import './CertificationsScroll.css';

// Updated data to include an 'iconUrl' for each certificate's logo
const certificates = [
  {
    title: "Business Intelligence",
    date: "December 2024",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/c3dfe4ee280e4b418167499481f3fccd",
    iconUrl: "https://api.iconify.design/mdi/chart-bar.svg?color=white",
  },
  {
    title: "APIs",
    date: "November 2024",
    link: "https://coursera.org/verify/K5GLTQNLDO70",
    iconUrl: "https://cdn.simpleicons.org/coursera/white",
  },
  {
    title: "Django Web Framework",
    date: "November 2024",
    link: "https://coursera.org/verify/PY4E9FOKTQ9C",
    iconUrl: "https://cdn.simpleicons.org/django/white",
  },
  {
    title: "FullStack Development",
    date: "November 2024",
    link: "https://coursera.org/verify/ST7Y1HX7O1DK",
    iconUrl: "https://cdn.simpleicons.org/react/white",
  },
  {
    title: "Programming in Python",
    date: "November 2024",
    link: "https://coursera.org/verify/XNI15BJ4JK56",
    iconUrl: "https://cdn.simpleicons.org/python/white",
  },
  {
    title: "Version Control",
    date: "November 2024",
    link: "https://coursera.org/verify/2ZM5FPHMC453",
    iconUrl: "https://cdn.simpleicons.org/git/white",
  },
  {
    title: "Cloud Applications Developer",
    date: "May 2024",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/9b24f948ea764383a44037d93308851d",
    iconUrl: "https://api.iconify.design/mdi/cloud.svg?color=white",
  },
  {
    title: "Data Analysis with Python",
    date: "March 2024",
    link: "https://courses.cognitiveclass.ai/certificates/4cac6fb0aa084175954277995420ed5d",
    iconUrl: "https://cdn.simpleicons.org/pandas/white",
  },
  {
    title: "Java Fundamentals",
    date: "October 2023",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/c9253155bd994910a6859024899ad532",
    iconUrl: "https://cdn.simpleicons.org/openjdk/white",
  },
  {
    title: "Introduction to Python",
    date: "June 2023",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/c8f2d92a14514358a623ef095fb09cb7",
    iconUrl: "https://cdn.simpleicons.org/python/white",
  },
];

export default function CertificationsGrid() {
  return (
    <div className="timeline-container-horizontal">
      <h2 className="timeline-heading">Certifications Journey</h2>
      <div className="timeline-horizontal">
        {certificates.map((cert, i) => (
          <div className="timeline-item-horizontal" key={i}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="timeline-content-horizontal">
              <img src={cert.iconUrl} alt={`${cert.title} icon`} className="timeline-icon" />
              <div className="timeline-text-content">
                <div className="timeline-date-horizontal">{cert.date}</div>
                <h3 className="timeline-title-horizontal">{cert.title}</h3>
              </div>
            </a>
            <div className="timeline-dot-horizontal"></div>
          </div>
        ))}
      </div>
    </div>
  );
}