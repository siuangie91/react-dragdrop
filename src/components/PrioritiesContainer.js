import React, { Component } from 'react';

import projectsData from '../data/projects.json';

class PrioritiesContainer extends Component {
  render() {
    return (
      <section id="priorities-container">
      	{
      		projectsData.map((project,i) => (
      			<p key={i}>{project.name}</p>
	      	))	
      	}
      </section>
    );
  }
}

export default PrioritiesContainer;
