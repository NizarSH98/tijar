// src/components/ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <img src={process.env.PUBLIC_URL + product.img} alt={product.name} />
        <div className="product-details">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
