
import { useEffect, useState } from 'react';
import './App.css';

function Products({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setProducts([]);

    fetch(
      `https://dummyjson.com/products/category/${encodeURIComponent(category)}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => setProducts(data.products || []))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div>
      <h2 className="section-title">
        Explore {category.replaceAll('-', ' ')}
      </h2>

      <p className="section-subtitle">
        Find the right products for you.
      </p>

      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-wrapper">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-image"
                  loading="lazy"
                />
              </div>

              <div className="card-body">
                <h5 className="product-title">
                  {product.title}
                </h5>

                <p className="product-price">
                  ${product.price.toFixed(2)}
                </p>

                <button
                  className="product-button"
                  onClick={() =>
                    alert(`${product.title} selected!`)
                  }
                >
                  View Product →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
