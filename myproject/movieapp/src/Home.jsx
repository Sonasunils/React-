import React from 'react';
import MoviePoster from './MoviePoster';

const Home = () => {
  const images = [
    {
      id: 1,
      title: 'The Dark Knight',
      image: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2022/04/The-Dark-Knight-movie-poster.jpeg?q=50&fit=crop&w=825&dpr=1.5',
      description: 'A legendary superhero thriller.'
    },
    {
      id: 2,
      title: 'Inception',
      image: 'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
      description: 'Enter the world of dreams.'
    },
    {
      id: 3,
      title: 'Interstellar',
      image: 'https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      description: 'Explore beyond the stars.'
    }
  ];

  return <MoviePoster images={images} />;
};

export default Home;