import React from 'react';

const EmptyState = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ color: '#E4033B', fontSize: '45px' }}>Error 404</h1>
      <p style={{ color: '#545F7D', fontSize: '25px' }}>
        Hi, there is no information to show at the moment
      </p>
    </div>
  );
};

export default EmptyState;
