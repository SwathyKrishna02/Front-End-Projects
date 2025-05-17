import { useState } from "react";
function AdminMovieCard({ movie, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMovie, setEditedMovie] = useState({
    ...movie,
    cast: movie.cast.join(', '), // Convert array to comma-separated string initially
  });

  const handleSave = () => {
    const updated = {
      ...editedMovie,
      cast: editedMovie.cast.split(',').map(cast => cast.trim()), // Convert back to array
    };
    onUpdate(updated);  // Pass the updated movie
    setIsEditing(false);
  };

  return (
    <div className="card text-white bg-dark mb-3"  style={{ border: '2px solid white' }}>
      {isEditing ? (
        <div className="card-body">
          <input
            className="form-control form-control-sm mb-2"
            value={editedMovie.title}
            onChange={(e) => setEditedMovie({ ...editedMovie, title: e.target.value })}
            disabled
          />
          <input
            className="form-control form-control-sm mb-2"
            value={editedMovie.genre}
            onChange={(e) => setEditedMovie({ ...editedMovie, genre: e.target.value })}
          />
          <input
            className="form-control form-control-sm mb-2"
            value={editedMovie.cast}
            onChange={(e) => setEditedMovie({ ...editedMovie, cast: e.target.value })}
          />
          <input
            className="form-control form-control-sm mb-2"
            value={editedMovie.image}
            onChange={(e) => setEditedMovie({ ...editedMovie, image: e.target.value })}
          />
          <input
            className="form-control form-control-sm mb-2"
            value={editedMovie.description}
            onChange={(e) => setEditedMovie({ ...editedMovie, description: e.target.value })}
          />
          <input
            className="form-control form-control-sm mb-2"
            value={editedMovie.language}
            onChange={(e) => setEditedMovie({ ...editedMovie, language: e.target.value })}
          />
          <input
            className="form-control form-control-sm mb-2"
            value={editedMovie.maturity_rating}
            onChange={(e) => setEditedMovie({ ...editedMovie, maturity_rating: e.target.value })}
          />
          <input
            className="form-control form-control-sm mb-2"
            value={editedMovie.year}
            onChange={(e) => setEditedMovie({ ...editedMovie, year: e.target.value })}
          />
          <button className="btn btn-primary btn-sm me-2" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <>
          <img
            src={movie.image}
            className="card-img-top"
            alt={movie.title}
            style={{ height: '300px', objectFit: 'contain' }}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text"><strong>Genre:</strong> {movie.genre}</p>
            <p className="card-text"><strong>Cast:</strong> {movie.cast.join(', ')}</p>
            <p className="card-text"><strong>Description:</strong> {movie.description}</p>
            <p className="card-text"><strong>Language:</strong> {movie.language}</p>
            <p className="card-text"><strong>Maturity Rating:</strong> {movie.maturity_rating}</p>
            <p className="card-text"><strong>Year:</strong> {movie.year}</p>
            <button className="btn btn-warning btn-sm me-2" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(movie.title)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminMovieCard;
