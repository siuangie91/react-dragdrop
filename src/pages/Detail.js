import React, { Component, Fragment } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import NotFound from './NotFound';
import ProjectContext from '../context/ProjectContext';
// import { logMsg } from '../helpers';

class Detail extends Component {
  static contextType = ProjectContext;

  render() {
    // logMsg('Detail contextType', this.context);

    let projectId;
    if (this.props.id) {
      const foundItem = this.context.projectsData.find(item => item.id === +this.props.id);

      if (foundItem) {
        projectId = foundItem.id;
      }
    }

    return (
      (
        <Fragment>
          {
            projectId ?
              <ProjectDetails projectId={projectId} />
              :
              <NotFound />
          }
        </Fragment>
      )
    )
  }
};

export default Detail;