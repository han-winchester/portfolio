import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div>
      <Row>
        <Col style={{ display: "flex", justifyContent: "left" }}>
          <h2>About</h2>
        </Col>
      </Row>
      <br />
      <Row>
        <Col style={{ display: "flex", justifyContent: "left" }}>
          <p>ABOUT TEXT HERE</p>
        </Col>
      </Row>
    </div>
  );
}

export default About;
