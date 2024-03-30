import React, { useState } from 'react';

const Bouton = ({ text, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const buttonStyle = {
    backgroundColor: hovered ? '#7c00c4' : '#58008a',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Bouton;
