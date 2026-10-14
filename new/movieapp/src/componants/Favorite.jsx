import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaRegHeart } from "react-icons/fa";


const Favorite = ({ movie }) => {
  return (
     <Card className="movie-card bg-dark text-white h-100">
      <div className="movie-poster">
         <div className="movie-overlay">
           <FaRegHeart  size={20} className="heart-icon" onClick={() => {}} />
          
          </div>
        
        <Card.Img
          variant="top"
          src={movie.image}
          alt={movie.title}
          className="movie-image"
        
          
        />
      </div>
      </Card>
    
  )
}

export default Favorite