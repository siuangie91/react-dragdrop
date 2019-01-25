import React, { Component } from 'react';

class ProjectsNode extends Component {
  render() {
    const {name, dragStartHandler, dragOverHandler, dragEndHandler, nodeStyles} = this.props;

    return (
      <div className="project-node" 
        draggable="true"
        name={name}
        onDragStart={dragStartHandler}
        onDragOver={dragOverHandler}
        onDragEnd={dragEndHandler}
        style={nodeStyles}>
        <span>{name}</span>
        <i className="fas fa-arrows-alt" aria-hidden="true"></i>
      </div>
    );
  }
}

export default ProjectsNode;
