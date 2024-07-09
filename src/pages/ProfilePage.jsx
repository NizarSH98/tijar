import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';
import styled from '@emotion/styled';

const ProfileWrapper = styled(Paper)`
  padding: 24px;
  margin-top: 32px;
  border-radius: 8px;
`;

const ProfilePage = () => {
  const handleLogout = () => {
    // Handle logout logic here
    alert('You have been logged out.');
  };

  return (
    <Container maxWidth="sm">
      <ProfileWrapper>
        <Typography variant="h4" gutterBottom>Profile</Typography>
        <Typography variant="body1">Name: John Doe</Typography>
        <Typography variant="body1">Email: johndoe@example.com</Typography>
        <Button variant="contained" color="secondary" fullWidth onClick={handleLogout} style={{ marginTop: '16px' }}>
          Logout
        </Button>
      </ProfileWrapper>
    </Container>
  );
};

export default ProfilePage;
