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
            <p className="resume-tagline">Full Stack Developer | MERN & Web3 Specialist</p>
            
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
              Full Stack Developer skilled in MERN stack and Web3 technologies. Experienced in building responsive web apps and decentralized applications (dApps) using React, Node.js, MongoDB, and Ethereum.
            </p>
          </section>

          <section className="resume-section">
            <h2 className="resume-section-title">Skills</h2>
            <div className="resume-skills-grid">
              <div className="resume-skill-cat">
                <strong>Languages:</strong> Java, JavaScript, TypeScript, SQL, Solidity, Python, HTML, CSS
              </div>
              <div className="resume-skill-cat">
                <strong>Frameworks/Libraries:</strong> ReactJS, Node.js, Express.js, NextJS, Tailwind CSS
              </div>
              <div className="resume-skill-cat">
                <strong>Databases:</strong> MongoDB, MySQL, Redis, PostgreSQL
              </div>
              <div className="resume-skill-cat">
                <strong>Web3 & Blockchain:</strong> Ethereum, Solidity, Hardhat, MetaMask, Ethers.js, Web3.js, IPFS
              </div>
              <div className="resume-skill-cat">
                <strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Eclipse IDE, Render, Vercel
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
              <h4 className="resume-sub">Nanasaheb Mahadik College of Engineering | CGPA: 7.25 / 10</h4>
              <p className="resume-text">Relevant Coursework: OOP, Data Structures, Operating Systems</p>
            </div>
          </section>

          <section className="resume-section">
            <h2 className="resume-section-title">Project Work</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Maid Finder | <a href="https://maid-finder-delta.vercel.app/" target="_blank" rel="noreferrer" className="resume-link-mini">Live Demo</a></h3>
              </div>
              <p className="resume-tech">Tech: MERN, Solidity, Ethereum, Ethers.js, IPFS, Pinata, Hardhat</p>
              <ul className="resume-list">
                <li>Built a blockchain-based platform connecting verified women workers with employers for secure home-service hiring.</li>
                <li>Implemented Ethereum smart contract escrow system for secure ETH payments and automated fund release upon job confirmation.</li>
                <li>Integrated IPFS for decentralized profile storage and developed real-time job tracking using React frontend.</li>
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
              <li><strong>AIWOS Organization:</strong> Ranked among top 250 participants nationally and received an INR 2000 bounty for MaidFinder</li>
              <li><strong>College Hackathon Participation:</strong> Participated and received certificate for innovative project submission.</li>
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
