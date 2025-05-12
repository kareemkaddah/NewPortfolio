import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 10;
      setVisible(scrollPosition >= threshold);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    handleScroll();
    checkMobile();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (!visible) return null;

  return (
    <footer
      style={{
        position: isMobile ? 'static' : 'fixed',
        left: 0,
        bottom: 0,
        width: 'auto',
        minWidth: '260px',
        textAlign: 'left',
        padding: '18px 32px',
        background: '#fff',
        color: '#888',
        fontSize: '1rem',
        margin: 0,
        borderTopRightRadius: '16px',
        boxShadow: isMobile ? 'none' : '0 -2px 12px rgba(0,0,0,0.08)',
        zIndex: 1100,
        letterSpacing: 0.2,
      }}
    >
      <span>© 2025 Kareem Kaddah · </span>
      <Link
        to='/impressum'
        style={{ color: '#a600ff', textDecoration: 'none', margin: '0 8px' }}
      >
        Impressum
      </Link>
      <span>·</span>
      <Link
        to='/datenschutz'
        style={{ color: '#a600ff', textDecoration: 'none', margin: '0 8px' }}
      >
        Datenschutz
      </Link>
    </footer>
  );
};

export default Footer;
