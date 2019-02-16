import React from 'react';

const NodeBtn = props => {
  const classes = props.classes ? props.classes : "";
  return (
    <span className={`node-btn ${classes}`}
      onClick={props.clickHandler}>
      <i className={props.icon}></i>
    </span>
  );
};

export default NodeBtn;