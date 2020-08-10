import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import LayoutRoutes from "./LayoutRoutes.js";
import useAuth from "../hooks/useAuth";

import "./LayoutAdmin.scss";
import MenuTopBar from "../components/Admin/MenuTopBar";
import MenuSider from "../components/Admin/MenuSider";
import AdminSignIn from "../pages/Admin/SignIn";

const LayoutAdmin = (props) => {
  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { user, isLoading } = useAuth();

  if (!user && !isLoading) {
    return (
      <>
        <Route path="/admin/login" component={AdminSignIn} />
        <Redirect to="/admin/login" />
      </>
    );
  }
  if (user && !isLoading) {
    return (
      <Layout>
        <Layout
          className="layout-admin"
          style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
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
  }
  return null;
};

export default LayoutAdmin;
