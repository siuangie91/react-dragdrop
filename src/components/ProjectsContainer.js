import React, { Component } from 'react';

import ProjectNode from './ProjectNode';
import MaxLengthModal from './MaxLengthModal';

import { logMsg, placeCaretAtEnd, projectNameMaxLength, isEqual } from '../helpers';
import withProjectsContext from '../decorators/withProjectsContext';

@withProjectsContext // decorator
class ProjectsContainer extends Component {
  constructor() {
    super();

    this.state = {
      ignoringDragOver: false,
      isDragging: false,
      reachedCharLimit: false
    };

    this.projectNodeRefs = [];
    this.setProjectNodeRef = (elem, i) => {
      this.projectNodeRefs[i] = elem;
    };

    this.nodeCopyContainer = {};
    this.newName = "";
  }
  shouldComponentUpdate(nextProps) {
    /* SHOULD update when 
    1. order is different, and
    2. list is updated (task added/deleted)
    */
    const currProjectsData = this.props.projectsContext.projectsData;
    const nextProjectsData = nextProps.projectsContext.projectsData;
 
    if(!isEqual(currProjectsData, nextProjectsData)) {
      return true;
    }
    else {
      return false;
    }
  }

  /* componentDidUpdate() {
    logMsg(true, 'ProjectsContainer component did update');
  } */

  handleDragStart = (e, idx) => {
    this.projectToMove = this.props.projectsContext.projectsData[idx];
    // logMsg('dragging!', this.projectToMove);

    this.setState({ isDragging: true });

    e.dataTransfer.effectAllowed = "move";
    // logMsg('handleDragStart dropEffect', e.dataTransfer.dropEffect);
    e.dataTransfer.setData('text/html', e.target);
  }

  handleDragOver = (e, idx) => {
    // prevent default so that drop is allowed (https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets)
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    const draggedOverItem = this.props.projectsContext.projectsData[idx];
    // logMsg('draggedOverItem', draggedOverItem);

    // if the item is dragged over itself, ignore
    if (this.projectToMove === draggedOverItem) {
      if (!this.state.ignoringDragOver) { // only if !ignoringDragOver to prevent firing too many events
        // logMsg('Ignoring! Dragging over the same item!');

        this.setState({ ignoringDragOver: true });
        return;
      }
    }

    const { projectsData, updateProjects } = this.props.projectsContext;

    // filter out the currently dragged item
    let projects = projectsData.filter(project => project !== this.projectToMove);
    // add the dragged item after the dragged over item
    projects.splice(idx, 0, this.projectToMove);

    // set the projectsData in the contextValue to the new list order
    updateProjects(projects);
  }

  handleDragEnd = e => {
    e.preventDefault();
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";

    this.projectToMove = null;
    this.setState({ 
      ignoringDragOver: false,
      isDragging: false
    }); // reset
  }

  deleteHandler = id => {
    this.props.projectsContext.deleteProject(id);
  }

  editHandler = idx => {
    this.nodeCopyContainer = this.projectNodeRefs[idx];
    this.nodeCopyContainer.setAttribute('contenteditable', true);

    placeCaretAtEnd(this.nodeCopyContainer);
  }

  handleKeyup = e => {
    // logMsg('handleKeyup key', e.key);
    const { nodeCopyContainer, setNewNameAsInnertext } = this;

    setNewNameAsInnertext();

    if (e.key === "Escape") {
      nodeCopyContainer.blur();
    }
    else if (nodeCopyContainer.innerText.length >= projectNameMaxLength) {
      this.setState({ reachedCharLimit: true });

      nodeCopyContainer.blur();
    }
    else {
      setNewNameAsInnertext();
      // logMsg('newName', newName);
    }
  }

  handleEnterKey = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.setNewNameAsInnertext();
      this.nodeCopyContainer.blur();
    }
  }

  handleBlur = (idx, id) => {
    this.nodeCopyContainer.setAttribute('contenteditable', false);

    const { projectsData, updateProjects } = this.props.projectsContext;

    let projToEdit = projectsData.find(item => item.id === id);
    projToEdit.name = this.newName; // update the name

    const projectList = projectsData;
    projectList.splice(idx, 1, projToEdit); // replace it in the list

    updateProjects(projectList);
  }

  setNewNameAsInnertext = () => {
    this.newName = this.nodeCopyContainer.innerText;
  }

  setNodeColor = idx => {
    const numNodes = this.props.projectsContext.projectsData.length;

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
    this.setState({ reachedCharLimit: false });
  }

  render() {
    // logMsg('ProjectsContainer this.context', this.context);
    const { projectsContext } = this.props;
    return (
      <section id="projects-container">
        {
          (projectsContext.projectsData.length === 0) ?
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
            projectsContext.projectsData.map((project, i) => (
              <li key={i}>
                <ProjectNode
                  id={project.id}
                  name={project.name}
                  projectRef={elem => this.setProjectNodeRef(elem, i)}
                  dragStartHandler={e => this.handleDragStart(e, i)}
                  dragOverHandler={e => this.handleDragOver(e, i)}
                  dragEndHandler={e => this.handleDragEnd(e)}
                  editHandler={() => this.editHandler(i)}
                  deleteHandler={() => this.deleteHandler(project.id)}
                  keyupHandler={e => this.handleKeyup(e)}
                  enterKeyHandler={e => this.handleEnterKey(e)}
                  blurHandler={() => this.handleBlur(i, project.id)}
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
