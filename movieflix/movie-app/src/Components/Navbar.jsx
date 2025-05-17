import { Navbar, Nav, Container, Form, InputGroup } from "react-bootstrap";
import { BsSearch, BsBell } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function MainNavbar({ onSearch }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === "/board"; // Only show search on Dashboard

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value); // Trigger search callback
    }
  };

  return (
    <Navbar bg="black" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/" className="fw-bold fs-4">
          🎬 MovieFlix
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/board" className="text-white">Home</Nav.Link>
            <Nav.Link href="/movies" className="text-white">Movies</Nav.Link>
            <Nav.Link href="/shows" className="text-white">TV Shows</Nav.Link>
            <Nav.Link href="/list" className="text-white">My List</Nav.Link>
          </Nav>

          {/* Conditionally render the search bar only on the Dashboard page */}
          {isDashboard && (
            <Form className="d-flex ms-auto">
              <InputGroup>
                <InputGroup.Text style={{ backgroundColor: "#222", border: "none" }}>
                  <BsSearch color="white" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  className="bg-dark text-white border-0 custom-placeholder"
                  placeholder="Titles/People/Genres"
                  value={query}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Form>
          )}

          <Nav className="ms-3 align-items-center">
            {/* Notifications */}
            <div className="hover-dropdown-wrapper me-3">
              <Nav.Link href="#!" className="text-white">
                <BsBell color="white" size={20} />
              </Nav.Link>
              <div className="notification-dropdown">
                <div className="notification-item">
                  <img src="/src/images/stranger_things.jpeg" alt="Stranger Things" />
                  <small>🎬 New episode of <strong>Stranger Things</strong> is now available.</small>
                </div>
                <div className="notification-item">
                  <img src="/src/images/inception.jpeg" alt="Inception" />
                  <small>⭐ Your review of <strong>Inception</strong> got 10 likes.</small>
                </div>
                <div className="notification-item">
                  <img src="/src/images/action_movie.jpeg" alt="New Genre" />
                  <small>📢 New movies added in <strong>Action</strong> & <strong>Drama</strong>.</small>
                </div>
              </div>
            </div>

            {/* Profile */}
            <div className="hover-dropdown-wrapper">
              <Nav.Link className="text-white">
                <img
                  src="/src/images/user_profile.png"
                  alt="Profile"
                  className="rounded-0"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
              </Nav.Link>
              <div className="profile-dropdown">
                <div className="profile-item" onClick={() => navigate("/profile")}>👤 Profile</div>
                <div className="profile-item">⚙️ Settings</div>
                <div className="profile-item" onClick={() => navigate("/login")}>🔓 Logout</div>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
