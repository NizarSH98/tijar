import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AuthPage from './pages/AuthPage';
import PasswordResetPage from './pages/PasswordResetPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import './App.css';

const PrivateRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  return user ? children : <Navigate to="/auth" />;
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/products" element={<PrivateRoute><ProductPage /></PrivateRoute>} />
          <Route path="/product/:id" element={<PrivateRoute><ProductDetailPage /></PrivateRoute>} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/reset-password" element={<PasswordResetPage />} />
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
