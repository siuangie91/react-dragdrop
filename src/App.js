import React, { Component } from 'react';

import ProjectsContainer from './components/ProjectsContainer';
import ProjectInput from './components/ProjectInput';
import ProjectContextProvider from './components/ProjectContextProvider';

import projectsData from './data/projects.json';

export const ProjectContext = React.createContext(projectsData);
export const ProjectContextConsumer = ProjectContext.Consumer;


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>To-Do Drag-Drop</h1>
        </header>

        <ProjectContextProvider>
          <ProjectInput />
          <ProjectsContainer />  
        </ProjectContextProvider>
        
      </div>
    );
  }
}

export default App;
