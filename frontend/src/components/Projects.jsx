import React from 'react';
import './Projects.css';
import SectionHeader from './SectionHeader';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    {
        id: 1,
        title: "Maid Finder (Web3 Platform)",
        description: "A blockchain-based platform connecting verified women workers with employers. Features an Ethereum smart contract escrow system for secure payments and IPFS for decentralized profile storage.",
        tech: ["MERN", "Solidity", "Ethereum", "Ethers.js", "IPFS", "Hardhat"],
        liveLink: "https://maid-finder-delta.vercel.app/",
        githubLink: "https://github.com/DevSaloni",
        image: "/assets/maid-finder.png"
    },
    {
        id: 2,
        title: "University Project Management System",
        description: "A role-based project tracking system with Admin, Mentor, and Student dashboards. Includes proposal approval workflow, weekly progress tracking, and real-time chat collaboration.",
        tech: ["MongoDB", "Express.js", "Next.js", "Node.js", "JWT", "Socket.io"],
        liveLink: "#",
        githubLink: "https://github.com/DevSaloni",
        image: "/assets/project-mgmt.png"
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
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
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
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="view-all-btn">
                        View All on GitHub <span>~~&gt;</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
