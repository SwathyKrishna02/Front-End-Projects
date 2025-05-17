import React from 'react';
import { Carousel } from 'react-bootstrap';
import { BsPlayCircle, BsInfoCircle } from 'react-icons/bs';
import { MoviesData } from './MoviesData';

function BoardCarousel() {
  const movies = MoviesData();  

  const selectedMovies = movies.slice(21, 26); 

  return (
    <Carousel controls={false} className="bg-dark text-white">
      {selectedMovies.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-image">
            <img className="d-block w-100" src={item.image} alt={item.title} />
            <div className="carousel-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="btn btn-light me-2">
                <BsPlayCircle size={30} className="me-1" /> Play
              </button>
              <button className="btn btn-light">
                <BsInfoCircle size={30} className="me-1" /> Info
              </button>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BoardCarousel;
