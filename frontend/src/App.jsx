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

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <main>
        <Hero />
        <Quote />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
