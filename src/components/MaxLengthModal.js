import React from 'react';

import Overlay from './_shared/Overlay';
import Button from './_shared/Button';

import { projectNameMaxLength } from '../helpers';

const MaxLengthModal = ({ modalClickHandler }) => (
  <Overlay idName="max-length-modal">
    <i className="fas fa-exclamation-circle"></i>
    <br />
    <p>Reached max character limit of {projectNameMaxLength}.</p>
    <Button clickHandler={modalClickHandler}>OK</Button>
  </Overlay>
);

export default MaxLengthModal;