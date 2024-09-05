// LoginSignup.jsx
import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-container">
      <div className="form-container">
        {isLogin ? (
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="login-email">Email</label>
                <input type="email" id="login-email" required />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" required />
              </div>
              <button type="submit" className="form-button">Login</button>
            </form>
            <p className="toggle-text">
              Don't have a MedDoor account? <span onClick={toggleForm}>Sign up</span>
            </p>
          </div>
        ) : (
          <div className="signup-form">
            <h2>Sign Up</h2>
            <form>
              <div className="form-group">
                <label htmlFor="signup-name">Name</label>
                <input type="text" id="signup-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="signup-email">Email</label>
                <input type="email" id="signup-email" required />
              </div>
              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input type="password" id="signup-password" required />
              </div>
              <button type="submit" className="form-button">Sign Up</button>
            </form>
            <p className="toggle-text">
              Already have an account? <span onClick={toggleForm}>Login</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
