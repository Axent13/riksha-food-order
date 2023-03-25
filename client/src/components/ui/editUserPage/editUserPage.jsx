/* eslint-disable multiline-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentUserId } from '../../../store/users';
import EditUserForm from '../editUserForm/editUserForm';
import LoginForm from '../loginForm/loginForm';
import './editUserPage.scss';

const EditUserPage = () => {
  const currentUserId = useSelector(getCurrentUserId());

  return (
    <div className='edit-user-page'>
      {currentUserId ? <EditUserForm /> : <LoginForm />}
    </div>
  );
};

export default EditUserPage;
