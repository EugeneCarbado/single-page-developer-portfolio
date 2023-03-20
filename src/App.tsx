import React from 'react';
// import PortfolioForm from './components/PortfolioForm/PortfolioForm';
import Hero from './components/Hero/Hero';
import './index.css';
import '@fontsource/space-grotesk';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/space-grotesk';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Hero />
      <Experience />
      <Projects />
      {/* <PortfolioForm /> */}
    </div>
  );
}

export default App;
