import { useState } from "react";
import { Card, Form, InputGroup, Button, Container } from "react-bootstrap";
import { BsEnvelope } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email) {
      setError("Please enter your email address.");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      setSuccess("A password reset link has been sent to your email.");

      setTimeout(() => {
        navigate("/"); // Navigate back to login page or home after a successful submission
      }, 3000);
    }
  };

  return (
    <>
      <Container
        fluid
        className="vh-100 d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: "url('/src/images/movie_background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Card style={{ maxWidth: "35rem" }}>
          <Card.Header className="fs-2 fw-bold text-center p-4">
            Forgot Password
          </Card.Header>

          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <BsEnvelope />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                  />
                </InputGroup>
              </Form.Group>

              {error && (
                <div className="alert alert-danger mt-2" role="alert">
                  {error}
                </div>
              )}

              {success && (
                <div className="alert alert-success mt-2" role="alert">
                  {success}
                </div>
              )}

              <Button variant="danger" className="w-100 p-3" type="submit">
                Send Reset Link
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ForgotPassword;
