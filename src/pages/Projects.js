import React, { Fragment } from 'react';
import ProjectsContainer from '../components/ProjectsContainer';
import ProjectInput from '../components/ProjectInput';
import MobileOverlay from '../components/MobileOverlay';
import { isTouchDevice } from '../helpers';

const Projects = () => (
  <Fragment>
    {
      (isTouchDevice) ?
        <MobileOverlay />
        : ""
    }
    <Fragment>
      <ProjectInput />
      <ProjectsContainer />
    </Fragment>
  </Fragment>
);

export default Projects;
