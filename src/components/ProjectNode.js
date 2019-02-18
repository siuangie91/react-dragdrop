import React from 'react';
import NodeBtn from './_shared/NodeBtn';

const ProjectsNode = props => {
  const {name, projectRef, dragStartHandler, dragOverHandler, dragEndHandler, nodeStyles, editHandler, deleteHandler} = props;

  return (
    <div className="project-node" 
      draggable="true"
      name={name}
      onDragStart={dragStartHandler}
      onDragOver={dragOverHandler}
      onDragEnd={dragEndHandler}>
      
      <div className="node-copy"
        style={nodeStyles}>
        <span 
          ref={projectRef}>
          {name}
        </span>
        <i className="fas fa-arrows-alt" aria-hidden="true"></i>
      </div>

      <NodeBtn classes="node-edit-btn"
        icon="fas fa-edit"
        clickHandler={editHandler} />

      <NodeBtn classes="node-delete-btn"
        icon="fas fa-trash-alt"
        clickHandler={deleteHandler} />

    </div>
  );
};

export default ProjectsNode;
