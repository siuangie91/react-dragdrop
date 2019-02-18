import React, { Component, Fragment } from 'react';

import ProjectContextProvider from '../context/ProjectContextProvider';
import ProjectsContainer from '../components/ProjectsContainer';
import ProjectInput from '../components/ProjectInput';
import MobileOverlay from '../components/MobileOverlay';

import {isTouchDevice, logMsg} from '../helpers';
import ProjectContext from '../context/ProjectContext';

class Projects extends Component {
  static contextType = ProjectContext;

  render() {
    logMsg('isTouchDevice', isTouchDevice);
    logMsg('Projects this.context', this.context)

    return (
      <Fragment>
        {
          (isTouchDevice) ? 
            <MobileOverlay />
            : ""
        }
        <ProjectContextProvider>
          <ProjectInput />
          <ProjectsContainer />  
        </ProjectContextProvider>
      </Fragment>
    );
  }
}

export default Projects;
