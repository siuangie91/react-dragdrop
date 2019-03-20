import React, { Component } from 'react';
import HomeLink from './_shared/HomeLink';
import withProjectsContext from '../decorators/withProjectsContext';

@withProjectsContext
class ProjectDetails extends Component {
  render() {
    const { projectsContext, projectId } = this.props;
    const project = projectsContext.projectsData.find(item => item.id === +projectId);

    return (
      <section id="detail">
        <table>
          <thead>
            <tr>
              <th colSpan="2">Project Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{project.name}</td>
            </tr>
            <tr>
              <th>ID:</th>
              <td>{projectId}</td>
            </tr>
            <tr>
              <th>Priority:</th>
              <td>{projectsContext.projectsData.indexOf(project) + 1}</td>
            </tr>
          </tbody>
        </table>

        <HomeLink />
      </section>
    );
  }
}

export default ProjectDetails;