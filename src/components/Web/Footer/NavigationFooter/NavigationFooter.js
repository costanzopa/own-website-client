import React from "react";
import { Row, Col } from "antd";
import {
  AppleOutlined,
  UserOutlined,
  HddOutlined,
  BookOutlined,
  CodeOutlined,
  DatabaseOutlined,
  RightOutlined,
} from "@ant-design/icons";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <div className="navigation-footer">
      <Row>
        <Col>
          <h3>Navegación</h3>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <RenderListLeft />
        </Col>
        <Col md={12}>
          <RenderListRight />
        </Col>
      </Row>
    </div>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="#/">
          <BookOutlined />Cursos Online
        </a>
      </li>
      <li>
        <a href="#/">
          <CodeOutlined />Desarrollo Web
        </a>
      </li>
      <li>
        <a href="#/">
          <DatabaseOutlined />Base de Datos
        </a>
      </li>
      <li>
        <a href="#/">
          <RightOutlined />Politica de Privacidad
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#/">
          <HddOutlined />Sistemas / Servidores
        </a>
      </li>
      <li>
        <a href="#/">
          <AppleOutlined />CMS
        </a>
      </li>
      <li>
        <a href="#/">
          <UserOutlined />Porfolio
        </a>
      </li>
      <li>
        <a href="#/">
          <RightOutlined />Política de Cookies
        </a>
      </li>
    </ul>
  );
}
