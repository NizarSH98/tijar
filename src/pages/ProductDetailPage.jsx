import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Button, CardMedia, Paper } from '@mui/material';
import styled from '@emotion/styled';
import ProductCard from '../components/ProductCard';

const Media = styled(CardMedia)`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const Section = styled(Paper)`
  padding: 24px;
  margin-top: 32px;
  border-radius: 8px;
`;

const SimilarProductsSection = styled.div`
  margin-top: 32px;
`;

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const allProducts = data.categories.flatMap(category => category.products);
        const product = allProducts.find(p => p.id.toString() === id);
        setProduct(product);

        // Find similar products
        const similarProducts = allProducts.filter(p => p.id.toString() !== id && p.categoryId === product.categoryId);
        setSimilarProducts(similarProducts);
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Media
            image={product.img || '/images/placeholder.jpg'}
            title={product.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="div">
            {product.name}
          </Typography>
          <Typography variant="h5" component="div">
            ${product.price}
          </Typography>
          <Typography variant="body1" component="div" style={{ marginTop: '16px' }}>
            {product.description || product.discription || 'No description available'}
          </Typography>
          <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Buy Now
          </Button>
        </Grid>
      </Grid>

      <Section>
        <Typography variant="h4" component="div" gutterBottom>
          Product Details
        </Typography>
        <Typography variant="body1" component="div">
          {/* Add more detailed information about the product here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        </Typography>
      </Section>

      <Section>
        <Typography variant="h4" component="div" gutterBottom>
          Reviews
        </Typography>
        <Typography variant="body1" component="div">
          {/* Add product reviews here */}
          No reviews available.
        </Typography>
      </Section>

      <SimilarProductsSection>
        <Typography variant="h4" component="div" style={{ marginTop: '32px', marginBottom: '16px' }}>
          Similar Products
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {similarProducts.slice(0, 4).map((product, index) => (
            <Grid item key={index}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </SimilarProductsSection>
    </div>
  );
};

export default ProductDetailPage;
