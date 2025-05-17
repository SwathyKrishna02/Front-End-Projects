import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import profileImg from "../images/profile.png"; // Import the image from src/images/

function MovieProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [theme, setTheme] = useState("dark");

  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: profileImg,
    favoriteMovies: ["Inception", "Interstellar", "The Matrix"],
    watchedMovies: ["The Dark Knight", "The Godfather"],
    watchlist: ["The Shawshank Redemption", "Pulp Fiction"],
    favoriteGenres: ["Action", "Sci-Fi", "Drama"],
    bio: "Movie enthusiast and Netflix lover. Always looking for new films and shows to binge-watch!",
    reviews: [
      {
        movie: "Inception",
        rating: 4.5,
        review: "Amazing mind-bending plot with great visual effects!",
      },
    ],
    achievements: ["Top Reviewer", "Watched 50 Movies"],
  });

  const [formData, setFormData] = useState(user);

  const handleEditToggle = () => {
    setFormData(user);
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#121212" : "#fff",
        minHeight: "100vh",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <Container className="py-5">
        <Row>
          <Col md={4} className="d-flex justify-content-center">
            <img
              src={user.avatar}
              alt="Profile"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
          </Col>
          <Col md={8}>
            <Card className={theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}>
              <Card.Body>
                {isEditing ? (
                  <>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Form>
                    <Button variant="success" className="me-2" onClick={handleSave}>
                      Save
                    </Button>
                    <Button variant="secondary" onClick={handleEditToggle}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Card.Title className="fs-3">{user.name}</Card.Title>
                    <Card.Text className="fs-5">{user.bio}</Card.Text>
                    <Card.Text className="text-muted">{user.email}</Card.Text>

                    <Card.Text className="fs-5">Favorite Movies:</Card.Text>
                    <ul>
                      {user.favoriteMovies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                      ))}
                    </ul>

                    <Card.Text className="fs-5">Watched Movies:</Card.Text>
                    <ul>
                      {user.watchedMovies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                      ))}
                    </ul>

                    <Card.Text className="fs-5">Watchlist:</Card.Text>
                    <ul>
                      {user.watchlist.map((movie, index) => (
                        <li key={index}>{movie}</li>
                      ))}
                    </ul>

                    <Card.Text className="fs-5">Favorite Genres:</Card.Text>
                    <ul>
                      {user.favoriteGenres.map((genre, index) => (
                        <li key={index}>{genre}</li>
                      ))}
                    </ul>

                    <Card.Text className="fs-5">Reviews:</Card.Text>
                    {user.reviews.map((review, index) => (
                      <div key={index}>
                        <Card.Title>{review.movie}</Card.Title>
                        <Card.Text>Rating: {review.rating} / 5</Card.Text>
                        <Card.Text>{review.review}</Card.Text>
                      </div>
                    ))}

                    <Card.Text className="fs-5">Achievements:</Card.Text>
                    <ul>
                      {user.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>

                    <Button variant="danger" className="mt-3" onClick={handleEditToggle}>
                      Edit Profile
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>
            <Button variant="primary" className="mt-3" onClick={toggleTheme}>
              Toggle Theme
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MovieProfile;
