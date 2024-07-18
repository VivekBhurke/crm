import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from "./LoginPage/Screen5";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ForgotPasswordOTP from "./ForgotPasswordOtp/ForgotPasswordOtp";
import ChangePassword from "./SetNewPassword/SetNewPassword";

const loginLayout = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/forgotPasswordOTP" element={<ForgotPasswordOTP />} />
      <Route path="/changePassword" element={<ChangePassword />} />
    </Routes>
  </Router>
);

export default loginLayout; 