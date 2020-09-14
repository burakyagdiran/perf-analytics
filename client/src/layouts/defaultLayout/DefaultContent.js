import React from 'react';
import { Switch } from 'react-router-dom';
import { Layout } from 'antd';

const { Content } = Layout;

function DefaultContent({ children }) {
  return (
    <Content className={'default-content'}>
      <Switch>{children}</Switch>
    </Content>
  );
}

export default DefaultContent;
