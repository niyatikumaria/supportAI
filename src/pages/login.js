import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};

    if (!username.trim()) {
      formErrors.username = 'Username is required';
    } else if (username.length < 3) {
      formErrors.username = 'Username must be at least 3 characters';
    }

    if (!password) {
      formErrors.password = 'Password is required';
    } else if (password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('https://your-backend-url.com/login', {
          username,
          password
        });

        const { token } = response.data;

        localStorage.setItem('authToken', token);

        navigate('/visual');
      } catch (error) {
        console.error('Login failed:', error);
        navigate('/error', { state: { message: 'Login failed. Please check your credentials.' } });
      }
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <div className="login-container">
      <div className="caterpillar">🐛</div>
      <h1>Caterpillar Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        {errors.general && <div className="error">{errors.general}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
