import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
    // Clear form data when switching between login and signup
    setFormData({
      email: '',
      password: '',
      username: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, username } = formData;
    // Add your form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Username:", username);
  };

  return (
    <div className="container">
      <div className="forms">
        {isLogin ? (
          <div className="form login">
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <input 
                  id="inp-email" 
                  type="text" 
                  placeholder="Enter your email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <i className="uil uil-envelope icon"></i>
              </div>
              <div className="input-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="inp-pass"
                  className="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <i className="uil uil-lock icon"></i>
                <i className={`uil ${showPassword ? 'uil-eye' : 'uil-eye-slash'} showHidePw`} onClick={togglePasswordVisibility}></i>
              </div>
              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="logCheck" />
                  <label htmlFor="logCheck" className="text">Remember me</label>
                </div>
                <a href="#" className="text">Forgot password?</a>
              </div>
              <div className="input-field button">
                <button type="submit">Login</button>
              </div>
            </form>
            <div className="login-signup">
              <span className="text">Not a member? <a className="text signup-link" onClick={handleFormSwitch}>Signup Now</a></span>
            </div>
          </div>
        ) : (
          <div className="form signup">
            <span className="title">SignUp</span>
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  name="username" 
                  value={formData.username}
                  onChange={handleChange}
                  required 
                />
                <i className="uil uil-user"></i>
              </div>
              <div className="input-field">
                <input 
                  type="text" 
                  placeholder="Enter your email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <i className="uil uil-envelope icon"></i>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  className="password"
                  placeholder="Create a password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <i className=" uil uil-lock icon"></i>
              </div>
              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="termCon" />
                  <label htmlFor="termCon" className="text">I accepted all terms and conditions</label>
                </div>
              </div>
              <div className="input-field button">
                <button type="submit">Signup</button>
              </div>
            </form>
            <div className="login-signup">
              <span className="text">Already have an account? <a className="text login-link" onClick={handleFormSwitch}>Log In</a></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
