import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Tabs, Tab, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const FormWrapper = styled(Paper)`
  padding: 24px;
  margin-top: 32px;
  border-radius: 8px;
`;

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
};

const AuthPage = () => {
  const [value, setValue] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here
    navigate('/profile');
  };

  const handleSignup = () => {
    // Handle signup logic here
    navigate('/profile');
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="sm">
      <FormWrapper>
        <Tabs value={value} onChange={handleChange} aria-label="auth tabs">
          <Tab label="Login" id="tab-0" />
          <Tab label="Signup" id="tab-1" />
        </Tabs>
        <TabPanel value={value} index={0}>
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h4" gutterBottom>Signup</Typography>
          <TextField
            label="First Name"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Phone Number"
            fullWidth
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
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
          <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
            Signup
          </Button>
        </TabPanel>
      </FormWrapper>
    </Container>
  );
};

export default AuthPage;
