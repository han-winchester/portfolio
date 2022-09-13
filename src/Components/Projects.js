import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <div>
      <Row>
        <Col style={{ display: "flex", justifyContent: "left" }}>
          <h2>Projects</h2>
        </Col>
      </Row>
      <br />
      <Row>
        <Col style={{ display: "flex", justifyContent: "left" }}>
          <p>Projects TEXT HERE</p>
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
