import React, { Component } from 'react';

import ProjectContextProvider from './context/ProjectContextProvider';
import ProjectsContainer from './components/ProjectsContainer';
import ProjectInput from './components/ProjectInput';


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
