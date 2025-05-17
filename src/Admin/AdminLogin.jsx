import { useState } from "react";
import { Button, Card, Form, InputGroup, Container } from "react-bootstrap";
import { BsEye, BsEyeSlash, BsEnvelope, BsLock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleForgotPassword = () => {
    navigate("/forgot");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address");
    } else {
      // Hardcoded admin credentials
      const adminCredentials = {
        email: "admin@gmail.com",
        password: "123",
      };

      if (
        formData.email === adminCredentials.email &&
        formData.password === adminCredentials.password
      ) {
        console.log("Login successful!");
        navigate("/admin-dash"); // Redirect to the admin page or dashboard
      } else {
        alert("Invalid credentials. Only admin can access this page.");
      }
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
            Sign In
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

              <Form.Group>
                <Form.Check
                  type="checkbox"
                  onChange={handleChange}
                  name="remember"
                  checked={formData.remember}
                  label="Remember me"
                  className="d-flex gap-2"
                />
              </Form.Group>

              <Button variant="danger" className="w-100 p-6" type="submit">
                Sign In
              </Button>
            </Form>

            <div className="text-center">
              <a href="#" onClick={handleForgotPassword} className="text-primary p-4">
                Forgot Password?
              </a>
            </div>
          </Card.Body>

          <Card.Footer className="text-center">
            New to Netflix? <a href="/signup">Sign up now</a>
            <p className="mt-2 text-muted fs-8">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="https://www.google.com/recaptcha" className="text-primary">Learn more</a>
            </p>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
}

export default Login;
