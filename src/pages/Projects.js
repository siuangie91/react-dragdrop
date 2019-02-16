import React, { Component, Fragment } from 'react';

import ProjectContextProvider from '../context/ProjectContextProvider';
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
        <div>    
          

          <ProjectContextProvider>
            <ProjectInput />
            <ProjectsContainer />  
          </ProjectContextProvider>
        </div>
      </Fragment>
    );
  }
}

export default Projects;