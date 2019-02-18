import React, { Component } from 'react';

import ProjectContext from '../context/ProjectContext';
import ProjectNode from './ProjectNode';
import MaxLengthModal from './MaxLengthModal';

import {logMsg, placeCaretAtEnd, projectNameMaxLength} from '../helpers';

class ProjectsContainer extends Component {
	static contextType = ProjectContext;

	constructor() {
		super();

		this.state = {
			ignoringDragOver: false,
			isDragging: false,
			reachedCharLimit: false
		};

		// this.projectNodeRef = React.createRef();
		this.projectNodeRefs = [];
		this.setProjectNodeRef = (elem, i) => {
			this.projectNodeRefs[i] = elem;
		};
	}

  handleDragStart = (e, idx) => {
		this.projectToMove = this.context.projectsData[idx];
		logMsg('dragging!', this.projectToMove);

		e.dataTransfer.effectAllowed = "move";
		// e.dataTransfer.dropEffect = "move";
		logMsg('handleDragStart dropEffect', e.dataTransfer.dropEffect);
		e.dataTransfer.setData('text/html', e.target);
	}

	handleDragOver = (e, idx) => {
		// prevent default so that drop is allowed (https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets)
		e.preventDefault();
		e.dataTransfer.dropEffect = "move";

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

	handleDragEnd = e => {
		e.preventDefault();
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.dropEffect = "move";

    this.projectToMove = null;
    this.setState({ignoringDragOver: false}); // reset
	}

  deleteHandler = id => {
  	this.context.deleteProject(id);
	}
	
	editHandler = (idx, id) => {
		const nodeCopyContainer = this.projectNodeRefs[idx];
		nodeCopyContainer.setAttribute('contenteditable', true);

		placeCaretAtEnd(nodeCopyContainer);

		let newName = nodeCopyContainer.innerText;

		nodeCopyContainer.addEventListener('keypress', e => {
			if(nodeCopyContainer.innerText.length >= projectNameMaxLength) {
				this.setState({reachedCharLimit: true});

				nodeCopyContainer.blur();
			}
			else if(e.key === "Escape" || e.key === "Enter") {
				e.preventDefault();
				nodeCopyContainer.blur();
			}
			else {
				newName = nodeCopyContainer.innerText;
				// logMsg('newName', newName);
			}
		});

		nodeCopyContainer.addEventListener('blur', () => {
			nodeCopyContainer.setAttribute('contenteditable', false);

			let projToEdit = this.context.projectsData.find(item => item.id === id);
			projToEdit.name = newName; // update the name

			const projectList = this.context.projectsData;
			projectList.splice(idx, 1, projToEdit); // replace it in the list

			this.context.updateProjects(projectList);			
		});
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
  		color: `#${(alpha <= 0.4) ? '000' : 'fff'}`
  	};
	}
	
	dismissModal = () => {
		this.setState({reachedCharLimit: false});
	}

  render() {
		logMsg('ProjectsContainer this.context', this.context);
  	return (
  		<ProjectContext.Consumer name="ProjectContextConsumer.ProjectsContainer">
  			{
  				value => {
  					// logMsg('ProjectsContainer values', value);

            return (
            	<section id="projects-container">
            		{
            			(value.projectsData.length === 0) ? 
            				<p className="error">You have no tasks!</p>
            				: ""
								}
								{
									this.state.reachedCharLimit ? 
										<MaxLengthModal modalClickHandler={this.dismissModal} />
										: ""
								}
				      	<ol>
				      		{
					      		value.projectsData.map((project,i) => (
					      			<li key={i}>
					      				<ProjectNode
													id={project.id}
													name={project.name}
													projectRef={elem => this.setProjectNodeRef(elem, i)}
						      				dragStartHandler={e => this.handleDragStart(e, i)}
						      				dragOverHandler={e => this.handleDragOver(e, i)}
													dragEndHandler={e => this.handleDragEnd(e)}
													editHandler={() => this.editHandler(i, project.id)}
						      				deleteHandler={() => this.deleteHandler(project.id)}
						      				nodeStyles={this.setNodeColor(i)} />
					      			</li>
						      	))	
					      	}
				      	</ol>
				      </section>
            );
  				}
  			}
  		</ProjectContext.Consumer>
  	);
  }
}

export default ProjectsContainer;

