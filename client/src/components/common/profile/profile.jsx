import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import profileIcon from '../../../assets/profile-icon.png';
import { getCurrentUserData } from '../../../store/users';
import './profile.scss';

const Profile = () => {
  const userData = useSelector(getCurrentUserData());

  return (
    <Link to='/login'>
      <div className='profile'>
        <img
          className='profile__icon'
          src={userData ? userData.image : profileIcon}
          alt='Ваш аватар'
        />
      </div>
    </Link>
  );
};

export default Profile;
