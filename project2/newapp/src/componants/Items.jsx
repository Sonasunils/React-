
import React, { useEffect, useState } from 'react';

const Items = () => {
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

        setMeals(allMeals);
      })
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
    <div className="meal-container">
      {meals.map((meal) => (
        <div className="meal-card" key={meal.idMeal}>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <h3>{meal.strMeal}</h3>
        </div>
      ))}
    </div>
  );
};

export default Items;
