import React, { useState } from 'react';
import { MoviesData } from '../Components/MoviesData';
import AdminMovieCard from '../Admin/AdminMovieCard';
import AdminNavbar from './AdminNavbar';

function AdminDashboard() {
  const [movies, setMovies] = useState(MoviesData());
  const [searchQuery, setSearchQuery] = useState('');

  const [newMovie, setNewMovie] = useState({
    title: '',
    genre: '',
    cast: '',
    image: '',
    description: '',
    language: '',
    maturity_rating: '',
    year: '',
  });

  // Add Movie (Create)
  const addMovie = () => {
    const movie = {
      title: newMovie.title.trim(),
      genre: newMovie.genre.trim(),
      cast: newMovie.cast.split(',').map(actor => actor.trim()),
      image: newMovie.image.trim(),
      description: newMovie.description.trim(),
      language: newMovie.language.trim(),
      maturity_rating: newMovie.maturity_rating.trim(),
      year: newMovie.year.trim(),
    };

    if (
      !movie.title || !movie.genre || !movie.cast.length || !movie.image ||
      !movie.description || !movie.language || !movie.maturity_rating || !movie.year
    ) {
      alert('Please fill in all fields');
      return;
    }

    const exists = movies.some((m) => m.title === movie.title);
    if (exists) {
      alert('Movie already exists. Use update instead.');
      return;
    }

    setMovies([...movies, movie]);
    setNewMovie({
      title: '',
      genre: '',
      cast: '',
      image: '',
      description: '',
      language: '',
      maturity_rating: '',
      year: '',
    });
  };

  // Delete
  const deleteMovie = (title) => {
    const updated = movies.filter(movie => movie.title !== title);
    setMovies(updated);
  };

  // Update
  const updateMovie = (updatedMovie) => {
    const updated = movies.map((movie) =>
      movie.title === updatedMovie.title ? updatedMovie : movie
    );
    setMovies(updated);
  };

  // Filtered Movies
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.cast.join(', ').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AdminNavbar onSearch={(query) => setSearchQuery(query)} />

      <div className="container-fluid min-vh-100 bg-dark text-white p-4" style={{ marginTop: '70px' }}>
        {/* Add Movie Form */}
        <div className="add-movie-form mb-4">
          <h4 className="text-white">Add New Movie</h4>
          <div className="form-group">
            {[
              { label: 'Title', key: 'title' },
              { label: 'Genre', key: 'genre' },
              { label: 'Cast (comma separated)', key: 'cast' },
              { label: 'Image URL', key: 'image' },
              { label: 'Description', key: 'description' },
              { label: 'Language', key: 'language' },
              { label: 'Maturity Rating', key: 'maturity_rating' },
              { label: 'Year', key: 'year' },
            ].map((field) => (
              <input
                key={field.key}
                type="text"
                className="form-control mb-2"
                placeholder={field.label}
                value={newMovie[field.key]}
                onChange={(e) => setNewMovie({ ...newMovie, [field.key]: e.target.value })}
              />
            ))}
            <button className="btn btn-success" onClick={addMovie}>Add Movie</button>
          </div>
        </div>

        {/* Movie List */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div className="col mb-3" key={movie.title}>
                <AdminMovieCard
                  movie={movie}
                  onDelete={deleteMovie}
                  onUpdate={updateMovie}
                />
              </div>
            ))
          ) : (
            <p className="text-white">No movies found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
