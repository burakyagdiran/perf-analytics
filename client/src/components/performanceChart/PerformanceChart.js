import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
import moment from 'moment';

function PerformanceChart({
  title,
  performanceData,
  performanceType,
  ...props
}) {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  useEffect(() => {
    let newOptions = {
      title: { text: title },
      chart: {
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: { download: false, zoomin: false, zoomout: false, pan: false },
          autoSelected: 'zoom',
        },
      },
      xaxis: { categories: [], title: { text: 'Occurrence Time' } },
      yaxis: {
        title: { text: 'Time in millisecond' },
        labels: {
          formatter: function (x) {
            return x;
          },
        },
      },
    };
    let newSeries = [
      {
        data: [],
      },
    ];
    performanceData.forEach((item) => {
      newOptions.xaxis.categories.push(
        moment(item.createDate).format('HH:mm:ss')
      );
      newSeries[0].data.push(item[performanceType]);
    });
    setOptions(newOptions);
    setSeries(newSeries);
    // eslint-disable-next-line
  }, [title, performanceData, performanceType]);
  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width="100%"
      height="100%"
    />
  );
}

PerformanceChart.propTypes = {
  title: PropTypes.string,
  performanceType: PropTypes.string,
  performanceData: PropTypes.array.isRequired,
};

PerformanceChart.defaultProps = {
  performanceData: [],
};

export default PerformanceChart;
