import React from 'react';
import { Typography, Container } from '@mui/material';
import styled from '@emotion/styled';

const FooterContainer = styled(Container)`
  background-color: #f8f8f8;
  padding: 16px;
  margin-top: 32px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body1">© 2024 Tijar. All rights reserved.</Typography>
    </FooterContainer>
  );
};

export default Footer;
