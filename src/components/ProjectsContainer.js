import React, { Component } from 'react';

import ProjectNode from './ProjectNode';

import projectsData from '../data/projects.json';

class ProjectsContainer extends Component {
	constructor() {
		super();

		this.state = {
			projects: projectsData.map(project => project.name)
		};
	}

	handleDragStart = (e, idx) => {
		console.log('idx', idx);
		this.projectToMove = this.state.projects[idx];
		console.log('dragging!', this.projectToMove);

		e.dataTransfer.setData('text/html', e.target);
	}

	handleDragOver = idx => {
		const draggedOverItem = this.state.projects[idx];
		console.log('draggedOverItem', draggedOverItem);

    // if the item is dragged over itself, ignore
    if (this.projectToMove === draggedOverItem) {
    	console.log('dragging over the same item!');
      return;
    }

    // filter out the currently dragged item
    let projects = this.state.projects.filter(project => project !== this.projectToMove);

    // add the dragged item after the dragged over item
    projects.splice(idx, 0, this.projectToMove);

    this.setState({ projects });
	}

	handleDragEnd = () => {
    this.projectToMove = null;
  }

  render() {
    return (
      <section id="projects-container">
      	{
      		this.state.projects.map((project,i) => (
      			<ProjectNode key={i} 
      				name={project}
      				dragStartHandler={e => this.handleDragStart(e, i)}
      				dragOverHandler={() => this.handleDragOver(i)}
      				dragEndHandler={this.handleDragEnd} />
	      	))	
      	}
      </section>
    );
  }
}

export default ProjectsContainer;

