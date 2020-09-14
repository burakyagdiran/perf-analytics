import React from 'react';
import { shallow } from 'enzyme';
import PerformanceChart from './PerformanceChart';

it('should render correctly with no props', () => {
  const component = shallow(<PerformanceChart />);
  expect(component).toMatchSnapshot();
});

it('should render banner text correctly with given strings', () => {
  const testTitle = 'test title';
  const component = shallow(<PerformanceChart title={testTitle} />);
  expect(component).toMatchSnapshot();
});

describe('PerformanceChart', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PerformanceChart debug />);
    expect(component).toMatchSnapshot();
  });
});
