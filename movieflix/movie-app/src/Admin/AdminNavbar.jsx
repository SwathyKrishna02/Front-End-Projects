import { Navbar, Nav, Container, Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

function AdminNavbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
  const value = e.target.value;
  setQuery(value);
  if (onSearch) onSearch(value);
};


  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/admin" className="fw-bold text-white">🎬 MovieFlix Admin Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="admin-navbar-nav" />
        <Navbar.Collapse id="admin-navbar-nav">
         
          <Form className="d-flex ms-auto">
            <InputGroup>
              <InputGroup.Text style={{ backgroundColor: "#222", border: "none" }}>
                <BsSearch color="white" />
              </InputGroup.Text>
              <Form.Control
                type="text"
                className="bg-dark text-white border-0"
                placeholder="Search movies, actors..."
                value={query}
                onChange={handleInputChange}
              />
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;
