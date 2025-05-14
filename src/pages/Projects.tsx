import React, { useState } from 'react';
import './Projects.css';
import Platepal from '../assets/Platepal.png';
import Zooloretto from '../assets/Zooloretto.png';
import TrafficApp from '../assets/TrafficApp.png';
import Aiagents from '../assets/AIAgents.png';
import Projekte from '../components/Projekte';
import Box from '../components/Box';
import SmallBox from '../components/SmallBox';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      projectImage: Platepal,
      projectDescripition:
        'Contributed to the implementation of MVP features across both frontend and backend. Built the MVP using AWS CDK, AWS Serverless, DynamoDB, AWS Lambda, API Gateway, React, React Native, and Next.js. Implemented a new deployment pipeline with automated testing. Designed and executed unit, integration, and end-to-end tests using React Testing Library, Jest, and Playwright to ensure code quality.',
      projectName: 'Platepal',
    },
    {
      projectImage: TrafficApp,
      projectDescripition:
        'A mobile app for real-time traffic monitoring, showing traffic density and time windows. It includes multiple responsive screens using React Native, TypeScript, and TailwindCSS. An interactive map visualizes live traffic data, and the frontend connects to the backend via an API for real-time traffic updates. Developed in an agile Scrum team with regular code reviews to ensure quality.',
      projectName: 'Real-Time Traffic Monitoring App',
    },
    {
      projectImage: Zooloretto,
      projectDescripition:
        "Developed a digital adaptation of the board game Zooloretto, featuring strategic zoo-building mechanics, AI opponents, and a user-friendly interface. The project involved translating traditional board game rules into a digital format, including tile management, enclosure optimization, and scoring systems, while maintaining the original's charm and depth.",
      projectName: 'Zooloretto',
    },
    {
      projectImage: Aiagents,
      projectDescripition:
        'Building AI agents and automations using platforms like Relevance AI and n8n to streamline repetitive tasks. For example, one agent analyzes a company website and a LinkedIn profile to generate personalized sales call insights—helping users know what to say and how to approach the conversation.',
      projectName: 'AI Agents',
    },
    {
      projectImage: Aiagents,
      projectDescripition:
        'Building AI agents and automations using platforms like Relevance AI and n8n to streamline repetitive tasks. For example, one agent analyzes a company website and a LinkedIn profile to generate personalized sales call insights—helping users know what to say and how to approach the conversation.',
      projectName: 'AI Agents',
    },
    // Add more projects here
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div>
      <div id='projects' className='project-text slide-in-delay-2'>
        <h1 className='identification_style'>Projects:</h1>
        <div className='projects-grid'>
          {displayedProjects.map((project, index) => (
            <Projekte
              key={index}
              projectImage={project.projectImage}
              projectDescripition={project.projectDescripition}
              projectName={project.projectName}
            />
          ))}
        </div>
        {projects.length > 4 && (
          <div className='show-more-container'>
            <Box
              color='black'
              label={showAll ? 'Show Less' : 'Show More'}
              onClick={() => setShowAll(!showAll)}
            />
          </div>
        )}
        <div style={{ marginBottom: '80px' }}>
          <h2
            style={{
              fontSize: 60,
              marginTop: '4rem',
              color: '#20B2AA',
              overflow: 'hidden',
            }}
          >
            Skills:
          </h2>
          <SmallBox skill='TypeScript' />
          <SmallBox skill='Angular' />
          <SmallBox skill='React.js' />
          <SmallBox skill='Kotlin' />
          <SmallBox skill='Java' />
          <SmallBox skill='REST' />
          <SmallBox skill='UI/UX Design' />
          <SmallBox skill='Amazon DynamoDB' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
