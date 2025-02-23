
import React from 'react'
const Login = ({ isOpen, closeLogin }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="overlay">
      <div className="login-form">
        <h2>Login</h2>
        <label>Username:</label>
        <input type="text" id="username" /><br /><br />
        <label>Password:</label>
        <input type="password" id="password" /><br /><br />
        <button>Submit</button>
        <button className="close-btn" onClick={closeLogin}>Close</button>
      </div>
    </div>
  );
};

export default Login;

   