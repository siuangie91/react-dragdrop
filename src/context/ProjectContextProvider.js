import React, { Component } from 'react';
import ProjectContext from './ProjectContext';
import projectsData from '../data/projects.json';
import { logMsg } from '../helpers';

class ProjectContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectsData
    }
  }

  addProject = (newProject, idx) => {
    // don't want to mutate state object directly
    const projectsList = [...this.state.projectsData];
    projectsList.splice(idx, 0, newProject);

    this.setState({
      projectsData: projectsList
    }, () => {
      logMsg('Data after adding:', this.state.projectsData);
    });
  }

  updateProjects = newProjectData => {
    this.setState({
      projectsData: newProjectData
    });
  }

  editProject = idx => {
    const projToEdit = this.state.projectsData[idx];
    logMsg('editing', projToEdit);
  }

  deleteProject = id => {
    const { projectsData } = this.state;
    logMsg('deleting', projectsData.find(item => item.id === id).name);

    this.setState({
      projectsData: projectsData.filter(item => item.id !== id)
    }, () => {
      logMsg('Data after deleting:', this.state.projectsData);
    });
  }

  render() {
    return (
      <ProjectContext.Provider name="ProjectContextProvider"
        value={{
          projectsData: this.state.projectsData,
          addProject: this.addProject,
          updateProjects: this.updateProjects,
          editProject: this.editProject,
          deleteProject: this.deleteProject
        }}>
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

export default ProjectContextProvider;