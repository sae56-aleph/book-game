import React from 'react';
import PropTypes from 'prop-types';

const ActionSimple = ({ target, text, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <a href={target} style={{ color: '#461C89' }} onClick={handleClick}>
      {text}
    </a>
  );
};

ActionSimple.propTypes = {
  target: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActionSimple;
