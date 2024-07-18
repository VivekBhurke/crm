// SetNewPassword.js
import React, { useState } from 'react';
import './SetNewPassword.css';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import megaphoneImage from '../../Images/LoginPage/megaphone.png';
import logo from '../../Images/LoginPage/logo.png';
// import { useNavigate } from 'react-router-dom';

const SetNewPassword = ({ userId }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);
  const [showPasswordsold, setShowPasswordsold] = useState(false);
  const [message, setMessage] = useState('');

//   const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibilitys = () => {
    setShowPasswords(!showPasswords);
  };
  const togglePasswordVisibilitysold = () => {
    setShowPasswordsold(!showPasswordsold);
  };

  const handleSubmission = async () => {
    const url = 'https://av-digital-solutions.onrender.com/evee-backend/v1/auth/change-password';

    const payload = {
      userId,
      password: oldPassword,
      newPassword,
      confirmPassword
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.status === 200) {
        alert('Password successfully changed');
       // navigate('/login'); // Navigate to login page after successful password reset
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Failed to change password');
      }
    } catch (error) {
      setMessage('Failed to change password. Please try again.');
    }
  };

  return (
    <>
      <div className='login-page'>
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
                <h1 className="title">Set new password</h1>
                <h5 className="subtitle">Your password must be different than the previously used password</h5>
                
                <div className="input-group relative">
                  <label className="label">Old Password</label>
                  <div className="input-with-icon">
                    <input
                      type={showPasswordsold ? 'text' : 'password'}
                      name="oldPassword"
                      className="input"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <div className="icon-container" onClick={togglePasswordVisibilitysold}>
                      {showPasswordsold ? <BsEyeSlash className="icon" /> : <BsEye className="icon" />}
                    </div>
                  </div>
                </div>

                <div className="input-group relative">
                  <label className="label">New Password</label>
                  <div className="input-with-icon">
                    <input
                      type={showPasswords ? 'text' : 'password'}
                      name="newPassword"
                      className="input"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <div className="icon-container" onClick={togglePasswordVisibilitys}>
                      {showPasswords ? <BsEyeSlash className="icon" /> : <BsEye className="icon" />}
                    </div>
                  </div>
                </div>

                <div className="input-group relative">
                  <label className="label">Confirm new Password</label>
                  <div className="input-with-icon">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      className="input"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="icon-container" onClick={togglePasswordVisibility}>
                      {showPassword ? <BsEyeSlash className="icon" /> : <BsEye className="icon" />}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSubmission}
                  className="login-button"
                >
                  Reset Password
                </button>

                {message && <div className="message">{message}</div>}

                <div className="signup-link">
                  Back to <span className="signup-text">Login</span>
                </div>
              </div>
            </div>
          </div>
          <div className='login-message-section'></div>
        </div>
      </div>
    </>
  );
};

export default SetNewPassword;
