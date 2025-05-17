import React from 'react';
import { MoviesData } from '../Components/MoviesData';
import MovieCarouselSection from '../Components/MovieCarouselSection';

function MovieGenre({ searchQuery }) {
  const allMovies = MoviesData();

  const genres = [
    "US TV Shows",
    "TV Comedies",
    "Horror",
    "Sci-Fi",
    "Animated",
    "East Asian Medical TV Shows",
    "Korean",
    "Indian Action Films"
  ];

  return (
    <>
      {genres.map(genre => {
        const moviesInGenre = allMovies.filter(movie =>
          movie.genre.toLowerCase().includes(genre.toLowerCase()) &&
          movie.title.toLowerCase().includes(searchQuery) // Filter by title as well
        );

        if (moviesInGenre.length === 0) return null;

        return (
          <MovieCarouselSection
            key={genre}
            title={genre}
            movies={moviesInGenre}
          />
        );
      })}
    </>
  );
}

export default MovieGenre;
