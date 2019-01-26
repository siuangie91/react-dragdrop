import React, { Component } from 'react';

import ProjectContext from '../context/ProjectContext';

import {logMsg} from '../helpers';

class ProjectInput extends Component {
  static contextType = ProjectContext;

  constructor() {
    super();

    this.inputRef = React.createRef();

    this.state = {
      inputValue: {
        text: "",
        idx: 0 // "fake" init; overwritten by componentDidMount as cannot access this.context.projectsData from constructor
      },
      error: false
    };
  }

  componentDidMount() {
    // use Object.assign to update `idx` without changing `text`
    const newInputValue = Object.assign(this.state.inputValue, {
      idx: this.context.projectsData.length
    });

    this.setState({
      inputValue: newInputValue
    });
  }

  clickHandler = () => {
    const {inputValue} = this.state;
    // put focus back into input field
    this.inputRef.current.focus();

    // check if task is empty string
    if(!inputValue.text.trim()) {
      logMsg('Cannot add an empty task');
      this.setState({error: true});
      return;
    }

    logMsg(`Adding task: ${inputValue.text} at idx: ${inputValue.idx}`);

    this.context.addProject({name: inputValue.text}, inputValue.idx);

    // clear input field
    this.setState({
      inputValue: {
        text: "",
        idx: this.context.projectsData.length
      }
    });
  }

  textChangeHandler = e => {
    // See reference re Event Pooling: https://reactjs.org/docs/events.html#event-pooling
    const targetValue = e.target.value;

    const newInputValue = Object.assign(this.state.inputValue, {
      text: targetValue
    });
    
    this.setState({
      inputValue: newInputValue,
      error: false
    });
  }

  taskNumChangeHandler = e => {
    // See reference re Event Pooling: https://reactjs.org/docs/events.html#event-pooling
    const targetValue = e.target.value;

    const newInputValue = Object.assign(this.state.inputValue, {
      idx: targetValue
    });

    this.setState({inputValue: newInputValue});
  }

  render() {
    return (
      <ProjectContext.Consumer name="ProjectContextConsumer.ProjectInput">
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
                <div className="form-control">
                  <label>Task Name:</label>
                  <input type="text" placeholder="XYZ Task" 
                    ref={this.inputRef}
                    value={this.state.inputValue.text}
                    onChange={e => this.textChangeHandler(e)}/>
                </div> 

                <div className="form-control">
                  <label>Task Number/Priority:</label>
                  <select 
                    value={this.state.inputValue.idx}
                    onChange={e => this.taskNumChangeHandler(e)}>
                    <option value={value.projectsData.length}>Last (default)</option>  
                    {
                      value.projectsData.map((project, i) => (
                        <option key={i} value={i}>{i+1}</option>
                      ))
                    }
                  </select>
                  <span className="caret">
                    <i className="fas fa-caret-down"></i>
                  </span>
                </div>

                <button onClick={this.clickHandler}>+ Add Task</button> 
              </section>          
            );
          }
        }
      </ProjectContext.Consumer>
    );
  }
}

export default ProjectInput;
