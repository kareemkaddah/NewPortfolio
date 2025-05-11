import React from 'react';
import './Hero.css';
import Box from '../components/Box';

const Hero: React.FC = () => {
  return (
    <div id='home' className='hero slide-in'>
      <div className='main-text'>
        <h1>Hi I'm Kareem 👋</h1>
        <h1 style={{ fontSize: 90, color: '#a600ff', fontWeight: 'bold' }}>
          Fullstack
        </h1>
        <h1 style={{ fontSize: 90, fontWeight: 'bold' }}>Developer</h1>
        <h3>
          🚀 Full Stack Developer | React, TypeScript, AWS Serverless |
          Co-Founder Experience | Passionate About Scalable, User-Centric
          Solutions
        </h3>
        <div className='buttons'>
          <Box label='Contact Me' />
          <Box
            href='#projects'
            label='Browse Projects'
            color='#a600ff'
            textColor='white'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
