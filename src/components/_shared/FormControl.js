import React from 'react';

const FormControl = ({ labelName, children }) => (
  <div className="form-control">
    <label>{labelName}:</label>
    {children}
  </div>
);

export default FormControl;