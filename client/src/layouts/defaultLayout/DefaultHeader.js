import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

function DefaultHeader() {
  return (
    <Header>
      <span className='default-header-title'>Performance Monitoring</span>
    </Header>
  );
}

export default DefaultHeader;
