import React, { Component } from 'react';

import ProjectNode from './ProjectNode';

import projectsData from '../data/projects.json';

class ProjectsContainer extends Component {
	constructor() {
		super();

		this.state = {
			projects: projectsData
		};
	}

	handleDragStart = e => {
		console.log('dragging!', e.target.getAttribute('name'));
		e.dataTransfer.setData('projectName', e.target.getAttribute('name'));
	}

	handleDrop = e => {
		e.preventDefault();
		const projectToDrop = e.dataTransfer.getData('projectName');
		console.log('dropping!', projectToDrop);
		// e.target.appendChild(document.querySelector(`[name="${projectToDrop}"]`));
	}

  render() {
    return (
      <section id="projects-container"
      	onDrop={e => this.handleDrop(e)}
      	onDragOver={e => e.preventDefault()}>
      	{
      		projectsData.map((project,i) => (
      			<ProjectNode key={i} 
      				name={project.name}
      				dragStartHandler={e => this.handleDragStart(e)}/>
	      	))	
      	}
      </section>
    );
  }
}

export default ProjectsContainer;

