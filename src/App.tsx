import React from 'react';
// import PortfolioForm from './components/PortfolioForm/PortfolioForm';
import Hero from './components/Hero/Hero';
import './index.css';
import '@fontsource/space-grotesk';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/space-grotesk';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='pb-20'>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
