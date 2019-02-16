import React from 'react';
import NodeBtn from './_shared/NodeBtn';

const ProjectsNode = React.forwardRef((props, ref) => {
  const {name, dragStartHandler, dragOverHandler, dragEndHandler, nodeStyles, editHandler, deleteHandler} = props; 

  return (
    <div className="project-node" 
      draggable="true"
      name={name}
      onDragStart={dragStartHandler}
      onDragOver={dragOverHandler}
      onDragEnd={dragEndHandler}>
      
      <div className="node-copy"
        ref={ref}
        style={nodeStyles}>
        <span>{name}</span>
        <i className="fas fa-arrows-alt" aria-hidden="true"></i>
      </div>

      <NodeBtn classes="node-edit-btn"
        icon="fas fa-edit"
        clickHandler={editHandler} />

      <NodeBtn classes="node-delete-btn"
        icon="fas fa-trash-alt"
        clickHandler={deleteHandler} />

      <span className="node-btn node-detail-btn">
        <i className="fas fa-info-circle"></i>
      </span>

    </div>
  );
})

export default ProjectsNode;
