import React, { useEffect, useState } from 'react';
import './Hero.css';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = ["Blockchain Developer", "Web Designer", "Full Stack Dev"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero-container">
      {/* Background Grid using CSS */}
      <div className="grid-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting font-mono">
            <span className="cli-prefix">&gt;</span> Hello, world! I am
          </p>

          <h1 className="name-title glitch-wrapper">
            <span className="glitch" data-text="Saloni Pawar">Saloni <span className="text-rani">Pawar</span></span>
          </h1>

          <div className="role-wrapper font-mono">
            <span className="hash">#</span>
            <span className="role-text">{text}</span>
            <span className="cursor">|</span>
          </div>

          <p className="description">
            I build scalable web and decentralized applications with clean UI and seamless UX.
            Focusing on standard <span className="highlight">MERN Stack</span> and <span className="highlight">Web3</span> technologies.
          </p>

          <div className="cta-group">
            <a href="#projects" className="btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Check Projects <span className="arrow">➔</span>
            </a>
            <a href="/resume.pdf" download="Saloni_Pawar_Resume.pdf" className="btn-outline">
              Download CV
            </a>
          </div>

          {/* Restoring social links as they were part of the "prev" design usually */}
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>

        </div>

        <div className="hero-visual" style={{ transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)` }}>
          <div className="image-frame">
            <img src="/saloniback.jpg" alt="Saloni Pawar" className="profile-img" />
            <div className="frame-border"></div>

            {/* Restored Code Snippet Card */}
            <div className="code-snippet-card">
              <pre>
                <code>
                  <span className="k">const</span> <span className="v">developer</span> = <span className="b">{`{`}</span>{'\n'}
                  {'  '}name: <span className="s">"Saloni"</span>,{'\n'}
                  {'  '}skills: [<span className="s">"React"</span>, <span className="s">"Solidity"</span>],{'\n'}
                  {'  '}hardWorker: <span className="k">true</span>{'\n'}
                  <span className="b">{`}`}</span>;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
