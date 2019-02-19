import React from 'react';
import { shallow, mount } from 'enzyme';
import ProjectNode from '../ProjectNode';

describe('ProjectNode component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<ProjectNode
      name='Project Name' />);
  });

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders a node with the correct name', () => {
    const nameProp = wrapper.prop('name');
    expect(wrapper.find('.node-copy span').text()).toEqual(nameProp);
  });

  describe('key events', () => {
    const mockKeyupHandler = jest.fn(() => { });
    const mockEnterKeyHandler = jest.fn(() => { });
    const mockBlurHandler = jest.fn(() => { });

    let wrapper, firstSpan;
    beforeAll(() => {
      wrapper = shallow(<ProjectNode
        name='Project Name'
        projectRef={React.createRef()}
        keyupHandler={mockKeyupHandler}
        enterKeyHandler={mockEnterKeyHandler}
        blurHandler={mockBlurHandler} />);

      firstSpan = wrapper.find('.node-copy span').first();
    });

    it('keyup fires only once', () => {
      firstSpan.simulate('keyup', { key: 'a' });
      expect(mockKeyupHandler).toHaveBeenCalledTimes(1);
    });

    it('Enter key fires only once', () => {
      firstSpan.simulate('keypress', { key: 'Enter' });
      expect(mockEnterKeyHandler).toHaveBeenCalledTimes(1);
    });
  })
});