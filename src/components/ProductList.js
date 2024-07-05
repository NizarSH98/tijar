// src/components/ProductList.js
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import axios from 'axios';
import '../styles/ProductList.css'; // Correct import path for ProductList.css

const ProductList = () => {
  const { categories, setCategories } = useContext(ProductContext); // Destructure setCategories from context

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/categories');
        setCategories(response.data); // Update categories state with fetched data
        console.log('Fetched Data:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setCategories]); // Add setCategories to dependency array to avoid eslint warning

  if (!categories || categories.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-list">
      {categories.map(category => (
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
