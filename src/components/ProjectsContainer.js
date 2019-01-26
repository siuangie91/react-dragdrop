import React, { Component } from 'react';

import { ProjectContext, ProjectContextConsumer } from '../context/ProjectContext';
import ProjectNode from './ProjectNode';

import {logMsg} from '../helpers';

class ProjectsContainer extends Component {
	static contextType = ProjectContext;

	constructor() {
		super();

		this.state = {
			ignoringDragOver: false,
			isDragging: false
		};
	}

  handleDragStart = (e, idx) => {
		this.projectToMove = this.context.projectsData[idx];
		logMsg('dragging!', this.projectToMove);

		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData('text/html', e.target);
	}

	handleDragOver = idx => {
		const draggedOverItem = this.context.projectsData[idx];
		// logMsg('draggedOverItem', draggedOverItem);

    // if the item is dragged over itself, ignore
    if (this.projectToMove === draggedOverItem) {
    	if(!this.state.ignoringDragOver) { // only if !ignoringDragOver to prevent firing too many events
    		logMsg('Ignoring! Dragging over the same item!');
    		
    		this.setState({ignoringDragOver: true});
      	return;	
    	}   	
    }

    // filter out the currently dragged item
    let projects = this.context.projectsData.filter(project => project !== this.projectToMove);
    // add the dragged item after the dragged over item
    projects.splice(idx, 0, this.projectToMove);

    // set the projectsData in the contextValue to the new list order
    this.context.updateProjects(projects);
	}

	handleDragEnd = () => {
    this.projectToMove = null;
    this.setState({ignoringDragOver: false}); // reset
  }

  setNodeColor = idx => {
  	const numNodes = this.context.projectsData.length;

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
  					// logMsg('ProjectsContainer values', value);

            return (
            	<section id="projects-container">
				      	<ol>
				      		{
					      		value.projectsData.map((project,i) => (
					      			<li key={i}>
					      				<ProjectNode
						      				name={project.name}
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
  		</ProjectContextConsumer>
  	);
  }
}

export default ProjectsContainer;

