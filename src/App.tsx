import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;