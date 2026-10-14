
import React from 'react'

const MovieCard = ({ movie, onFavouriteClick }) => {
  return (
    <div className="movie-card">

      <div className="movie-poster">
        <img src={movie.poster_path} alt={movie.title} />

        <div className="movie-overlay">
          <button
            className="favourite-button"
            onClick={() => onFavouriteClick(movie)}
          >
            ❤️ Favourite
          </button>
        </div>
      </div>

      <div className="movie-info">
        <p>{movie.title}</p>
        <p>{movie.release_date}</p>
      </div>

    </div>
  )
}

export default MovieCard
