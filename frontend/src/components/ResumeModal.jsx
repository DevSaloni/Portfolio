import React from 'react';
import './ResumeModal.css';
import { FaTimes, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.className === 'resume-modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="resume-modal-overlay" onClick={handleBackdropClick}>
      <div className="resume-modal-content">
        <button className="close-resume" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="resume-paper">
          <header className="resume-header">
            <h1 className="resume-name">Saloni <span className="text-rani">Adhikrao Pawar</span></h1>
            <p className="resume-tagline">Full Stack Developer | MERN & Web3 Developer</p>

            <div className="resume-contact-info">
              <span><FaEnvelope className="text-rani" /> salonipawar294@gmail.com</span>
              <span><FaPhone className="text-rani" /> 9881927812</span>
              <span><FaMapMarkerAlt className="text-rani" /> India</span>
            </div>

            <div className="resume-links">
              <a href="https://github.com/DevSaloni" target="_blank" rel="noreferrer"><FaGithub /> github.com/DevSaloni</a>
              <a href="https://linkedin.com/in/saloni-pawar-630b23270" target="_blank" rel="noreferrer"><FaLinkedin /> linkedin.com/in/saloni-pawar-630b23270</a>
            </div>
          </header>

          <section className="resume-section">
            <h2 className="resume-section-title">Profile</h2>
            <p className="resume-text">
              Full Stack Developer specializing in MERN stack and real-time web applications. Experienced in building responsive and user-focused web applications with AI-powered features, Web3 integrations, and real-time communication using Socket.io. Passionate about solving real-world problems through efficient and practical solutions.
            </p>
          </section>

          <section className="resume-section">
            <h2 className="resume-section-title">Skills</h2>
            <div className="resume-skills-grid">
              <div className="resume-skill-cat">
                <strong>Languages:</strong> Java, JavaScript, TypeScript, SQL, Solidity, HTML, CSS
              </div>
              <div className="resume-skill-cat">
                <strong>Frontend:</strong> ReactJS, NextJS, Tailwind CSS
              </div>
              <div className="resume-skill-cat">
                <strong>Backend:</strong> Node.js, Express.js
              </div>
              <div className="resume-skill-cat">
                <strong>Databases:</strong> MongoDB, Redis, PostgreSQL
              </div>
              <div className="resume-skill-cat">
                <strong>Web3 & Blockchain:</strong> Ethereum, Solidity, Hardhat, MetaMask, Ethers.js, Web3.js, IPFS
              </div>
              <div className="resume-skill-cat">
                <strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Render, Vercel
              </div>
            </div>
          </section>

          <section className="resume-section">
            <h2 className="resume-section-title">Work Experience</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Full Stack Development Intern</h3>
                <span className="resume-date">Jan 2026 – Present</span>
              </div>
              <h4 className="resume-sub">Techkrate (LURP Technologies Pvt. Ltd.)</h4>
              <ul className="resume-list">
                <li>Developed responsive and user-friendly web applications using HTML, CSS, JavaScript, and React.js / Next.js by converting Figma UI/UX designs into pixel-perfect, functional interfaces.</li>
                <li>Integrated frontend components with backend APIs for dynamic data rendering while ensuring cross-browser compatibility and mobile responsiveness.</li>
                <li>Debugged, tested, and optimized web applications for performance and scalability, collaborating with engineering and design teams in a product-driven development environment.</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>B.E. in Computer Science and Engineering</h3>
                <span className="resume-date">Nov 2022 – Jun 2026</span>
              </div>
              <h4 className="resume-sub">Nanasaheb Mahadik College of Engineering | CGPA: 7.32 / 10</h4>
              <p className="resume-text">Relevant Coursework: OOP, Data Structures, Operating Systems</p>
            </div>
          </section>

          <section className="resume-section">
            <h2 className="resume-section-title">Project Work</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Smart Lost and Found (AI Platform) | <a href="https://smart-lost-found.vercel.app/" target="_blank" rel="noreferrer" className="resume-link-mini">Live Demo</a></h3>
              </div>
              <p className="resume-tech">Tech: React.js, Express.js, Node.js, PostgreSQL, Gemini AI, Socket.io, Nodemailer, Twilio</p>
              <ul className="resume-list">
                <li>Built an AI-powered recovery ecosystem that automates matching lost items using multimodal analysis.</li>
                <li>Integrated Gemini AI for intelligent item matching and image recognition to improve recovery rates.</li>
                <li>Developed real-time smart notifications using Socket.io, Nodemailer, and Twilio for instant user alerts.</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <h3>College Project Management System | <a href="https://college-project-showcase.vercel.app/" target="_blank" rel="noreferrer" className="resume-link-mini">Live Demo</a></h3>
              </div>
              <p className="resume-tech">Tech: MongoDB, Express.js, Next.js, Node.js, JWT, Socket.io</p>
              <ul className="resume-list">
                <li>Built a full-stack platform connecting students, mentors, and recruiters, with role-based dashboards for efficient project management.</li>
                <li>Implemented a project verification system where mentors review and approve projects, enabling a “Verified” status for quality assurance.</li>
                <li>Developed real-time features and REST APIs, including progress tracking, authentication (JWT), and mentor–student communication using Socket.io.</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2 className="resume-section-title">Awards and Certificates</h2>
            <ul className="resume-list">
              <li>Participated in college-level hackathon and developed an innovative project under time constraints.</li>
              <li>Collaborated in a team environment to build a working prototype.</li>
            </ul>
          </section>
        </div>

        <div className="resume-modal-footer">
          <a href="/resume.pdf" download="Saloni_Pawar_Resume.pdf" className="download-btn-modal">
            Download PDF Version <FaDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
