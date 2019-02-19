import React from 'react';

const Button = props => (
  <button onClick={props.clickHandler}>
    {props.children}
  </button>
);

export default Button;