import React from 'react';
import {
  MenuUnfoldOutlined,
  PoweroffOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import AppLogo from '../../../assets/img/png/app-logo.png';

import './MenuTopBar.scss';

export default function MenuTopBar(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top-bar">
      <div className="menu-top-bar__left">
        <img src={AppLogo} alt="Pablo Agustin Costanzo" />
        <Button
          type="link"
          onClick={() => setMenuCollapsed(!menuCollapsed)}
          icon={menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        />
      </div>
      <div className="menu-top-bar__right">
        <Button
          type="link"
          onClick={() => console.log('Hola')}
          icon={<PoweroffOutlined />}
        />
      </div>
    </div>
  );
}
