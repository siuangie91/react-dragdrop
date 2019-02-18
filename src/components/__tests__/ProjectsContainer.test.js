import React from 'react';
import { shallow, mount } from 'enzyme';
import ProjectsContainer from '../ProjectsContainer';
import ProjectContext from '../../context/ProjectContext';
import ProjectContextProvider from '../../context/ProjectContextProvider';
import projectsData from '../../data/projects.json';
import ProjectNode from '../ProjectNode';

describe('ProjectsContainer component', () => {
  it('renders', () => {
    const wrapper = shallow(<ProjectsContainer />);

    expect(wrapper.find('#projects-container')).toBeTruthy();
  });

  it('renders as many <li>s as projects in projectsData', () => {
    const wrapper = mount(
      <ProjectContextProvider>
        <ProjectsContainer />
      </ProjectContextProvider>
    );

    expect(wrapper.find('li')).toHaveLength(projectsData.length);
  });

  /* it('li .node-copy span contains the name of the project', () => {
    wrapper.find('li .node-copy span').forEach((item, i) => {
      expect(item.text()).toBe(projectsData[i].name);
    });
  }); */

  describe('project node', () => {
    let wrapper, firstEditBtn, firstSpan;
    beforeAll(() => {
      wrapper = mount(
        <ProjectContextProvider>
          <ProjectsContainer />
        </ProjectContextProvider>
      );
      firstEditBtn = wrapper.find('li .node-edit-btn').first();
      firstSpan = wrapper.find('li .node-copy span').first().getDOMNode();
    });

    it('span is contenteditable when edit button is clicked', () => {
      firstEditBtn.simulate('click');
      expect(firstSpan.getAttribute('contenteditable')).toEqual('true');
    });
  });
});