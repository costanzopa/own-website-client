import React from 'react';
import { Layout } from 'antd';
import LayoutRoutes from './LayoutRoutes.js';

import './LayoutAdmin.scss';

const LayoutAdmin = (props) => {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu Sider Admin</h2>
      <Layout>
        <Header>Header</Header>
        <Content>
          <LayoutRoutes routes={routes} />
        </Content>
        <Footer>Pablo Costanzo</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
