import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <Container fluid>
        <Row>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <h3>Han Winchester</h3>
          </button>
        </Row>
        <Row>
          <Col>
            <button
              onClick={() => {
                navigate("/about");
              }}
            >
              <b>About</b>
            </button>
          </Col>
          <Col>
            <button
              onClick={() => {
                navigate("/projects");
              }}
            >
              <b>Projects</b>
            </button>
          </Col>
          <Col>
            <b>Resume</b>
          </Col>
          <Col>
            <b>Social Media</b>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Header;
