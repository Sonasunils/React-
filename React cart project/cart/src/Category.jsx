import { useEffect, useState } from 'react';
import Moviecard from './Moviecard';
import Product from './Product';

function Category() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Categories</h2>

      <div className="row">
        {categories.map((category) => (
          <div className="col-md-3 mb-3" key={category.slug}>
            <Moviecard
              category={category}
              onClick={() => setSelectedCategory(category.slug)}
            />
          </div>
        ))}
      </div>

      {selectedCategory && (
        <Product category={selectedCategory} />
      )}
    </div>
  );
}

export default Category;