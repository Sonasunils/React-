import React from 'react'

import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";


const Slicer1 = () => {
  
    const [meals, setMeals] = useState([]);

  useEffect(() => {
    const categories = ["Seafood", "Vegetarian", "Dessert"];

    Promise.all(
      categories.map((category) =>
        fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        ).then((response) => response.json())
      )
    )
      .then((results) => {
        const allMeals = results.flatMap(
          (data) => data.meals || []
        );

        setMeals(allMeals.slice(0, 3));
      })
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
    <div>
 

      <Carousel>
        {meals.map((meal) => (
          <Carousel.Item key={meal.idMeal}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />

            <Carousel.Caption>
              <h3>{meal.strMeal}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Slicer1