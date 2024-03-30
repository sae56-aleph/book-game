import React from 'react';
import PropTypes from 'prop-types';


const Titre = ({ level, text }) => {
    const TagName = `h${Math.min(Math.max(level, 1), 6)}`;
    
    const className = level === 0 ? 'title-level-0' : '';
    
    const fontSize = level === 0 ? '128px' : `${96 - (32 * (level - 1))}px`;
    
    const style = {
        fontFamily: 'Rakkas, sans-serif',
        fontWeight: 'bold',
        fontSize: fontSize,
    };
    
    return <TagName className={className} style={style}>{text}</TagName>;
};

Titre.propTypes = {
  level: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Titre;
