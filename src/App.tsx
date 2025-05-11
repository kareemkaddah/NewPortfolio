import React from 'react';
import './App.css';
import SocialBox from './components/SocialBox';
import Hero from './pages/Hero';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <SocialBox />
      <ScrollToTop />
    </>
  );
}

export default App;
