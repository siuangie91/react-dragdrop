import React, { Component } from 'react';

import Button from './_shared/Button';
import { logMsg, projectNameMaxLength } from '../helpers';
import FormControl from './_shared/FormControl';
import { getRandomInteger } from '../helpers/index';
import withProjectsContext from './decorators/withProjectsContext';

@withProjectsContext
class ProjectInput extends Component {

  constructor() {
    super();

    this.inputRef = React.createRef();

    this.state = {
      inputValue: {
        text: "",
        idx: 0 // "fake" init; overwritten by componentDidMount
      },
      error: false
    };
  }

  componentDidMount() {
    const newInputValue = Object.assign(this.state.inputValue, {
      idx: this.props.projectsContext.projectsData.length
    });

    this.setState({
      inputValue: newInputValue,
      // store a list of all the IDs -- this will NOT change when projects are updated/created; 
      // ensures unique ID for new projects
      currentIds: this.props.projectsContext.projectsData.map(item => item.id)
    });
  }

  clickHandler = () => {
    const { inputValue } = this.state;
    // put focus back into input field
    this.inputRef.current.focus();

    // check if task is empty string
    if (!inputValue.text.trim()) {
      logMsg('Cannot add an empty task');
      this.setState({ error: true });
      return;
    }

    logMsg(`Adding task: ${inputValue.text} at idx: ${inputValue.idx}`);

      this.props.projectsContext.addProject(
      {
        id: this.generateId(),
        name: inputValue.text
      },
      inputValue.idx);

    // clear input field
    this.setState({
      inputValue: {
        text: "",
        idx: this.props.projectsContext.projectsData.length
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

    this.setState({ inputValue: newInputValue });
  }

  // generate a random ID number that cannot be greater than a given limit
  generateId = () => {
    const { currentIds } = this.state;
    let newId = getRandomInteger();
    logMsg('newId', newId);
    while (currentIds.indexOf(newId) > -1) {
      newId = getRandomInteger();
      logMsg('not unique; generated new one: ', newId);
    }
    logMsg('actual newId', newId);
    return newId;
  }

  render() {
    const { inputValue } = this.state;
    const { projectsContext } = this.props;
    return (
      <section id="project-input">
        {
          (this.state.error) ?
            <p className="error">Cannot add an empty task!</p>
            :
            ""
        }
        <FormControl labelName="Task Name">
          <input type="text" placeholder="XYZ Task" maxLength={projectNameMaxLength}
            ref={this.inputRef}
            value={inputValue.text}
            onChange={e => this.textChangeHandler(e)} />
        </FormControl>

        <FormControl labelName="Task Number/Priority">
          <select
            value={inputValue.idx}
            onChange={e => this.taskNumChangeHandler(e)}>
            <option value={projectsContext.projectsData.length}>Last (default)</option>
            {
              projectsContext.projectsData.map((project, i) => (
                <option key={i} value={i}>{i + 1}</option>
              ))
            }
          </select>
          <span className="caret">
            <i className="fas fa-caret-down"></i>
          </span>
        </FormControl>

        <Button clickHandler={this.clickHandler}>+ Add Task</Button>
      </section>
    );
  }
}

export default ProjectInput;