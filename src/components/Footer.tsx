import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footerStyle'>
      <span>© 2025 Kareem Kaddah · </span>
      <Link
        to='/impressum'
        style={{ color: '#20B2AA', textDecoration: 'none', margin: '0 8px' }}
      >
        Impressum
      </Link>
      <span>·</span>
      <Link
        to='/datenschutz'
        style={{ color: '#20B2AA', textDecoration: 'none', margin: '0 8px' }}
      >
        Datenschutz
      </Link>
    </footer>
  );
};

export default Footer;
