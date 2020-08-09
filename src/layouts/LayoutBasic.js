import React from 'react';

import { Layout } from 'antd';
import LayoutRoutes from './LayoutRoutes.js';

import './LayoutBasic.scss';

const LayoutBasic = (props) => {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Layout className="layout-basic">
        <Header className="header">Header</Header>
        <Content className="content">
          <LayoutRoutes routes={routes} />
        </Content>
        <Footer className="footer">Pablo Costanzo</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutBasic;
