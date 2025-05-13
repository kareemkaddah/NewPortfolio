import React from 'react';
import './SmallBox.css';
type SmallBoxProps = {
  skill: string;
};
const SmallBox: React.FC<SmallBoxProps> = ({ skill }) => {
  return (
    <div className='skillbox'>
      <p> {skill} </p>
    </div>
  );
};
export default SmallBox;
