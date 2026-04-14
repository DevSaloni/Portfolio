import React from 'react';
import './About.css';
import SectionHeader from './SectionHeader';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <SectionHeader title="about-me" />

        <div className="about-content">
          <div className="about-text-wrapper">
            <p className="about-greeting font-mono text-rani">
              Hello, I am Saloni!
            </p>
            <h3 className="about-role">
              Web Designer & Developer
            </h3>
            <p className="about-description">
              I'm a Developer based in India. I love building things for the web and solving real-world problems with code.
              My focus is on creating clean, efficient, and user-friendly applications using modern technologies like React and Node.js.
            </p>

            <div className="about-actions">
              <a href="/resume.pdf" download="Saloni_Pawar_Resume.pdf" className="resume-btn-simple">
                Get Resume <FaDownload style={{ fontSize: '0.8rem' }} />
              </a>
            </div>
          </div>

          <div className="about-image-wrapper">
            <div className="stylized-image-simple">
              <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=3540&auto=format&fit=crop" alt="About" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;