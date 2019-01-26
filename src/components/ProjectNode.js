import React, {Fragment} from 'react';

const ProjectsNode = props => {
  const {name, dragStartHandler, dragOverHandler, dragEndHandler, nodeStyles, deleteHandler} = props; 

  return (
    <Fragment>
      <div className="project-node" 
        draggable="true"
        name={name}
        onDragStart={dragStartHandler}
        onDragOver={dragOverHandler}
        onDragEnd={dragEndHandler}>
        <div className="node-copy"
          style={nodeStyles}>
          <span>{name}</span>
          <i className="fas fa-arrows-alt" aria-hidden="true"></i>
        </div>
        <span className="node-delete-btn"
          onClick={deleteHandler}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </div>
    </Fragment>
  );
};

export default ProjectsNode;
