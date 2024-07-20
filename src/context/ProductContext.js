import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const apiUrl = '/db.json';
        console.log('Fetching from URL:', apiUrl);  // Debugging log
        const response = await axios.get(apiUrl);
        console.log('API Response:', response.data);  // Debugging log
        if (response.data && Array.isArray(response.data.categories)) {
          setCategories(response.data.categories);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <ProductContext.Provider value={{ categories, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
