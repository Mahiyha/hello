// src/LoginForm.js
import React, { useState } from 'react';
import {  useNavigate} from 'react-router-dom';



const LoginForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Handle registration logic here
      console.log('Registered:', username, email, password);
    } else {
      // Handle login logic here
      console.log('Logged in:', username || email);

      navigate('/dashboard');
    }
  };

  return (
    <div className='login-form-container'>
    <div className="login-form">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        {isRegistering && (
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}
        {!isRegistering && (
          <div>
            <input
              type="text"
              placeholder="Username or Email"
              value={username || email}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
        <div>
          {isRegistering ? (
            <p>Already have an account? <button type="button" onClick={handleToggleRegister}>Login</button></p>
          ) : (
            <p>New user? <button type="button" onClick={handleToggleRegister}>Register</button></p>
          )}
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
