import React, { Component, Fragment } from 'react';

import ProjectContextProvider from './context/ProjectContextProvider';
import ProjectsContainer from './components/ProjectsContainer';
import ProjectInput from './components/ProjectInput';
import MobileOverlay from './components/MobileOverlay';

import {isTouchDevice, logMsg} from './helpers';

class App extends Component {
  render() {
    logMsg('isTouchDevice', isTouchDevice);

    return (
      <Fragment>
        {
          (isTouchDevice) ? 
            <MobileOverlay />
            : ""
        }
        <div className="App">    
          <header>
            <h1>To-Do Drag-Drop</h1>
          </header>

          <ProjectContextProvider>
            <ProjectInput />
            <ProjectsContainer />  
          </ProjectContextProvider>
        </div>
      </Fragment>
    );
  }
}

export default App;
