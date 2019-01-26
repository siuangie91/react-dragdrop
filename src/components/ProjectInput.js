import React, { Component } from 'react';

import { ProjectContext, ProjectContextConsumer } from '../context/ProjectContext';

import {logMsg} from '../helpers';

class ProjectInput extends Component {
  static contextType = ProjectContext;

  constructor() {
    super();

    this.state = {
      inputText: ""
    };
  }

  clickHandler = () => {
    const {inputText} = this.state;

    // check if task is empty string
    if(!inputText.trim()) {
      logMsg('Cannot add an empty task');
      return;
    }

    logMsg('Added task:', inputText);

    this.context.addProject({name: inputText});
    logMsg('Data after adding:', this.context.projectsData);

    // clear input field
    this.setState({inputText: ""})
  }

  changeHandler = e => {
    this.setState({inputText: e.target.value});
  }

  render() {
    return (
      <ProjectContextConsumer name="ProjectContextConsumer">
        {
          value => {
            // logMsg('ProjectInput values', value);

            return (
              <section id="project-input">
                <label>Task Name:</label>
                <input type="text" placeholder="XYZ Task" 
                  value={this.state.inputText}
                  onChange={e => this.changeHandler(e)}/>
                <button onClick={this.clickHandler}>Add Task</button> 
              </section>          
            );
          }
        }
      </ProjectContextConsumer>
    );
  }
}

export default ProjectInput;
