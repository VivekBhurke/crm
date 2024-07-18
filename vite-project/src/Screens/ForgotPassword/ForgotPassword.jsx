import React, { useState } from 'react';
import './ForgotPassword.css';
import megaphoneImage from '../../Images/LoginPage/megaphone.png';
import logo from '../../Images/LoginPage/logo.png';
import { Navigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContinueClick = async () => {
    const url = 'https://av-digital-solutions.onrender.com/evee-backend/v1/auth/get-forgot-password-code';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.status === 200) {
        setMessage('Verification code sent to your email address');
        // navigate('/forgotPasswordOTP');
      } 
      else {
        const errorData = await response.json();
        setMessage( 'Failed to send verification code');
      }
    } catch (error) {
      setMessage('Failed to send verification code. Please try again.');
    }
  };

  return (
    <>
      <div className='forgotPassword-page'>
        <span className='megaphone'>
          <img src={megaphoneImage} alt="Megaphone" />
        </span>

        <div className="info-section">
          <img src={logo} alt="" />
          <h2>From Lead to Loyal Customers</h2>
          <p>
            Close more deals, effortlessly. We help your sales process with instant lead notifications, automated personalization tools, and powerful lead nurturing features right at your fingertips.
          </p>
        </div>

        <div className="forgotPassword-section">
          <div className='forgotPassword-form-section'>
            <div className="container">
              <div className="forgotPassword-box">
                <h1 className="title">Forgot your password?</h1>
                <h5 className="subtitle">Please confirm your email address and we will send you a verification code to reset your password.</h5>
                <div className="input-group">
                  <label className="label">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    className="input"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
               {/* <Link to="/forgotPasswordOTP"> */}
                <button
                  className="continue-button"
                  onClick={handleContinueClick}
                >
                  Continue
                </button>
                {/* </Link> */}
                {message && <div className="message">{message}</div>}
                {/* <Link to="/"> */}
                <div className="forgotPassword-link">
                  Back to <span className="forgotPassword-text">Login</span>
                </div>
                {/* </Link> */}
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

export default ForgotPassword;
