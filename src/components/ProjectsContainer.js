import React, { Component } from 'react';

import ProjectNode from './ProjectNode';

import projectsData from '../data/projects.json';

class ProjectsContainer extends Component {
  render() {
    return (
      <section id="projects-container">
      	{
      		projectsData.map((project,i) => (
      			<ProjectNode key={i} 
      				name={project.name}/>
	      	))	
      	}
      </section>
    );
  }
}

export default ProjectsContainer;
