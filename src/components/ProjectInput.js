import React, { Component } from 'react';

import { ProjectContextConsumer } from '../App';

class ProjectInput extends Component {
  constructor() {
    super();

    this.state = {
      inputText: ""
    };
  }

  clickHandler = contextValue => {
    console.log('Added task:', this.state.inputText);
    contextValue.projectsData = [...contextValue.projectsData, {name: this.state.inputText}];
    console.log('Data after adding:', contextValue.projectsData);

    // clear input field
    this.setState({inputText: ""})
  }

  render() {
    return (
      <ProjectContextConsumer name="ProjectContextConsumer">
        {
          value => {
            console.log('ProjectInput values', value);

            return (
              <section id="project-input">
                <label>Task Name:</label>
                <input type="text" placeholder="XYZ Task" 
                  value={this.state.inputText}
                  onChange={e => this.setState({inputText: e.target.value})}/>
                <button onClick={() => this.clickHandler(value)}>Add Task</button> 
              </section>          
            );
          }
        }
      </ProjectContextConsumer>
    );
  }
}

export default ProjectInput;
