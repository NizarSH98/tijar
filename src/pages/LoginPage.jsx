import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const FormWrapper = styled(Paper)`
  padding: 24px;
  margin-top: 32px;
  border-radius: 8px;
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here
    navigate('/profile');
  };

  return (
    <Container maxWidth="sm">
      <FormWrapper>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;
