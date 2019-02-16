import React, { Component, Fragment } from 'react';
import ProjectContext from '../context/ProjectContext';
import { logMsg } from '../helpers/index';

class Detail extends Component {
  static contextType = ProjectContext;
  
  render() {
    logMsg('Detail this.context', this.context);
    return (
      <ProjectContext.Consumer name="ProjectContextConsumer.Detail">
        {
          value => {
            logMsg('values', value);
            return (
              <Fragment>
                <h1>Detail for ID: {this.props.id}</h1>
                {/* <h2>Name: {this.context.projectsData.find(item => item.id === this.props.id)}</h2> */}    
              </Fragment>
            );
          }
        }
      </ProjectContext.Consumer>
    )
  }
};

export default Detail;