import React, { Component } from 'react';

import ProjectsContainer from './components/ProjectsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Priorities Drag-Drop</h1>
        </header>
        <ProjectsContainer></ProjectsContainer>
      </div>
    );
  }
}

export default App;
