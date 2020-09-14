import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

it('should render correctly with no props', () => {
  const component = shallow(<List />);
  expect(component).toMatchSnapshot();
});

it('should render banner text correctly with given strings', () => {
  const testData = [];
  const component = shallow(<List title={testData} />);
  expect(component).toMatchSnapshot();
});

describe('List', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<List debug />);
    expect(component).toMatchSnapshot();
  });
});
