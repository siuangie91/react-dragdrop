import React, { Component } from 'react';

import ProjectsContainer from './components/ProjectsContainer';
import ProjectInput from './components/ProjectInput';

import projectsData from './data/projects.json';

const ProjectContext = React.createContext(projectsData);
export const ProjectContextConsumer = ProjectContext.Consumer;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>To-Do Drag-Drop</h1>
        </header>

        <ProjectContext.Provider name="ProjectContextProvider" 
          value={{
            projectsData,
          }}>
          <ProjectInput />
          <ProjectsContainer />  
        </ProjectContext.Provider>
        
      </div>
    );
  }
}

export default App;
