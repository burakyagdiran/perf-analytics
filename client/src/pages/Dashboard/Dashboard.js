import './Dashboard.scss';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from 'antd';
import PerformanceChart from '../../components/performanceChart';
import { loadProjects } from '../../actions';
import { loadPathNames, loadPerformanceDatas, clearState } from './actions';

const { Option } = Select;

function Dashboard() {
  const dispatch = useDispatch();
  const [hostName, setHostName] = useState('');
  const [pathName, setPathName] = useState('');
  const [isShowCharts, setIsShowCharts] = useState(false);

  const projects = useSelector(({ rootReducer }) => rootReducer.projects);
  const projectsLoading = useSelector(
    ({ rootReducer }) => rootReducer.projectsLoading
  );
  const pathNamesLoading = useSelector(
    ({ dashboardReducer }) => dashboardReducer.pathNamesLoading
  );
  const pathNames = useSelector(
    ({ dashboardReducer }) => dashboardReducer.pathNames
  );
  const performanceDatas = useSelector(
    ({ dashboardReducer }) => dashboardReducer.performanceDatas
  );
  useEffect(() => {
    dispatch(loadProjects());
    return () => {
      dispatch(clearState());
    };
    // eslint-disable-next-line
  }, []);

  const onChangeSelectHostName = (value) => {
    setHostName(value);
    setPathName('');
    setIsShowCharts(false);
    dispatch(loadPathNames(value));
  };

  const onChangeSelectPathName = (value) => {
    setPathName(value);
    dispatch(loadPerformanceDatas(hostName, value, performanceDatasLoaded));
  };

  const performanceDatasLoaded = (e) => {
    setIsShowCharts(true);
  };

  return (
    <div className="dashboard-page">
      <div className="search-area">
        <span className="select-title">Domain:</span>
        <Select
          className="select-box"
          showSearch
          value={hostName}
          placeholder="Select a project"
          loading={projectsLoading}
          optionFilterProp="children"
          onChange={onChangeSelectHostName}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }>
          {projects.map((item) => {
            return (
              <Option key={item._id} value={item.hostName}>
                {item.hostName}
              </Option>
            );
          })}
        </Select>
        <span className="select-title">Path Name:</span>
        <Select
          className="select-box"
          showSearch
          value={pathName}
          placeholder="Select a project"
          optionFilterProp="children"
          loading={pathNamesLoading}
          onChange={onChangeSelectPathName}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }>
          {pathNames.map((item) => {
            return (
              <Option key={item.id} value={item.pathName}>
                {item.pathName}
              </Option>
            );
          })}
        </Select>
      </div>
      {isShowCharts && (
        <div className="chart-container">
          <div className="performance-chart">
            <PerformanceChart
              title="TTFB"
              performanceData={performanceDatas}
              performanceType={'ttfb'}
            />
          </div>
          <div className="performance-chart">
            <PerformanceChart
              title="FCP"
              performanceData={performanceDatas}
              performanceType={'fcp'}
            />
          </div>
          <div className="performance-chart">
            <PerformanceChart
              title="DOM Load"
              performanceData={performanceDatas}
              performanceType={'domLoad'}
            />
          </div>
          <div className="performance-chart">
            <PerformanceChart
              title="Window Load"
              performanceData={performanceDatas}
              performanceType={'windowLoad'}
            />
          </div>
        </div>
      )}
    </div>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
