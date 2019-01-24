import React, { Component } from 'react';

class ProjectsNode extends Component {
  render() {
    const {name, dragStartHandler, dragOverHandler, dragEndHandler} = this.props;

    return (
      <div className="project-node" 
        draggable="true"
        name={name}
        onDragStart={dragStartHandler}
        onDragOver={dragOverHandler}
        onDragEnd={dragEndHandler}>
        <span>{name}</span>
      </div>
    );
  }
}

export default ProjectsNode;
