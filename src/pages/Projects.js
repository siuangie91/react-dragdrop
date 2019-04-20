import React, { Component, Fragment } from 'react';
import ProjectsContainer from '../components/ProjectsContainer';
import ProjectInput from '../components/ProjectInput';
import MobileOverlay from '../components/MobileOverlay';
import { isTouchDevice, logMsg } from '../helpers';

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
