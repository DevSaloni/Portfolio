import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active link based on scroll position
      const sections = ["home", "about", "projects", "contact"];
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

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <h1 className="nav-logo" onClick={() => scrollTo('home')}>
          @Saloni<span className="dot">.</span>
        </h1>

        <ul className="nav-links">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
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
