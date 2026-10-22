import { useState } from 'react';
import './App.css';
import NavBar from './componants/NavBar';
import ProductSlicer from './componants/ProductSlicer';
import Category from './componants/Category';
import Products from './componants/Products';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <>
      <NavBar />
      <ProductSlicer/>

      <div className="container">
        <Category
          setSelectedCategory={setSelectedCategory}
        />
    {selectedCategory && (
          <Products category={selectedCategory} />
        )}
      </div>
    </>
  );
}

export default App;