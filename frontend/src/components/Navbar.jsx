import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = document.getElementById(current)?.offsetHeight;
        const sectionTop = document.getElementById(current)?.offsetTop - 150;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(current);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      setActiveSection(id);
      setIsMenuOpen(false); // Close menu on click
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${isMenuOpen ? "active" : ""}`}>
      <div className="nav-container">
        <h1 className="nav-logo" onClick={() => scrollTo('home')}>
          @Saloni<span className="logo-dot">.</span>
        </h1>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {["home", "about", "skills", "experience", "projects", "contact"].map((item) => (
            <li key={item}>
              <button
                className={`nav-btn ${activeSection === item ? "active" : ""}`}
                onClick={() => scrollTo(item)}
              >
                <span className="hash">#</span>{item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
