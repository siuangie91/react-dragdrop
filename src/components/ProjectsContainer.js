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

		const projectToMove = e.target.getAttribute('name');
		e.dataTransfer.setData('projectName', projectToMove);

		this.setState(prevState => ({
			projects: prevState.projects.filter(item => item.name !== projectToMove)
		}), () => {
			console.log('state ondragstart', this.state)
		});
	}

	handleDrop = e => {
		e.preventDefault();
		console.log('dropping!', e.dataTransfer.getData('projectName'));
		const projectToDrop = e.dataTransfer.getData('projectName');
		// e.target.appendChild(document.querySelector(`[name="${projectToDrop}"]`));

		this.setState(prevState => ({
			projects: [{name: projectToDrop}, ...prevState.projects]
		}), () => {
			console.log('state ondrop', this.state);
		});
	}

  render() {
    return (
      <section id="projects-container"
      	onDrop={e => this.handleDrop(e)}
      	onDragOver={e => e.preventDefault()}>
      	{
      		this.state.projects.map((project,i) => (
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

