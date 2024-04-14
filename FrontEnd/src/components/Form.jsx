import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import '../css/form.css';

function AuthPage() {
  return (
    <div className="auth-container">
      <div className="login-form-container">
        <LoginForm />
      </div>
      <div className="register-form-container">
        <RegisterForm />
      </div>
    </div>
  );
}

export default AuthPage;
