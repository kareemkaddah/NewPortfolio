import React from 'react';
import './Box.css';

interface BoxProps {
  label: string;
  color?: string;
  textColor?: string;
  hoverEffect?: string;
  onClick?: () => void;
  href?: string;
}

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
    padding: '12px 30px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
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
      <div style={{ marginLeft: '10px' }}>
        <a href={href} style={{ textDecoration: 'none' }} onClick={handleClick}>
          <button style={buttonStyle}>{label}</button>
        </a>
      </div>
    );
  }

  return (
    <div style={{ marginLeft: '10px' }}>
      <button style={buttonStyle} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Box;
