import React from 'react';
import './About.css';
import Experience from '../components/Experience';

const education = [
  {
    company: 'RWTH Aachen',
    title: 'Masters Computer Science',
    date: 'April 2025 - On Going',
  },
  {
    company: 'TU Dortmund',
    title: 'Bachelor Computer Sciencce',
    date: 'April 2019 - October 2024',
  },
];
const experience = [
  {
    company: 'Sepp.med',
    title: 'Software Developer',
    date: '04/2023 - 05/2024',
  },
  {
    company: 'TU Dortmund',
    title: 'Tutor DAP2',
    date: '04/2023 - 10/2023',
  },
];

const About: React.FC = () => {
  return (
    <div id='about' className='about-text'>
      <h1 style={{ fontSize: 90, fontWeight: 'bold', color: '#a600ff' }}>
        About
      </h1>
      <h1 style={{ fontSize: 90, fontWeight: 'bold', marginTop: '-2rem' }}>
        {' '}
        Me:
      </h1>
      <h2>
        Passionate software developer with experience in cloud computing and
        full-stack development. Skilled in React.js and TypeScript, with a
        strong focus on performance and user experience. Dedicated to continuous
        learning and collaborative teamwork.
      </h2>

      <h2 style={{ fontSize: 60, marginTop: '4rem', color: '#a600ff' }}>
        Education:
      </h2>
      <Experience experiences={education} />

      <h2 style={{ fontSize: 60, marginTop: '4rem', color: '#a600ff' }}>
        Work
      </h2>
      <h2 style={{ fontSize: 60, marginTop: '-2rem' }}>Experience:</h2>
      <Experience experiences={experience} />
    </div>
  );
};

export default About;
