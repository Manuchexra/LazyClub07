// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [user_name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/login/',
        {
          user_name: user_name,
          password: password
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
          }
        }
      );
      console.log(response.data);
      if (response.data.status === 'auth') {
        // Authentication successful
        console.log('Authentication successful');
        setAuthenticated(true);
        // Redirect the user to dashboard or another page
      } else {
        // Handle other response types, if any
        console.log('Unknown response type:', response.data.status);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid username or password');
    }
  };

  if (authenticated) {
    return (
      <div>
        <h2>Welcome, User!</h2>
        {/**/}
      </div>
    );
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={user_name} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
