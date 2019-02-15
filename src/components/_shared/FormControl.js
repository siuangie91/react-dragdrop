import React from 'react';

const FormControl = props => (
  <div className="form-control">
    <label>{props.labelName}:</label>
    {props.children}
  </div>  
);

export default FormControl;