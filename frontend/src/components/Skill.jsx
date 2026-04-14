import React from 'react';
import './Skill.css';
import SectionHeader from './SectionHeader';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaGithub, FaPython, FaEthereum, FaWallet, FaGitAlt
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiSolidity, SiPostman, SiNextdotjs, SiTypescript, SiRedis, SiTailwindcss, SiVite, SiMysql, SiPostgresql, SiEthereum, SiIpfs
} from 'react-icons/si';

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express", icon: <SiExpress />, color: "#ffffff" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
  { name: "Solidity", icon: <SiSolidity />, color: "#AA6746" },
  { name: "Ethereum", icon: <FaEthereum />, color: "#3C3C3D" }, // Grey/White usually
  { name: "MetaMask", icon: <FaWallet />, color: "#F6851B" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "IPFS", icon: <SiIpfs />, color: "#65C2CB" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
];

const Skill = () => {
  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <SectionHeader title="skills" />

        <div className="skills-container-flat">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-badge"
              style={{ '--skill-color': skill.color }}
            >
              <span className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
