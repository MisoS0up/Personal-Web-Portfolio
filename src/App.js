import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Navbar from './Navbar';
import './App.css';
import Contact from './Contact';

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add an event listener to detect scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact/>
      {showScrollButton && (
        <button className="scroll-button" onClick={handleScrollToTop}>
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </div>
  );
};

export default App;
