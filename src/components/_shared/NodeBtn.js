import React from 'react';

const NodeBtn = props => {
  const classes = props.classes ? props.classes : "";
  const { clickHandler, icon } = props;
  return (
    <span className={`node-btn ${classes}`}
      onClick={clickHandler}>
      <i className={icon}></i>
    </span>
  );
};

export default NodeBtn;