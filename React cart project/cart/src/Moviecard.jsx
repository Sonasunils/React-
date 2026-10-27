
import { useEffect, useState } from 'react';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Moviecard = ({ category, onClick }) => {
  const [catimg, setCatimg] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category.slug}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.products && data.products.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * data.products.length
          );

          setCatimg(data.products[randomIndex]);
        }
      })
      .catch((error) => console.log(error));
  }, [category.slug]); 

  return (
    <MDBCard onClick={onClick} className="category-card">
      <MDBRipple rippleColor="light" rippleTag="div">
        {catimg && (
          <MDBCardImage
            src={catimg.thumbnail}
            alt={catimg.title}
            className="category-image"
            fluid
          />
        )}
      </MDBRipple>

      <MDBCardBody>
        <MDBCardTitle className="card-title">
          {category.name}
        </MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Moviecard;
