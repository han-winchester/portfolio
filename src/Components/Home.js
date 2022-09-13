import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Row>
        <Col style={{ display: "flex", justifyContent: "left" }}>
          <h2>My website</h2>
        </Col>
      </Row>
      <br />
      <Row>
        <Col style={{ display: "flex", justifyContent: "left" }}>
          <p>home page TEXT HERE</p>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
