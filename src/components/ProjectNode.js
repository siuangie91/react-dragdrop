import React from 'react';
import NodeBtn from './_shared/NodeBtn';

const ProjectNode = props => {
  const {name, projectRef, dragStartHandler, dragOverHandler, dragEndHandler, nodeStyles, editHandler, deleteHandler, keyupHandler, enterKeyHandler, blurHandler} = props;

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
          ref={projectRef}
          onKeyUp={keyupHandler}
          onKeyPress={enterKeyHandler}
          onBlur={blurHandler}>
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

export default ProjectNode;
