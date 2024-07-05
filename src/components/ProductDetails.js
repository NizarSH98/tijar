// src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api'; // Import your API service

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // State to hold product data

  useEffect(() => {
    // Fetch product details when component mounts
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id); // Implement this function in your API service
        setProduct(data); // Update state with fetched product data
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]); // Depend on id to refetch product when id changes (e.g., navigation to a different product)

  if (!product) {
    return <div>Loading...</div>; // Placeholder while fetching data
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Additional details or actions related to the product */}
    </div>
  );
};

export default ProductDetail;
