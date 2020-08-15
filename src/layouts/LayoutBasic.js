import React from "react";
import { Row, Col } from "antd";
import MenuTop from "../components/Web/MenuTop";
import Footer from "../components/Web/Footer";

import LayoutRoutes from "./LayoutRoutes.js";

import "./LayoutBasic.scss";

const LayoutBasic = (props) => {
  const { routes } = props;

  return (
    <>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <MenuTop />
          <LayoutRoutes routes={routes} />
          <Footer />
        </Col>
        <Col lg={4} />
      </Row>
    </>
  );
};

export default LayoutBasic;
