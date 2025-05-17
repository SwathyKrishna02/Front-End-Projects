import React from 'react';
import { MoviesData } from '../Components/MoviesData';
import MovieCard from '../Components/MovieCard';
import MainNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const favoriteTitles = [
  'Brooklyn Nine-Nine',
  'The Big Bang Theory',
  'Maidaan',
  'Friends',
  'How I Met Your Mother',
  'Modern Family'
];

const List = () => {
  const movies = MoviesData();
  const favoritesOnly = movies.filter(movie => favoriteTitles.includes(movie.title));

  return (
    <>
      <MainNavbar />
      <div className="bg-dark text-white" style={{ padding: '20px' }}>
        <h2>My Favorite Shows & Movies</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {favoritesOnly.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <Footer style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }} />
    </>
  );
};

export default List;
