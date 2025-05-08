import React, { useState } from 'react';
import './Experience.css';

type ExperienceItem = {
  company: string;
  title: string;
  date: string;
  bullets?: string[]; // make bullets optional
};

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];

  return (
    <div id='experience' className='experience-container'>
      <div className='tabs'>
        {experiences.map((exp, idx) => (
          <button
            key={idx}
            className={`tab-button ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          >
            {exp.company}
          </button>
        ))}
      </div>
      <div className='content'>
        <h2>
          {activeExperience.title} <span>@ {activeExperience.company}</span>
        </h2>
        <p className='date'>{activeExperience.date}</p>

        {/* Only show bullet points if they exist */}
        {activeExperience.bullets && activeExperience.bullets.length > 0 && (
          <ul>
            {activeExperience.bullets.map((point, idx) => (
              <li key={idx}>
                <span className='check'>✔</span> {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Experience;
