import React, { useState } from 'react';
import './Experience.css';
import SectionHeader from './SectionHeader';
import { FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa';

const experienceData = [
    {
        id: 1,
        role: "Full Stack Development Intern",
        company: "Techkrate (LURP Technologies)",
        companyLink: "https://www.techkrate.com/",
        logo: "/techkrate-logo.jpeg",
        duration: "Jan 2026 – Present",
        description: [
            "Developed responsive and user-friendly web applications using HTML, CSS, JavaScript, and React.js / Next.js by converting Figma UI/UX designs into pixel-perfect, functional interfaces.",
            "Integrated frontend components with backend APIs for dynamic data rendering while ensuring cross-browser compatibility and mobile responsiveness.",
            "Debugged, tested, and optimized web applications for performance and scalability, collaborating with engineering and design teams in a product-driven development environment."
        ]
    }
];

const Experience = () => {
    const [expandedIds, setExpandedIds] = useState([1]); // Default first one expanded

    const toggleExpand = (id) => {
        setExpandedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    return (
        <section id="experience" className="experience-section section">
            <div className="container">
                <SectionHeader title="experience" />

                <div className="experience-container">
                    {experienceData.map((exp) => {
                        const isExpanded = expandedIds.includes(exp.id);
                        return (
                            <div
                                className={`exp-card-modern ${isExpanded ? 'expanded' : ''}`}
                                key={exp.id}
                            >
                                <div className="exp-top-row" onClick={() => toggleExpand(exp.id)}>
                                    <div className="exp-left">
                                        <div className="exp-logo-container">
                                            <img src={exp.logo} alt={exp.company} className="exp-logo" />
                                        </div>
                                        <div className="exp-info">
                                            <h3 className="exp-company-name">{exp.company}</h3>
                                            <p className="exp-role-title">{exp.role}</p>
                                        </div>
                                    </div>
                                    <div className="exp-right">
                                        <span className="exp-date-range font-mono">{exp.duration}</span>
                                        <FaChevronDown className={`exp-arrow ${isExpanded ? 'rotated' : ''}`} />
                                    </div>
                                </div>

                                <div className="exp-details-wrapper">
                                    <div className="exp-details-content">
                                        <div className="exp-link-box">
                                            <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="visit-btn">
                                                Visit Company <FaExternalLinkAlt />
                                            </a>
                                        </div>
                                        <ul className="exp-bullet-list">
                                            {exp.description.map((point, index) => (
                                                <li key={index} className="exp-bullet">
                                                    <span className="bullet-icon">▹</span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
