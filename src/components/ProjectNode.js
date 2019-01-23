import React, { Component } from 'react';

class ProjectsNode extends Component {
  render() {
    return (
      <div className="project-node" draggable="true">
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default ProjectsNode;
