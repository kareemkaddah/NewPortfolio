import React, { useEffect, useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
        <div
          className={`name-container ${isHovered ? 'expanded' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className='initial'>K</span>
          <span className='rest-of-name'>areem</span>
          <span className='initial'>K</span>
          <span className='rest-of-name'>addah</span>
        </div>
      </div>
      <div className='center'>
        <a href='#home' className='nav-link'>
          Home
        </a>
        <a href='#about' className='nav-link'>
          About
        </a>
        <a href='#projects' className='nav-link'>
          Projects
        </a>
      </div>
      <div className='right'>
        <span className='message-icon'>💬</span>
      </div>
    </header>
  );
};

export default Header;
