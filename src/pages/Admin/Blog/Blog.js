import React, { useState } from "react";
import { Button, notification } from "antd";
import Modal from "../../../components/Modal";

import "./Blog.scss";

const Blog = (props) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  return (<div className="blog">
    <div className="blog__add-post">
      <Button type="primary" onClick={() => console.log("Add Post")}>
        Nuevo post
      </Button>
    </div>
    <Modal
      title={modalTitle}
      isVisible={isVisibleModal}
      setIsVisible={setIsVisibleModal}
      width="75%"
    >
      {modalContent}
    </Modal>
  </div>);
};
export default Blog;
