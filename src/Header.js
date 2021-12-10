import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <div className="Header">
      <Container fluid>
        <Row>
          <h3>Han Winchester</h3>
        </Row>
        <Row>
          <Col>
            <b>About</b>
          </Col>
          <Col>
            <b>Projects</b>
          </Col>
          <Col>
            <b>Resume</b>
          </Col>
          <Col>
            <b>Social Media</b>
          </Col>
        </Row>
        <br />
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
      </Container>
    </div>
  );
}

export default Header;
