import React from 'react';
import './App.css';
import SocialBox from './components/SocialBox';
import Hero from './pages/Hero';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <SocialBox />
    </>
  );
}

export default App;
