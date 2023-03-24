import React from 'react';
import RegisterForm from '../../components/ui/registerForm/registerForm';
import './authPage.scss';

const AuthPage = () => {
  return (
    <div className='auth-page'>
      <RegisterForm />
    </div>
  );
};

export default AuthPage;
