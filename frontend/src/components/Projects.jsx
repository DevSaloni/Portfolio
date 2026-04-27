import React from 'react';
import './Projects.css';
import SectionHeader from './SectionHeader';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    {
        id: 1,
        title: "Maid Finder (Web3 Platform)",
        description: "A decentralized labor marketplace empowering workers through secure, blockchain-verified employment and transparent smart-contract payments.",
        tech: ["MERN", "Solidity", "Ethereum", "Ethers.js", "IPFS", "Hardhat"],
        liveLink: "https://maid-finder-delta.vercel.app/",
        githubLink: "https://github.com/DevSaloni/maid-finder",
        image: "/project1-banner.png"
    },
    {
        id: 2,
        title: "College Project Showcase",
        description: "An academic management platform that digitizes the project lifecycle, enabling real-time collaboration between mentors and students.",
        tech: ["MongoDB", "Express.js", "Next.js", "Node.js", "JWT", "Socket.io"],
        liveLink: "https://college-project-showcase.vercel.app/",
        githubLink: "https://github.com/DevSaloni/college-project-showcase",
        image: "/project2-banner.png"
    },
    {
        id: 3,
        title: "Smart Lost and Found (AI Platform)",
        description: "An AI-powered recovery ecosystem that automates matching lost items using multimodal analysis and real-time smart notifications.",
        tech: ["MERN", "PostgreSQL", "Gemini AI", "Socket.io", "Nodemailer", "Twilio"],
        liveLink: "https://smart-lost-found.vercel.app/",
        githubLink: "https://github.com/DevSaloni/smart-lost-found",
        image: "/project3-banner.png"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section section">
            <div className="container">
                <SectionHeader title="projects" />

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image-container">
                                <div className="browser-header">
                                    <div className="dot red"></div>
                                    <div className="dot yellow"></div>
                                    <div className="dot green"></div>
                                </div>
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                            </div>

                            <div className="project-content">

                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-link">
                                        Live Demo <FaExternalLinkAlt />
                                    </a>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-git">
                                        GitHub <FaGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="more-projects">
                    <a href="https://github.com/DevSaloni" target="_blank" rel="noopener noreferrer" className="view-all-btn">
                        View All on GitHub <span>~~&gt;</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
