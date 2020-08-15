import React, { useState, useEffect } from "react";
import { Switch, List, Button, Modal as ModalAntd, notification } from "antd";
import Modal from "../../../Modal";
import DragSortableList from "react-drag-sortable";
import {
  updateMenuApi,
  activateMenuApi,
  deleteMenuApi,
} from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";
import "./MenuWebList.scss";

const { confirm } = ModalAntd;

export default function MenuWebList(props) {
  const { menu, setReloadMenuWeb } = props;
  const [listItems, setListItems] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  useEffect(() => {
    const listItemsArray = [];
    menu.forEach((item) => {
      listItemsArray.push({
        content: <div>Menu</div>,
      });
    });
    setListItems(listItemsArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);
  const onSort = (sortedList, dropEvent) => {
    const accesToken = getAccessTokenApi();

    sortedList.forEach((item) => {
      const { _id } = item.content.props.item;
      const order = item.rank;
      updateMenuApi(accesToken, _id, { order });
    });
  };

  return (
    <div className="menu-web-list">
      <div className="menu-web-list__header">
        <Button type="primary" onClick={() => {}}>
          Crear menú
        </Button>
      </div>

      <div className="menu-web-list__items">
        <DragSortableList items={listItems} onSort={onSort} type="vertical" />
      </div>

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}
