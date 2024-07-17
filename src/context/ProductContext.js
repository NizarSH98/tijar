// src/context/ProductContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Use the environment variable for the API URL
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []); // Ensure empty dependency array to fetch only once

  return (
    <ProductContext.Provider value={{ categories, setCategories }}>
      {children}
    </ProductContext.Provider>
  );
};
