import React from 'react';
import './Projects.css';
import SectionHeader from './SectionHeader';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    {
        id: 1,
        title: "Maid Finder",
        description: "A comprehensive platform to find and hire domestic helpers. Features include user authentication, profile filtering, and secure booking management.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        liveLink: "https://maid-finder-delta.vercel.app/",
        githubLink: "https://github.com/yourusername/maid-finder", // Placeholder
        image: "/maid-finder-preview.jpg" // Placeholder image path
    },
    // Add more projects here
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
                                {/* Use a placeholder div if image is missing/broken for now */}
                                <div className="img-placeholder">
                                    <span>{project.title} Preview</span>
                                </div>
                                {/* <img src={project.image} alt={project.title} /> */}
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
