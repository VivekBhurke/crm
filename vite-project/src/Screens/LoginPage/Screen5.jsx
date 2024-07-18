import React, { useState } from 'react';
import './Screen5.css';
import { BsFacebook, BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import megaphoneImage from '../../Images/LoginPage/megaphone.png';
import logo from '../../Images/LoginPage/logo.png';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmission = async () => {
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    const loginData = {
      email,
      password
    };

    try {
      const isAdmin = false;
      const url = isAdmin 
        ? 'https://av-digital-solutions.onrender.com/evee-backend/v1/admin/login-with-email-password-admin'
        : 'https://av-digital-solutions.onrender.com/evee-backend/v1/auth/login-with-email-password';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      if (!response.ok) {
        throw new Error('Login failed!');
      }

      const data = await response.json();
      console.log('Login successful', data);
      alert("Login successful");
      setEmail('')
      setPassword('')

    } catch (error) {
      console.error('Error:', error);
      setErrorMsg('Oops! The password you entered is incorrect. Please try again.');
    }
  };

  return (
    <>
      <div className='login-page'> 
        <span className='megaphone'>
          <img src={megaphoneImage} alt="Megaphone" />
        </span>

        <div className="info-section">
          <img src={logo} alt="Logo" />
          <h2>From Lead to Loyal Customers</h2>
          <p>
            Close more deals, effortlessly. We help your sales process with instant lead notifications, automated personalization tools, and powerful lead nurturing features right at your fingertips.
          </p>
        </div>

        <div className="login-section">
          <div className='login-form-section'>
            <div className="container">
              <div className="login-box">
                <h1 className="title">Welcome back !!</h1>
                <h5 className="subtitle">Login to access your leads</h5>
                <div className="input-group">
                  <label className="label">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    className="input"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="input-group relative">
                  <label className="label">Password</label>
                  <div className="input-with-icon">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="input"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <div className="icon-container" onClick={togglePasswordVisibility}>
                      {showPassword ? (
                        <BsEyeSlash className="icon" />
                      ) : (
                        <BsEye className="icon" />
                      )}
                    </div>
                  </div>
                </div>
                {errorMsg && (
                  <div className="error-msg">
                    {errorMsg}
                  </div>
                )}
                <div className="options">
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="terms"
                      className="checkbox"
                      checked={agreeTerms}
                      onChange={handleTermsChange}
                    />
                    <label htmlFor="agreeTerms" className="checkbox-label">
                      <span className="checkbox-custom"></span>
                      Remember Me
                    </label>
                  </div>
                  <Link to="/forgotPassword" >
                    <span className="forgot-password" >
                      Forgot Password?
                    </span>
                  </Link>
                </div>
                
                <button
                  onClick={handleSubmission}
                  className="login-button"
                >
                  Login
                </button>
                <div className='other-login-option'>
                  <div className="social-login-google">
                    <FcGoogle className="social-icon" />
                    Login with Google
                  </div>
                  <div className="social-login-facebook">
                    <BsFacebook className="social-icon" />
                    Login with Facebook
                  </div>
                </div>
                <div className="signup-link">
                  Don't have an account? <span className="signup-text">Register</span>
                </div>
              </div>
            </div>
          </div>
          <div className='login-message-section'>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
