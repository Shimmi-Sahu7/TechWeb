import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
            const response = await axios.post('/auth/login', { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
        
            alert('Logged in successfully');
            navigate('/'); 
        } catch (error) {
            // Display the error message from the backend if available
            setErrorMessage(error.response?.data?.message || 'Login failed');
            setTimeout(() => {
              setErrorMessage('');
            }, 2000);

    
        }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;