import { useEffect, useState } from 'react';

function Products({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <div>
      <h2>Products</h2>

      <div className="meal-container">
        {products.map((product) => (
          <div className="meal-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} width="150" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;