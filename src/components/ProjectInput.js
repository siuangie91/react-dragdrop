import React, { Component } from 'react';

class ProjectInput extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <section id="project-input">
        <label>Task Name:</label>
        <input type="text" placeholder="XYZ Task"
          onKeyUp={e => {
            this.setState({value: e.target.value})
          }}/>
        <button 
          onClick={() => {
            console.log('Added task:', this.state.value);
        }}>Add Task</button> 
      </section>
    );
  }
}

export default ProjectInput;
