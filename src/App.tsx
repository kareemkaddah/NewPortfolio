import React from 'react';
import './App.css';
import SocialBox from './components/SocialBox';
import Hero from './pages/Hero';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop';
import Imprint from './pages/Imprint';
import Datenschutz from './pages/Datenschutz';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              <About />
              <Projects />
            </>
          }
        />
        <Route path='/impressum' element={<Imprint />} />
        <Route path='/datenschutz' element={<Datenschutz />} />
      </Routes>
      <SocialBox />
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
