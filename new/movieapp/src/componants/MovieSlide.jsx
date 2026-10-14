import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const MovieSlide = () => {
  return (
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://austin.culturemap.com/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpL0w2UDNuSTZWbmxZL21heHJlc2RlZmF1bHQuanBnIiwiZXhwaXJlc19hdCI6MTgyMDkwNjkwOX0.PHwpBMkAd_zbfIGB3aexPtv5dz1mfxmTW3M7VJbYZhc/image.jpg?width=980&quality=50"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 " 
          src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2025/07/the-best-movies-to-watch-on-netflix-tonight-1.jpg?w=1200&h=628&fit=crop"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static0.moviewebimages.com/wordpress/wp-content/uploads/2023/08/the-10-best-alien-movies-on-netflix-to-watch-next.jpg?w=1200&h=675&fit=crop"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MovieSlide