import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';

function MovieCard({ movie }) {
  return (
    <Card className="movie-card">
      <Card.Img variant="top" src={movie.image} alt={movie.title} className="movie-image" />
      <Card.Body>
        <Card.Title className="movie-title">{movie.title}</Card.Title>
        <Card.Text className="movie-genre">{movie.genre}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
