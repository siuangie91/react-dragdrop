import React from 'react';

const Overlay = ({ idName, children }) => (
  <div className="overlay" id={idName}>
    <div className="overlay-container">
      {children}
    </div>
  </div>
);

export default Overlay;