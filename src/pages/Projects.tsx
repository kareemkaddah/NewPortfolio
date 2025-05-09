import React from 'react';
import './Projects.css';
import Projekte from '../components/Projekte';

const Projects: React.FC = () => {
  return (
    <div>
      <div id='projects' className='project-text'>
        <h1 style={{ fontSize: 90, fontWeight: 'bold', color: '#a600ff' }}>
          Projects:
        </h1>
        <div style={{ marginLeft: -20 }}>
          <Projekte
            projectImage=''
            projectDescripition='this is description'
            projectName='First'
          />
          <Projekte
            projectImage=''
            projectDescripition='this is description'
            projectName='First'
          />
          <Projekte
            projectImage=''
            projectDescripition='this is description'
            projectName='First'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
