
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaRegHeart } from "react-icons/fa";

const Moviecard = ({ movie , onFavouriteClick}) => {
  return (
    
    <Card className="movie-card bg-dark text-white h-100">
      <div className="movie-poster">
         <div className="movie-overlay">
           <FaRegHeart  size={20} className="heart-icon" onClick={() => onFavouriteClick(movie)} />
          
          </div>
        
        <Card.Img
          variant="top"
          src={movie.image}
          alt={movie.title}
          className="movie-image"
        
          
        />
      </div>
      </Card>
  );
};

export default Moviecard;
