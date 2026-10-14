
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExampleCarouselImage = ({ src, text }) => {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={text}
      style={{
        height: '450px',
        objectFit: 'cover'
      }}
    />
  );
};

export default ExampleCarouselImage;