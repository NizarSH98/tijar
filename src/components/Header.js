import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-left: 16px;
`;

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Tijar
          </Link>
        </Typography>
        <StyledLink to="/products">
          <Button color="inherit">Products</Button>
        </StyledLink>
        <StyledLink to="/auth">
          <Button color="inherit">Login / Signup</Button>
        </StyledLink>
        <StyledLink to="/profile">
          <Button color="inherit">Profile</Button>
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
