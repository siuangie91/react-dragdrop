import React from 'react';

import Button from './Button';

import {projectNameMaxLength} from '../helpers';

const MaxLengthModal = props => (
  <div id="max-length-modal" className="overlay">
    <div className="overlay-container">
      <i className="fas fa-exclamation-circle"></i>
      <br/>
      <p>Reached max character limit of {projectNameMaxLength}.</p>
      <Button clickHandler={props.modalClickHandler}>OK</Button>
    </div>
  </div>
);

export default MaxLengthModal;