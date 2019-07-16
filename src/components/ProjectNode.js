import React from 'react';
import NodeBtn from './_shared/NodeBtn';
import { Link } from '@reach/router';

const ProjectNode = props => {
  const { 
    id, 
    name, 
    projectRef, 
    dragStartHandler, 
    dragOverHandler, 
    dragEndHandler, 
    nodeStyles, 
    editHandler, 
    deleteHandler, 
    keyupHandler, 
    enterKeyHandler, 
    blurHandler 
  } = props;

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

      <Link to={`${process.env.PUBLIC_URL}/detail/${id}`}
        className="node-btn node-detail-btn">
        <i className="fas fa-info-circle"></i>
      </Link>

    </div>
  );
};

export default ProjectNode;
