import React, { Component } from 'react';

import ProjectNode from './ProjectNode';

import { ProjectContextConsumer } from '../context/ProjectContext';

class ProjectsContainer extends Component {
	constructor() {
		super();

		this.state = {
			ignoringDragOver: false,
			isDragging: false
		};
	}

  handleDragStart = (contextValue, e, idx) => {
		this.projectToMove = contextValue.projectsData[idx];
		console.log('dragging!', this.projectToMove);

		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData('text/html', e.target);
	}

	handleDragOver = (contextValue, idx) => {
		const draggedOverItem = contextValue.projectsData[idx];
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
    let projects = contextValue.projectsData.filter(project => project !== this.projectToMove);
    // add the dragged item after the dragged over item
    projects.splice(idx, 0, this.projectToMove);

    // set the projectsData in the contextValue to the new list order
    contextValue.updateProjects(projects);
	}

	handleDragEnd = () => {
    this.projectToMove = null;
    this.setState({ignoringDragOver: false}); // reset
    // console.log('dragEnd');
  }

  setNodeColor = (contextValue, idx) => {
  	const numNodes = contextValue.projectsData.length;

  	const percent = 1 / numNodes;
  	const degreeTransparency = percent * idx;
  	// set max transparency to 10%
  	const maxTransparency = 0.1;
  	const alpha = Math.max(maxTransparency, 1 - degreeTransparency);

  	return {
  		backgroundColor: `rgba(58,96,158,${alpha})`,
  		color: `#${(alpha <= 0.3) ? '000' : 'fff'}`
  	};
  }

  render() {
  	return (
  		<ProjectContextConsumer name="ProjectContextConsumer">
  			{
  				value => {
  					console.log('ProjectsContainer values', value);

            return (
            	<section id="projects-container">
				      	<ol>
				      		{
					      		value.projectsData.map((project,i) => (
					      			<li key={i}>
					      				<ProjectNode
						      				name={project.name}
						      				dragStartHandler={e => this.handleDragStart(value, e, i)}
						      				dragOverHandler={() => this.handleDragOver(value, i)}
						      				dragEndHandler={this.handleDragEnd}
						      				nodeStyles={this.setNodeColor(value, i)} />
					      			</li>
						      	))	
					      	}
				      	</ol>
				      </section>
            );
  				}
  			}
  		</ProjectContextConsumer>
  	);
  }
}

export default ProjectsContainer;

