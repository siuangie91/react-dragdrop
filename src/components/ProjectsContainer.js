import React, { Component } from 'react';

import ProjectNode from './ProjectNode';

import projectsData from '../data/projects.json';

class ProjectsContainer extends Component {
	constructor() {
		super();

		this.state = {
			projects: projectsData.map(project => project.name),
			ignoringDragOver: false
		};
	}

	handleDragStart = (e, idx) => {
		this.projectToMove = this.state.projects[idx];
		console.log('dragging!', this.projectToMove);

		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData('text/html', e.target);
	}

	handleDragOver = idx => {
		const draggedOverItem = this.state.projects[idx];
		// console.log('draggedOverItem', draggedOverItem);

    // if the item is dragged over itself, ignore
    if (this.projectToMove === draggedOverItem) {
    	if(!this.state.ignoringDragOver) { // only if !ignoringDragOver to prevent firing too many events
    		console.log('Ignoring! Dragging over the same item!');
    		this.setState({ignoringDragOver: true});
      	return;	
    	}   	
    }

    // filter out the currently dragged item
    let projects = this.state.projects.filter(project => project !== this.projectToMove);

    // add the dragged item after the dragged over item
    projects.splice(idx, 0, this.projectToMove);

    this.setState({ projects });
	}

	handleDragEnd = () => {
    this.projectToMove = null;
    this.setState({ignoringDragOver: false}); // reset
    // console.log('dragEnd');
  }

  setNodeColor = idx => {
  	const numNodes = this.state.projects.length;

  	const percent = 1 / numNodes;
  	const degreeTransparency = percent * idx;
  	// set max transparency to 10%
  	const maxTransparency = 0.1;
  	const alpha = Math.max(maxTransparency, 1 - degreeTransparency);

  	return {
  		backgroundColor: `rgba(58,96,158,${alpha})`,
  		color: `${(alpha <= 0.3) ? '#000' : '#fff'}`
  	};
  }

  render() {
    return (
      <section id="projects-container">
      	<ol>
      		{
	      		this.state.projects.map((project,i) => (
	      			<li key={i}>
	      				<ProjectNode
		      				name={project}
		      				dragStartHandler={e => this.handleDragStart(e, i)}
		      				dragOverHandler={() => this.handleDragOver(i)}
		      				dragEndHandler={this.handleDragEnd}
		      				nodeStyles={this.setNodeColor(i)} />
	      			</li>
		      	))	
	      	}
      	</ol>
      </section>
    );
  }
}

export default ProjectsContainer;

