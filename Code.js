import React, { useState } from 'react';
import BatmanLogo from './batman-logo.jpg';

export default function LoginPage() {
  const username, setUsername = useState('');
  const password, setPassword = useState('');

  const submitLogin = (event) => {
    event.preventDefault();

    if (username === 'batman' && password === 'batcave') {
      alert('Welcome Batman!');
    } else {
      alert('Authentication failed');
    }
  };

  return (
    <form className="login-form" onSubmit={submitLogin}>
      <img src={BatmanLogo} alt="black and yellow Batman logo" />
      <label>Username:</label>
      <input
        type="text"
        value={username}
        placeholder="Enter username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

