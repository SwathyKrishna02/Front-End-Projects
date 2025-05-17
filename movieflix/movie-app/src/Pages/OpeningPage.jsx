import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function OpeningPage() {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: "url('/src/images/movie_background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card className="text-center p-4" style={{ maxWidth: "35rem" }}>
        <Card.Body>
          <h1 className="display-4 fw-bold mb-4">MovieFlix</h1>
          <p className="mb-4">Your journey to explore amazing content starts here.</p>

          <Row className="mb-3">
            <Col>
              <Button variant="primary" className="w-100" onClick={() => navigate("/admin-login")}>
                Admin Login
              </Button>
            </Col>
            <Col>
              <Button variant="danger" className="w-100" onClick={() => navigate("/login")}>
                User Login
              </Button>
            </Col>
          </Row>

          <Button variant="outline-secondary" className="w-100" onClick={() => navigate("/signup")}>
            User Sign Up
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default OpeningPage;
