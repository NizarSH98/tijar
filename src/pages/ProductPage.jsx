import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        // Extract all products from categories
        const allProducts = data.categories.flatMap(category => category.products);
        setProducts(allProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      {products.map((product, index) => (
        <Grid item key={index}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductPage;
