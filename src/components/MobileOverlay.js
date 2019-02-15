import React from 'react';
import Overlay from './_shared/Overlay';

const MobileOverlay = () => (
  <Overlay idName="mbl-overlay">
    <h1>Sorry! <i className="far fa-sad-cry"></i></h1>
    <p>HTML5 <code>draggable</code> is not compatible with touch screen devices.</p>
    <a href="https://github.com/siuangie91/react-dragdrop" target="_blank" rel="noopener noreferrer">See on GitHub <i class="fas fa-external-link-alt"></i></a>
  </Overlay>
);

export default MobileOverlay;