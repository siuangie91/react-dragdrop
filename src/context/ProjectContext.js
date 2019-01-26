import React from 'react';
import projectsData from '../data/projects.json';

const ProjectContext = React.createContext(projectsData);

export default ProjectContext;