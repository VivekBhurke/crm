import React, { useState } from 'react';
import './ForgotPasswordOtp.css';
import megaphoneImage from '../../Images/LoginPage/megaphone.png';
import logo from '../../Images/LoginPage/logo.png';
import { Link,Navigate } from 'react-router-dom';


const ForgotPasswordOtp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [message, setMessage] = useState('');

  const handleOtpChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);

    // Focus on the next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleContinueClick = async () => {
    const otpCode = otp.join('');
    const url = 'https://av-digital-solutions.onrender.com/evee-backend/v1/auth/change-password-with-code';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ otp: otpCode })
      });

      if (response.status === 200) {
        setMessage('OTP verified successfully. You can now reset your password.');
        // Navigate to the SetNewPassword page or handle password reset process
        // Navigate('/setNewPassword')
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${response.status} - ${errorData.message || 'Failed to verify OTP'}`);
      }
    } catch (error) {
      setMessage('Failed to verify OTP. Please try again.');
    }
  };

  return (
    <>
      <div className='ForgotPasswordOtp-page'>
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
        
        <div className="login-section">
          <div className='login-form-section'>
            <div className="container">
              <div className="login-box">
                <h1 className="title">Forgot your password?</h1>
                <h5 className="subtitle">Please enter the 6-digit code that was sent to your registered email address</h5>
                <div className="input-group">
                  <label className="label">Enter OTP</label>
                  <div className="otp-inputs">
                    {otp.map((data, index) => {
                      return (
                        <input
                          key={index}
                          type="text"
                          className="otp-input"
                          maxLength="1"
                          value={data}
                          onChange={e => handleOtpChange(e.target, index)}
                          onFocus={e => e.target.select()}
                        />
                      );
                    })}
                  </div>
                </div>
                <Link to="/changePassword">
                <button
                  className="continue-button"
                  onClick={handleContinueClick}
                >
                  Continue
                </button>
                </Link>
                {message && <div className="message">{message}</div>}
                <Link to="/">
                <div className="login-link">
                  Back to <span className="signup-text">Login</span>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='login-message-section'></div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordOtp;
