import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentUserData } from '../../../store/users';
import './userProfile.scss';

const UserProfile = () => {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const data = useSelector(getCurrentUserData());

  useEffect(() => {
    setUserData(data);
  }, []);

  return (
    <div className='user-profile'>
      <h2 className='user-profile__title'>Ваш профиль</h2>
      <div className='user-profile__data-group'>
        <p className='user-profile__data-title'>Имя:</p>
        <p className='user-profile__data'>{userData.name}</p>
      </div>
      <div className='user-profile__data-group'>
        <p className='user-profile__data-title'>Email:</p>
        <p className='user-profile__data'>{userData.email}</p>
      </div>
      <button className='user-profile__button'>Редактировать</button>
    </div>
  );
};

export default UserProfile;
