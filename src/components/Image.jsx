import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ url, height, width }) => {
    return (
        <div style={{ borderRadius: '20px', overflow: 'hidden', height, width }}>
      <img src={url} alt="image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

Image.propTypes = {
    url: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
};

export default Image;
