import './DefaultLayout.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Layout } from 'antd';
import withLayout from './withLayout';
import DefaultHeader from './defaultLayout/DefaultHeader';
import DefaultSider from './defaultLayout/DefaultSider';
import DefaultContent from './defaultLayout/DefaultContent';
import DefaultFooter from './defaultLayout/DefaultFooter';

function DefaultLayout({
  disableHeader,
  disableSider,
  disableFooter,
  children,
  ...rest
}) {
  return (
    <Layout className={'default-layout'}>
      {!disableHeader && <DefaultHeader />}
      <Layout>
        {!disableSider && <DefaultSider {...rest} />}
        <DefaultContent>{children}</DefaultContent>
      </Layout>
      {!disableFooter && <DefaultFooter />}
    </Layout>
  );
}

DefaultLayout.propTypes = {
  disableHeader: PropTypes.bool,
  disableSider: PropTypes.bool,
  disableFooter: PropTypes.bool,
};

export default withRouter(withLayout(DefaultLayout));
