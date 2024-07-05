// src/services/api.js
/*
import axios from 'axios';

const API_URL = 'https://your-backend-api.com';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};
*/
// Other API calls for product details, quotations, etc.

// src/services/api.js

// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/products';

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

