import React from 'react';
import { mount } from 'enzyme';
import ProjectNode from '../ProjectNode';

describe('ProjectNode component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<ProjectNode 
      name='Project Name'
      projectRef={React.createRef()}
      dragStartHandler={jest.fn(()=>{})}
      dragOverHandler={jest.fn(()=>{})}
      dragEndHandler={jest.fn(()=>{})}
      nodeStyles={{}}
      editHandler={jest.fn(()=>{})}
      deleteHandler={jest.fn(()=>{})} />);
  });

  it('renders', () => {
    expect(wrapper).toHaveLength(1);  
  });

  it('renders a node with the correct name', () => {
    const nameProp = wrapper.prop('name');
    expect(wrapper.find('.node-copy span').text()).toEqual(nameProp);
  });
});