import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import chunkArray from '../Components/chunkArray';

function MovieCarouselSection({ title, movies }) {
  const movieChunks = chunkArray(movies, 5);

  return (
    <div className="section bg-dark text-white">
      <h2 className="section-title">{title}</h2>
      <Carousel interval={null}>
        {movieChunks.map((chunk, idx) => (
          <Carousel.Item key={idx}>
            <Row className="justify-content-center">
              {chunk.map((movie, i) => (
                <Col key={i} xs={6} sm={4} md={2} className="d-flex justify-content-center">
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MovieCarouselSection;
