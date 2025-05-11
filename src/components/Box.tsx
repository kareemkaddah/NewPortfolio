import React from 'react';
import './Box.css';

type BoxProps = {
  label: string;
  color?: string;
  textColor?: string;
  onClick?: () => void;
  href?: string;
};

const Box: React.FC<BoxProps> = ({
  label,
  color = 'black',
  textColor = 'white',
  onClick,
  href,
}) => {
  const buttonStyle = {
    backgroundColor: color,
    color: textColor,
  };

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClick?.();
  };

  if (href) {
    return (
      <div className='box-container'>
        <a href={href} style={{ textDecoration: 'none' }} onClick={handleClick}>
          <button className='box-button' style={buttonStyle}>
            {label}
          </button>
        </a>
      </div>
    );
  }

  return (
    <div className='box-container'>
      <button className='box-button' style={buttonStyle} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Box;
