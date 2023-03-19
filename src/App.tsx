import React from 'react';
// import PortfolioForm from './components/PortfolioForm/PortfolioForm';
import Hero from './components/Hero/Hero';
import './index.css';
import '@fontsource/space-grotesk';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/space-grotesk';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div>
      <Hero />
      <Experience />
      {/* <PortfolioForm /> */}
    </div>
  );
}

export default App;
