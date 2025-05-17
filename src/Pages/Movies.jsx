import { useState, useEffect } from 'react';
import { MoviesData } from '../Components/MoviesData'; 
import MovieCard from '../Components/MovieCard'; 
import MainNavbar from '../Components/Navbar'; 
import Footer from '../Components/Footer';

const Movies = () => {
  const movies = MoviesData(); 
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredMovies, setFilteredMovies] = useState([...movies]);

  // Extract unique genres and years
  const genres = [...new Set(movies.flatMap(movie => movie.genre.split(',').map(g => g.trim())))];
  const years = [...new Set(movies.map(movie => movie.year))].sort((a, b) => b - a);

  useEffect(() => {
    let updated = [...movies];

    // Genre filter
    if (selectedGenre) {
      updated = updated.filter(movie =>
        movie.genre.split(',').map(g => g.trim()).includes(selectedGenre)
      );
    }

    // Year filter
    if (selectedYear) {
      updated = updated.filter(movie => movie.year === parseInt(selectedYear));
    }

    // Alphabetical sort
    updated.sort((a, b) =>
      sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

    setFilteredMovies(updated);
  }, [selectedGenre, selectedYear, sortOrder]);

  return (
    <>
      <MainNavbar style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} />

      <div className="bg-dark text-white" style={{ display: 'flex', padding: '20px', marginTop: '70px' }}> 
        <div
          style={{
            width: '250px', 
            padding: '10px',
            borderRight: '1px solid #ddd',
            marginRight: '20px', 
            position: 'sticky',
            top: '70px', 
          }}
        >
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Genre:
            <select
              value={selectedGenre}
              onChange={e => setSelectedGenre(e.target.value)}
              style={{ padding: '5px', fontSize: '14px', width: '100%' }}
            >
              <option value="">All Genres</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: 'block', marginBottom: '10px' }}>
            Year:
            <select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              style={{ padding: '5px', fontSize: '14px', width: '100%' }}
            >
              <option value="">All Years</option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: 'block', marginBottom: '10px' }}>
            Sort:
            <select
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
              style={{ padding: '5px', fontSize: '14px', width: '100%' }}
            >
              <option value="asc">A to Z</option>
              <option value="desc">Z to A</option>
            </select>
          </label>
        </div>

        <div
          className="movie-cards-container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: filteredMovies.length <= 2 ? 'center' : 'space-between', 
            width: '100%',
            marginTop: '20px',
            overflowY: 'auto', 
            flex: 1,
          }}
        >
          {filteredMovies.length === 0 ? (
            <p>No movies found with the selected filters.</p>
          ) : (
            filteredMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Movies;
