import React from 'react';
import { MoviesData } from '../Components/MoviesData';
import MovieCarouselSection from '../Components/MovieCarouselSection';

const topIndianTitles = [
  "RRR", "Kantara", "Bahubali: The Beginning", "My Sassy Girl",
  "Silenced", "Mother", "Secretly Greatly", "A Werewolf Boy", "Okja", "Minari"
];

const topForeignTitles = [
  "Inception", "Interstellar", "The Matrix", "The Shawshank Redemption",
  "Titanic", "The Godfather", "Joker", "Avengers: Endgame", "The Dark Knight", "Parasite"
];

function TopMovies({ searchQuery }) {
  const allMovies = MoviesData();

  const topIndianMovies = allMovies.filter(movie => 
    topIndianTitles.includes(movie.title) && movie.title.toLowerCase().includes(searchQuery)
  );

  const topForeignMovies = allMovies.filter(movie => 
    topForeignTitles.includes(movie.title) && movie.title.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <MovieCarouselSection title="Top 10 Movies in Indian" movies={topIndianMovies} />
      <MovieCarouselSection title="Top 10 Movies in Foreign" movies={topForeignMovies} />
    </>
  );
}

export default TopMovies;
