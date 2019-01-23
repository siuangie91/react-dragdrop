import React, { Component } from 'react';

import PrioritiesContainer from './components/PrioritiesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Priorities Drag-Drop</h1>
        </header>
        <PrioritiesContainer></PrioritiesContainer>
      </div>
    );
  }
}

export default App;
