import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa";
import "./style.css";
import profilePic from "./profile.jpeg"; // Ensure this image is inside src/

const Portfolio = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Portfolio</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#extracurricular">Extracurricular</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="container">
        {/* Profile Photo Section */}
        <div className="profile-section">
          <img src={profilePic} alt="Lipsa" className="profile-pic" />
        </div>

        {/* Header Section */}
        <header className="text-center">
          <h1>Lipsa Priyadarsini Das</h1>
          <p>Cybersecurity | Cloud Computing | Web Development</p>
        </header>

        {/* About Section */}
        <div className="card" id="about">
          <h2>About Me</h2>
          <p>
            I'm a BTech Computer Science student passionate about cybersecurity, 
            cloud computing, and web development. I enjoy solving tech challenges and 
            building innovative solutions.
          </p>
        </div>

        {/* Education Section */}
        <div className="card" id="education">
          <h2>Education</h2>
          <p><strong>12th </strong></p>
          <p> D.A.V Public School, Pokhariput, Bhubaneswar</p>
          <p><strong>B.Tech in Computer Science & Engineering</strong></p>
          <p>Silicon University, 2022 - 2026</p>

        </div>

        {/* Skills Section */}
        <div className="card" id="skills">
          <h2>Skills</h2>
          <ul>
            <li>Cybersecurity (SOC, Network Security, Ethical Hacking)</li>
            <li>Cloud Computing (AWS, Azure)</li>
            <li>Programming: Python, SQL, JavaScript</li>
            <li>Web Development: React, HTML, CSS</li>
            <li>Public Speaking & Debating</li>
            <li>Leadership & Team Management</li>
          </ul>
        </div>

        {/* Extracurricular Activities Section */}
        <div className="card" id="extracurricular">
          <h2>Extracurricular Activities</h2>
          <ul>
            <li>Member of META Literary Club</li>
            <li>Organizer of SUMUN 2025</li>
            <li>Active MUNer & Debater</li>
            <li>Technical Lead in SWITCH Coding Club</li>
            <li>Anchored University Events</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="card" id="projects">
          <h2>Projects</h2>
          <ul>
            <li>Food Delivery Website - React & Firebase</li>
            <li>Hospital Website - HTML, CSS, JavaScript</li>
            <li>Cybersecurity Case Studies</li>
          </ul>
        </div>

        {/* Certifications Section */}
<div className="card" id="certifications">
  <h2>Certifications</h2>
  <ul className="certifications-list">
    <li>
      <a href="/jpmorgan.pdf" target="_blank" rel="noopener noreferrer">
        JP Morgan Cybersecurity Certificate
      </a>
    </li>
    <li>
      <a href="/mastercard.pdf" target="_blank" rel="noopener noreferrer">
        Mastercard Cybersecurity Job Simulation
      </a>
    </li>
    <li>
      <a href="/aws.pdf" target="_blank" rel="noopener noreferrer">
        Ingenious-Tech World AWS Masters
      </a>
    </li>
    <li>
      <a href="/azure.pdf" target="_blank" rel="noopener noreferrer">
        Ingenious-Tech World Azure Masters
      </a>
    </li>
    <li>
      <a href="/OC.pdf" target="_blank" rel="noopener noreferrer">
        Organizing Committee Member - LITFEST 2025
      </a>
    </li>
  </ul>
</div>
{/* Resume Section */}
<div className="resume-section">
  <h2>My Resume</h2>
  <p>Download my resume here:</p>
  <a href="/LipsaPriyadarsini_Das_Resume.pdf" className="resume-link" download>
    <FaFilePdf className="resume-icon" /> Download Resume (PDF)
  </a>
</div>

 

        {/* Contact Section */}
        <div className="card text-center" id="contact">
          <h2>Get in Touch</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/lipsa-priyadarsini-das-1a114b287" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/lipsadas1007" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="\LipsaPriyadarsini_Das_Resume.pdf" download><FaFilePdf /></a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Lipsa. | <a href="#">Back to Top</a></p>
      </footer>
    </div>
  );
};

export default Portfolio;
