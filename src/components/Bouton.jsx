import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Bouton = ({ text, onClick, isDisabled = false}) => {
    const [hovered, setHovered] = useState(false);
    
    const handleHover = () => {
        setHovered(!hovered);
    };
    
    const buttonStyle = {
        backgroundColor: isDisabled ? '#CECECE' : (hovered ? '#6328C3' : '#461C89'),
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
        disabled={isDisabled}
        >
      {text}
    </button>
  );
};

Bouton.propTypes = {
    onClick: PropTypes.funtion,
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.boolean,
};

export default Bouton;
