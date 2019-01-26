import React, { Component } from 'react';

import { ProjectContext, ProjectContextConsumer } from '../context/ProjectContext';

import {logMsg} from '../helpers';

class ProjectInput extends Component {
  static contextType = ProjectContext;

  constructor() {
    super();

    this.inputRef = React.createRef();

    this.state = {
      inputText: "",
      error: false
    };
  }

  clickHandler = () => {
    const {inputText} = this.state;
    // put focus back into input field
    this.inputRef.current.focus();

    // check if task is empty string
    if(!inputText.trim()) {
      logMsg('Cannot add an empty task');
      this.setState({error: true});
      return;
    }

    logMsg('Added task:', inputText);

    this.context.addProject({name: inputText});

    // clear input field
    this.setState({inputText: ""});
  }

  changeHandler = e => {
    this.setState({
      inputText: e.target.value,
      error: false
    });
  }

  render() {
    return (
      <ProjectContextConsumer name="ProjectContextConsumer">
        {
          value => {
            // logMsg('ProjectInput values', value);

            return (
              <section id="project-input">
                {
                  (this.state.error) ? 
                    <p className="error">Cannot add an empty task!</p>
                    : 
                    ""
                }
                <label>Task Name:</label>
                <input type="text" placeholder="XYZ Task" 
                  ref={this.inputRef}
                  value={this.state.inputText}
                  onChange={e => this.changeHandler(e)}/>
                <button onClick={this.clickHandler}>+ Add Task</button> 
              </section>          
            );
          }
        }
      </ProjectContextConsumer>
    );
  }
}

export default ProjectInput;
