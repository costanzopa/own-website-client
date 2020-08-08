import React, { useState } from 'react';
import { Layout } from 'antd';
import LayoutRoutes from './LayoutRoutes.js';

import './LayoutAdmin.scss';
import MenuTopBar from '../components/Admin/MenuTopBar';
import MenuSider from '../components/Admin/MenuSider';

const LayoutAdmin = (props) => {
  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Layout
        className="layout-admin"
        style={{ marginLeft: menuCollapsed ? '80px' : '200px' }}
      >
        <MenuSider menuCollapsed={menuCollapsed} />
        <Header className="header">
          <MenuTopBar
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="content">
          <LayoutRoutes routes={routes} />
        </Content>
        <Footer className="footer">Pablo Costanzo</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
