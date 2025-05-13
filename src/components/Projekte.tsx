import React from 'react';
import './Projekte.css';

type ProjekteProps = {
  projectImage: string;
  projectName: string;
  projectDescripition: string;
};

const Projekte: React.FC<ProjekteProps> = ({
  projectDescripition,
  projectImage,
  projectName,
}) => {
  return (
    <div className='project-card'>
      <img className='project-image' src={projectImage} alt={projectName}></img>
      <div className='project-content'>
        <h3 id='projectName'> {projectName} </h3>
        <p id='projectDescription'> {projectDescripition} </p>
      </div>
    </div>
  );
};

export default Projekte;
