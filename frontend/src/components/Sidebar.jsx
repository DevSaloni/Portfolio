import React from 'react';
import './Sidebar.css';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar-socials">
      <div className="line top"></div>
      <div className="social-links-vertical">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <div className="line bottom"></div>
    </div>
  );
};

export default Sidebar;
