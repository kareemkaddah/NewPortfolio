import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4000);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className='left'>
        <Link to='/' style={{ textDecoration: 'none' }}>
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
        </Link>
      </div>
      <div className='center' style={{ overflow: 'hidden' }}>
        {isHomePage ? (
          <>
            <a href='#home' className='nav-link'>
              Home
            </a>
            <a href='#about' className='nav-link'>
              About
            </a>
            <a href='#projects' className='nav-link'>
              Projects
            </a>
          </>
        ) : (
          <>
            <Link to='/' className='nav-link'>
              Home
            </Link>
            <Link to='/#about' className='nav-link'>
              About
            </Link>
            <Link to='/#projects' className='nav-link'>
              Projects
            </Link>
          </>
        )}
      </div>
      <div className='right'>
        <span
          className='message-icon'
          onClick={handleContactClick}
          style={{ cursor: 'pointer' }}
        >
          💬
        </span>
      </div>
      {showNotification && (
        <div
          style={{
            position: 'fixed',
            top: 80,
            right: 30,
            background: 'rgba(30, 30, 30, 0.97)',
            color: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            padding: '20px 32px',
            zIndex: 1000,
            fontFamily: 'inherit',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            minWidth: '260px',
            maxWidth: '90vw',
          }}
        >
          <span style={{ flex: 1 }}>
            You can contact me at:
            <br />
            <b>your.email@example.com</b>
          </span>
          <button
            onClick={handleCloseNotification}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '1.3rem',
              cursor: 'pointer',
              marginLeft: '8px',
            }}
          >
            &times;
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
