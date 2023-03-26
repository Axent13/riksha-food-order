/* eslint-disable multiline-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../../components/ui/loginForm/loginForm';
import UserProfile from '../../components/ui/userProfile/userProfile';
import { getCurrentUserId } from '../../store/users';
import './authPage.scss';

const AuthPage = () => {
  const currentUserId = useSelector(getCurrentUserId());

  return (
    <div className='auth-page'>
      {currentUserId ? <UserProfile /> : <LoginForm />}
    </div>
  );
};

export default AuthPage;
