import React from 'react';
import projectsData from '../data/projects.json';

export const ProjectContext = React.createContext(projectsData);
export const ProjectContextConsumer = ProjectContext.Consumer;