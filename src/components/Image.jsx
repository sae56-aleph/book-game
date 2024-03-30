import React from 'react';

const Image = ({ url, height, width }) => {
  return (
    <div style={{ borderRadius: '20px', overflow: 'hidden', height, width }}>
      <img src={url} alt="image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

export default Image;
