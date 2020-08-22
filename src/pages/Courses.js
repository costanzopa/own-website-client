import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Row, Col, Spin, notification } from "antd";
import { getCoursesApi } from "../api/course";
import PresentationCourses from "../components/Web/Courses/PresentationCourses";
import CoursesList from "../components/Web/Courses/CoursesList";

const Courses = (props) => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    getCoursesApi()
      .then((response) => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          setCourses(response.courses);
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor intentlo más tarde.",
        });
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Cursos | Pablo Agustin Costanzo</title>
        <meta
          name="description"
          content="Cursos | Web sobre programación de Pablo Agustin Costanzo"
          data-react-helmet="true"
        />
      </Helmet>
      <Row>
        <Col md={4} />
        <Col md={16}>
          <PresentationCourses />
          {!courses
            ? (
              <Spin
                tip="Cargando cursos"
                style={{ textAlign: "center", width: "100%", padding: "20px" }}
              />
            )
            : (
              <CoursesList courses={courses} />
            )}
        </Col>
        <Col md={4} />
      </Row>
    </div>
  );
};
export default Courses;
