import React from 'react';
import './Projekte.css';
import { useMouseMove } from '../hooks/useMouseMove';

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
  const elementRef = useMouseMove();

  return (
    <div>
      <div className='project-card' ref={elementRef}>
        <img
          className='project-image'
          src={projectImage}
          alt={projectName}
        ></img>
        <div className='project-content'>
          <h3> {projectName} </h3>
          <p> {projectDescripition} </p>
        </div>
      </div>
    </div>
  );
};

export default Projekte;
