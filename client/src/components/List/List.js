import './List.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

function List({ data, ...props }) {
  const columns = [
    {
      title: 'Projects',
      dataIndex: 'hostName',
      key: 'hostName',
    },
  ];
  return (
    <div className="list-container">
      <Table
        rowKey="_id"
        className="table"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
};

List.defaultProps = {
  data: [],
};

export default List;
