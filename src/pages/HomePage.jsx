import React, { useState, useContext, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import { ProductContext } from '../context/ProductContext';
import '../styles/HomePage.css';

const HomePage = () => {
  const { categories } = useContext(ProductContext);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    setFilteredCategories(categories);
  }, [categories]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.map(category => ({
        ...category,
        products: category.products.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.products.length > 0);
      setFilteredCategories(filtered);
    }
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to Tijar</h1>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div className="featured-categories">
        <h2>Featured Categories</h2>
        {/* Add category cards here */}
      </div>
      <ProductList categories={filteredCategories} />
    </div>
  );
};

export default HomePage;
