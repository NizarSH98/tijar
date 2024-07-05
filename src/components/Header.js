// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #333;
  color: #fff;
`;

const Header = () => {
  return (
    <Nav>
      <Link to="/" style={{ color: '#fff' }}>Home</Link>
      <h1>Tijar</h1>
      <Link to="/products" style={{ color: '#fff' }}>Products</Link>
      {/* Add more links as needed */}
    </Nav>
  );
};

export default Header;
