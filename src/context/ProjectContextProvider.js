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
    const { projectsData } = this.state;
    const projectsDataLeft = projectsData.slice(0, idx);
    const projectsDataRight = projectsData.slice(idx);

    this.setState({
      projectsData: [...projectsDataLeft, newProject, ...projectsDataRight]
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
    // logMsg('ProjectContextProvider state', this.state);
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