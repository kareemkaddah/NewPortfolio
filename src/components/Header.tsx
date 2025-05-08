import React, { useEffect, useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className='left'>
        <span>
          Kareem <br /> Kaddah
        </span>
      </div>
      <div className='center'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
      </div>
      <div className='right'>
        <span className='message-icon'>💬</span>
      </div>
    </header>
  );
};

export default Header;
