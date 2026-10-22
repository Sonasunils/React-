import { useEffect, useState } from 'react';

function Category({ setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Product Categories</h2>

      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => setSelectedCategory(category.slug)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Category;