import React from 'react';
import { shallow, mount } from 'enzyme';
import ProjectsContainer from '../ProjectsContainer';
import ProjectContextProvider from '../../context/ProjectContextProvider';
import projectsData from '../../data/projects.json';

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

  describe('project node', () => {
    const mockKeyupHandler = jest.fn(() => {});
    const mockEnterKeyHandler = jest.fn(() => {});
    const mockBlurHandler = jest.fn(() => {});

    let wrapper, firstEditBtn, firstSpan;
    beforeAll(() => {
      wrapper = mount(
        <ProjectContextProvider>
          <ProjectsContainer />
        </ProjectContextProvider>
      );
      firstEditBtn = wrapper.find('li .node-edit-btn').first();
      firstSpan = wrapper.find('li .node-copy span').first();
    });

    it('span is contenteditable when edit button is clicked', () => {
      firstEditBtn.simulate('click');
      expect(firstSpan.getDOMNode().getAttribute('contenteditable')).toEqual('true');
    });

    it('span contenteditable is false on blur', () => {
      firstEditBtn.simulate('click');
      firstSpan.simulate('blur');
      expect(firstSpan.getDOMNode().getAttribute('contenteditable')).toEqual('false');
    });

    it('blurs if Esc key is pressed', () => {
      firstSpan.simulate('keyup', {key: 'Escape'});
      const focusedElem = document.activeElement;
      expect(firstSpan.getDOMNode()).not.toBe(focusedElem);
    });

    it('blurs if Enter key is pressed', () => {
      firstSpan.simulate('keypress', {key: 'Enter'});
      const focusedElem = document.activeElement;
      expect(firstSpan.getDOMNode()).not.toBe(focusedElem);
    });
  });
});