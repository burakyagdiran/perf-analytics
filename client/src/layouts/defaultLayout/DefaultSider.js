import React from 'react';
import { Layout, Menu } from 'antd';
import ROUTES from '../../routes';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const DefaultSider = () => {
  return (
    <Sider className={'default-sider'}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['/dashboard']}
        style={{ height: '100%' }}>
        {ROUTES.map((route) => {
          return (
            <Menu.Item key={route.key}>
              <Link to={route.path}>
                <span>{route.name}</span>
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default DefaultSider;
