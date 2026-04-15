import React from 'react';
import './Sidebar.css';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar-socials">
      <div className="line top"></div>
      <div className="social-links-vertical">
        <a href="https://github.com/DevSaloni" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/saloni-pawar-630b23270" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://x.com/SaloniPawa56635" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
      <div className="line bottom"></div>
    </div>
  );
};

export default Sidebar;
