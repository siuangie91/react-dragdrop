import React, { Component } from 'react';

import ProjectsContainer from './components/ProjectsContainer';
import ProjectInput from './components/ProjectInput';

import projectsData from './data/projects.json';

const ProjectContext = React.createContext('projectList');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>To-Do Drag-Drop</h1>
        </header>
        <ProjectInput />
        <ProjectsContainer />
      </div>
    );
  }
}

export default App;
