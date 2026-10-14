
import React, { useState } from 'react'
import MovieCard from '../componant/MovieCard'

const Home = () => {

  const [favourites, setFavourites] = useState([])

  const movies = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      release_date: '1994-09-23',
      poster_path: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
    },
    {
      id: 2,
      title: 'The Godfather',
      release_date: '1972-03-24',
      poster_path: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'
    }
  ]

  // Add movie to favourites
  const onFavouriteClick = (movie) => {
    setFavourites((prevFavourites) => {
      // Prevent duplicate favourites
      if (prevFavourites.some((fav) => fav.id === movie.id)) {
        return prevFavourites
      }

      return [...prevFavourites, movie]
    })
  }

  return (
    <div>
       <h2>❤️ Favourite Movies ({favourites.length})</h2>

      <div className="movies-grid">
        {favourites.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onFavouriteClick={onFavouriteClick}
          />
        ))}
      </div>

      {favourites.length === 0 && (
        <p>No favourite movies yet. Click ❤️ Favourite to add one!</p>
      )}

   

      <h2>All Movies</h2>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onFavouriteClick={onFavouriteClick}
          />
        ))}
      </div>

      <hr />
       </div>

     
  )
}

export default Home
