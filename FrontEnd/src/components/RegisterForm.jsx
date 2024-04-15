import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [user_name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm_password) {
      setError("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/registration',
        {
          first_name: first_name,
          last_name: last_name,
          user_name: user_name,
          password: password,
          email: email
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
          }
        }
      );
      console.log(response.data);
      if (response.data.status === 'success') {
        // Registration successful
        console.log('Registration successful');
        setRegistered(true);
        // Optionally, you can redirect the user to the login page or another page
      } else {
        // Handle other response types, if any
        console.log('Unknown response type:', response.data.status);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed');
    }
  };

  if (registered) {
    return (
      <div>
        <h2>Registration Successful!</h2>
        {''}
      </div>
    );
  }

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" value={user_name} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
