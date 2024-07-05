// src/pages/ProductDetailPage.js

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import '../styles/ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { categories } = useContext(ProductContext);

  // Find the category and product based on the ID from URL params
  const category = categories.find(category => category.products.some(product => product.id === parseInt(id)));
  const product = category.products.find(product => product.id === parseInt(id));

  // Filter similar products (excluding the current product)
  const similarProducts = category.products.filter(p => p.id !== product.id);

  // Function to handle adding product to cart
  const handleAddToCart = () => {
    // Implement logic to add product to cart
    console.log(`Added ${product.name} to cart.`);
  };

  // Function to handle bulk ordering
  const handleOrderBulk = () => {
    // Implement logic for bulk ordering
    console.log(`Ordering bulk for ${product.name}.`);
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-card">
        <div className="product-detail">
          <img src={process.env.PUBLIC_URL + product.img} alt={product.name} />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="price">Price: ${product.price}</p>
            <p className="description">{product.description}</p>
            <div className="buttons">
              <button onClick={handleAddToCart}>Add to Cart</button>
              <button onClick={handleOrderBulk}>Order Bulk</button>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="similar-products-section">
        <h3>Similar Products</h3>
        <div className="similar-products-grid">
          {similarProducts.map(similarProduct => (
            <ProductCard key={similarProduct.id} product={similarProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
