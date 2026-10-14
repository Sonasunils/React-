import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

const MoviePoster = ({ images }) => {
  return (
    <Carousel>
      {images.map((movie) => (
        <Carousel.Item key={movie.id}>
          <ExampleCarouselImage
            src={movie.image}
            text={movie.title}
          />

          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MoviePoster;