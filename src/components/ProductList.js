import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import axios from 'axios';
import '../styles/ProductList.css';

const ProductList = () => {
  const { categories, setCategories } = useContext(ProductContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/categories`;
        console.log('Fetching from URL:', apiUrl);  // Debugging log
        const response = await axios.get(apiUrl);
        console.log('API Response:', response.data);  // Debugging log
        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [setCategories]);
  

  if (!Array.isArray(categories) || categories.length === 0) {
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
