import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Auth/auth';
import './LoginPage.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // const redirect = location.state?.path || '/';
  const redirect ='/admin'

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password
      });
      console.log(response.data);
      const { user, token } = response.data;
      auth.login({ ...user, token });
      navigate(redirect, { replace: true });

    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>

    </div>

  );
}

export default Login;
