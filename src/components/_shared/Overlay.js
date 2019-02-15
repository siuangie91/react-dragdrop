import React from 'react';

const Overlay = props => (
  <div className="overlay" id={props.idName}>
    <div className="overlay-container">
      {props.children}
    </div>
  </div>
);

export default Overlay;