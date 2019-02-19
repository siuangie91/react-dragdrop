import React, { Component, Fragment } from 'react';
import ProjectsContainer from '../components/ProjectsContainer';
import ProjectInput from '../components/ProjectInput';
import MobileOverlay from '../components/MobileOverlay';
import {isTouchDevice, logMsg} from '../helpers';

class Projects extends Component {

  render() {
    logMsg('isTouchDevice', isTouchDevice);

    return (
      <Fragment>
        {
          (isTouchDevice) ? 
            <MobileOverlay />
            : ""
        }
        {/* <ProjectContextProvider> */}
        <Fragment>
          <ProjectInput />
          <ProjectsContainer />  
        </Fragment>
        {/* </ProjectContextProvider> */}
      </Fragment>
    );
  }
}

export default Projects;
