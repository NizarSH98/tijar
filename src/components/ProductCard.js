// src/components/ProductCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const CardRoot = styled(Card)`
  max-width: 345px;
  margin: 16px;
  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Media = styled(CardMedia)`
  height: 200px;
`;

const ProductCard = ({ product = {} }) => {
  console.log('Product Data:', product);  // Debugging log

  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/product/${product.id}`);
  };

  const handleBuyNow = () => {
    alert(`Product added to cart: ${product.name}`);
    // Implement your add-to-cart or purchase logic here
    console.log(`Buy Now clicked for product: ${product.name}`);
  };

  return (
    <CardRoot>
      <Media
        image={product.img || '/images/placeholder.jpg'}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name || 'Unnamed Product'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description || 'No description available'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleBuyNow}>
          Buy Now
        </Button>
        <Button size="small" color="secondary" onClick={handleLearnMore}>
          Learn More
        </Button>
      </CardActions>
    </CardRoot>
  );
};

export default ProductCard;
