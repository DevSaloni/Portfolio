import React from 'react';
import './About.css';
import SectionHeader from './SectionHeader';
import { FaDownload } from 'react-icons/fa';

const About = ({ onOpenResume }) => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <SectionHeader title="about-me" />

        <div className="about-content">
          <div className="about-text-wrapper">
            <p className="about-greeting font-mono text-rani">
              Hello, I am Saloni!
            </p>
            <p className="about-description">
              I am a Computer Science and Engineering graduate specializing in building robust <strong>Web2</strong> and <strong>Web3</strong> solutions. I enjoy solving real-world challenges through clean, maintainable code and thoughtful design.
            </p>
            <p className="about-description">
              By leveraging modern technologies like <strong>React, Node.js, and Solidity</strong>, I create user-centric products that are both reliable and impactful. I am dedicated to continuous learning and contributing to the evolving <strong>Web2</strong> and <strong>Web3</strong> ecosystems.
            </p>

            <div className="open-to-work font-mono">
              <span className="dot-blink"></span>
              Open to Work: Full-Time or Freelance. Let's talk.
            </div>

            <div className="about-actions">
              <button
                onClick={onOpenResume}
                className="resume-btn-simple"
                style={{ background: 'transparent', cursor: 'pointer' }}
              >
                Get Resume <FaDownload style={{ fontSize: '0.8rem' }} />
              </button>
            </div>
          </div>

          <div className="about-image-wrapper">
            <div className="stylized-image-simple">
              <img src="/saloni.jpg" alt="About" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;