import React from 'react';
import { Router } from '@reach/router';
import Projects from './pages/Projects';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import ProjectContextProvider from './context/ProjectContextProvider';

const App = () => (
  <div className="App">
    <header>
      <h1>To-Do Drag-Drop</h1>
    </header>
    <ProjectContextProvider>
      <Router basepath={`${process.env.PUBLIC_URL}/`}>
        <Projects path="/" />
        <Detail path={`detail/:id`} />
        <NotFound default />
      </Router>
    </ProjectContextProvider>
  </div>
);

export default App;