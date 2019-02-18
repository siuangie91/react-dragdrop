import React, { Component, Fragment } from 'react';
import ProjectContext from '../context/ProjectContext';
import ProjectContextProvider from '../context/ProjectContextProvider';
import { logMsg } from '../helpers/index';
import NotFound from './NotFound';

class Detail extends Component {
  static contextType = ProjectContext;

  render() {
    return (
      <ProjectContextProvider>
        <ProjectContext.Consumer name="ProjectContextConsumer.Detail">
          {
            value => {
              logMsg('Detail value', value);

              const project = value.projectsData.find(item => item.id === +this.props.id);           

              return (
                <Fragment>
                  {
                    project ? 
                      <Fragment>
                        <h1>Detail for ID: {this.props.id}</h1>
                        <h2>Name: {project.name}</h2>
                      </Fragment>
                      :
                      <NotFound />
                  }
                </Fragment>
              );
            }
          }
        </ProjectContext.Consumer>
      </ProjectContextProvider>
    )
  }
};

export default Detail;