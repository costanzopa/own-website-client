import React, { useState, useEffect } from 'react';
import { Switch, List, Avatar, Button } from 'antd';
import {
  EditOutlined,
  StopOutlined,
  DeleteOutlined,
  CheckOutlined,
} from '@ant-design/icons';

import './ListUsers.scss';

import NoAvatar from '../../../../assets/img/png/no-avatar.png';
import Modal from '../../../../components/Modal';
import EditUserForm from '../EditUserForm';

export default function ListUsers(props) {
  const { usersActive, usersInactive } = props;
  const [viewUsersActives, setViewUsersActives] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState(null);

  return (
    <div className="list-users">
      <div className="list-users__header">
        <div className="list-users__switch">
          <Switch
            defaultChecked
            onChange={() => setViewUsersActives(!viewUsersActives)}
          />
          <span>
            {viewUsersActives ? 'Usuarios Activos' : 'Usuarios Inactivos'}
          </span>
        </div>
        {viewUsersActives ? (
          <UsersActive
            usersActive={usersActive}
            setIsVisibleModal={setIsVisibleModal}
            setModalTitle={setModalTitle}
            setModalContent={setModalContent}
          />
        ) : (
          <UsersInactive usersInactive={usersInactive} />
        )}

        <Modal
          title={modalTitle}
          isVisible={isVisibleModal}
          setIsVisible={setIsVisibleModal}
        >
          {modalContent}
        </Modal>
      </div>
    </div>
  );
}

const UsersActive = (props) => {
  const {
    usersActive,
    setIsVisibleModal,
    setModalTitle,
    setModalContent,
  } = props;

  const editUser = (user) => {
    setIsVisibleModal(true);
    setModalTitle(
      `Editar ${user.name ? user.name : '...'} ${
        user.lastname ? user.lastname : '...'
      }`
    );
    setModalContent(
      <EditUserForm user={user} setIsVisibleModal={setIsVisibleModal} />
    );
  };

  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersActive}
      renderItem={(user) => (
        <List.Item
          actions={[
            <Button type="primary" onClick={() => editUser(user)}>
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
            ${user.name ? user.name : '...'}
            ${user.lastname ? user.lastname : '...'}
          `}
            description={user.email}
          />
        </List.Item>
      )}
    />
  );
};

const UsersInactive = (props) => {
  const { usersInactive } = props;
  return (
    <List
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
                ${user.name ? user.name : '...'}
                ${user.lastname ? user.lastname : '...'}
              `}
            description={user.email}
          />
        </List.Item>
      )}
    />
  );
};
