// src/components/ProductList.js
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = ({ categories }) => {
  // Use categories directly passed as a prop or from context if not passed
  const context = useContext(ProductContext);
  const categoriesToDisplay = categories || context.categories;

  if (!Array.isArray(categoriesToDisplay) || categoriesToDisplay.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-list">
      {categoriesToDisplay.map(category => (
        <div key={category.id} className="category">
          <h2>{category.name}</h2>
          <div className="products-grid">
            {category.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
