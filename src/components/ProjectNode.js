import React from 'react';

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
      
      <span className="node-btn node-edit-btn"
        onClick={editHandler}>
        <i className="fas fa-edit"></i>
      </span>

      <span className="node-btn node-delete-btn"
        onClick={deleteHandler}>
        <i className="fas fa-trash-alt"></i>
      </span>

      <span className="node-btn">
        <i className="fas fa-info-circle"></i>
      </span>

    </div>
  );
})

export default ProjectsNode;
