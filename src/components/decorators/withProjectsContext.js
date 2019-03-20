import React, { Component } from 'react';
import ProjectContext from '../../context/ProjectContext';

const withProjectsContext = ComposedComponent => {
  class WithProjectsContext extends Component {
    render() {
      return (
        <ProjectContext.Consumer>
          {
            context => <ComposedComponent projectsContext={context} {...this.props} />
          }
        </ProjectContext.Consumer>
      )
    }
  }

  const displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component';
  WithProjectsContext.displayName = `WithProjectsContext(${displayName})`;

  return WithProjectsContext;
};

export default withProjectsContext;
