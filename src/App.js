import React, { Component } from 'react';

import ProjectsContainer from './components/ProjectsContainer';
import ProjectInput from './components/ProjectInput';

import projectsData from './data/projects.json';

const ProjectContext = React.createContext(projectsData);
export const ProjectContextConsumer = ProjectContext.Consumer;

class ProjectContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectsData
    }
  }

  addProject = (newProject) => {
    this.setState(prevState => (
      {
        projectsData: [...prevState.projectsData, newProject]
      }
    ));
  }

  render() {
    console.log('state', this.state);
    return (
      <ProjectContext.Provider name="ProjectContextProvider"
        value={{
          projectsData: this.state.projectsData,
          addProject: this.addProject
        }}>
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

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
