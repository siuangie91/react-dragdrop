import React, { Component } from 'react';

class ProjectsNode extends Component {
  render() {
    const {name, dragStartHandler} = this.props;

    return (
      <div className="project-node" 
        draggable="true"
        name={name}
        onDragStart={dragStartHandler}>
        <span>{name}</span>
      </div>
    );
  }
}

export default ProjectsNode;
