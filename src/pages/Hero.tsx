import React, { useState } from 'react';
import './Hero.css';
import Box from '../components/Box';
import WavingHand from '../components/WavingHand';

const Hero: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleContactClick = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4000);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div id='home' className='hero slide-in'>
      <div className='main-text'>
        <h1 style={{ overflowY: 'hidden' }}>
          Hi I'm Kareem <WavingHand />
        </h1>
        <h1 className='identification_style' style={{ color: '' }}>
          Fullstack
        </h1>
        <h1 className='identification_style' style={{ color: 'black' }}>
          Developer
        </h1>
        <h3>
          🚀 Full Stack Developer | React, TypeScript, AWS Serverless |
          Co-Founder Experience | Passionate About Scalable, User-Centric
          Solutions
        </h3>
        <div className='buttons'>
          <Box label='Contact Me' onClick={handleContactClick} />
          <Box
            href='#projects'
            label='Browse Projects'
            color='#20B2AA'
            textColor='white'
          />
        </div>
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
            <b>kontakt@kaddah.de</b>
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
    </div>
  );
};

export default Hero;
