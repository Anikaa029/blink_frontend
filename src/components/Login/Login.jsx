import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Auth/auth';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.state?.path || '/'

  const handleLogin = () => {
    auth.login(user);
    navigate(redirect, { replace: true });
  }

  return (
    <div className="login-container">
      <label>
        Username: <input type='text' onChange={(e) => setUser(e.target.value)} />
      </label>
      <button type='submit' onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
