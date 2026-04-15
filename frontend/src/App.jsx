import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Quote from './components/Quote';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';

import Experience from './components/Experience';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = React.useState(false);

  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <main>
        <Hero />
        <Quote />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Skill />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
