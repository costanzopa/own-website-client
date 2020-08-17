import React, { useState, useEffect } from "react";
import { List, Button, Modal as ModalAntd, notification } from "antd";

import "./CoursesList.scss";

export default function CoursesList(props) {
  const { courses, setReloadCourses } = props;
  const [listCourses, setListCourses] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const listCourseArray = [];
    courses.forEach((course) => {
      listCourseArray.push({
        content: (
          <div>Course</div>
        ),
      });
    });
    setListCourses(listCourseArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courses]);

  return (<div>CoursesList</div>);
}
