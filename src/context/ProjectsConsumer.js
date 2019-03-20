import React, { Component } from 'react';
import ProjectContext from './ProjectContext';

const withProjectsContext = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <ProjectContext.Consumer>
          {
            context => <WrappedComponent projectsContext={context} {...this.props} />
          }
        </ProjectContext.Consumer>
      )
    }
  }
};

export default withProjectsContext;
