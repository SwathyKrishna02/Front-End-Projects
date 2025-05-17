import { useNavigate } from "react-router-dom";
import {  Form,Container, Card, Button, InputGroup } from "react-bootstrap";
import { BsEye, BsEyeSlash, BsLock, BsMailbox, BsPerson } from "react-icons/bs";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all fields");
    } else if (formData.password !== formData.confirmPassword) {
      alert("Oops! Password do not match");
    } else {
      console.log(formData);
      navigate('/');
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
            Sign Up
          </Card.Header>

          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <BsPerson />
                  </InputGroup.Text>

                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <BsMailbox />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Enter your Email Id"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <BsLock />
                  </InputGroup.Text>
                  <Form.Control
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                  </Button>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <BsLock />
                  </InputGroup.Text>

                  <Form.Control
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                  />

                  <Button variant="outline-secondary" onClick={toggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? <BsEyeSlash/> : <BsEye/>}
                  </Button>

                </InputGroup>
              </Form.Group>

              <Button
              variant="danger"
              className="w-100 p-6"
              type="submit"
            >
              Sign Up
            </Button>

            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
export default SignUp;
