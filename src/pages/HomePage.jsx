import React from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <ProductList />
    </div>
  );
};

export default HomePage;
