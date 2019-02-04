import React from 'react';

import {projectNameMaxLength} from '../helpers';

const MaxLengthModal = props => (
  <div id="max-length-modal">
    <p>Reached max character limit of {projectNameMaxLength}.</p>
    <button onClick={props.modalClickHandler}>OK</button>
  </div>
);

export default MaxLengthModal;