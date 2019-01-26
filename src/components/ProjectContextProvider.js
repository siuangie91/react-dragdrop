import React, { Component } from 'react';

import {ProjectContext} from '../context/ProjectContext';

import projectsData from '../data/projects.json';

import {logMsg} from '../helpers';

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
    ), () => {
    	logMsg('Data after adding:', this.state.projectsData);
    });
  }

  updateProjects = newProjectData => {
  	this.setState({
  		projectsData: newProjectData
  	});
  }

  deleteProject = idx => {
  	const currentProjects = this.state.projectsData;
  	logMsg('deleting', currentProjects[idx]);


  	this.setState(prevState => (
	  	{
	  		projectsData: prevState.projectsData.filter(item => item !== currentProjects[idx])	
	  	}
  	));
  }

  render() {
    // console.log('ProjectContextProvider state', this.state);
    return (
      <ProjectContext.Provider name="ProjectContextProvider"
        value={{
          projectsData: this.state.projectsData,
          addProject: this.addProject,
          updateProjects: this.updateProjects,
          deleteProject: this.deleteProject
        }}>
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

export default ProjectContextProvider;