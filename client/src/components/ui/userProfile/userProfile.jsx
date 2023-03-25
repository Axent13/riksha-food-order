import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentUserData, logOut } from '../../../store/users';
import './userProfile.scss';

const UserProfile = () => {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const data = useSelector(getCurrentUserData());
  const dispatch = useDispatch();

  useEffect(() => {
    setUserData(data);
  }, []);

  const handleLogOutClick = () => {
    dispatch(logOut());
  };

  return (
    <div className='user-profile'>
      <h2 className='user-profile__title'>Ваш профиль</h2>
      <div className='user-profile__image-container'>
        <img
          className='user-profile__image'
          src={userData.image}
          alt='No photo'
        />
      </div>
      <div className='user-profile__data-group'>
        <p className='user-profile__data-title'>Имя:</p>
        <p className='user-profile__data'>{userData.name}</p>
      </div>
      <div className='user-profile__data-group'>
        <p className='user-profile__data-title'>Email:</p>
        <p className='user-profile__data'>{userData.email}</p>
      </div>
      <Link to='/editUserProfile'>
        <button className='user-profile__button'>Редактировать</button>
      </Link>
      <Link to='/'>
        <button className='user-profile__button'> Назад к товарам</button>
      </Link>
      <button
        className='user-profile__button'
        onClick={() => {
          handleLogOutClick();
        }}
      >
        Выйти
      </button>
    </div>
  );
};

export default UserProfile;
