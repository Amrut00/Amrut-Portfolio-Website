import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ThemeToggle />
      <Home />
      <About />
      <Projects />
      <Publications />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
