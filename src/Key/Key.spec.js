import React from 'react';
import { shallow } from 'enzyme';
import Key from './Key';

describe('Key', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Key
        keyAction={jest.fn()}
        keyType={''}
        keyValue={''}
      />
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  //toujours integrer le snapchat apres le beforeEach en dernier dans le fichier test quand tout est fonctionelle.

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the value of keyValue', () => {
    wrapper.setProps({ keyValue: 'test' });
    expect(wrapper.text()).toEqual('test');
  });
});