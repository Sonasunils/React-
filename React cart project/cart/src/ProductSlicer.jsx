
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';

const ProductSlicer = () => {
  const slides = [
    {
      image:
        'https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/448ffff1b9c32a3c.jpg?q=60',
      alt: 'Shopping offers',
      title: 'Discover Something New',
      subtitle: 'Explore products and find your everyday favourites.',
      button: 'Explore Products',
    },
    {
      image:
        'https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/47c1bafe97ce7523.png?q=60',
      alt: 'Latest shopping deals',
      title: 'Your Favourite Finds',
      subtitle: 'Discover electronics, fashion, beauty and more.',
      button: 'Shop Now',
    },
    {
      image:
        'https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/448ffff1b9c32a3c.jpg?q=60',
      alt: 'Online shopping collection',
      title: 'Upgrade Your Lifestyle',
      subtitle: 'Great finds for every corner of your life.',
      button: 'Discover More',
    },
  ];

  return (
    <section className="hero-section">
      <Carousel
        className="shop-carousel"
        indicators
        controls
        interval={4000}
        pause="hover"
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="hero-image"
              src={slide.image}
              alt={slide.alt}
            />

            <div className="hero-overlay"></div>

            <Carousel.Caption className="hero-caption">
              <span className="hero-tag">
                YOUR NEXT FAVOURITE IS HERE
              </span>

              <h2>{slide.title}</h2>

              <p>{slide.subtitle}</p>

              <button
                className="hero-button"
                onClick={() =>
                  document
                    .getElementById('categories')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {slide.button} →
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default ProductSlicer;
