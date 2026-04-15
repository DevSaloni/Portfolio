import React from 'react';
import './Skill.css';
import SectionHeader from './SectionHeader';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaGithub, FaPython, FaEthereum, FaWallet, FaGitAlt
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiSolidity, SiPostman, SiNextdotjs, SiTypescript, SiRedis, SiTailwindcss, SiVite, SiMysql, SiPostgresql, SiIpfs, SiRender, SiEclipseide, SiWeb3Dotjs,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skills = [
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "SQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "Solidity", icon: <SiSolidity />, color: "#AA6746" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "ReactJS", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
  { name: "NextJS", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "Ethereum", icon: <FaEthereum />, color: "#3C3C3D" },
  { name: "Hardhat", icon: <span className="hard-text">H</span>, color: "#FFF100" },
  { name: "MetaMask", icon: <FaWallet />, color: "#F6851B" },
  { name: "Ethers.js", icon: <span className="e-text">E</span>, color: "#2535a0" },
  { name: "Web3.js", icon: <SiWeb3Dotjs />, color: "#F16822" },
  { name: "IPFS", icon: <SiIpfs />, color: "#65C2CB" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
  { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
  { name: "Eclipse", icon: <SiEclipseide />, color: "#2C2255" },
  { name: "Render", icon: <SiRender />, color: "#ffffff" },
];



const Skill = () => {
    // Split skills into two rows
    const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
    const secondRow = skills.slice(Math.ceil(skills.length / 2));

    const SkillItem = ({ skill }) => (
        <div
            className="skill-badge-pill"
            style={{ '--skill-color': skill.color }}
        >
            <span className="skill-icon-pill" style={{ color: skill.color }}>
                {skill.icon}
            </span>
            <span className="skill-name-pill">{skill.name}</span>
        </div>
    );

    return (
        <section id="skills" className="skills-section section">
            <div className="container">
                <SectionHeader title="skills" />

                <div className="skills-marquee-wrapper">
                    {/* First Row Scrolling Left */}
                    <div className="marquee-track left">
                    <div className="marquee-content">
                        {firstRow.map((skill, index) => <SkillItem key={index} skill={skill} />)}
                        {/* Duplicate for seamless scroll */}
                        {firstRow.map((skill, index) => <SkillItem key={`dup-${index}`} skill={skill} />)}
                    </div>
                </div>

                {/* Second Row Scrolling Right */}
                <div className="marquee-track right">
                    <div className="marquee-content">
                        {secondRow.map((skill, index) => <SkillItem key={index} skill={skill} />)}
                        {/* Duplicate for seamless scroll */}
                        {secondRow.map((skill, index) => <SkillItem key={`dup-${index}`} skill={skill} />)}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};


export default Skill;
