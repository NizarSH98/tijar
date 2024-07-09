import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import styled from '@emotion/styled';

const FormWrapper = styled(Paper)`
  padding: 24px;
  margin-top: 32px;
  border-radius: 8px;
`;

const PasswordResetPage = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    // Handle password reset logic here
    alert('Password reset link sent to your email.');
  };

  return (
    <Container maxWidth="sm">
      <FormWrapper>
        <Typography variant="h4" gutterBottom>Password Reset</Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handlePasswordReset}>
          Send Reset Link
        </Button>
      </FormWrapper>
    </Container>
  );
};

export default PasswordResetPage;
