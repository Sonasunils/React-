
import './App.css';

import Moviecard from './componants/Moviecard';
import Navsection from './componants/Navsection';
import MovieSlide from './componants/MovieSlide';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Favorite from './componants/Favorite';
import { Prev } from 'react-bootstrap/esm/PageItem';

function App() {
  const movies = [
    {
      id: 1,
      title: 'The Dark Knight',
      image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      description: 'Batman faces the Joker in Gotham City.'
    },
    {
      id: 2,
      title: 'Inception',
      image: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
      description: 'A thief enters dreams to steal secrets.'
    },
    {
      id: 3,
      title: 'Interstellar',
      image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      description: 'A team travels through space to save humanity.'
    },
    {
      id: 4,
      title: 'Avengers: Endgame',
      image: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
      description: 'The Avengers unite for their final battle.'
    },
    {
      id: 5,
      title: 'Spider-Man: No Way Home',
      image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      description: 'Peter Parker faces unexpected visitors.'
    },
    {
      id: 6,
      title: 'Doctor Strange',
      image: 'https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg',
      description: 'A surgeon discovers the mystical arts.'
    }
  ];
  const [favourites, setFavourites] = useState([]);

  
  const handleFavouriteClick = (movie) => {
  setFavourites((prev) =>
    prev.some((item) => item.id === movie.id)
      ? prev.filter((item) => item.id !== movie.id)
      : [...prev, movie]
  );
};


  return (
    <>
      <Navsection />
      <MovieSlide />
        <div className="main bg-dark">
        <Container>
          <h2 className="text-white mb-4">Favorite Movies</h2>

          <Row className="g-4 ">
            {favourites.map((movie) => (
              <Col key={movie.id} xs={12} sm={6} lg={4}>
                <Favorite movie={movie} style={{ height: '50%' }} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
     

      <div className="main bg-dark">
        <Container>
          <h2 className="text-white mb-4">Popular Movies</h2>

          <Row className="g-4 ">
            {movies.map((movie) => (
              <Col key={movie.id} xs={12} sm={6} lg={4}>
                <Moviecard movie={movie} style={{ height: '50%' }} onFavouriteClick={handleFavouriteClick} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
