import React, { Component } from 'react';

import {ProjectContext} from '../App';

import projectsData from '../data/projects.json';


class ProjectContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectsData
    }
  }

  addProject = newProject => {
    this.setState(prevState => (
      {
        projectsData: [...prevState.projectsData, newProject]
      }
    ));
  }

  rearrangeProjects = newProjectData => {
  	this.setState({
  		projectsData: newProjectData
  	});
  }

  render() {
    console.log('ProjectContextProvider state', this.state);
    return (
      <ProjectContext.Provider name="ProjectContextProvider"
        value={{
          projectsData: this.state.projectsData,
          addProject: this.addProject,
          rearrangeProjects: this.rearrangeProjects
        }}>
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

export default ProjectContextProvider;