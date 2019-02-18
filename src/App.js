import React from 'react';
import { Router } from '@reach/router';
import Projects from './pages/Projects';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

const App = () => (
  <div className="App">
    <header>
      <h1>To-Do Drag-Drop</h1>
    </header>
    <Router>
      <Projects path="/" />
      <Detail path="/detail/:id" />
      <NotFound default />
    </Router>
  </div>
);

export default App;