import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import axios from 'axios'; // Import axios
import '../styles/ProductList.css'; 

const ProductList = ({ categories }) => {
  const { setCategories } = useContext(ProductContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setCategories]);

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
