// src/pages/ProductPage.jsx
import React from 'react';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';

const ProductPage = () => {
  return (
    <div>
      <Filter />
      <ProductList />
    </div>
  );
};

export default ProductPage;
