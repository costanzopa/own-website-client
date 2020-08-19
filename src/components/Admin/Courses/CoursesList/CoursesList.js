import React, { useState, useEffect } from "react";
import { List, Button, Modal as ModalAntd, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import DragSortableList from "react-drag-sortable";

import { getAccessTokenApi } from "../../../../api/auth";
import {
  getCourseDataUdemyApi,
  deleteCourseApi,
  updateCourseApi,
} from "../../../../api/course";

import "./CoursesList.scss";
const { confirm } = ModalAntd;

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
          <Course
            course={course}
            deleteCourse={deleteCourse}
            editCourseModal={() => console.log("dss")}
          />
        ),
      });
    });
    setListCourses(listCourseArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courses]);

  const onSort = (sortedList, dropEvent) => {
    const accessToken = getAccessTokenApi();

    sortedList.forEach((item) => {
      const { _id } = item.content.props.course;
      const order = item.rank;
      updateCourseApi(accessToken, _id, { order });
    });
  };

  const deleteCourse = (course) => {
    const accesToken = getAccessTokenApi();

    confirm({
      title: "Eliminando curso",
      content:
        `¿Estas seguro de que quieres eliminar el curso ${course.idCourse}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteCourseApi(accesToken, course._id)
          .then((response) => {
            const typeNotification = response.code === 200
              ? "success"
              : "warning";
            notification[typeNotification]({
              message: response.message,
            });
            setReloadCourses(true);
          })
          .catch(() => {
            notification["error"]({
              message: "Error del servidor, intentelo más tarde.",
            });
          });
      },
    });
  };

  return (<div className="courses-list">
    <div className="courses-list__header">
      <Button
        type="primary"
        onClick={() => {
          console.log();
        }}
      >
        Nuevo curso
      </Button>
    </div>
    <div className="courses-list__items">
      {listCourses.length === 0 && (
        <h2 style={{ textAlign: "center", margin: 0 }}>
          No tienes cursos creados
        </h2>
      )}
      <DragSortableList items={listCourses} onSort={onSort} type="vertical" />
    </div>
  </div>);
}

function Course(props) {
  const { course, deleteCourse, editCourseModal } = props;
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    getCourseDataUdemyApi(course.idCourse).then((response) => {
      if (response.code !== 200) {
        notification["warning"]({
          message: `El curso con el id ${course.idCourse} no se ha encontrado.`,
        });
      }
      setCourseData(response.data);
    });
  }, [course]);

  if (!courseData) {
    return null;
  }

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editCourseModal(course)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={() => deleteCourse(course)}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <img
        src={courseData.image_480x270}
        alt={courseData.title}
        style={{ width: "100px", marginRight: "20px" }}
      />
      <List.Item.Meta
        title={`${courseData.title} | ID: ${course.idCourse}`}
        description={courseData.headline}
      />
    </List.Item>
  );
}
