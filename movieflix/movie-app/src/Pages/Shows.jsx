import React, { useState, useEffect } from 'react';
import { MoviesData } from '../Components/MoviesData';
import MovieCard from '../Components/MovieCard';
import MainNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const TVShows = () => {
  const movies = MoviesData();
  const tvComedies = movies.filter(movie => movie.genre.includes('TV Comedies'));

  const [selectedYear, setSelectedYear] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredShows, setFilteredShows] = useState([...tvComedies]);

  const years = [...new Set(tvComedies.map(show => show.year))].sort((a, b) => b - a);

  useEffect(() => {
    let updated = [...tvComedies];

    if (selectedYear) {
      updated = updated.filter(show => show.year === parseInt(selectedYear));
    }

    updated.sort((a, b) =>
      sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

    setFilteredShows(updated);
  }, [selectedYear, sortOrder]);

  return (
    <>
      <MainNavbar style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} />

      <div className="bg-dark text-white" style={{ display: 'flex', padding: '20px', paddingTop: '80px' }}>

        <div style={{ width: '250px', padding: '20px', borderRight: '1px solid #ddd', marginRight: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Year:
            <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)} style={{ padding: '5px', fontSize: '14px', width: '100%' }}>
              <option value="">All Years</option>
              {years.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
          </label>

          <label style={{ display: 'block', marginBottom: '10px' }}>
            Sort:
            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} style={{ padding: '5px', fontSize: '14px', width: '100%' }}>
              <option value="asc">A to Z</option>
              <option value="desc">Z to A</option>
            </select>
          </label>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', width: '100%', paddingBottom: '60px' }}>
          {filteredShows.length === 0 ? (
            <p>No TV Comedies found with the selected filters.</p>
          ) : (
            filteredShows.map((show, index) => (
              <MovieCard key={index} movie={show} />
            ))
          )}
        </div>
      </div>

      <Footer style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 1000 }} />
    </>
  );
};

export default TVShows;
