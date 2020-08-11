import React, { useState, useEffect } from "react";
import {
  Switch,
  List,
  Avatar,
  Button,
  Modal as ModalAntd,
  notification,
} from "antd";
import {
  EditOutlined,
  StopOutlined,
  DeleteOutlined,
  CheckOutlined,
} from "@ant-design/icons";

import "./ListUsers.scss";

import NoAvatar from "../../../../assets/img/png/no-avatar.png";
export default function ListUsers(props) {
  const { usersActive, usersInactive } = props;
  const [viewUsersActives, setViewUsersActives] = useState(true);
  return (
    <div className="list-users">
      <div className="list-users__header">
        <div className="list-users__switch">
          <Switch
            defaultChecked
            onChange={() => setViewUsersActives(!viewUsersActives)}
          />
          <span>
            {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
          </span>
        </div>
        {viewUsersActives
          ? <UsersActive usersActive={usersActive} />
          : <UsersInactive usersInactive={usersInactive} />}
      </div>
    </div>
  );
}

const UsersActive = (props) => {
  const {
    usersActive,
  } = props;
  return (<List
    className="users-active"
    itemLayout="horizontal"
    dataSource={usersActive}
    renderItem={(user) => (
      <List.Item
        actions={[
          <Button type="primary">
            <EditOutlined />
          </Button>,
          <Button type="danger">
            <StopOutlined />
          </Button>,
          <Button type="danger">
            <DeleteOutlined />
          </Button>,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
          title={`
            ${user.name ? user.name : "..."}
            ${user.lastname ? user.lastname : "..."}
          `}
          description={user.email}
        />
      </List.Item>
    )}
  />);
};

const UsersInactive = (props) => {
  const {
    usersInactive,
  } = props;
  return (<List
    className="users-active"
    itemLayout="horizontal"
    dataSource={usersInactive}
    renderItem={(user) => (
      <List.Item
        actions={[
          <Button type="primary">
            <CheckOutlined />
          </Button>,
          <Button type="danger">
            <DeleteOutlined />
          </Button>,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
          title={`
                ${user.name ? user.name : "..."}
                ${user.lastname ? user.lastname : "..."}
              `}
          description={user.email}
        />
      </List.Item>
    )}
  />);
};
