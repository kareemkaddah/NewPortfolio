import React from 'react';
interface BoxProps {
  label: string;
  color?: string;
  textColor?: string;
  hoverEffect?: string;
}

const Box: React.FC<BoxProps> = ({
  label,
  color = 'black',
  textColor = 'white',
}) => {
  return (
    <div style={{ marginLeft: '10px' }}>
      <button style={{ backgroundColor: color, color: textColor }}>
        {label}
      </button>
    </div>
  );
};
export default Box;
