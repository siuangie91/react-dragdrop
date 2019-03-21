import React, { Component } from 'react';
import ProjectContext from '../context/ProjectContext';
import HomeLink from './_shared/HomeLink';

class ProjectDetails extends Component {
  static contextType = ProjectContext;

  render() {
    return (
      <ProjectContext.Consumer name="ProjectContextConsumer.Detail">
        {
          value => {
            const { projectsData } = value;
            const project = projectsData.find(item => item.id === +this.props.projectId);

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
                      <td>{this.props.projectId}</td>
                    </tr>
                    <tr>
                      <th>Priority:</th>
                      <td>{projectsData.indexOf(project) + 1}</td>
                    </tr>
                  </tbody>
                </table>

                <HomeLink />
              </section>
            );
          }
        }
      </ProjectContext.Consumer>
    );
  }
}

export default ProjectDetails;